import {pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";

@Service
export class BannerService {
	@wired net = pick(NetworkingService);

	createBanner = async (data) => {
		const response = await this.net.POST('/banner/create', data);
		return response.payload;
	}

	banners = async () => {
		try {
			const response = await this.net.GET('/banner/banners');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	editBanner = async (data) => {
		try {
			const response = await this.net.PUT('/banner/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	deleteBanner = async (data) => {
		try {
			const response = await this.net.DELETE('/banner/delete', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
}