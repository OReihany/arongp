import {observable, pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";
import {piped} from "core/ssr";

@Service
export class YaldaService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;

	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/yalda/getAll')
			this.data = response.payload.data;
		}catch (e) {
			console.error(e)

		}
	}
	yaldas = async () => {
		try {
			const response = await this.net.GET('/yalda/getAll');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	editeYalda = async (data) => {
		try {
			const response = await this.net.PUT('/yalda/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
}