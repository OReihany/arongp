import axios from 'axios';
import {HttpRequest, HttpResponse, NetworkingLayer} from 'netlayer';
import {Order, Ordered, Service} from 'react-soa';

declare const window: any;

@Service
@Order(Ordered.HIGHEST_PRECEDENCE)
export class NetworkingService extends NetworkingLayer {
	baseUrl = (function () {
		return (this.__context__ && this.__context__.context && this.__context__.context.env === 'server') ? (
			process.env.REACT_PROXY_URL
		) : (
			`${process.env.REACT_PUBLIC_URL}/api`
		);
	}).call(this);
	timeout = 25000;
	internetDelay = 20;
	defaultDriver = async (request: HttpRequest): Promise<HttpResponse> => {
		if (typeof window !== "undefined"){
			const token = window.localStorage.getItem("token");
			if (token) axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
		}
		axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
		let data;
		let params;
		if (request.method === 'DELETE' || request.method === 'GET') {
			data = undefined;
			params = request.payload;
		} else {
			data = request.payload;
			params = undefined;
		}
		try {
			const response = await axios({
				method: request.method,
				url: request.url,
				baseURL: request.baseUrl || this.baseUrl,
				params: params,
				data: data,
				headers: request.headers,
				timeout: request.timeout,
				withCredentials: false,
			});
			return {
				status: response?.status,
				statusText: response?.statusText,
				payload: response?.data
			};
		} catch (e) {
			throw {
				status: e.response?.status,
				statusText: e.response?.statusText,
				payload: e.response?.data
			};
		}
	};
	driver = this.mockDRIVER(this.defaultDriver);

	applicationLoaded = () => {
		this.MIDDLEWARE('log', (req) => {
			console.log(req.method + ' ' + this.baseUrl + req.url + ' ' + JSON.stringify(req.payload, null, 2));
			return req;
		})
	};

	// googleRecaptcha = async () => {
	// 	return await new Promise((acc, rej) => {
	// 		window.grecaptcha.ready(function () {
	// 			window.grecaptcha.execute(process.env.REACT_GOOGLE_RECAPTCHA_SITE_KEY, {action: 'submit'}).then(function (token) {
	// 				acc(token);
	// 			}).catch(rej);
	// 		})
	// 	});
	// }
}
