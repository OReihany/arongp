import {observable, pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";
import {piped} from "core/ssr";

@Service
export class TradingSymbolService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;

	tradingSymbols = async () => {
		try {
			const response = await this.net.GET('/trading-symbol/trading-symbols');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}

	editSymbols = async (data) => {
		try {
			const response = await this.net.PUT('/trading-symbol/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}

	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/trading-symbol/trading-symbols')
			this.data = response.payload;
		}catch (e) {
			console.error(e)

		}
	}
}