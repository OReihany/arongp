import React, {PureComponent} from "react";
import styles from './trading-platform.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Container} from "components/container/container";
import AOS from 'aos';



@Observer([])
export class TradingPlatform extends PureComponent {
	@wired i18 = pick(I18nService)
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}
	render() {
		const {__} = this.i18
		return <div className={styles.tradingPlatform}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h2 data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Trading Platforms')}</h2>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('You can use the following links to download Metatrader 5')}</p>
					<div className={styles.platformIcons} data-aos={"fade-left"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<div className={styles.platformIcon}>
							<a href="https://download.mql5.com/cdn/mobile/mt5/android?server=AronMarkets-Server">
								<img src={require('../../meta-trader/education/android-logo.svg').default}/>
							</a>
						</div>
						<div className={styles.platformIcon}>
							<a href="https://download.mql5.com/cdn/mobile/mt5/ios?server=AronMarkets-Server">
								<img src={require('../../meta-trader/education/apple-logo.svg').default}/>
							</a>
						</div>
						<div className={styles.platformIcon}>
							<a href="https://download.mql5.com/cdn/web/aron.markets.ltd/mt5/aronmarkets5setup.exe">
								<img src={require('../../meta-trader/education/windows-logo.svg').default}/>
							</a>
						</div>
					</div>
				</div>
				<div className={styles.preview} data-aos={"fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<img src={require('./home_img_desktop.png').default} alt=""/>
				</div>
			</Container>
		</div>
	}

}
