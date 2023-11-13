import {observable, pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";
import {piped} from "core/ssr";

@Service
export class AccountService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;
	@observable @piped compare: any;

	createAccount = async (data) => {
		const response = await this.net.POST('/account/create', data);
		return response.payload;
	}

	accounts = async () => {
		try {
			const response = await this.net.GET('/account/accounts');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}

	accountsCompare = async () => {
		try {
			const response = await this.net.GET('/account/accountsCompare');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	editAccount = async (data) => {
		try {
			const response = await this.net.PUT('/account/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	editAccountCom = async (data) => {
		try {
			const response = await this.net.PUT('/account/editCompare', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	deleteAccount = async (data) => {
		try {
			const response = await this.net.DELETE('/account/delete', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/account/accounts')
			this.data = response.payload;
			const response1 = await this.net.GET<{
				data: any,
			}>('/account/accountsCompare')
			this.compare = response1.payload;
		}catch (e) {
			console.error(e)
		}
	}
}