import {IService, observable, pick, Service, wired} from "react-soa";
import {piped} from "core/ssr";
import {NetworkingService} from "services/networking-service";

@Service
export class HomepageService extends IService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;


	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/banner/banners')
			this.data = response.payload.data;
		}catch (e) {
			console.error(e)

		}
	}
}