import {observable, pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";
import {piped} from "core/ssr";

@Service
export class BounceService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;

	createBounce = async (data) => {
		const response = await this.net.POST('/bounce/create', data);
		return response.payload;
	}

	bounces = async () => {
		try {
			const response = await this.net.GET('/bounce/bounces');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	editBounce = async (data) => {
		try {
			const response = await this.net.PUT('/bounce/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	deleteBounce = async (data) => {
		try {
			const response = await this.net.DELETE('/bounce/delete', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	upload = async (data) => {
		try {
			const response = await this.net.POST('/bounce/upload', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}

	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/bounce/bounces')
			this.data = response.payload;
		}catch (e) {
			console.error(e)

		}
	}
}