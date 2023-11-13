import {pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";

@Service
export class YaldaService {
	@wired net = pick(NetworkingService);

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