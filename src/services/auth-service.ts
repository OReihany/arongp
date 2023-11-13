import {pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";

@Service
export class AuthService {
	@wired net = pick(NetworkingService);

	login = async ({email, password}) => {
		const response = await this.net.POST('/user/login', {
			email, password,
		});
		return response.payload;
	}

	register = async (data) => {
		const response = await this.net.POST('/user/register', data);
		return response.payload;
	}

	editAdmin = async (data) => {
		try {
			const response = await this.net.PUT('/user/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}

	deleteAdmin = async (data) => {
		try {
			const response = await this.net.DELETE('/user/delete', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	info = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/user/info')
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	admins = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/user/admins')
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
}