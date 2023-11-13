import React, {PureComponent} from "react";
import styles from './method.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {DepositWithdrawalService} from "services/deposit-withdrawal";

const media_server = 'https://media.arongroups.co';

@Observer([DepositWithdrawalService])
export class Method extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired depositWithdrawalService = pick(DepositWithdrawalService);
	state = {
		path: 0,
	}

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	setType = (path) => {
		this.setState({path});
	}

	render() {
		const {__, language} = this.i18;
		const headerTable = [
			[__('Service Provider'), __('Deposit Method'), __('Currency Unit'), __('Deposit Waiting Time'),
				__('Min and Max Amount'), __('Commission'), __('Deposit Funds')],
			[__('Service provider'), __('Withdrawal Method'), __('currency unit'), __('Minimum and maximum withdrawal amount'), __('Customer Waiting Time'),
				// __('Out of free time commission'),
				// __('Commission on Sundays and Mondays'),
				__('Commission'),
				__('Withdrawal Funds')]
		];
		const {data} = this.depositWithdrawalService;
		const {path} = this.state;
		return <div className={styles.method}>
			<Container className={styles.container}>
				<div className={styles.head}>
					<h2 data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Broker deposit & withdrawal')}</h2>
				</div>
				{/*<div className={styles.notice}>*/}
				{/*	<h3 className={styles.noticeTitle}>{__('Pay Attention')}</h3>*/}
				{/*	<p data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"><span className="material-icons">play_arrow</span>{__('Deposits above $ 20 Crypto and Tetra have 1.5 to 3% immediate cash withdrawals (except for the beginning and end of the month)')}</p>*/}
				{/*	<p data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"><span className="material-icons">play_arrow</span>{__('VIP customers who deposit more than $100k in one payment, will have a special withdrawal with higher amounts (Dear trader, contact costumer support for further information).')}</p>*/}
				{/*</div>*/}
				<div className={styles.tableContentWrapper}>
					<div className={styles.tableMenu}>
						<p className={{[styles.active]: (path === 0) ? 1 : 0}.toCss} onClick={() => this.setType(0)}>{__('Deposit')}</p>
						<p className={{[styles.active]: (path === 1) ? 1 : 0}.toCss} onClick={() => this.setType(1)}>{__('Withdrawal')}</p>
					</div>
					<div className={styles.tableDepositWithdrawal}>
						<table className={styles.tableContent}>
							<thead>
							<tr>
								{
									headerTable[path].map((item, index) => {
										return <th key={index}>{item}</th>
									})
								}
							</tr>
							</thead>
							<tbody>
							{
								data.filter(item => item.type === path && item.showStatus === 0).map((item, index) => {
									return <tr key={index} className={styles.tableItem}>
										<td><img src={`${media_server}/${item.logo.originalname}`} alt=""/></td>
										<td>{(language === 'fa') ? item.deposit_method_fa : item.deposit_method_en}</td>
										<td>{(language === 'fa') ? item.currency_unit_fa : item.currency_unit_en}</td>
										<td>{(language === 'fa') ? item.deposit_waiting_time_fa : item.deposit_waiting_time_en}</td>
										{
											(path === 1) ? <td>{(language === 'fa') ? item.withdrawal_waiting_time_fa : item.withdrawal_waiting_time_en}</td> : ''
										}
										{
											(path === 0) ? <td style={{direction: 'ltr'}}>{(language === 'fa') ? item.min_max_fa : item.min_max_en}</td> : ''
										}
										<td>{(language === 'fa') ? item.commission_fa : item.commission_en}</td>
										<td><a href={(language === 'fa') ? item.src_fa : item.src_en}>{language === 'fa' ? (path === 0 ? 'واریز' : 'برداشت') : (path === 0 ? 'deposit' : 'withdrawal')}</a></td>
									</tr>
								})
							}
							</tbody>
						</table>
					</div>
				</div>
				<div className={styles.financialRules} data-aos={"fade-left"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<h4>{__('Financial Rules')}</h4>
					<a href={(language === 'fa') ? 'https://dl.arongroups.co/privacy/Financial-rules(fa).pdf' : 'https://dl.arongroups.co/privacy/Financial-rules(en).pdf'} target="_blank" download>{__('Download File')}</a>
				</div>
			</Container>

		</div>;
	}
}