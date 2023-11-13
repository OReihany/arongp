import React, {PureComponent} from "react";
import styles from './notice.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {TradingSymbolService} from "services/trading-symbol";


@Observer([TradingSymbolService])
export class Notice extends PureComponent {
	@wired tradingSymbolService = pick(TradingSymbolService);
	state = {
		modalSet: 0,
		data: [{
			text_en: '',
			text_fa: ''
		}]
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.tradingSymbolService.tradingSymbols().then((data) => {
					this.setState({data: data['data'] || [{
							text_en: '',
							text_fa: ''
						}]});
			})
			mont = false;
		}
	}

	resetModal = (e) => {
		this.setState({modalSet: 0});
	}
	formSubmit = async (e) => {
		e.preventDefault();
		const {data} = this.state
		try {
			let res = await this.tradingSymbolService.editSymbols({data: data});
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
		const {data} = this.state;
		this.setState({
			data : [
				{
					text_en: '',
					text_fa: ''
				}, ...data
			]
		})
	}
	featureChange = (e, index, inputType) => {
		let newData = [...this.state.data];
		if (inputType === 0) {
			newData[index].text_en = e.target.value;
		} else if (inputType === 1) {
			newData[index].text_fa = e.target.value;
		}
		return this.setState({data: newData});
	}
	removeFeature = (index) => {
		let newData = [...this.state.data];
		this.setState({data: newData.filter((item, idx) => idx !== index)});
	}
	modalData = () => {
		const {data} = this.state;
		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				<h2>نکات قابل توجه</h2>
				<form id="create-account-com-form" onSubmit={(e) => this.formSubmit(e)}>
					<div className={styles.features}>
						<div className={styles.featuresHeader}>
							<a className={styles.btnAdd} onClick={() => this.addFeature()}>اضافه کردن</a>
						</div>
						<div className={styles.featuresWrapper}>
							{
								data.map((item, index) => {
									return <div className={styles.feature} key={index}>
										<div className={styles.inputGroup}>
											<div className={styles.inputFiled}>
												<input style={{width: '100%'}} value={item.text_en} onChange={(e) => this.featureChange(e, index, 0)} type="text" placeholder="متن (en)"/>
											</div>
											<div className={styles.inputFiled}>
												<input style={{width: '100%'}} value={item.text_fa} onChange={(e) => this.featureChange(e, index, 1)} type="text" placeholder="متن (en)"/>
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
		const {modalSet, data} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={modalSet} title="نکات قابل توجه نمادهای معاملاتی">
				{
					this.modalData()

				}
			</Modal>
			<Container className={styles.container}>
				<h2>نکات قابل توجه نمادهای معاملاتی</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, typeCompare: 0})}>ویرایش جدول</a>
				</div>
				<div className={styles.tableMainAccount}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>عنوان</th>
						</tr>
						</thead>
						<tbody>
						{
							data.map((item, index) => {
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