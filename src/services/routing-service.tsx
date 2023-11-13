import {Action, createBrowserHistory, History, Location} from 'history';
import React, {PureComponent} from 'react';
import {matchPath, Router} from "react-router-dom";
import {IService, observable, Order, Ordered, pick, Service} from 'react-soa';
import {Bundle, observe} from 'react-soa/dist/class';
import {decomposeUrl, deserializeQuery, serializeQuery} from "core/param";


export type RoutingState = {
	location: Location;
	action: Action;
	isFirstRendering: boolean;
}

@Service
@Order(Ordered.HIGHEST_PRECEDENCE)
export class RoutingService extends IService {
	applicationLoaded = () => {
		const {request, env} = this.context.context;
		if (env == 'server') {
			const dec = decomposeUrl(request.url);
			this.state = {
				location: {
					search: dec.search,
					pathname: dec.pathname,
					hash: '',
					key: '',
					state: undefined,
				},
				action: null,
				isFirstRendering: true,
			}
		} else {
			const dec = decomposeUrl(window.location.pathname);
			this.state = {
				location: {
					search: dec.search,
					pathname: dec.pathname,
					hash: '',
					key: '',
					state: undefined,
				},
				action: null,
				isFirstRendering: true,
			}
		}
	};

	get url() {
		return this.state.location.pathname + this.state.location.search;
	}

	get pathname() {
		return this.state.location.pathname;
	}

	get search() {
		return this.state.location.search;
	}

	push = (data: any, params?: { [key: string]: any }) => {
		this.act('PUSH', data, params);
	};
	replace = (data: any, params?: { [key: string]: any }) => {
		this.act('REPLACE', data, params);
	};

	goBack = () => {
		this.history.goBack();
	};

	goForward = () => {
		this.history.goForward();
	};

	match = (pattern: string, options: { exact?: boolean, sensitive?: boolean, strict?: boolean } = {}) => {
		const {exact = true, sensitive = false, strict = false} = options;
		return matchPath(this.pathname, {
			exact, sensitive, strict,
			path: pattern,
		})
	};


	query = new Proxy({}, {
		get: (target: any, p: string) => {
			const q = deserializeQuery(this.search);
			return q[p]
		}
	});


	private act(method: 'PUSH' | 'REPLACE', data: any, params?: { [key: string]: any }) {
		let a = null;
		if (typeof data === 'string') {
			a = decomposeUrl(data);
			if (params)
				a.search = this.setParams(a.search, params);
		} else {
			a = {
				pathname: this.state.location.pathname,
				search: this.setParams(this.state.location.search, data),
			};
		}

		this.state = {
			action: method,
			location: {
				...this.state.location,
				pathname: a.pathname,
				search: a.search,
			},
			isFirstRendering: false,
		};
	}

	private setParams = (search: string, params: { [key: string]: any }) => {
		const oldParams = deserializeQuery(search);
		return serializeQuery({
			...oldParams,
			...params,
		})
	};


	// properties
	history: History;
	inTimeTravelling: boolean = false;
	@observable state: RoutingState = {
		location: {
			pathname: '',
			state: undefined,
			search: '',
			hash: '',
			key: '',
		},
		action: null,
		isFirstRendering: true,
	};
}

@Bundle
export class ConnectedRouter extends PureComponent<{ basename?: string }> {
	constructor(props) {
		super(props);
		const history = createBrowserHistory({
			basename: props.basename,
		});
		this.routing.history = history;
		const handleLocationChange = (location: Location, action: Action, isFirstRendering = false) => {
			if (!this.routing.inTimeTravelling) {
				this.routing.state = {
					action,
					location,
					isFirstRendering,
				};
			} else {
				this.routing.inTimeTravelling = false;
			}
		};
		this.unsubscribe = history.listen(handleLocationChange);
		handleLocationChange(history.location, history.action, true);
	}

	@observe(RoutingService)
	observer = () => {
		const history = this.routing.history;
		const {
			pathname: pathnameInStore,
			search: searchInStore,
			hash: hashInStore,
		} = this.routing.state.location;
		const {
			pathname: pathnameInHistory,
			search: searchInHistory,
			hash: hashInHistory,
		} = history.location;
		if (pathnameInHistory !== pathnameInStore || searchInHistory !== searchInStore || hashInHistory !== hashInStore) {
			this.routing.inTimeTravelling = true;
			history[this.routing.state.action == 'PUSH' ? 'push' : 'replace']({
				pathname: pathnameInStore,
				search: searchInStore,
				hash: hashInStore,
			});
		}
	};

	componentWillUnmount(): void {
		this.unsubscribe && this.unsubscribe();
	}

	render() {
		const {children} = this.props;
		const {history} = this.routing;
		return <Router history={history}>{children}</Router>;
	}

	// properties
	unsubscribe: any = null;
	routing = pick(RoutingService, this);
}