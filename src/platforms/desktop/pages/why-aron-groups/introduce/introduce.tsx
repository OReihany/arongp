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
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18
		return <div className={styles.introduce} style={(language==='fa') ? {background: `url(${require("../../background/why-aron-groups-fa.jpg").default}) no-repeat`} :{background: `url(${require("../../background/why-aron-groups-en.jpg").default}) no-repeat`} }>
			<SocialMedia/>
			<Container className={styles.container}>
				<h4 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('The Most Important Reasons to Join Aron Groups Broker')}</h4>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('After 2 years of successful experience in the online trading market, with the assurance of the satisfaction of more than 10,000 traders, Aron Groups has now provided the opportunity for all people to experience online trading in global markets by offering more trading tools. All you have to do is be interested in financial markets, everything you need to get started and continue will be available to you at Aron Groups.')}</p>
			</Container>
		</div>;
	}
}