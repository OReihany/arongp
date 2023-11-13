import React, {PureComponent} from "react";
import styles from './expo.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {requirePropFactory} from "@mui/material";


@Observer([])
export class Expo extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18
		return <div className={styles.expo}>
			<Container className={styles.container}>
				<div className={styles.expoFeature}>
					<div className={styles.left}>
						<h2>{__("Aron Group and Dubai Expo Award")}</h2>
						<p>{__("Aron Group Broker won a valuable award at the Dubai Forex Expo held on October 19 and 20, 2022. The exhibition awarded the Fast Growth of Trader Attraction award to Broker Aron Groups. Brands active in the financial markets and traders gathered in this exhibition to review the developments and taste of this market.")}</p>
						<p>{__("Investment companies in forex and digital currency market at Expo Dubai 2022 displayed their performance of the past months and dedicated their time to transfer experiences among other traders and brokers. Broker Aron Group also received the international award of this expo due to its performance and valuable achievements after sharing its experience at the closing ceremony.")}</p>
					</div>
					<div className={styles.right}>
						<img src={(language === 'en') ? require('./expo-en-2.jpg').default : require('./expo-fa-2.jpg').default} alt=""/>
					</div>
				</div>
				<div className={styles.expoComp}>
					<h2>{__("A Host of Global Companies")}</h2>
					<p> {__("Dubai International Exhibition, known as Expo Dubai (IFX EXPO), hosted the most prestigious forex companies from all over the world, with the presence of Aron Group Broker. This expo has many audiences that include liquidity providers, traders, investors, forex market enthusiasts, all of whom formed a large community at the forex expo Dubai event.")} </p>
					<p> {__("The organizer of this exhibition had invited the experts of this field individually to get to know the members of this broker closely by attending different booths, including the booth of Aron Group Broker. This meeting caused the experts to exchange opinions after hearing the opinions of this broker and traders to improve this market. Also, it is necessary to explain that the proposals presented by the broker Aron Groups were reviewed by experts.")} </p>
					<div className={styles.expoImage}>
						<img src={(language === 'en') ? require('./expo-en-3.jpg').default : require('./expo-fa-3.jpg').default} alt=""/>
					</div>
				</div>
				<div className={styles.expoFeature}>
					<div className={styles.right}>
						<img src={(language === 'en') ? require('./expo-en-1.jpg').default : require('./expo-fa-1.jpg').default} alt=""/>
					</div>
					<div className={styles.left}>
						<h2>{__("Conditions of types of capital in Aron Group")}</h2>
						<p>{__("Broker Aron Group has considered non-discrimination among traders as one of the policies implemented in its collection; Traders in this broker are accepted and traded based on customer-oriented rules and principles. The amount of capital of clients and traders does not differ for Aron Groups broker; This means that traders with any amount of capital from 10 dollars or 10 billion dollars will use the same tools and the conditions will be the same and equal for each type of investment.")}</p>
						<p>{__("Various brokers operate in the field of forex, and one of these brokers is Aron Groups. Aron Group broker has been able to have a wide reflection for its customers by providing leading services. Investors and traders in this area have been able to increase their capital by working in Aron Group Broker.")}</p>
					</div>
				</div>
				<div className={styles.expoComp}>
					<h2>{__("Valid symbols of the forex market")}</h2>
					<p> {__("Expo Dubai was formed in 2022 with the aim of offering and providing investment opportunities in this market. Aron Group's broker displayed its capabilities to visitors and forex enthusiasts in its exclusive booth at this exhibition. Authentic symbols in this market were introduced by the broker Aron Groups, such as all kinds of cryptos, shares of super companies, technology tools, all kinds of trading accounts, etc. Exclusive Forex event 2022 was held in October at the end of the second decade of the month.")} </p>
				</div>
			</Container>
		</div>;
	}
}