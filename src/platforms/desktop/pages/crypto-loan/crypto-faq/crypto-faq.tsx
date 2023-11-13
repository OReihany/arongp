import React, {PureComponent} from "react";
import styles from './crypto-faq.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class CryptoFaq extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		path: 0,
		faq: -1
	}
	componentDidMount() {
		AOS.init({
			duration:1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18;
		const {path, faq} = this.state;
		const faqData = [
			{
				id: 0,
				title: __('How should I borrow crypto loans from Aron Groups?'),
				description: [__('Register in Aron Groups and use services such as cash loan and secure wallet through your personal wallet. Pledge your encrypted assets and submit your request. Without any guarantor, authentication or promissory notes, your account will be funded with the cryptocurrency of your choice within 24 to 72 hours.')]
			},
			{
				id: 1,
				title: __('Is borrowing crypto loans from Aron Groups Broker safe?'),
				description: [__('When you request a crypto loan from Aron Groups Broker, a contract is set up in the Aron Groups system, which is in accordance with Binance smart contracts. This contract consists a code, which can easily be tracked in the BSC network, confirming the safety of your pledge. Clients have a personal safe wallet in Aron Groups Broker, which can be used any time to request a loan. Meanwhile the pledge is kept safe at their wallet by a smart contract in BSC network. Aron Groups Broker is never able to use the collateral for its own benefits.')]
			},
			{
				id: 2,
				title: __('What are the benefits of crypto loan in Aron Groups Broker?'),
				description: [__('Compared to conventional loans, crypto loans have several features, which may make them more appealing:'), __('No interest rate: crypto loans are a more suitable alternative to personal loans and credit cards. These loans have no interest rate.'), __('Loan amount is based on asset value:  You will be able to borrow up to 50% of your portfolio value.'), __('Choice of loan currency: Depending on the platform and what you need, you can generally get the loan funds in the form of I.R. Rial or Tether.'), __('No credit check: Crypto lending platforms and exchanges typically won’t run a credit check when you apply, making it an incredibly attractive financing option for people with poor credit or no credit history.'), __('Fast funding: Once you’re approved, you can get your loan funds within 24 hours.'), __('Ability to receive the loan in 15 different cryptocurrencies: in Aron Groups Broker you can choose any of the listed 15 cryptocurrencies to receive the loan.')]
			},
			{
				id: 3,
				title: __('Is it possible to reach the margin call level after borrowing the loan?'),
				description: [__('A margin call occurs when the value of your collateral drops below a certain threshold and the lender requires you to increase your holdings to maintain the loan. In some cases, the lender may even sell some of your assets to cut your loan-to-value ratio. Because cryptocurrencies are extremely volatile in the short term, the chances of this happening can be high.')]
			}
		]
		return <div className={styles.cryptoFaq}>
			<Container className={styles.container}>
				<div className={styles.title} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<p className={{[styles.active]: (path === 0) ? 1 : 0}.toCss} onClick={() => this.setState({path: 0})}>
						{__('FAQ')}
					</p>
					<p className={{[styles.active]: (path === 1) ? 1 : 0}.toCss} onClick={() => this.setState({path: 1})}>
						{__('Terms & Condition')}
					</p>
				</div>
				{
					(path === 0) ? <div className={styles.faqContent}>
						{
							faqData.map((item, index) => {
								return <div key={index} className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
									<p className={styles.faqTitle} onClick={() => this.setState({faq: item.id})}>
										<span className="material-icons-outlined">
											expand_more
										</span>
										{
											item.title
										}
									</p>
									<div key={index} className={{[styles.itemDes]: 1, [styles.active]: (faq === item.id) ? 1 : 0}.toCss}>
										{
											item.description.map((value, index) => {
												return <span>
															{value}
														</span>
											})
										}
									</div>
								</div>
							})
						}
					</div> : <div className={styles.termsAndCondition}>
						<p className={styles.des1} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('Clients are allowed to receive up to 50% loan (from 100 to 100,000 U.S Dollars) with 1% commission, by depositing their cryptocurrencies in Aron Groups Broker. This loan can be payed back within 1 week to 3 months.')}
						</p>
						<p className={styles.des1} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('The loan could be payed back before the due date, but the deposit will be blocked until the end of the contract, and the commission will not be returned.')}
						</p>
						<div className={styles.termsItems}>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('1-This loan doesn’t need a guarantor, and will be deposited within 24 to 72 hours.')}
							</p>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('2-Delay in daily paybacks will cause 1% penalty, and if it isn’t payed back within 7 days after the due date, the loan amount along with 7% penalty will be deducted from the client’s account.')}
							</p>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('3-Loans are issued to all cryptocurrencies in wallets.')}
							</p>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('4-Loans are deposited in I.R Rial or Tether, and could be payed back in the same currency.')}
							</p>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('5-If the loan applicant, hasn’t deposited through the desired platform, the loan withdrawal will include 5% fee. Tether withdrawal is free of charge.')}
							</p>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('6-Loan applicants don’t include “No-Trade”, and loan is considered a trade itself.')}
							</p>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('7-loan extension fee will be 2%, if the Broker approves.')}
							</p>
							<p className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								{__('8-Loan If the value of your collateral drops below 80% of your total loan due to market volatility, you will be able to increase it or settle your loan, otherwise the system will automatically sell your pledge to settle your debt.')}
							</p>
						</div>
						<p className={styles.des1} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('Example: You have pledged 1 Bitcoin valuing 40,000 U.S Dollars and received a 20,000 U.S Dollar loan. You have to increase your collateral or settle the loan before Bitcoin’s exchange rate reaches 24,000 U.S Dollars, otherwise the system will automatically sell your pledge to even out your debt. In this case you must contact support for final settlement.')}
						</p>
					</div>
				}
				<div className={styles.termsAndConditionDownload}>
					<p className={styles.titleDownload} data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Download the digital currency loan agreement: ')}
					</p>
					<a data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" href={(language === 'fa') ? 'https://dl.arongroups.co/privacy/CryptoLoanContract-FA.pdf' : 'https://dl.arongroups.co/privacy/CryptoLoanContract-EN.pdf'} target="_blank" download>{__('Download File')}</a>
				</div>
			</Container>
		</div>
	}
}