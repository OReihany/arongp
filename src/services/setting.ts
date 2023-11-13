import {observable, pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";
import {piped} from "core/ssr";

@Service
export class SettingService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;


	setting = async () => {
		try {
			const response = await this.net.GET('/setting/setting');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	editSetting = async (data) => {
		try {
			const response = await this.net.PUT('/setting/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/setting/setting')
			this.data = response.payload.data;
		}catch (e) {
			console.error(e)
		}
	}
}