import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Introduce extends PureComponent {
	@wired i18 = pick(I18nService)
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.introduce}>
			<SocialMedia/>
			<Container className={styles.container}>
				<h1 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Broker Bonus Plan Gifts and Rewards')}</h1>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"><b>{__('What is Bonus?')}</b></p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('One of the incentive programs of different brokers is bonus.')}</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Bonus literally means a reward or extra payment, which in addition to the incentive plan, can also be considered as a promotional plan, as well as helping the customer.')}</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('From the types of bonus brokers, Aron Groups has chosen a type of bonus according to the interests of its traders in order to provide more welfare facilities for the benefit of its traders.')}</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Brokers who offer bonus plans in their business plans usually also set and announce rules about it.')}</p>
				{/*<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('By offering a special bonus plan, Aron Groups has provided the conditions for its traders to experience a net profit by receiving a cash withdrawal bonus in opening an account in Aron Groups broker.')}</p>*/}
			</Container>
		</div>;
	}
}