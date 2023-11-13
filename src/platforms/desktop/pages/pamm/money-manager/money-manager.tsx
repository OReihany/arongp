import React, {PureComponent} from "react";
import styles from './money-manager.module.scss';
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";


@Observer([])
export class MoneyManager extends PureComponent {
	@wired i18 = pick(I18nService);
	render() {
		const {__, language} = this.i18;
		return <div className={styles.moneyManager}>
			<div className={styles.moneyManagerTop}>
				<div className={styles.title}>
					<Container className={styles.container}>
						<h1>
							{__('Benefits of Aron PAMM')}
						</h1>
					</Container>
				</div>
				<Container className={styles.container}>
					<div className={styles.left}>
						<div className={styles.title}>
							<h2>
								<b className={styles.bold}>
									{__('For Investors')}
								</b>
							</h2>
						</div>
						<div className={styles.content}>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('High yield returns')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Control your fund and withdraw at anytime')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Traders performance is monitored by us to minimise the risks for investors')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Strict evaluation for fund managers to protect investors')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Transparent and fair fees calculation')}</p>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.title}>
							<h2>
								<b className={styles.bold}>
									{__('For Trader')}
								</b>
							</h2>
						</div>
						<div className={styles.content}>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Opportunity to utilise trading skills to generate higher income')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Company fund to boost manager capital available upon proven successful money management')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Customisable trading account base on manager trading preference')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('In-house technical team to support trading plan')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Diverse range of instruments to increase success chances')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Access to over 250,000 investors')}</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
			{/*<div className={styles.moneyManagerMiddle}>*/}
			{/*	<Container className={styles.container}>*/}
			{/*		<h2>*/}
			{/*			<b className={styles.bold}>*/}
			{/*				How it works*/}
			{/*			</b>*/}
			{/*		</h2>*/}
			{/*	</Container>*/}
			{/*</div>*/}
			<div className={styles.moneyManagerBottom}>
				<Container className={styles.container}>
					<div className={styles.left}>
						<img src={require('./iphonex-mockup.png').default} alt=""/>
					</div>
					<div className={styles.right}>
						<div className={styles.title}>
							<h2>
								<b className={styles.bold}>
									{__('How it works')}
								</b>
							</h2>
						</div>
						<div className={styles.content}>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Sign up and verify your account')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('For traders, contact customer support via ticket and submit your request')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('For investors, deposit your wallet and open an Aron Fund Investment trading account')}</p>
							</div>
							<div className={{[styles.item]: 1, [styles.rtl]: language === 'fa' ? 1 : 0}.toCss}>
								<span className="material-icons">checkbox</span>
								<p>{__('Choose the manager and start investing')}</p>
							</div>
						</div>
					</div>
				</Container>
				<div className={styles.btn}>
					<Container className={styles.container}>
						<a href="https://client.arongroups.co/register/">{__('open an account')}</a>
					</Container>
				</div>
			</div>
			{/*<div className={styles.moneyManagerLatest}>*/}
			{/*	<Container className={styles.container}>*/}
			{/*		<div className={styles.left}>*/}
			{/*			<div className={styles.title}>*/}
			{/*				<h1>*/}
			{/*					<b className={styles.bold}>*/}
			{/*						Quick Deposit and Withdrawal*/}
			{/*					</b>*/}
			{/*					<br/>*/}
			{/*					for Uninterrupted <b className={styles.bold}> Trading</b>*/}
			{/*					<br/>*/}
			{/*					<b className={styles.bold}>*/}
			{/*						Activities*/}
			{/*					</b>*/}
			{/*				</h1>*/}
			{/*			</div>*/}
			{/*			<div className={styles.content}>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Aron Groups Markets helps money managers plan profit and loss goals on a per-account basis, based on open trade conditions</p>*/}
			{/*				</div>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Easily withdraw or deposit funds in and out of MAM/PAMM accounts without disrupting trading activity</p>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className={styles.right}>*/}
			{/*			<img src={require('./quick-deposit.png').default} alt=""/>*/}
			{/*		</div>*/}
			{/*	</Container>*/}
			{/*</div>*/}
			{/*<div className={styles.transparentCalculation}>*/}
			{/*	<Container className={styles.container}>*/}
			{/*		<div className={styles.left}>*/}
			{/*			<img src={require('./transparent-calculation.png').default} alt=""/>*/}
			{/*		</div>*/}
			{/*		<div className={styles.right}>*/}
			{/*			<div className={styles.title}>*/}
			{/*				<h1>*/}
			{/*					<b className={styles.bold}>*/}
			{/*						Quick Deposit and Withdrawal*/}
			{/*					</b>*/}
			{/*					<br/>*/}
			{/*					for Uninterrupted <b className={styles.bold}> Trading</b>*/}
			{/*					<br/>*/}
			{/*					<b className={styles.bold}>*/}
			{/*						Activities*/}
			{/*					</b>*/}
			{/*				</h1>*/}
			{/*			</div>*/}
			{/*			<div className={styles.content}>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>We track the forex markets in real-time so that you get fast accreditation of commissions in your live trading account</p>*/}
			{/*				</div>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Withdraw your funds at any time</p>*/}
			{/*				</div>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>All Aron Groups Markets MAM managers can quickly calculate performance fees for all their clients, as needed</p>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</Container>*/}
			{/*</div>*/}
			{/*<div className={styles.bePart}>*/}
			{/*	<Container className={styles.container}>*/}
			{/*		<div className={styles.left}>*/}
			{/*			<div className={styles.title}>*/}
			{/*				<h1>*/}
			{/*					Be a Part of the*/}
			{/*					<b className={styles.bold}>*/}
			{/*						Aron Groups Markets*/}
			{/*					</b>*/}
			{/*					<br/>*/}
			{/*					<b className={styles.bold}> Money Manager Program</b>*/}
			{/*				</h1>*/}
			{/*			</div>*/}
			{/*			<div className={styles.content}>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<p>With a host of solutions, right from a vast product range to automatic calculations and customisable trading conditions, The FP Markets Money Manager Program is a preferred choice for thousands of professional fund managers.</p>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className={styles.right}>*/}

			{/*		</div>*/}
			{/*	</Container>*/}
			{/*</div>*/}
			{/*<div className={styles.fullyCustomisable}>*/}
			{/*	<Container className={styles.container}>*/}
			{/*		<div className={styles.left}>*/}
			{/*			<img src={require('./fpm-forex-broker.png').default} alt=""/>*/}
			{/*		</div>*/}
			{/*		<div className={styles.right}>*/}
			{/*			<div className={styles.title}>*/}
			{/*				<h1>*/}
			{/*					<b className={styles.bold}>Partner with a MAM/PAMM*/}
			{/*						Forex Broker and Trusted*/}
			{/*						Market Leader</b>*/}
			{/*				</h1>*/}
			{/*			</div>*/}
			{/*			<div className={styles.content}>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Unlimited trading accounts and deposit levels</p>*/}
			{/*				</div>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Ability to be used across all account types</p>*/}
			{/*				</div>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Live order management within MAM/PAMM</p>*/}
			{/*				</div>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Real-time performance and commissions reports</p>*/}
			{/*				</div>*/}
			{/*				<div className={styles.item}>*/}
			{/*					<span className="material-icons">checkbox</span>*/}
			{/*					<p>Expert Advisors (EAs) for all your clients</p>*/}
			{/*				</div>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</Container>*/}
			{/*</div>*/}
		</div>;
	}
}