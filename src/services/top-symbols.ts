import {IService, observable, pick, Service, wired} from "react-soa";
import {debounced} from "react-soa/dist/annotations";
import {persisted} from "react-soa/dist/snapshot";
import {piped} from "core/ssr";
import {NetworkingLayer} from "netlayer";
import {NetworkingService} from "services/networking-service";

// export interface Symbol {
//     id?: number,
//     title: string,
//     date?: string,
// }

@Service
export class TopSymbols extends IService {
    @wired net = pick(NetworkingService);
	@observable @piped data	: any;
	@observable @piped categories	: string[] = [];


	// serverLoaded =async () => { //in serverLoaded ye event hast ke samte server ejra mishe va age bekhaim ye event dashte bashim ke ham samte server ham samt client ejra beshe az applicationLoaded estefade mikonim
	// 	try {
	// 		const response = await this.net.GET<{
	// 			data: any,
	// 			categories: string[],
	// 		}>('/stocks/symbols')
	//
	// 		this.data = response.payload.data;
	// 		this.categories = response.payload.categories;
	// 	}catch (e) {
	// 		console.error(e);
	// 	}
	// }
}
