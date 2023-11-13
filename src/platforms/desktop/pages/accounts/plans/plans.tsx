import React, {PureComponent} from "react";
import styles from './plans.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import "aos/dist/aos.css";
import {AccountService} from "services/account";
import {Modal} from '../../common/modal/modal';


export interface PlansProp {
	subPage: number
}

@Observer([AccountService])
export class Plans extends PureComponent <PlansProp> {
	@wired i18 = pick(I18nService);
	@wired accountService = pick(AccountService);

	state = {
		currency: 0,
		modal: -1,
		accountData: [],
		compareData: [],
		compareFeature: [],
		noticeData: [],
		noticeData1: [],
		noticeData2: [],
		modalSet: 0,
		modalSetAccount: 0

	}

	componentDidMount() {
		let mount = true;
		AOS.init({
			duration: 1000
		});
		AOS.refresh();
		if (mount) {
			let compareData, compareFeature, noticeData, noticeData1, noticeData2 = []
			const resp = this.accountService.compare || [];
			for (let i = 0; i < resp.length; i++) {
				if (resp[i].type === 0) {
					compareData = resp[i].data;
				} else if (resp[i].type === 1) {
					compareFeature = resp[i].data;
				} else if (resp[i].type === 2) {
					noticeData = resp[i].data;
				} else if (resp[i].type === 3) {
					noticeData1 = resp[i].data;
				} else if (resp[i].type === 4) {
					noticeData2 = resp[i].data;
				}
			}
			this.setState({accountData: this.accountService.data || [], compareData: compareData || [], compareFeature: compareFeature || [], noticeData: noticeData || [], noticeData1: noticeData1 || [], noticeData2: noticeData2 || []})
			mount = false;
		}
	}

	setCurrency = () => {
		return this.state.currency === 0 ? this.setState({currency: 1}) : this.setState({currency: 0})
	}

	resetModal = () => this.setState({modalSet: 0});
	resetModalAccount = (e) => {
		this.setState({modalSetAccount: 0});
	}
	modalData = (lang, title, dataCurrency, dataModal, modalSet) => {
		return <div className={{[styles.modal]: 1, [styles.active]: (modalSet) ? 1 : 0}.toCss}>
			<Container className={styles.container}>
				<div className={styles.modalContent}>
					<h4 className={styles.title}>{title}</h4>
					<div className={styles.modalContentWrapper}>
						{

							dataModal.modal.map((item, index) => {
								return <div key={index} className={styles.content}>
									{(item[`title_${lang}`].trim() !== '') ? <h5>{item[`title_${lang}`]}</h5> : ''}
									<p>{item[`description_${lang}`]}</p>
								</div>
							})
						}
					</div>
				</div>
				<div className={styles.modalFooter}>
					<a onClick={() => this.setState({modalSet: 0})} className={styles.closeModal}>{lang === 'fa' ? 'بستن' : 'Close'}</a>
				</div>
			</Container>
		</div>
	}

	render() {
		const {currency, accountData, compareData, compareFeature, noticeData, noticeData1, noticeData2, modalSet} = this.state;
		const {__, language} = this.i18;
		let title = '';
		let dataCurrency = accountData.filter(item => item.currency === this.state.currency) || [];
		let dataModal = dataCurrency.filter((item, index) => index === this.state.modal)[0] || {};
		title = (Object.keys(dataModal).length > 0) ? dataModal[`title_${language}`] : '';
		const accountsCommission = [
			{row: 'Iranian Market', commission: {nano: '0.03%', standard: '0.01%', vip: '0.009%', swap: '0', zulu: '0.01%', binance: '0'}},
			{row: 'FOREX, Spot Metals, Indices, Spot Energies', commission: {nano: '0.006%', standard: '0.002%', vip: '0.001%', swap: '0', zulu: '0.004%', binance: '0'}},
			{row: 'Crypto Currency', commission: {nano: '0.2%', standard: '0.09%', vip: '0.08%', swap: '0.022%', zulu: '0.18%', binance: '0.044%'}},
			{row: 'Shares', commission: {nano: '0', standard: '0.06%', vip: '0.04%', swap: '0', zulu: '0.4%', binance: '0'}}
		]
		return <div className={{[styles.plans]: 1, [styles.active] : this.props.subPage === 0}.toCss}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title="">
				{
					!!modalSet ? this.modalData(language, title, dataCurrency, dataModal, modalSet) : ''
				}
			</Modal>
			<div className={styles.content}>
				<Modal title="" modal_reset={this.resetModalAccount} active={this.state.modalSetAccount === 1 ? 1 : 0}>
					<div className={styles.contentModal}>
						<table>
							<thead>
							<tr>
								<th>{__('Category / Symbols')}</th>
								<th>{__('Nano ($ per Lot)')}</th>
								<th>{__('Standard ($ per Lot)')}</th>
								<th>{__('VIP ($ per Lot)')}</th>
							</tr>
							</thead>
							<tbody>
							{
								[
									{name: 'Forex', nano: '2 $', standard: 'EURUSD 30 $', vip: 'EURUSD 20 $'},
									{name: 'Metals', nano: '2 $', standard: 'XAUUSD 50 $', vip: 'All 70$ / XAUUSD 30$'},
									{name: 'Energy', nano: '2 $', standard: '-', vip: '-'},
									{name: 'Indices', nano: '2 $', standard: '-', vip: '-'},
									{name: 'Iranian Market', nano: '6 $', standard: '-', vip: '-'},
									{name: 'Bitcoin', nano: '2 $', standard: '-', vip: '-'},
									{name: 'Ethereum', nano: '0.2 $', standard: '-', vip: '-'},
									{name: 'Litecoin', nano: '0.2 $', standard: '-', vip: '-'},
									{name: 'Binance Coin', nano: '0.2 $', standard: '-', vip: '-'},
								].map((item, index) => {
									return <tr key={index}>
										<td>{item.name}</td>
										<td>{item.nano} </td>
										<td>{item.standard} </td>
										<td>{item.vip} </td>
									</tr>
								})
							}
							</tbody>
						</table>
						<div className={styles.subtitle}>
							<h1>{__('The swap amount will be deducted every day at 02:00 server time.')}</h1>
							<h3>{__('The numbers entered in the table above are the same for both buy and sell positions.')}</h3>
							<p>{__('The amounts listed in the above table are for each night of holding excess transactions for more than 90 days and will be calculated and deducted based on the lot.')}</p>
						</div>
					</div>
				</Modal>
				<Modal title="" modal_reset={this.resetModalAccount} active={this.state.modalSetAccount === 2 ? 1 : 0 }>
					<div className={styles.contentModal}>
						<div className={styles.subtitle}>
							<p>{__('Fee deduction is initially after the completion of 90 days and after that, it changes to 30 days.')}</p>
							<p>{__('The fee is $2 or it’s equivalent and this fee is deducted as long as the balance of the user’s account can be charged in the mentioned time periods and will continue until the account is automatically archived.')}</p>
							<p>{__('If the account balance is less than $2, the entire balance will be deducted and the account will be archived.')}</p>
							<p>{__('In case the balance of the account is zero, the account will be archived automatically.')}</p>
							<p>{__('Traders that do not have any intention of trading via their trading accounts are advised that transfer the balance to one of the wallets and archive the account so that they will not be charged any fee.')}</p>
						</div>
					</div>
				</Modal>
			</div>
			<Container className={styles.container}>
				<h2>{__('Trading Accounts')}</h2>
				<div className={{[styles.currencyStatus]: 1, [styles.active]: (currency === 1) ? 1 : 0}.toCss}>
					<span>{__('Dollar')}</span>
					<label className={styles.switch}>
						<input type={styles.checkbox}/>
						<span className={{[styles.slider]: 1, [styles.round]: 1, [styles.active]: (currency === 1) ? 1 : 0}.toCss} onClick={() => {
							this.setCurrency()
						}}>
						</span>
					</label>
					<span>{__('Tomans')}</span>
				</div>
				<div className={styles.accountCardWrapper}>
					{accountData.filter((item) => currency === item.currency).map((value, index) => {
						return <div key={index} className={styles.accountCard} data-aos={(index < 2) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.title}>
								<h4>{value[`title_${language}`]}</h4>
								<p>{value[`description_${language}`]}</p>
							</div>
							<div className={styles.features}>
								{value.feature.map((item, i) => {
									return <div key={i} className={styles.feature}>
										<i className="material-icons-outlined" style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}}>
											task_alt
										</i>
										<span className={{[styles.featureName]: 1, [styles.active]: (!item.value) ? 1 : 0}.toCss}>
											{item[`name_${language}`]} <b className={styles.featureValue}>{item[`value_${language}`]}</b>
										</span>
									</div>
								})}
							</div>
							<div className={styles.seePlan}>
								<a onClick={() => this.setState({modal: index, modalSet: 1})} key={index}>{__('Account Details')}</a>
							</div>
							<div className={styles.getStart}>
								<a href={(language === 'fa') ? value.href_fa : value.href_en}>{__('Get Started')}</a>
							</div>
						</div>
					})}
				</div>
				<div className={styles.accountCommission}>
					{/*<div className={styles.title}>*/}
					{/*	<h2>{__('Aron Groups Accounts Commission')}</h2>*/}
					{/*</div>*/}
					{/*<div className={styles.description}>*/}
					{/*	<div className={styles.content}>*/}
					{/*		<table>*/}
					{/*			<thead>*/}
					{/*			<tr>*/}
					{/*				<th>#</th>*/}
					{/*				<th>{__('Accounts')}</th>*/}
					{/*				<th>{__('Nano')}</th>*/}
					{/*				<th>{__('Standard')}</th>*/}
					{/*				<th>{__('VIP')}</th>*/}
					{/*				<th>{__('Swap Free')}</th>*/}
					{/*				<th>{__('Zulu')}</th>*/}
					{/*				<th>{__('Binance')}</th>*/}
					{/*			</tr>*/}
					{/*			</thead>*/}
					{/*			<tbody>*/}
					{/*			{*/}
					{/*				accountsCommission.map((item, index) => {*/}
					{/*					return <tr key={index}>*/}
					{/*						<td>{index + 1}</td>*/}
					{/*						<td>{item.row}</td>*/}
					{/*						<td> {(item.commission.nano.trim() !== '0') ? item.commission.nano + __(' of the trading value') : __('-')}</td>*/}
					{/*						<td> {(item.commission.standard.trim() !== '0') ? item.commission.standard + __(' of the trading value') : __('-')}</td>*/}
					{/*						<td> {(item.commission.vip.trim() !== '0') ? item.commission.vip + __(' of the trading value') : __('-')}</td>*/}
					{/*						<td> {(item.commission.swap.trim() !== '0') ? item.commission.swap + __(' of the trading value') : __('-')}</td>*/}
					{/*						<td> {(item.commission.zulu.trim() !== '0') ? item.commission.zulu + __(' of the trading value') : __('-')}</td>*/}
					{/*						<td> {(item.commission.binance.trim() !== '0') ? item.commission.binance +  __('-') + __(' of the trading value'): __('-')}</td>*/}
					{/*					</tr>*/}
					{/*				})*/}
					{/*			}*/}
					{/*			</tbody>*/}
					{/*		</table>*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
				<div className={styles.lastAttention} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<h4>{__('Attention Please:')}</h4>
					{
						noticeData.map((item, index) => {
							return <p key={index}>{(language === 'fa') ? item.text_fa : item.text_en}</p>
						})
					}
					{/*<p onClick={() => this.setState({modalSetAccount: 1})}>*/}
					{/*	{__('All Swap Free symbols in nano, standard and VIP accounts will be without swap for only 90 days, after which they will be calculated and deducted according to the relevant table.')} <b style={{color: '#967E07FF', textDecoration: 'underline', cursor: 'pointer'}}>{__('Click for more information.')}</b>*/}
					{/*</p>*/}
					{/*<h4>{__('Inactivity fee')}</h4>*/}

					{/*<p onClick={e => this.setState({modalSetAccount: 2})}>*/}
					{/*	{__('If any of the trading accounts of the trader is inactive for 90 days streak due to this inactivity, $2 per month will be charged from the balance of accounts.')} <b style={{color: '#967E07FF', textDecoration: 'underline', cursor: 'pointer'}}>{__('Click for more information.')}</b>*/}
					{/*</p>*/}
				</div>
				<div className={styles.tableWrapper} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<h2>{__('Compare Accounts')}</h2>
					<table>
						<thead>
						<tr>
							<th>#</th>
							<th>{__('Swap Free')}</th>
							<th>{__('VIP')}</th>
							<th>{__('Standard')}</th>
							<th>{__('Nano')}</th>
						</tr>
						</thead>
						<tbody>
						{
							compareData.map((item, index) => {
								return <tr key={index}>
									<td>{(language === 'fa') ? item.type_fa : item.type_en}</td>
									<td>{(language === 'fa') ? item.cash_fa : item.cash_en}</td>
									<td>{(language === 'fa') ? item.vip_fa : item.vip_en}</td>
									<td>{(language === 'fa') ? item.standard_fa : item.standard_en}</td>
									<td>{(language === 'fa') ? item.nano_fa : item.nano_en}</td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				<div className={styles.lastAttention} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<h4>{__('Pay Attention')}</h4>
					{
						noticeData1.map((item, index) => {
							return <p key={index}>{(language === 'fa') ? item.text_fa : item.text_en}</p>
						})
					}
				</div>
				{/*<div className={styles.tableWrapper} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
				{/*	<h2>{__('Specification of Trading Accounts')}</h2>*/}
				{/*	<table>*/}
				{/*		<thead>*/}
				{/*		<tr>*/}
				{/*			<th>#</th>*/}
				{/*			<th>{__('Nano')}</th>*/}
				{/*			<th>{__('Standard')}</th>*/}
				{/*			<th>{__('Swap Free')}</th>*/}
				{/*			<th>{__('VIP')}</th>*/}
				{/*		</tr>*/}
				{/*		</thead>*/}
				{/*		<tbody>*/}
				{/*		{*/}
				{/*			compareFeature.map((item, index) => {*/}
				{/*				return <tr key={index}>*/}
				{/*					<td>{(language === 'fa') ? item.type_fa : item.type_en}</td>*/}
				{/*					<td>{(language === 'fa') ? item.nano_fa : item.nano_en}</td>*/}
				{/*					<td>{(language === 'fa') ? item.standard_fa : item.standard_en}</td>*/}
				{/*					<td>{(language === 'fa') ? item.cash_fa : item.cash_en}</td>*/}
				{/*					<td>{(language === 'fa') ? item.vip_fa : item.vip_en}</td>*/}
				{/*				</tr>*/}
				{/*			})*/}
				{/*		}*/}
				{/*		</tbody>*/}
				{/*	</table>*/}
				{/*</div>*/}
				{/*<div className={styles.lastAttention} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
				{/*	<h4>{__('Pay Attention')}</h4>*/}
				{/*	{*/}
				{/*		noticeData2.map((item, index) => {*/}
				{/*			return <p key={index}>{(language === 'fa') ? item.text_fa : item.text_en}</p>*/}
				{/*		})*/}
				{/*	}*/}
				{/*</div>*/}
			</Container>
		</div>
	}
}