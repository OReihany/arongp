import React, {PureComponent} from "react";
import {Observer} from "react-soa/dist/class";
import styles from './download.module.scss';
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Download extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		return <div className={styles.download}>
			<Container className={styles.container}>
				<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('METATRADER 5 MOBILE')}</h2>
				<div className={styles.downloadApp} >
					<div data-aos="fade-left" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.btn} onClick={()=> window.open('https://download.mql5.com/cdn/mobile/mt5/android?server=AronGroups-Server', "_blank")}>
						<img src={require('../../meta-trader/education/android-logo.svg').default} alt=""/>
						<a>{__('DOWNLOAD')}</a>
					</div>
					<div data-aos="fade-right" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.btn} onClick={()=> window.open('https://download.mql5.com/cdn/mobile/mt5/ios?server=AronGroups-Serve', "_blank")}>
						<img src={require('../../meta-trader/education/apple-logo.svg').default} alt=""/>
						<a>{__('DOWNLOAD')}</a>
					</div>
				</div>
			</Container>
		</div>;
	}
}