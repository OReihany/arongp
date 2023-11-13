import React, {PureComponent} from "react";
import styles from './comment-management.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {CommentService} from "services/comment";


@Observer([CommentService])
export class CommentManagement extends PureComponent {
	@wired commentService = pick(CommentService);
	state = {
		modalSet: 0,
		submitMode: 0,
		comments: [],
		comment: {first_name: '', last_name: '', phone_number: '', email: '', message: ''}
	}

	showComment = async (id) => {
		const comment = this.state.comments.filter(item => item._id === id);
		this.setState({comment: comment[0], modalSet: 1, submitMode: 1});
	}
	deleteComment = async (id) => {
		const comment = this.state.comments.filter(item => item._id === id);
		this.setState({modalSet: 1, submitMode: 2, comment: comment[0]});
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.commentService.comments().then((data) => {
				return this.setState({comments: data});
			})
			mont = false;
		}
	}

	formSubmit = async (e) => {
		e.preventDefault();
		const {submitMode, comment} = this.state;
		try {
			let res = {};
			if (submitMode === 1) {
				res = await this.commentService.editComment({_id: `${comment['_id']}`});
			} else if (submitMode === 2) {
				res = await this.commentService.deleteComment({_id: `${comment['_id']}`});
			}
			this.setState({modalSet: 0})
			if (res['status'] === 201) {
				toast.success(res['message'], {
					position: "top-right",
					closeOnClick: true
				});
			} else {
				toast.error(res['message'], {
					position: "top-right",
					closeOnClick: true
				})
			}
			const comments = await this.commentService.comments();
			this.setState({comments})
		} catch (e) {
			toast.error('ادمین محترم مشکل رخ داده مجددا تلاش نمایید.', {
				position: "top-right",
				closeOnClick: true
			})
		}

	}
	modalData = () => {
		const {comment, submitMode} = this.state;
		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				{
					(submitMode !== 2) ?
						<form id="create-deposit-withdrawal-form" onSubmit={(e) => this.formSubmit(e)}>
							<div className={styles.textFiled}>
								<p>نام: </p>
								<input disabled={true} type="text" value={comment['first_name']}/>
							</div>
							<div className={styles.textFiled}>
								<p>نام خانوادگی: </p>
								<input disabled={true} type="text" value={comment['last_name']}/>
							</div>
							<div className={styles.textFiled}>
								<p>ایمیل: </p>
								<input disabled={true} type="text" value={comment['email']}/>
							</div>
							<div className={styles.textFiled}>
								<p>شماره تماس: </p>
								<input disabled={true} type="text" value={comment['phone_number']}/>
							</div>
							<div className={styles.textFiled}>
								<p>متن پیغام: </p>
								<p style={{display: 'flex', lineHeight: 2}}>{comment['message']}</p>
							</div>
							<div className={styles.btnSubmit}>
								<a className={styles.btn} onClick={(e) => this.formSubmit(e)}>ویرایش</a>
							</div>
						</form> :
						<div className={styles.deleteModal}>
							<div className={styles.content}>
								<p>آیا از حذف این ادمین مطمئن هستید؟</p>
							</div>
							<div className={styles.btnSubmit}>
								<button className={styles.btn} onClick={(e) => this.setState({modalSet: 0})}>خیر</button>
								<button className={styles.btn} onClick={(e) => this.formSubmit(e)}> بلی</button>
							</div>
						</div>
				}
			</Container>
		</div>
	}

	resetModal = (e) => {
		this.setState({modalSet: 0});
	}

	render() {
		const {comments} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title="پیغام های سایت">
				{
					this.modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>مدیریت پیغام های سایت بررسی نشده</h2>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>نام</th>
							<th>نام خانوادگی</th>
							<th>ایمیل</th>
							<th>مشاهده</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							(comments.filter(item => item.status === 0).length > 0) ? comments.map((item, index) => {
								if (item.status === 0) {
									return <tr key={index}>
										<td>{index + 1}</td>
										<td>{item.first_name}</td>
										<td>{item.last_name}</td>
										<td>{item.email}</td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.showComment(item._id)}>visibility</span></td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.deleteComment(item._id)}>remove_circle</span></td>
									</tr>;
								} else {
									return '';
								}
							}) : ''
						}
						</tbody>
					</table>
				</div>
			</Container>
			<Container className={styles.container}>
				<h2>مدیریت پیغام های سایت بررسی شده</h2>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>نام</th>
							<th>نام خانوادگی</th>
							<th>ایمیل</th>
							<th>مشاهده</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							(comments.filter(item => item.status !== 0).length > 0) ? comments.map((item, index) => {
								if (item.status === 1) {
									return <tr key={index}>
										<td>{index + 1}</td>
										<td>{item.first_name}</td>
										<td>{item.last_name}</td>
										<td>{item.email}</td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.showComment(item._id)}>visibility</span></td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.deleteComment(item._id)}>remove_circle</span></td>
									</tr>
								} else {
									return ''
								}
							}) : ''
						}
						</tbody>
					</table>
				</div>
			</Container>

		</div>
	}
}