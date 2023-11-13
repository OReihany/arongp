import {pick, Service, wired} from "react-soa";
import {NetworkingService} from "services/networking-service";

@Service
export class CommentService {
	@wired net = pick(NetworkingService);


	createComment = async (data) => {
		const response = await this.net.POST('/comment/create', data);
		return response.payload;
	}
	comments = async () => {
		try {
			const response = await this.net.GET<{
				data: any,
			}>('/comment/comments')
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}


	editComment = async (data) => {
		try {
			const response = await this.net.PUT('/comment/edit', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}

	deleteComment = async (data) => {
		try {
			const response = await this.net.DELETE('/comment/delete', data);
			return response.payload;
		}catch (e){
			console.log(e);
		}
	}
}