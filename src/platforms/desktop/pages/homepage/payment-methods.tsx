import React, {PureComponent} from "react";
import styles from './payment-methods.module.scss';
import {Container} from "components/container/container";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {Link} from "react-router-dom";
import {Routes} from "core/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';

declare const window: any;


const paymentMethodsData = [
	{
		'src':require('../deposit-withdrawal/method/icon/exchange.png').default,
		'title':'Exchange'
	},
	{
		'src':require('../deposit-withdrawal/method/icon/perfect-money.png').default,
		'title':'Perfect Money'
	},
	{
		'src':require('../deposit-withdrawal/method/icon/tether.png').default,
		'title':'Tether'
	},
	{
		'src':require('../deposit-withdrawal/method/icon/top-change.png').default,
		'title':'Top Change'
	},
	{
		'src':require('../deposit-withdrawal/method/icon/ziraat.png').default,
		'title':'Ziraat Bank'
	},
	// {
	// 	'src':require('../deposit-withdrawal/method/icon/WebMoney.png').default,
	// 	'title':'Web Money'
	// },
	{
		'src':require('../deposit-withdrawal/method/icon/payeer.png').default,
		'title':'Payeer'
	},
	{
		'src':require('../deposit-withdrawal/method/icon/ininal.png').default,
		'title':'Ininal'
	},
	// {
	// 	'src':require('../deposit-withdrawal/method/icon/skrill.png').default,
	// 	'title':'Skrill'
	// },
	// {
	// 	'src':require('../deposit-withdrawal/method/icon/paypal.png').default,
	// 	'title':'PayPal'
	// },
	{
		'src':require('../deposit-withdrawal/method/icon/visa.png').default,
		'title':'Visa'
	},
	{
		'src':require('../deposit-withdrawal/method/icon/mastercard.png').default,
		'title':'Master Card'
	}
]

const scrollLeft = () => {
	document.getElementById('sliderCertificateContent').scrollLeft -= 60;
}
const scrollRight = () => {
	document.getElementById('sliderCertificateContent').scrollLeft += 60;
}

@Observer([])
export class PaymentMethods extends PureComponent{
	@wired i18 = pick(I18nService)
	componentDidMount() {
		AOS.init({
			duration: 1000,
			once: true
		});
		AOS.refresh()
	}

	render() {
		const {__, getRoute, language} = this.i18
		return <div className={styles.paymentMethods}>
			<Container className={styles.container}>
				<div className={styles.paymentMethodsContent}>
					<div className={styles.leftRightArrow}>
						<img onClick={() => scrollLeft()} src={require('./arrow-down.svg').default} alt=""/>
					</div>
					<div className={styles.paymentMethodsTitle}>
						<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('Payment Methods of Aron Groups')}
						</h2>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('Deposit or withdraw in any way you like')}
						</p>
					</div>
					<div id="sliderCertificateContent" className={{[styles.paymentMethodsIcons] : (language === 'fa') ? 0 : 1, [styles.paymentMethodsIconsFa] : (language === 'fa') ? 1 : 0}.toCss}>
						<div  className={styles.paymentMethodsIcon} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{paymentMethodsData.map(((value, index) => {
								return <Link to={getRoute(Routes.desktop.depositWithdrawal())} onClick={() => window.scrollTo({
									behavior: 'smooth',
									top: document.getElementById('root').offsetTop,
								})}>
									<img  src={value.src} alt=""/>
									<p>{value.title}</p>
								</Link>
							}))}
						</div>
					</div>
					<div className={styles.leftRightArrow}>
						<img onClick={() => scrollRight()} src={require('./arrow-down.svg').default} alt=""/>
					</div>
				</div>
			</Container>
		</div>;
	}

}