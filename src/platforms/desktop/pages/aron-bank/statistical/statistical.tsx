import React, {PureComponent} from "react";
import styles from './statistical.module.scss';
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";
import {TopTrader} from "services/top-trader";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([TopTrader])
export class Statistical extends PureComponent{
	@wired i18 = pick(I18nService);
	@wired topTrader = pick(TopTrader);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {data} = this.topTrader ;
		console.log(data)
		const investor = !!data[3][3]['value'] ? data[3][3]['value'] : 0
		const total_investment = data[3][4]['value'] || 0
		const {__, commafy} = this.i18
		return <div className={styles.statistical}>
			<Container className={styles.container}>
				<div className={styles.topContent}>
					<div className={styles.content}>
						<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('A great offer for risk-free investing')}</h2>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('Offer of Aron Groups’ broker will surprise you. Leave your liquidity to Aron Bank with peace of mind to get more profit from inflation.Choosing Aron Bank is a good solution to prevent wasting your capital in different markets.')}
						</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="15" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('Aron Bank’s high bank interest rate makes those who are looking for low investment risks more likely to enter the market.')}
						</p>
					</div>
					<div className={styles.brand} data-aos="fade-right" data-aos-offset="100" data-aos-delay="30" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<img src={require('../../about-us/history/brand.png').default} alt=""/>
					</div>
				</div>
				<div className={styles.centerContent}>
					<div className={styles.investor} data-aos="fade-left" data-aos-offset="100" data-aos-delay="20" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<p>{__('more than')}</p>
						<span>{investor}</span>
						<p>{__('investors')}</p>
					</div>
					<div className={styles.moneyInvested} data-aos="fade-right" data-aos-offset="100" data-aos-delay="20" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<p>{__('more than')}</p>
						<span>{commafy(parseInt(total_investment))}</span>
						<p>{__('Tomans Investments')}</p>
					</div>
				</div>
				<div className={styles.topContent}>
					<div className={styles.brand} data-aos="fade-left" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<img src={require('../../about-us/history/brand.png').default} alt=""/>
					</div>
					<div className={styles.content} data-aos="fade-right" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<h2>{__('The purpose of establishing Aron Bank')}</h2>
						<p>
							{__('You may think that few people are thinking about depositing in banks these days.Bank interest rates are also lower than nominal inflation. This has made domestic banks less attractive for investment, and on the other hand, low bank interest rates have reduced the incentive for people to invest in banks.')}
						</p>
						<p>
							{__('We offer to all those who are looking for safe investment with peace of mind to join Aron Bank.Due to respect and appreciation for this trust, Aron Groups has established Aron Bank to provide them with an easy and safe way to invest.')}
						</p>
					</div>
				</div>
			</Container>
		</div>;
	}
}