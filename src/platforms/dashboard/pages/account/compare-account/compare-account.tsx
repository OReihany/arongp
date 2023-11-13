import React, {PureComponent} from "react";
import styles from './compare-account.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {AccountService} from "services/account";


@Observer([AccountService])
export class CompareAccount extends PureComponent {
	@wired accountService = pick(AccountService);
	state = {
		modalSet: 0,
		dataCom: [
			{
				type_en: '',
				type_fa: '',
				cash_en: '',
				cash_fa: '',
				vip_en: '',
				vip_fa: '',
				standard_en: '',
				standard_fa: '',
				nano_en: '',
				nano_fa: ''
			}
		],
		dataFeat: [
			{
				type_en: '',
				type_fa: '',
				cash_en: '',
				cash_fa: '',
				vip_en: '',
				vip_fa: '',
				standard_en: '',
				standard_fa: '',
				nano_en: '',
				nano_fa: ''
			}
		],
		dataNot: [{
			text_en: '',
			text_fa: ''
		}],
		dataNot1: [{
			text_en: '',
			text_fa: ''
		}],
		dataNot2: [{
			text_en: '',
			text_fa: ''
		}],
		typeCompare: 0,
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.accountService.accountsCompare().then((data: [{}]) => {
				let dataCom = (data.filter((item, index) => item['type'] === 0).length > 0) ? data.filter((item, index) => item['type'] === 0)[0]['data'] : []
				let dataFeat = (data.filter((item, index) => item['type'] === 1).length > 0) ? data.filter((item, index) => item['type'] === 1)[0]['data'] : []
				let dataNot = (data.filter((item, index) => item['type'] === 2).length > 0) ? data.filter((item, index) => item['type'] === 2)[0]['data'] : []
				let dataNot1 = (data.filter((item, index) => item['type'] === 3).length > 0) ? data.filter((item, index) => item['type'] === 3)[0]['data'] : []
				let dataNot2 = (data.filter((item, index) => item['type'] === 4).length > 0) ? data.filter((item, index) => item['type'] === 4)[0]['data'] : []
				if (dataCom.length > 0)
					this.setState({dataCom});
				if (dataFeat.length > 0)
					this.setState({dataFeat});
				if (dataNot.length > 0)
					this.setState({dataNot});
				if (dataNot1.length > 0)
					this.setState({dataNot1});
				if (dataNot2.length > 0)
					this.setState({dataNot2});
			})
			mont = false;
		}
	}

	resetModal = (e) => {
		this.setState({modalSet: 0});
	}
	formSubmit = async (e) => {
		e.preventDefault();
		const {dataCom, dataFeat, typeCompare, dataNot, dataNot1, dataNot2} = this.state
		try {
			let res = {};
			if (typeCompare === 0) {
				res = await this.accountService.editAccountCom({type: typeCompare, data: dataCom});
			} else if (typeCompare === 1) {
				res = await this.accountService.editAccountCom({type: typeCompare, data: dataFeat});
			} else if (typeCompare === 2) {
				res = await this.accountService.editAccountCom({type: typeCompare, data: dataNot});
			} else if (typeCompare === 3) {
				res = await this.accountService.editAccountCom({type: typeCompare, data: dataNot1});
			} else if (typeCompare === 4) {
				res = await this.accountService.editAccountCom({type: typeCompare, data: dataNot2});
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
		} catch (e) {
			toast.error('مشکل سرور رخ داده است.', {
				position: "top-right",
				closeOnClick: true
			});
		}

	}
	addFeature = () => {
		const data = (this.state.typeCompare === 0) ? this.state.dataCom : (this.state.typeCompare === 1) ? this.state.dataFeat : (this.state.typeCompare === 2) ? this.state.dataNot : (this.state.typeCompare === 3) ? this.state.dataNot1 : this.state.dataNot2;
		if (this.state.typeCompare === 0) {
			this.setState({
				dataCom: [{
					type_en: '',
					type_fa: '',
					cash_en: '',
					cash_fa: '',
					vip_en: '',
					vip_fa: '',
					standard_en: '',
					standard_fa: '',
					nano_en: '',
					nano_fa: ''
				}, ...data]
			})
		} else if (this.state.typeCompare === 1) {
			this.setState({
				dataFeat: [{
					type_en: '',
					type_fa: '',
					cash_en: '',
					cash_fa: '',
					vip_en: '',
					vip_fa: '',
					standard_en: '',
					standard_fa: '',
					nano_en: '',
					nano_fa: ''
				}, ...data]
			})
		} else if (this.state.typeCompare === 2) {
			this.setState({
				dataNot: [
					{
						text_en: '',
						text_fa: ''
					}, ...data
				]
			})
		} else if (this.state.typeCompare === 3) {
			this.setState({
				dataNot1: [
					{
						text_en: '',
						text_fa: ''
					}, ...data
				]
			})
		} else if (this.state.typeCompare === 4) {
			this.setState({
				dataNot2: [
					{
						text_en: '',
						text_fa: ''
					}, ...data
				]
			})
		}
	}
	featureChange = (e, index, inputType, typeCompare) => {
		if (typeCompare > 1) {
			let newData = (typeCompare === 2) ? [...this.state.dataNot] : (typeCompare === 3) ? [...this.state.dataNot1] : [...this.state.dataNot2];
			if (inputType === 0) {
				newData[index].text_en = e.target.value;
			} else if (inputType === 1) {
				newData[index].text_fa = e.target.value;
			}
			return this.setState((typeCompare === 2) ? {dataNot: newData} : (typeCompare === 3) ? {dataNot1: newData} : {dataNot2: newData});
		} else {
			let newData = (typeCompare === 0) ? [...this.state.dataCom] : [...this.state.dataFeat];
			if (inputType === 0) {
				newData[index].type_en = e.target.value;
			} else if (inputType === 1) {
				newData[index].type_fa = e.target.value;
			} else if (inputType === 2) {
				newData[index].nano_en = e.target.value;
			} else if (inputType === 3) {
				newData[index].nano_fa = e.target.value;
			} else if (inputType === 4) {
				newData[index].standard_en = e.target.value;
			} else if (inputType === 5) {
				newData[index].standard_fa = e.target.value;
			} else if (inputType === 6) {
				newData[index].cash_en = e.target.value;
			} else if (inputType === 7) {
				newData[index].cash_fa = e.target.value;
			} else if (inputType === 8) {
				newData[index].vip_en = e.target.value;
			} else if (inputType === 9) {
				newData[index].vip_fa = e.target.value;
			}
			if (typeCompare === 0) {
				return this.setState({dataCom: newData});
			} else {
				return this.setState({dataFeat: newData});
			}
		}
	}
	removeFeature = (index) => {
		if (this.state.typeCompare === 0) {
			let newData = [...this.state.dataCom];
			this.setState({dataCom: newData.filter((item, idx) => idx !== index)});
		} else if (this.state.typeCompare === 1) {
			let newData = [...this.state.dataFeat];
			this.setState({dataFeat: newData.filter((item, idx) => idx !== index)});
		} else {
			let newData = (this.state.typeCompare === 2) ? [...this.state.dataNot] : (this.state.typeCompare === 3) ? [...this.state.dataNot1] : [...this.state.dataNot2];
			this.setState((this.state.typeCompare === 2) ? {dataNot: newData.filter((item, idx) => idx !== index)} :
				(this.state.typeCompare === 3) ? {dataNot1: newData.filter((item, idx) => idx !== index)} :
					{dataNot2: newData.filter((item, idx) => idx !== index)}
			);
		}
	}
	modalData = () => {
		const {typeCompare, dataCom, dataFeat, dataNot, dataNot1, dataNot2} = this.state;
		let data = (typeCompare === 0) ? dataCom : (typeCompare === 1) ? dataFeat : (typeCompare === 2) ? dataNot : (typeCompare === 3) ? dataNot1 : dataNot2;
		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				<h2>جدول مقایسه حساب های معاملاتی</h2>
				<form id="create-account-com-form" onSubmit={(e) => this.formSubmit(e)}>
					<div className={styles.features}>
						<div className={styles.featuresHeader}>
							<a className={styles.btnAdd} onClick={() => this.addFeature()}>اضافه کردن</a>
						</div>
						<div className={styles.featuresWrapper}>
							{
								(typeCompare > 1) ? data.map((item, index) => {
									return <div className={styles.feature} key={index}>
										<div className={styles.inputGroup}>
											<div className={styles.inputFiled}>
												<input style={{width: '100%'}} value={item.text_en} onChange={(e) => this.featureChange(e, index, 0, typeCompare)} type="text" placeholder="متن (en)"/>
											</div>
											<div className={styles.inputFiled}>
												<input style={{width: '100%'}} value={item.text_fa} onChange={(e) => this.featureChange(e, index, 1, typeCompare)} type="text" placeholder="متن (en)"/>
											</div>
										</div>
										<div className={styles.close}>
											<span onClick={() => this.removeFeature(index)} className="material-icons">close</span>
										</div>
									</div>
								}) : data.map((item, index) => {
									return <div className={styles.feature} key={index}>
										<div className={styles.inputGroup}>
											<div className={styles.inputFiled}>
												<input value={item.type_en} onChange={(e) => this.featureChange(e, index, 0, typeCompare)} type="text" placeholder="عنوان (en)"/>
												<input value={item.type_fa} onChange={(e) => this.featureChange(e, index, 1, typeCompare)} type="text" placeholder="عنوان (fa)"/>
											</div>
											<div className={styles.inputFiled}>
												<input value={item.nano_en} onChange={(e) => this.featureChange(e, index, 2, typeCompare)} type="text" placeholder="نانو (en)"/>
												<input value={item.nano_fa} onChange={(e) => this.featureChange(e, index, 3, typeCompare)} type="text" placeholder="نانو (fa)"/>
											</div>
											<div className={styles.inputFiled}>
												<input value={item.standard_en} onChange={(e) => this.featureChange(e, index, 4, typeCompare)} type="text" placeholder="استاندارد (en)"/>
												<input value={item.standard_fa} onChange={(e) => this.featureChange(e, index, 5, typeCompare)} type="text" placeholder="استاندارد (fa)"/>
											</div>
											<div className={styles.inputFiled}>
												<input value={item.cash_en} onChange={(e) => this.featureChange(e, index, 6, typeCompare)} type="text" placeholder="نقدی (en)"/>
												<input value={item.cash_fa} onChange={(e) => this.featureChange(e, index, 7, typeCompare)} type="text" placeholder="نقدی (fa)"/>
											</div>
											<div className={styles.inputFiled}>
												<input value={item.vip_en} onChange={(e) => this.featureChange(e, index, 8, typeCompare)} type="text" placeholder="وی آی پی (en)"/>
												<input value={item.vip_fa} onChange={(e) => this.featureChange(e, index, 9, typeCompare)} type="text" placeholder="وی آی پی (fa)"/>
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
					<div className={styles.btnSubmit}>
						<button className={styles.btn} type="submit">ویرایش</button>
					</div>
				</form>
			</Container>
		</div>
	}

	render() {
		const {dataFeat, dataCom, modalSet, dataNot, dataNot1, dataNot2} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={modalSet} title="مقایسه حساب ها">
				{
					this.modalData()

				}
			</Modal>
			<Container className={styles.container}>
				<h2>مقایسه حساب های معاملاتی</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, typeCompare: 0})}>ویرایش جدول</a>
				</div>
				<div className={styles.tableMainAccount}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>عنوان</th>
							<th>نانو</th>
							<th>استاندارد</th>
							<th>نقدی</th>
							<th>وی آی پی</th>
						</tr>
						</thead>
						<tbody>
						{
							dataCom.map((item, index) => {
								return <tr key={index}>
									<td>{index + 1}</td>
									<td>{item.type_fa}</td>
									<td>{item.nano_fa}</td>
									<td>{item.standard_fa}</td>
									<td>{item.cash_fa}</td>
									<td>{item.vip_fa}</td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				<h2>جدول مشخصات حساب های معاملاتی</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, typeCompare: 1})}>ویرایش جدول</a>
				</div>
				<div className={styles.tableMainAccount}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>عنوان</th>
							<th>نانو</th>
							<th>استاندارد</th>
							<th>نقدی</th>
							<th>وی آی پی</th>
						</tr>
						</thead>
						<tbody>
						{
							dataFeat.map((item, index) => {
								return <tr key={index}>
									<td>{index + 1}</td>
									<td>{item.type_fa}</td>
									<td>{item.nano_fa}</td>
									<td>{item.standard_fa}</td>
									<td>{item.cash_fa}</td>
									<td>{item.vip_fa}</td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				{/*Top Notice Created!*/}
				<h2>نکات قابل توجه حساب های معاملاتی (بالا)</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, typeCompare: 2})}>ویرایش</a>
				</div>
				<div className={styles.tableMainAccount}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>متن</th>
						</tr>
						</thead>
						<tbody>
						{
							dataNot.map((item, index) => {
								return <tr key={index}>
									<td>{index + 1}</td>
									<td>{item.text_fa}</td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				{/*Middle Notice Created!*/}
				<h2>نکات قابل توجه حساب های معاملاتی (وسط)</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, typeCompare: 3})}>ویرایش</a>
				</div>
				<div className={styles.tableMainAccount}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>متن</th>
						</tr>
						</thead>
						<tbody>
						{
							dataNot1.map((item, index) => {
								return <tr key={index}>
									<td>{index + 1}</td>
									<td>{item.text_fa}</td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				{/*Bottom Notice Created!*/}
				<h2>نکات قابل توجه حساب های معاملاتی (پایین)</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, typeCompare: 4})}>ویرایش</a>
				</div>
				<div className={styles.tableMainAccount}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>متن</th>
						</tr>
						</thead>
						<tbody>
						{
							dataNot2.map((item, index) => {
								return <tr key={index}>
									<td>{index + 1}</td>
									<td>{item.text_fa}</td>
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