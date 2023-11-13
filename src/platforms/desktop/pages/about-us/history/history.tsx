import React, {PureComponent} from "react";
import styles from './history.module.scss';
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
			duration: 1000,
			once: true
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.history}>
			<div className={styles.onlineDeal}>
				<Container className={styles.container}>
					<div className={styles.content}>
						<h5 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('About Us')}</h5>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out"
						   data-aos-mirror="true">{__('At Aron Groups Broker, we strive on transforming the conventional forex industry to allow everyone to trade and invest.')}</p>
					</div>
					<div className={styles.brand} data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<img src={require('./brand.png').default} alt=""/>
					</div>
				</Container>
			</div>
			<div className={styles.activityHistory}>
				<Container className={styles.container}>
					<h5 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Our Story & Vision')}</h5>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out"
					   data-aos-mirror="true">{__('After several successful years in financial market and gold bullion market with thousands of satisfied clients in Middle East, Aron Groups expanded globally to provide a client-centric trading and investment opportunity for everyone. ')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('The opportunities in the global capital markets are open to everyone. And we believe that everyone has the ability to turn their dreams into reality. That’s why we’re focused on helping you to become a successful investor and trader.')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('We believe in simplicity, from transparent pricing to insightful analysis and commentary on financial markets. Our trading tools, trading platforms, educational services are intuitive and innovative.  You need the right information to make the right decisions. Hence, everything you need to navigate the global markets is at your fingertips. ')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Our business strategy is focused on customers, that`s why we offer lowest fees and competitive spread in the market.')}</p>
				</Container>
			</div>
		</div>;
	}
}