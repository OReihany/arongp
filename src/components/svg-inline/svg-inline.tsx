import './svg-inline.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export interface ISVGInlineProps {
	name?: string;
	src: string;
	preserve?: string;
	className?: string;
	onClick?: any;
}

const cacheData = {};
(global as any).cacheData = cacheData;

function hashcode(str) {
	var hash = 0, i, chr;
	for (i = 0; i < str.length; i++) {
		chr = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + chr;
		hash |= 0;
	}
	return hash;
}

const listeners: any = {};

function mount() {
	const key = hashcode(this.props.src).toString();
	if (!this.data) {
		const cached = cacheData[key];
		if (cached) {
			if (cached === 'pending') {
				listeners[key] = listeners[key] || [];
				listeners[key].push((data) => {
					this.updateWith(data);
				})
			} else {
				this.updateWith(cached);
			}
		} else {
			cacheData[key] = 'pending';
			listeners[key] = listeners[key] || [];
			listeners[key].push((data) => {
				this.updateWith(data);
			});
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					this.data = xhr.response;
					cacheData[key] = this.data;
					setTimeout(() => {
						listeners[key] = listeners[key] || [];
						listeners[key].forEach(a => a(this.data));
						listeners[key] = [];
					}, 0)
				}
			};
			xhr.open('GET', this.props.src);
			xhr.send('');
		}
	} else {
		this.updateWith(this.data);
	}
}

export class SVGInline extends Component<ISVGInlineProps> {
	mounted = false;
	data = null;
	state = {
		data: '',
	};

	shouldComponentUpdate() {
		return false;
	}

	componentDidMount(): void {
		this.mounted = true;
		mount.call(this);
	}

	componentWillUnmount(): void {
		this.mounted = false;
	}

	updateWith = (img) => {
		if (this.mounted) {
			const base: any = ReactDOM.findDOMNode(this);
			base.innerHTML = img;
			if (this.props.preserve) {
				const svg = base.querySelector('svg');
				if (svg) svg.setAttribute('preserveAspectRatio', this.props.preserve)
			}
		}
	};

	render() {
		return (
			<div className={`svg-inline ${this.props.className || ''}`} onClick={this.props.onClick}/>
		);
	}
}
