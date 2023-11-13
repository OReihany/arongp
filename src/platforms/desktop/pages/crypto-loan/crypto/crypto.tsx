import React, {PureComponent} from "react";
import styles from './crypto.module.scss';
import {Container} from "components/container/container";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const cryptos = [
	{
		'src': require('./icon/bitcoin-btc-logo.svg').default,
		'title': 'Bitcoin'
	},
	{
		'src': require('./icon/tether-usdt-logo.svg').default,
		'title': 'Tether'
	},
	{
		'src': require('./icon/trueusd-tusd-logo.svg').default,
		'title': 'TrueUSD'
	},
	{
		'src': require('./icon/gemini-dollar-gusd-logo.svg').default,
		'title': 'Gemini Dollar'
	},
	{
		'src': require('./icon/paxos-standard-pax-logo.svg').default,
		'title': 'PAX'
	},
	{
		'src': require('./icon/binance-usd-busd-logo.svg').default,
		'title': 'Binance USD'
	},
	{
		'src': require('./icon/multi-collateral-dai-dai-logo.svg').default,
		'title': 'Dai Stable Coin'
	},
	{
		'src': require('./icon/usd-coin-usdc-logo.svg').default,
		'title': 'USD Coin'
	},
	{
		'src': require('./icon/ethereum-eth-logo.svg').default,
		'title': 'Ethereum'
	},
	{
		'src': require('./icon/litecoin-ltc-logo.svg').default,
		'title': 'LiteCoin'
	},
	{
		'src': require('./icon/bitcoin-cash-bch-logo.svg').default,
		'title': 'Bitcoin Cash'
	},
	{
		'src': require('./icon/dash-dash-logo.svg').default,
		'title': 'Dash'
	},
	{
		'src': require('./icon/xrp-xrp-logo.svg').default,
		'title': 'Ripple'
	},
	{
		'src': require('./icon/binance-coin-bnb-logo.svg').default,
		'title': 'Binance Coin'
	},
	{
		'src': require('./icon/zcash-zec-logo.svg').default,
		'title': 'Zcash'
	},
	{
		'src': require('./icon/lemun.svg').default,
		'title': 'Lemun'
	},
	{
		'src': require('./icon/dogecoin-doge-logo.svg').default,
		'title': 'Doge Coin'
	}
]

const scrollLeft = () => {
	document.getElementById('sliderCertificateContent').scrollLeft -= 60;
}
const scrollRight = () => {
	document.getElementById('sliderCertificateContent').scrollLeft += 60;
}

@Observer([])
export class Crypto extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.paymentMethods}>
			<Container className={styles.container}>
				<div className={styles.paymentMethodsContent}>
					<div className={styles.leftRightArrow}>
						<img onClick={() => scrollLeft()} src={require('../../homepage/arrow-down.svg').default} alt=""/>
					</div>
					<div className={styles.paymentMethodsTitle} data-aos="fade-up" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<h3>{__('Available Cryptocurrencies in Aron Groups Broker’s Crypto Loan Program\n')}</h3>
					</div>
					<div id="sliderCertificateContent" className={styles.paymentMethodsIcons}>

						<div className={styles.paymentMethodsIcon}>
							{cryptos.map(((value, index) => {
								return <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.cryptoIcon}>
									<img src={value.src} alt=""/>
									<p>{value.title}</p>
								</div>
							}))}
						</div>
					</div>
					<div className={styles.leftRightArrow}>
						<img onClick={() => scrollRight()} src={require('../../homepage/arrow-down.svg').default} alt=""/>
					</div>
				</div>
			</Container>
		</div>;
	}

}