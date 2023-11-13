import {observable, pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";
import {piped} from "core/ssr";

@Service
export class DepositWithdrawalService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;

	createDepositWithdrawal = async (data) => {
		const response = await this.net.POST('/deposit-withdrawal/create', data);
		return response.payload;
	}

	depositWithdrawals = async () => {
		try {
			const response = await this.net.GET('/deposit-withdrawal/depositWithdrawals');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	editDepositWithdrawal = async (data) => {
		try {
			const response = await this.net.PUT('/deposit-withdrawal/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	deleteDepositWithdrawals = async (data) => {
		try {
			const response = await this.net.DELETE('/deposit-withdrawal/delete', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/deposit-withdrawal/depositWithdrawals')
			this.data = response.payload;
		}catch (e) {
			console.error(e)

		}
	}
}