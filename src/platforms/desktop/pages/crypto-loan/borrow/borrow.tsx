import React, {PureComponent} from "react";
import styles from './borrow.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Borrow extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		const cardContent = [
			{
				src: require('./1.jpg').default,
				title: __('1.Wallet Deposit'),
				description: __('cryptocurrency (The qualified cryptocurrencies mentioned in terms and conditions) in your wallet And recharge your wallet.')
			},
			{
				src: require('./2.jpg').default,
				title: __('2.Send a Ticket'),
				description: __('Send a ticket or a Telegram message to support team, requesting a crypto loan. After the primary investigation towards the instant currency value and the amount of loan, a contract is set up and send to the applicant. After confirmation, the applicant is refered to the financial segment to acquire the loan.')
			},
			{
				src: require('./3.jpg').default,
				title: __('3.Loan Deposit'),
				description: __('The financial segment transfers the collateral from the applicant’s wallet to the broker’s wallet, and funds the applicant’s account with the loan amount in I.R. Rial or Tether after deducting the commission.\n')
			},
			{
				src: require('./4.jpg').default,
				title: __('4.Loan Settlement'),
				description: __('The client must pay the loan back at the end of the contract. After that the broker will transfer the collateral back to the client’s personal wallet.\n')
			}
		]
		return <div className={styles.borrow}>
			<Container className={styles.container}>
				<h3 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('How to Borrow Crypto Loans')}</h3>
				<div className={styles.cards}>
					{
						cardContent.map((item, index) => {
							return <div data-aos={(index < 2) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" key={index} className={styles.card}>
								<img src={item.src} alt=""/>
								<p>
									{item.title}
								</p>
								<span>
									{item.description}
								</span>
							</div>
						})
					}
				</div>
			</Container>
		</div>;
	}
}