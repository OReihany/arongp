import React, {PureComponent} from "react";
import styles from './investment-package.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class InvestmentPackage extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18
		const investmentPackage = [
			{
				id: 0,
				title: __('Toman'),
				percentage: '40%',
				state: __('Annual daily profit rate'),
				limitation: __('More than 1 billion'),
				src: require('./t.png').default,
			}, {
				id: 1,
				title: __('Dollar'),
				percentage: '4%',
				state: __('Annual daily profit rate'),
				limitation: __('500 million to 1 billion'),
				src: require('./d.png').default,
			}
		]
		return <div className={styles.investmentPackage}>
			<Container className={styles.container}>
				<h2 data-aos="fade-up" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Bank interest rates')}</h2>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('Before you find out about Aron Bank interest rates, keep in mind that Aron Bank pays you interest on a step-by-step basis based on the amount of capital you have, and this is an annual daily interest, Also the deposit will be made through TopChange site. Deposits and withdrawals from the account will be made on a daily basis.')}
				</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('The interest rate that Aron Bank gives to investors is as follows:')}
				</p>
				<div className={styles.investmentPackageContent}>
					{investmentPackage.map((item, index) => {
						return <div key={index} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.image}>
								<img src={item.src} alt=""/>
							</div>
							<div className={styles.title}>
								<p>{item.title}</p>
							</div>
							<div className={styles.description}>
								<p>{item.percentage}</p>
								<p>{item.state}</p>
							</div>
						</div>
					})}
				</div>
				<div className={styles.notice}>
					<span>
					{__('Note: Interest is paid monthly to the depositors account on the last day of the month.')}
				</span>
					<span>
					{__('Note: Withdrawals from Aron Bank accounts will be possible for 48 hours from Sunday morning (00:01) to midnight Monday (23:59) Tehran time.')}
				</span>
					<span>
					{__('Note: Withdrawal from Aron Bank, after one month from the last deposit is free of charge, but includes 3% fee before that.')}
				</span>
					<span>
					{__('Note: The minimum deposit amount to open an Aron Bank account is 100 dollars or its equivalent in Tomans.')}
				</span>
				</div>
			</Container>
		</div>;
	}
}