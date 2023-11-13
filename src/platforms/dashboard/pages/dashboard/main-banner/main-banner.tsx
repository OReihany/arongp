import React, {PureComponent} from "react";
import styles from './main-banner.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {BannerService} from "services/banner";
import {pick, wired} from "react-soa";
import moment from "moment/moment";

const media_server = 'https://media.arongroups.co';


export const ImgCreate = ({banner, fileName, files, submitMode}) => {
	if (submitMode === 0) {
		return <div></div>
	} else {
		if (Object.keys(files).length > 0 && fileName in files) {
			return <img src={`${media_server}/${banner['files'][fileName][0]['filename']}`} alt=""/>
		} else {
			return <div></div>
		}
	}
}


@Observer([BannerService])
export class MainBanner extends PureComponent {
	@wired bannerService = pick(BannerService);
	state = {
		modalSet: 0,
		file1: null,
		fileName1: '',
		file2: null,
		fileName2: '',
		file3: null,
		fileName3: '',
		file4: null,
		fileName4: '',
		title: '',
		showStatus: 0,
		bannerID: '',
		src_en: '',
		src_fa: '',
		files: {},
		fileId: '',
		submitMode: 0,
		banners: [{
			title: '',
			src_fa: '',
			src_en: '',
			showStatus: 0,
			files: {},
			createdAt: '',
			_id: ''

		}],
		banner: {
			title: '',
			src_fa: '',
			src_en: '',
			showStatus: 0,
			files: {},
			createdAt: '',
			_id: ''
		},
	}
	showStatusHandler = (e) => {
		this.setState({showStatus: parseInt(e.target.value)})
	}
	editBanner = async (index) => {
		const banner = this.state.banners[index];
		const {src_fa, _id: _id1, showStatus, title, src_en} = banner;
		if ('files' in banner) {
			this.setState({banner: banner, submitMode: 1, bannerID: _id1, title: title, src_fa: src_fa, src_en: src_en, showStatus: showStatus, files: banner['files'], modalSet: 1});
		} else {
			this.setState({banner: banner, submitMode: 1, bannerID: _id1, title: title, src_fa: src_fa, src_en: src_en, showStatus: showStatus, modalSet: 1});
		}

	}
	deleteBanner = async (index) => {
		const banner = this.state.banners[index];
		const {_id: _id1} = banner;
		const banners = await this.bannerService.banners();
		this.setState({banners: banners['data'], banner: {title: '', src_fa: '', src_en: '', showStatus: 0, files: {}, createdAt: '', _id: ''}, submitMode: 2, bannerID: _id1, title: '', src_fa: '', src_en: '', showStatus: 0, files: {}, modalSet: 1});
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.bannerService.banners().then((data) => {
				return this.setState({banners: data['data']});
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
		const {file1, file2, file3, file4, fileName1, fileName2, fileName3, fileName4, title, src_fa, src_en, showStatus} = this.state;
		const formData: FormData = new FormData();
		if (file1)
			formData.append("file1", file1, `${Date.now()}-${fileName1}`);
		if (file2)
			formData.append("file2", file2, `${Date.now()}-${fileName2}`);
		if (file3)
			formData.append("file3", file3, `${Date.now()}-${fileName3}`);
		if (file4)
			formData.append("file4", file4, `${Date.now()}-${fileName4}`);
		formData.append("title", title);
		formData.append("src_en", src_en);
		formData.append("src_fa", src_fa);
		formData.append("showStatus", `${showStatus}`);
		try {
			let res = {};
			if (this.state.submitMode === 0) {
				res = await this.bannerService.createBanner(formData);
			} else if (this.state.submitMode === 1) {
				formData.append("_id", this.state.bannerID);
				res = await this.bannerService.editBanner(formData);
			} else {
				res = await this.bannerService.deleteBanner({_id: this.state.bannerID});
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
			const banners = await this.bannerService.banners();
			this.setState({banners: banners['data']})
		} catch (e) {
			toast.error('مشکل سرور رخ داده است.', {
				position: "top-right",
				closeOnClick: true
			});
		}

	}
	modalData = () => {
		const {title, src_en, src_fa, showStatus, files, submitMode, banner} = this.state;

		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				{
					(submitMode !== 2) ?
						<form id="create-banner-form" onSubmit={(e) => this.formSubmit(e)} encType={'multipart/form-data'}>
							<div className={styles.textFiled}>
								<p>عنوان بنر: </p>
								<input type="text" onChange={(e) => this.setState({title: e.target.value})} value={title}/>
							</div>
							<div className={styles.textFiled}>
								<p>لینک انگلیسی: </p>
								<input type="text" onChange={(e) => this.setState({src_en: e.target.value})} value={src_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>لینک فارسی: </p>
								<input type="text" onChange={(e) => this.setState({src_fa: e.target.value})} value={src_fa}/>
							</div>
							<div className={styles.inputFiled}>
								<div className={styles.fileUploadWrapper} data-text="بارگذاری فایل بنر انگلیسی">
									<input onChange={(e) => this.changePic(e, 1)} name="file-banner-en" type="file" className={styles.fileUploadField} value=""/>
								</div>
							</div>
							<ImgCreate files={files} fileName='file1' banner={banner} submitMode={submitMode}/>
							<div className={styles.inputFiled}>
								<div className={styles.fileUploadWrapper} data-text="بارگذاری فایل بنر فارسی">
									<input onChange={(e) => this.changePic(e, 2)} name="file-banner-fa" type="file" className={styles.fileUploadField} value=""/>
								</div>
							</div>
							<ImgCreate files={files} fileName='file2' banner={banner} submitMode={submitMode}/>
							<div className={styles.inputFiled}>
								<div className={styles.fileUploadWrapper} data-text="بارگذاری فایل بنر انگلیسی موبایل">
									<input onChange={(e) => this.changePic(e, 3)} name="file-banner-mobile-en" type="file" className={styles.fileUploadField} value=""/>
								</div>
							</div>
							<ImgCreate files={files} fileName='file3' banner={banner} submitMode={submitMode}/>
							<div className={styles.inputFiled}>
								<div className={styles.fileUploadWrapper} data-text="بارگذاری فایل بنر فارسی موبایل">
									<input onChange={(e) => this.changePic(e, 4)} name="file-banner-mobile-fa" type="file" className={styles.fileUploadField} value=""/>
								</div>
							</div>
							<ImgCreate files={files} fileName='file4' banner={banner} submitMode={submitMode}/>
							<div className={styles.showStatus} onChange={(e) => this.showStatusHandler(e)}>
								<p>وضعیت نمایش</p>
								<label className={styles.label}>نمایش
									<input value={0} type="radio" name="show" checked={(showStatus === 0)}/>
								</label>
								<label className={styles.label}>عدم نمایش
									<input value={1} type="radio" name="show" checked={(showStatus === 1)}/>
								</label>
							</div>
							<div className={styles.btnSubmit}>
								<button className={styles.btn} type="submit">{(submitMode === 0) ? 'بارگذاری' : 'ویرایش'}</button>
							</div>
						</form> :
						<div className={styles.deleteModal}>
							<div className={styles.content}>
								<p>آیا از حذف بنر {title} مطمئن هستید؟</p>
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
		const {banners} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title="ایجاد بنر جدید">
				{
					this.modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>مدیریت بنر اصلی</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, submitMode: 0})}>ایجاد بنر جدید</a>
				</div>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>عنوان</th>
							<th>تاریخ بارگذاری</th>
							<th>وضعیت نمایش</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							banners.map((item, index) => {
								if (item.title.length > 0) {
									return <tr>
										<td>{index + 1}</td>
										<td>{item.title}</td>
										<td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
										<td className={{[styles.active]: (item.showStatus === 0) ? 1 : 0}.toCss}><span className='material-icons'>flash_on</span></td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.editBanner(index)}>edit</span></td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.deleteBanner(index)}>remove_circle</span></td>
									</tr>
								}
							})
						}
						</tbody>
					</table>
				</div>
			</Container>

		</div>
	}
}