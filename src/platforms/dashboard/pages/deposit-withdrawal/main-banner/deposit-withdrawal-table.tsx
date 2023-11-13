import React, {PureComponent} from "react";
import styles from './deposit-withdrawal-table.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import moment from "moment/moment";
import {DepositWithdrawalService} from "services/deposit-withdrawal";
const media_server = 'https://media.arongroups.co';


export const ImgCreate = ({fileName, file, submitMode}) => {
	if (submitMode === 0) {
		return <div> </div>
	} else {
		if (Object.keys(file).length > 0) {
			return <img src={`${media_server}/${file['filename']}`} alt=""/>
		} else {
			return <div> </div>
		}
	}
}


@Observer([DepositWithdrawalService])
export class DepositWithdrawalTable extends PureComponent {
	@wired depositWithdrawalService = pick(DepositWithdrawalService);
	state = {
		modalSet: 0,
		file: null,
		fileName: '',
		deposit_method_en: '',
		deposit_method_fa: '',
		currency_unit_en: '',
		currency_unit_fa: '',
		deposit_waiting_time_en: '',
		deposit_waiting_time_fa: '',
		withdrawal_waiting_time_fa: '',
		withdrawal_waiting_time_en: '',
		min_max_en: '',
		min_max_fa: '',
		commission_en: '',
		commission_fa: '',
		value: 0,
		src_en: '',
		src_fa: '',
		showStatus: 0,
		type: 0,
		submitMode: 0,
		depositWithdrawals: [],
		files: {},
		_id: ''
	}
	showStatusHandler = (e) => {
		this.setState({showStatus: parseInt(e.target.value)})
	}
	typeHandler = (e) => {
		this.setState({type: parseInt(e.target.value)})
	}
	editBanner = async (index) => {
		const depositWithdrawal = this.state.depositWithdrawals[index];
		const {value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa, withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en,
			commission_fa, src_en, src_fa, showStatus, type, logo}	 = depositWithdrawal;
		this.setState({value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa, withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en,
			commission_fa, src_en, src_fa, showStatus, type, submitMode : 1, files: logo, modalSet: 1, _id: depositWithdrawal['_id']});

	}
	deleteBanner = async (index) => {
		const depositWithdrawal = this.state.depositWithdrawals[index];
		this.setState({deposit_method_en: '', deposit_method_fa: '', currency_unit_en: '', currency_unit_fa: '', deposit_waiting_time_en: '', deposit_waiting_time_fa: '', withdrawal_waiting_time_fa: '', withdrawal_waiting_time_en: '', min_max_en: '', min_max_fa: '', commission_en: '',
			commission_fa: '', src_en: '', src_fa: '', showStatus: 0, modalSet: 1, type: 0, submitMode : 2, files: {}, _id: depositWithdrawal['_id'], value: 0});
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.depositWithdrawalService.depositWithdrawals().then((data) => {
				return this.setState({depositWithdrawals: data});
			})
			mont = false;
		}
	}

	changePic = (e, name) => {
		const file = e.target.files[0];
		if (file.type.startsWith('image')) {
			if (file.size / (1024 * 1024) < 1) {
				e.target.parentElement.setAttribute('data-text', e.target.value.replace(/.*(\/|\\)/, ''));
				this.setState({file: file, fileName: file.name})
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
		const {value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa,withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en, commission_fa, src_en, src_fa, showStatus, type, file, fileName, submitMode} = this.state;
		const formData: FormData = new FormData();
		if (file)
			formData.append("file", file, `${Date.now()}-${fileName}`);
		formData.append("deposit_method_en", deposit_method_en);
		formData.append("deposit_method_fa", deposit_method_fa);
		formData.append("currency_unit_en", currency_unit_en);
		formData.append("currency_unit_fa", currency_unit_fa);
		formData.append("deposit_waiting_time_en", deposit_waiting_time_en);
		formData.append("deposit_waiting_time_fa", deposit_waiting_time_fa);
		formData.append("withdrawal_waiting_time_fa", withdrawal_waiting_time_fa);
		formData.append("withdrawal_waiting_time_en", withdrawal_waiting_time_en);
		formData.append("min_max_en", min_max_en);
		formData.append("min_max_fa", min_max_fa);
		formData.append("commission_en", commission_en);
		formData.append("commission_fa", commission_fa);
		formData.append("value", `${value}`);
		formData.append("src_en", src_en);
		formData.append("src_fa", src_fa);
		formData.append("type", `${type}`);
		formData.append("showStatus", `${showStatus}`);
		try {
			let res = {};
			if (submitMode === 0) {
				res = await this.depositWithdrawalService.createDepositWithdrawal(formData);
			} else if (submitMode === 1) {
				formData.append("_id", this.state._id);
				res = await this.depositWithdrawalService.editDepositWithdrawal(formData);
			} else {
				res = await this.depositWithdrawalService.deleteDepositWithdrawals({_id: this.state._id});
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
			const depositWithdrawals = await this.depositWithdrawalService.depositWithdrawals();
			this.setState({depositWithdrawals})
		} catch (e) {
			toast.error('مشکل سرور رخ داده است.', {
				position: "top-right",
				closeOnClick: true
			});
		}

	}
	modalData = () => {
		const {value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa, withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en, commission_fa, src_en, src_fa, showStatus, type, submitMode, files} = this.state;
		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				{
					(submitMode !== 2) ?
						<form id="create-deposit-withdrawal-form" onSubmit={(e) => this.formSubmit(e)} encType={'multipart/form-data'}>
							<div className={styles.textFiled}>
								<p>لینک (en): </p>
								<input type="text" onChange={(e) => this.setState({src_en: e.target.value})} value={src_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>لینک (fa): </p>
								<input type="text" onChange={(e) => this.setState({src_fa: e.target.value})} value={src_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>واریز/برداشت (en): </p>
								<input type="text" onChange={(e) => this.setState({deposit_method_en: e.target.value})} value={deposit_method_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>واریز/برداشت (fa): </p>
								<input type="text" onChange={(e) => this.setState({deposit_method_fa: e.target.value})} value={deposit_method_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>واحد ارز (en):</p>
								<input type="text" onChange={(e) => this.setState({currency_unit_en: e.target.value})} value={currency_unit_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>واحد ارز (fa):</p>
								<input type="text" onChange={(e) => this.setState({currency_unit_fa: e.target.value})} value={currency_unit_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>زمان انتظار/حداقل و حداکثر (en): </p>
								<input type="text" onChange={(e) => this.setState({deposit_waiting_time_en: e.target.value})} value={deposit_waiting_time_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>زمان انتظار/حداقل و حداکثر (en): </p>
								<input type="text" onChange={(e) => this.setState({deposit_waiting_time_fa: e.target.value})} value={deposit_waiting_time_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>زمان انتظار مشتری(en):</p>
								<input type="text" onChange={(e) => this.setState({withdrawal_waiting_time_en: e.target.value})} value={withdrawal_waiting_time_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>زمان انتظار مشتری (fa):</p>
								<input type="text" onChange={(e) => this.setState({withdrawal_waiting_time_fa: e.target.value})} value={withdrawal_waiting_time_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>حداقل و حداکثر/کارمزد خارج از تایم (en): </p>
								<input type="text" onChange={(e) => this.setState({min_max_en: e.target.value})} value={min_max_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>حداقل و حداکثر/کارمزد خارج از تایم (fa): </p>
								<input type="text" onChange={(e) => this.setState({min_max_fa: e.target.value})} value={min_max_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>کارمزد/کارمزد یکشنبه و دوشنبه (en): </p>
								<input type="text" onChange={(e) => this.setState({commission_en: e.target.value})} value={commission_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>کارمزد/کارمزد یکشنبه و دوشنبه (fa): </p>
								<input type="text" onChange={(e) => this.setState({commission_fa: e.target.value})} value={commission_fa}/>
							</div>
							<div className={styles.inputFiled}>
								<div className={styles.fileUploadWrapper} data-text="بارگذاری فایل بنر انگلیسی">
									<input onChange={(e) => this.changePic(e, 1)} name="file-banner-en" type="file" className={styles.fileUploadField} value=""/>
								</div>
							</div>
							<ImgCreate file={files} fileName='file' submitMode={submitMode}/>
							<div className={styles.type} onChange={(e) => this.typeHandler(e)}>
								<p>نوع: </p>
								<label className={styles.label}>واریز
									<input value={0} type="radio" name="type_d" checked={(type === 0)}/>
								</label>
								<label className={styles.label}>برداشت
									<input value={1} type="radio" name="type_d" checked={(type === 1)}/>
								</label>
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
							<div className={styles.textFiled}>
								<p>اهمیت نمایش: </p>
								<input type="number" onChange={(e) => this.setState({value: parseInt(e.target.value)})} value={value}/>
							</div>
							<div className={styles.btnSubmit}>
								<button className={styles.btn} type="submit">{(submitMode === 0) ? 'بارگذاری' : 'ویرایش'}</button>
							</div>
						</form> :
						<div className={styles.deleteModal}>
							<div className={styles.content}>
								<p>آیا از حذف واریز/برداشت مطمئن هستید؟</p>
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
		const {depositWithdrawals} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title="ایجاد واریز/برداشت جدید">
				{
					this.modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>مدیریت جدول واریز برداشت</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, submitMode: 0})}>ایجاد واریز/برداشت جدید</a>
				</div>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>واحد ارزی</th>
							<th>تاریخ بارگذاری</th>
							<th>وضعیت نمایش</th>
							<th>نوع</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							depositWithdrawals.map((item, index) => {
								if (item.currency_unit_fa.length > 0) {
									return <tr>
										<td>{index + 1}</td>
										<td>{item.deposit_method_fa}</td>
										<td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
										<td className={{[styles.active]: (item.showStatus === 0) ? 1 : 0}.toCss}><span className='material-icons'>flash_on</span></td>
										<td>{(item.type === 0) ? 'واریز' : 'برداشت'}</td>
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