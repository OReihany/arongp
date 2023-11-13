import {observable, pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";
import {piped} from "core/ssr";

@Service
export class FaqService {
	@wired net = pick(NetworkingService);
	@observable @piped data: any;


	serverLoaded = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/faq/categories')
			this.data = response.payload;
		}catch (e) {
			console.error(e)

		}
	}


	createCategory = async (data) => {
		const response = await this.net.POST('/faq/create', data);
		return response.payload;
	}

	categories = async () => {
		try {
			const response = await this.net.GET('/faq/categories');
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}

	editCategory = async (data) => {
		try {
			const response = await this.net.PUT('/faq/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
	deleteCategory = async (data) => {
		try {
			const response = await this.net.DELETE('/faq/delete', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
}