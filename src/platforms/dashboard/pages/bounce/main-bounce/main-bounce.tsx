import React, {PureComponent} from "react";
import styles from './main-bounce.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {BounceService} from "services/bounce";
import {pick, wired} from "react-soa";
import moment from "moment/moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import {exception} from "react-ga";
import mongoose from "mongoose";

const media_server = 'https://media.arongroups.co';


export const ImgCreate = ({bounce, fileName, files, submitMode}) => {
	if (submitMode === 0) {
		return <div></div>
	} else {
		if (Object.keys(files).length > 0 && fileName in files) {
			return <img src={`${media_server}/${bounce['files'][fileName][0]['filename']}`} alt=""/>
		} else {
			return <div></div>
		}
	}
}


@Observer([BounceService])
export class MainBounce extends PureComponent {
	@wired bounceService = pick(BounceService);
	state = {
		modalSet: 0,
		file1: null,
		fileName1: '',
		file2: null,
		fileName2: '',
		title_en: '',
		title_fa: '',
		showStatus: 0,
		type: 0,
		_id: '',
		description_en: '',
		description_fa: '',
		files: {},
		fileId: '',
		date_start: new Date(),
		date_stop: new Date(),
		submitMode: 0,
		value: 0,
		modal: [
			{
				title_en: '',
				description_en: '',
				title_fa: '',
				description_fa: ''
			}
		],
		bounces: [{
			title_en: '',
			title_fa: '',
			description_en: '',
			description_fa: '',
			modal: [],
			date_start: '',
			date_stop: '',
			showStatus: 0,
			type: 0,
			files: {},
			createdAt: '',
			_id: '',
			value: 0

		}],
		bounce: {
			title_en: '',
			title_fa: '',
			description_en: '',
			description_fa: '',
			modal: [],
			date_start: '',
			date_stop: '',
			showStatus: 0,
			type: 0,
			files: {},
			createdAt: '',
			_id: ''

		},
	}
	showStatusHandler = (e) => {
		this.setState({showStatus: parseInt(e.target.value)})
	}
	showTypeHandler = (e) => {
		this.setState({type: parseInt(e.target.value)})
	}
	editBanner = async (index) => {
		const bounce = this.state.bounces[index];
		const {value, title_en, title_fa, description_en, description_fa, date_start, date_stop, modal, showStatus, type, _id, files} = bounce;
		if ('files' in bounce) {
			this.setState({
				file1: null,
				fileName1: '',
				file2: null,
				fileName2: '', bounce: bounce, submitMode: 1, title_en, title_fa, description_en, description_fa, date_start, date_stop, modal, showStatus, type, _id, files, modalSet: 1, value
			});
		} else {
			this.setState({
				file1: null,
				fileName1: '',
				file2: null,
				fileName2: '', bounce: bounce, submitMode: 1, title_en, title_fa, description_en, description_fa, date_start, date_stop, modal, showStatus, type, _id, modalSet: 1, value
			});
		}

	}
	resetState = (_id, bounces, bounce, submitMode, modalSet) => {
		const bouncesNew = (bounces === '') ? [{
			value: 0,
			title_en: '',
			title_fa: '',
			description_en: '',
			description_fa: '',
			modal: [],
			date_start: '',
			date_stop: '',
			showStatus: 0,
			type: 0,
			files: {},
			createdAt: '',
			_id: ''

		}] : bounces;
		const bounceNew = (bounce === '') ? {
			title_en: '',
			title_fa: '',
			description_en: '',
			description_fa: '',
			modal: [],
			date_start: '',
			date_stop: '',
			showStatus: 0,
			type: 0,
			files: {},
			createdAt: '',
			_id: ''

		} : bounce;
		this.setState({
			modalSet: modalSet,
			file1: null,
			fileName1: '',
			file2: null,
			fileName2: '',
			title_en: '',
			title_fa: '',
			showStatus: 0,
			type: 0,
			_id: _id,
			description_en: '',
			description_fa: '',
			files: {},
			fileId: '',
			date_start: new Date(),
			date_stop: new Date(),
			submitMode: submitMode,
			modal: [
				{
					title_en: '',
					description_en: '',
					title_fa: '',
					description_fa: ''
				}
			],
			bounces: bouncesNew,
			bounce: bounceNew,
		})
	}
	deleteBanner = async (index) => {
		const bounce = this.state.bounces[index];
		const {_id: _id1} = bounce;
		this.resetState(_id1, '', '', 2, 1);
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.bounceService.bounces().then((data) => {
				return this.setState({bounces: data});
			})
			mont = false;
		}
	}

	changePic = (e, name) => {
		const file = e.target.files[0];
		if (file.type.startsWith('image')) {
			if (file.size / (1024 * 1024) < 1) {
				e.target.parentElement.setAttribute('data-text', e.target.value.replace(/.*(\/|\\)/, ''));
				(name === 1) ? this.setState({file1: file}) : (name === 2) ? this.setState({file2: file}) : (name === 3) ? this.setState({file3: file}) : this.setState({file4: file});
				(name === 1) ? this.setState({fileName1: file.name}) : (name === 2) ? this.setState({fileName2: file.name}) : (name === 3) ? this.setState({fileName3: file.name}) : this.setState({fileName4: file.name});
			} else {
				toast.warning('سایز عکس نمی تواند از یک مگا بایت بیشتر باشد.', {
					position: "top-right",
					closeOnClick: true
				})
			}
		} else {
			toast.error('تنها مجاز به ارسال عکس می باشید.', {
				position: "top-right",
				closeOnClick: true
			})
		}

	}
	formSubmit = async (e) => {
		e.preventDefault();
		const {file1, file2, fileName1, fileName2, title_en, title_fa, description_en, description_fa, showStatus, type, modal, date_start, date_stop, value} = this.state;
		const formData: FormData = new FormData();
		if (file1)
			formData.append("file1", file1, `${Date.now()}-${fileName1}`);
		if (file2)
			formData.append("file2", file2, `${Date.now()}-${fileName2}`);
		formData.append("modal", JSON.stringify(modal));
		formData.append("title_en", title_en);
		formData.append("title_fa", title_fa);
		// @ts-ignore
		formData.append("date_start", date_start);
		// @ts-ignore
		formData.append("date_stop", date_stop);
		formData.append("description_en", description_en);
		formData.append("description_fa", description_fa);
		formData.append("showStatus", `${showStatus}`);
		formData.append("type", `${type}`);
		formData.append("value", `${value}`);
		try {
			let res = {};
			if (this.state.submitMode === 0) {
				res = await this.bounceService.createBounce(formData);
			} else if (this.state.submitMode === 1) {
				formData.append("_id", this.state._id);
				res = await this.bounceService.editBounce(formData);
			} else {
				res = await this.bounceService.deleteBounce({_id: this.state._id});
			}
			this.resetState('', '', '', 0, 0)
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
			const bounces = await this.bounceService.bounces();
			this.setState({bounces: bounces})
		} catch (e) {
			toast.error('مشکل سرور رخ داده است.', {
				position: "top-right",
				closeOnClick: true
			});
		}

	}
	removeModal = (index) => {
		let modal = this.state.modal;
		let newModal = modal.filter((item, idx) => idx !== index);
		this.setState({modal: newModal});
	}
	addModal = (status = 'text') => {
		const modal = this.state.modal;
		const data = (status === 'text') ? {
			title_en: '',
			description_en: '',
			title_fa: '',
			description_fa: ''
		} : {
			title_en: 'image',
			description_en: '',
			title_fa: 'image',
			description_fa: ''
		}
		this.setState({
			modal: [
				data, ...modal]
		})
	}
	modalChange = (e, index, inputType) => {
		const newModal = [...this.state.modal];
		if (inputType === 0) {
			newModal[index].title_en = e.target.value
		} else if (inputType === 1) {
			newModal[index].description_en = e.target.value
		} else if (inputType === 2) {
			newModal[index].title_fa = e.target.value
		} else if (inputType === 3) {
			newModal[index].description_fa = e.target.value
		}
		this.setState({modal: newModal})
	}
	modalFileChange = async (e, index, inputType) => {
		const file = e.target.files[0];
		const formData: FormData = new FormData();
		formData.append("file", file, `${Date.now()}-${file.name}`);
		formData.append("type", '1');
		try {
			let response_file = await this.bounceService.upload(formData)
			const newModal = [...this.state.modal];
			if (inputType === 1) {
				newModal[index].description_en = response_file['file']
			} else if (inputType === 2) {
				newModal[index].description_fa = response_file['file']
			}
			this.setState({modal: newModal})
		} catch (err) {
			toast.error('بارگزاری عکس با مشکل مواجه شده است.', {
				position: "top-right",
				closeOnClick: true
			})
		}
	}
	modalData = () => {
		const {value, submitMode, files, title_en, title_fa, description_en, description_fa, showStatus, type, modal, date_start, date_stop, bounce} = this.state;

		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				{
					(submitMode !== 2) ?
						<form id="create-banner-form" onSubmit={(e) => this.formSubmit(e)} encType={'multipart/form-data'}>
							<div className={styles.textFiled}>
								<p>عنوان بونس (en): </p>
								<input type="text" onChange={(e) => this.setState({title_en: e.target.value})} value={title_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>عنوان بونس (fa): </p>
								<input type="text" onChange={(e) => this.setState({title_fa: e.target.value})} value={title_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>توضیحات بونس (en): </p>
								<input type="text" onChange={(e) => this.setState({description_en: e.target.value})} value={description_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>توضیحات بونس (fa): </p>
								<input type="text" onChange={(e) => this.setState({description_fa: e.target.value})} value={description_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>ارزش : </p>
								<input type="number" onChange={(e) => this.setState({value: parseInt(e.target.value)})} value={value}/>
							</div>
							<div className={styles.inputFiled}>
								<div className={styles.fileUploadWrapper} data-text="بارگزاری فایل بونس(en)">
									<input onChange={(e) => this.changePic(e, 1)} name="file-bounce-en" type="file" className={styles.fileUploadField} value=""/>
								</div>
							</div>
							<ImgCreate files={files} fileName='file1' bounce={bounce} submitMode={submitMode}/>
							<div className={styles.inputFiled}>
								<div className={styles.fileUploadWrapper} data-text="بارگزاری فایل بونس(fa)">
									<input onChange={(e) => this.changePic(e, 2)} name="file-bounce-fa" type="file" className={styles.fileUploadField} value=""/>
								</div>
							</div>
							<ImgCreate files={files} fileName='file2' bounce={bounce} submitMode={submitMode}/>


							<div className={styles.textFiled}>
								<p>تاریخ شروع: </p>
								<DayPickerInput value={moment(date_start).format('YYYY-MM-DD')} placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayChange={(date) => this.setState({date_stop: date})}/>
							</div>
							<div className={styles.textFiled}>
								<p>تاریخ پایان: </p>
								<DayPickerInput value={moment(date_stop).format('YYYY-MM-DD')} placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayChange={(date) => this.setState({date_stop: date})}/>
							</div>
							<div className={styles.showStatus} onChange={(e) => this.showStatusHandler(e)}>
								<p>وضعیت نمایش</p>
								<label className={styles.label}>نمایش
									<input value={0} type="radio" name="show" checked={(showStatus === 0)}/>
								</label>
								<label className={styles.label}>عدم نمایش
									<input value={1} type="radio" name="show" checked={(showStatus === 1)}/>
								</label>
							</div>
							<div className={styles.showStatus} onChange={(e) => this.showTypeHandler(e)}>
								<p>نمایش در</p>
								<label className={styles.label}>در حال برگزاری
									<input value={0} type="radio" name="type" checked={(type === 0)}/>
								</label>
								<label className={styles.label}>تاریخ گذشته
									<input value={1} type="radio" name="type" checked={(type === 1)}/>
								</label>
							</div>
							<div className={styles.modals}>
								<div className={styles.modalsHeader}>
									<h3>شرایط و قوانین: </h3>
									<a className={styles.btnAdd} onClick={() => this.addModal('text')}>اضافه کردن</a>
									<a className={styles.btnAdd} onClick={() => this.addModal('img')}> تصویر </a>
								</div>
								<div className={styles.modalsWrapper}>
									{
										modal.map((item, index) => {
											return <div className={styles.modalGroup} key={index}>
												{
													(item.title_en === 'image') ? <div className={styles.inputGroup}>
														<div className={styles.inputFiled}>
															<div className={styles.fileUploadWrapper} data-text="بارگزاری تصویر(en)">
																<input value="" onChange={(e) => this.modalFileChange(e, index, 1)} name="file" type="file" className={styles.fileUploadField} />
															</div>
														</div>
														{(item.description_en !== '')  ? <img className={styles.imageRes} src={item.description_en} alt=""/> : ''}
														<div className={styles.inputFiled}>
															<div className={styles.fileUploadWrapper} data-text="بارگزاری تصویر(fa)">
																<input value="" onChange={(e) => this.modalFileChange(e, index, 2)} name="file" type="file" className={styles.fileUploadField} />
															</div>
														</div>
														{(item.description_fa !== '')  ? <img className={styles.imageRes} src={item.description_fa} alt=""/> : ''}
													</div> : <div className={styles.inputGroup}>
														<div className={styles.inputFiled}>
															<input value={item.title_en} onChange={(e) => this.modalChange(e, index, 0)} type="text" placeholder="عنوان (en)"/>
															<input value={item.description_en} onChange={(e) => this.modalChange(e, index, 1)} type="text" placeholder="توضیحات (en)"/>
														</div>
														<div className={styles.inputFiled}>
															<input value={item.title_fa} onChange={(e) => this.modalChange(e, index, 2)} type="text" placeholder="عنوان (fa)"/>
															<input value={item.description_fa} onChange={(e) => this.modalChange(e, index, 3)} type="text" placeholder="توضیحات (fa)"/>
														</div>
													</div>
												}
												<div className={styles.close}>
													<span className="material-icons" onClick={() => this.removeModal(index)}>close</span>
												</div>
											</div>
										})
									}
								</div>
							</div>
							<div className={styles.btnSubmit}>
								<button className={styles.btn} type="submit">{(submitMode === 0) ? 'بارگزاری' : 'ویرایش'}</button>
							</div>
						</form> :
						<div className={styles.deleteModal}>
							<div className={styles.content}>
								<p>آیا از حذف بونوس {title_fa} مطمئن هستید؟</p>
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
		const {bounces} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title="ایجاد بنر جدید">
				{
					this.modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>مدیریت بونوس ها</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, submitMode: 0})}>ایجاد بونس جدید</a>
				</div>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>عنوان</th>
							<th>تاریخ بارگزاری</th>
							<th>وضعیت نمایش</th>
							<th>نمایش در</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							bounces.map((item, index) => {
								return <tr>
									<td>{index + 1}</td>
									<td>{item.title_en}</td>
									<td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
									<td className={{[styles.active]: (item.showStatus === 0) ? 1 : 0}.toCss}><span className='material-icons'>flash_on</span></td>
									<td className={{[styles.active]: (item.type === 0) ? 1 : 0}.toCss}><span className='material-icons'>flash_on</span></td>
									<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.editBanner(index)}>edit</span></td>
									<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.deleteBanner(index)}>remove_circle</span></td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
			</Container>

		</div>
	}
}
