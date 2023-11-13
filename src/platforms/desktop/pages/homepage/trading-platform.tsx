import React, {PureComponent} from "react";
import styles from './trading-platform.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Container} from "components/container/container";
import {SVGInline} from "components/svg-inline";
import AOS from 'aos';
import 'aos/dist/aos.css';

const platform = [
	{
		'title': 'android',
		'src': require('./android.svg').default,
		'href': 'https://download.mql5.com/cdn/mobile/mt5/android?server=AronMarkets-Server'
	},
	{
		'title': 'apple',
		'src': require('./apple.svg').default,
		'href': 'https://download.mql5.com/cdn/mobile/mt5/ios?server=AronMarkets-Server'
	},
	{
		'title': 'windows',
		'src': require('./windows.svg').default,
		'href': 'https://download.mql5.com/cdn/web/aron.markets.ltd/mt5/aronmarkets5setup.exe'
	}
]


@Observer([])
export class TradingPlatform extends PureComponent {
	@wired i18 = pick(I18nService)
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh()
	}

	render() {
		const {__} = this.i18
		return <div className={styles.tradingPlatform}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Trading Platforms')}</h2>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Successful trading in the financial markets starts with a simple yet complete platform. MetaTrader 5 is the best choice for today’s traders.')}</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('MetaTrader 5 is a product of MetaQuotes, which was launched in 2010 after MetaTrader 4.')}</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('MetaTrader is an analytics-trading platform that has become popular as a comprehensive and powerful platform in the Forex, stock and futures markets by offering a wide range of scripts and expert software to facilitate trading.')}</p>
					<div className={styles.buttonGroup} data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<button>{__('What is MT5')}</button>
						{platform.map(((value, index) => {
							return <div key={index} className={styles.platFormIcon}>
								<a href={value.href}>
									<SVGInline key={index} src={value.src} className={styles.platFormSvg}/>
								</a>
							</div>
						}))}
					</div>
				</div>
				<div className={styles.preview} data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<img src={require('../intro-meta-trader/trading-platform/home_img_desktop.png').default} alt=""/>
				</div>
			</Container>
		</div>
	}

}
