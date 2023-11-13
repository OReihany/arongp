import React, {PureComponent} from "react";
import styles from './history.module.scss'
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([])
export class History extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.history}>
			<Container className={styles.container}>
				<div className={styles.historyContent}>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Numerous MetaTrader services have made its performance so extensive that it can be considered a platform with almost unlimited capabilities.Millions of people around the world have chosen it because of its unique benefits.With special features, MetaTrader enables users to operate in a flexible trading system.The capabilities of its powerful trading systems include showing the depth of the market, the possibility of ordering, trading with separate accounts, and trading simultaneously in two directions (having both buy and sell positions at the same time).With a variety of ordering types, traders can have any trading strategy for successful operation in the financial markets.')}
					</p>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('MetaTrader analytics tools allow trading charts to be displayed in 21 timeframes with all minor price movements.In addition, more than 80 technical indicators and analytical tools are available to users by default.')}
					</p>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Fundamental analysis is another tool that MetaTrader offers to predict the price movements of trading instruments.News reports from international news agencies are placed directly on this platform, which you can use to increase the level of your financial information.One of the fundamental tools is the economic calendar.')}
					</p>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('These are just some of the attractions of MetaTrader 5.If you want to use all the capabilities of this platform, join Aron Groups Broker to get the opportunity to trade in the financial markets with the most advanced trading platform.')}
					</p>
				</div>
			</Container>
		</div>;
	}
}