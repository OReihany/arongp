import React, { PureComponent } from "react";
import styles from './incentive-plan.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';



@Observer([])
export class IncentivePlan extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		const levelData = [
			{
				description: __('After the activation of the introduced trader has been verified, 100% of the commission will be given to the head of the branch.'),
				src: require('./level1.png').default,
				medal: require('./medal1.png').default
			},
			{
				description: __('After the activation of the introduced trader has been verified, 30% of the commission will be given to the (level 1) introducer.'),
				src: require('./level2.png').default,
				medal: require('./medal2.png').default
			},
			{
				description: __('After the activation of the introduced trader has been verified, 10% of the commission will be given to the (Level 2) introducer.'),
				src: require('./level3.png').default,
				medal: require('./medal3.png').default
			}
		]
		return <div className={styles.incentivePlan} >
			<Container className={styles.container}>
				<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Introduction of IB incentive plan\n')}</h2>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Traders can invite their friends and benefit from incentive prizes through the referral link that is provided to them after registering and opening an account.')}</p>
				<div className={styles.incentivePlanWrapper}>
					<div className={styles.incentivePlanLeft}>
						<h3 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Why join Aron Group Broker IB?')}</h3>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('1. In Aron Group’s broker, you also receive transaction commissions in Zulu, Binance, sport cfd accounts')}</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('2. In Aron Groups broker, you will receive commission on commission-free symbols such as XAUUSD and EURUSD')}</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('3. With the increase of transactions and activities of your sub-sets, your payment will also increase')}</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('4. Participating in Aron Group’s IB project is very easy and fast and can be done in only two steps')}</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('5. 24-hour support and direct communication with the manager of the IB department')}</p>

						<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('IB registration process')}</h2>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('1. Registration and authentication.')}</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('2. Submitting a request regarding participation in IB plan and receiving invitation link through the user panel.')}</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('3. Introducing actively trading friends.')}</p>

					</div>
				</div>
				{/*<div className={styles.notice} data-aos="fade-up" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
				{/*	<p>*/}
				{/*		{__('Note: Social trading accounts (Zulutrade) are not rewarded ❌')}*/}
				{/*	</p>*/}

				{/*</div>*/}
				<div className={styles.notice} data-aos="fade-up" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<p>
						{__('Note: For further information about IB plan, contact Aron Groups support team through the Telegram ID ')}
						<a href="https://t.me/Arongroupsbot">@arongroupsbot</a>
					</p>

				</div>
			</Container>
		</div>;
	}
}