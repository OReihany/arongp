import React, {PureComponent} from "react";
import styles from './trading-account.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import moment from "moment/moment";
import {AccountService} from "services/account";


@Observer([AccountService])
export class TradingAccount extends PureComponent {
	@wired accountService = pick(AccountService);
	state = {
		modalSet: 0,
		title_en: '',
		title_fa: '',
		description_en: '',
		description_fa: '',
		currency: 0,
		accountID: '',
		href_en: '',
		href_fa: '',
		submitMode: 0,
		value: 0,
		accounts: [],
		feature: [
			{
				name_en: '',
				value_en: '',
				name_fa: '',
				value_fa: ''
			}
		],
		modal: [
			{
				title_en: '',
				description_en: '',
				title_fa: '',
				description_fa: ''
			}
		]
	}
	currencyChange = (e) => {
		this.setState({currency: parseInt(e.target.value)})
	}
	editAccount = async (index) => {
		const account = this.state.accounts[index];
		const {title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, _id, value} = account;
		this.setState({title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, accountID: _id, modalSet: 1, submitMode: 1, value: parseInt(value)});

	}
	deleteAccount = async (index) => {
		const account = this.state.accounts[index];
		const {_id: _id1} = account;
		this.setState({modalSet: 1, title_en: '', title_fa: '', description_en: '', description_fa: '', currency: '', accountID: _id1, href_en: '', href_fa: '', submitMode: 2, feature: [{name_en: '', value_en: '', name_fa: '', value_fa: ''}], modal: [{title_en: '', description_en: '', title_fa: '', description_fa: '', value: 0}]});
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.accountService.accounts().then((data) => {
				return this.setState({accounts: data});
			})
			mont = false;
		}
	}

	formSubmit = async (e) => {
		e.preventDefault();
		const {currency, title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, accountID, submitMode, value} = this.state
		try {
			let res = {};
			if (submitMode === 0) {
				res = await this.accountService.createAccount({currency, title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, value: `${value}`});
			} else if (submitMode === 1) {
				res = await this.accountService.editAccount({currency, title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, _id: accountID, value});
			} else {
				res = await this.accountService.deleteAccount({_id: accountID});
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
			const accounts = await this.accountService.accounts();
			this.setState({accounts})
		} catch (e) {
			toast.error('مشکل سرور رخ داده است.', {
				position: "top-right",
				closeOnClick: true
			});
		}

	}
	featureChange = (e, index, inputType) => {
		const newFeature = [...this.state.feature];
		if (inputType === 0) {
			newFeature[index].name_en = e.target.value
		} else if (inputType === 1) {
			newFeature[index].value_en = e.target.value
		} else if (inputType === 2) {
			newFeature[index].name_fa = e.target.value
		} else if (inputType === 3) {
			newFeature[index].value_fa = e.target.value
		}
		this.setState({feature: newFeature})
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
	addFeature = () => {
		const feature = this.state.feature;
		this.setState({
			feature: [{
				name_en: '',
				value_en: '',
				name_fa: '',
				value_fa: ''
			}, ...feature]
		})
	}
	addModal = () => {
		const modal = this.state.modal;
		this.setState({
			modal: [
				{
					title_en: '',
					description_en: '',
					title_fa: '',
					description_fa: ''
				}, ...modal]
		})
	}
	removeFeature = (index) => {
		let features = this.state.feature;
		let newFeature = features.filter((item, idx) => idx !== index);
		this.setState({feature: newFeature});
	}
	removeModal = (index) => {
		let modal = this.state.modal;
		let newModal = modal.filter((item, idx) => idx !== index);
		this.setState({modal: newModal});
	}
	modalData = () => {
		const {currency, title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, accountID, submitMode, value} = this.state
		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				{
					(submitMode !== 2) ?
						<form id="create-account-form" onSubmit={(e) => this.formSubmit(e)}>
							<div className={styles.textFiled}>
								<p>عنوان حساب (en): </p>
								<input type="text" onChange={(e) => this.setState({title_en: e.target.value})} value={title_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>عنوان حساب (fa): </p>
								<input type="text" onChange={(e) => this.setState({title_fa: e.target.value})} value={title_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>توضیحات حساب (en): </p>
								<input type="text" onChange={(e) => this.setState({description_en: e.target.value})} value={description_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>توضیحات حساب (fa): </p>
								<input type="text" onChange={(e) => this.setState({description_fa: e.target.value})} value={description_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>لینک (en): </p>
								<input type="text" onChange={(e) => this.setState({href_en: e.target.value})} value={href_en}/>
							</div>
							<div className={styles.textFiled}>
								<p>لینک (fa): </p>
								<input type="text" onChange={(e) => this.setState({href_fa: e.target.value})} value={href_fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>ارزش: </p>
								<input type="number" min={0} max={100} onChange={(e) => this.setState({value: e.target.value})} value={value}/>
							</div>
							<div className={styles.showStatus} onChange={(e) => this.currencyChange(e)}>
								<p>نوع حساب</p>
								<label className={styles.label}>دلاری
									<input value={0} type="radio" name="currency" checked={(currency === 0)}/>
								</label>
								<label className={styles.label}>تومانی
									<input value={1} type="radio" name="currency" checked={(currency === 1)}/>
								</label>
							</div>
							<div className={styles.features}>
								<div className={styles.featuresHeader}>
									<h3>مشخصات حساب معاملاتی: </h3>
									<a className={styles.btnAdd} onClick={() => this.addFeature()}>اضافه کردن</a>
								</div>
								<div className={styles.featuresWrapper}>
									{
										feature.map((item, index) => {
											return <div className={styles.feature} key={index}>
												<div className={styles.inputGroup}>
													<div className={styles.inputFiled}>
														<input value={item.name_en} onChange={(e) => this.featureChange(e, index, 0)} type="text" placeholder="عنوان (en)"/>
														<input value={item.value_en} onChange={(e) => this.featureChange(e, index, 1)} type="text" placeholder="مقدار (en)"/>
													</div>
													<div className={styles.inputFiled}>
														<input value={item.name_fa} onChange={(e) => this.featureChange(e, index, 2)} type="text" placeholder="عنوان (fa)"/>
														<input value={item.value_fa} onChange={(e) => this.featureChange(e, index, 3)} type="text" placeholder="مقدار (fa)"/>
													</div>
												</div>
												<div className={styles.close}>
													<span onClick={() => this.removeFeature(index)} className="material-icons">close</span>
												</div>
											</div>
										})
									}
								</div>
							</div>
							<div className={styles.modals}>
								<div className={styles.modalsHeader}>
									<h3>شرایط و قوانین: </h3>
									<a className={styles.btnAdd} onClick={() => this.addModal()}>اضافه کردن</a>
								</div>
								<div className={styles.modalsWrapper}>
									{
										modal.map((item, index) => {
											return <div className={styles.modalGroup} key={index}>
												<div className={styles.inputGroup}>
													<div className={styles.inputFiled}>
														<input value={item.title_en} onChange={(e) => this.modalChange(e, index, 0)} type="text" placeholder="عنوان (en)"/>
														<input value={item.description_en} onChange={(e) => this.modalChange(e, index, 1)} type="text" placeholder="توضیحات (en)"/>
													</div>
													<div className={styles.inputFiled}>
														<input value={item.title_fa} onChange={(e) => this.modalChange(e, index, 2)} type="text" placeholder="عنوان (fa)"/>
														<input value={item.description_fa} onChange={(e) => this.modalChange(e, index, 3)} type="text" placeholder="توضیحات (fa)"/>
													</div>
												</div>
												<div className={styles.close}>
													<span className="material-icons" onClick={() => this.removeModal(index)}>close</span>
												</div>
											</div>
										})
									}
								</div>
							</div>
							<div className={styles.btnSubmit}>
								<button className={styles.btn} type="submit">{(submitMode === 0) ? 'بارگذاری' : 'ویرایش'}</button>
							</div>
						</form> :
						<div className={styles.deleteModal}>
							<div className={styles.content}>
								<p>آیا از حذف حساب معاملاتی  {title_fa} مطمئن هستید؟</p>
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
		const {accounts} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title="ایجاد حساب کاربری جدید">
				{
					this.modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>مدیریت حساب ها</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, submitMode: 0})}>ایجاد حساب معاملاتی جدید</a>
				</div>
				<div className={styles.tableMainAccount}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>عنوان</th>
							<th>تاریخ بارگذاری</th>
							<th>نوع حساب</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							accounts.map((item, index) => {
								if (item.title_en.length > 0) {
									return <tr>
										<td>{index + 1}</td>
										<td>{item.title_en}</td>
										<td>{moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
										<td>{(item.currency === 0) ? 'دلاری' : 'تومانی'}</td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.editAccount(index)}>edit</span></td>
										<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.deleteAccount(index)}>remove_circle</span></td>
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