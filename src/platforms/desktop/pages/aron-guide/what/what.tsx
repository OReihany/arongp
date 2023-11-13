import React, {PureComponent} from "react";
import styles from './what.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {Link} from "react-router-dom";
import {Routes} from "core/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class What extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language, getRoute} = this.i18;
		const whatDat = [
			{
				id: 1,
				title: __('What is Forex?'),
				description: __('The foreign exchange market, abbreviated as Forex or FX, is derived from the term Foreign Exchange Market. Trading in this market means converting one currency to another at a certain rate.'),
				linkTitle: __('What is Forex?'),
				href: 'https://blog.arongroups.co/category/tutorials/forex/',
				src: require('./w1.png').default
			},
			{
				id:2,
				title: __('MetaTrader5 Training'),
				description: __('MetaTrader is an analytics-trading platform that has become popular as a comprehensive and powerful platform in the Forex, stock and futures markets by offering a wide range of expert scripts and software to facilitate trading.'),
				linkTitle: __('MetaTrader5 Training'),
				href: 'https://blog.arongroups.co/category/tutorials/software-tutorials/',
				src: require('./w2.png').default
			},
			{
				id: 3,
				title: __('Products and trading accounts'),
				description: __('You can get acquainted with trading symbols and accounts and start trading with confidence.'),
				linkTitle: __('Trading Accounts'),
				href: getRoute(Routes.desktop.accounts()),
				src: require('./w3.png').default
			},
			{
				id:4,
				title: __('Open a trial account'),
				description: __('It is possible for you to trade exactly the same as the original accounts by opening a trial account before you are fully prepared.'),
				linkTitle: __('Open a trial account\n'),
				href: language === 'fa' ? 'https://my.arongroups.co/fa/register' : 'https://my.arongroups.co/en/register',
				src: require('./w4.png').default
			}
		]
		return <div className={styles.what}>
			<Container className={styles.container}>
				<div className={styles.whatAronGroups}>
					<div className={styles.whatAronGroupsContent}>
						<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" >{__('What is Aron Groups?')}</h2>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups is an online financial market broker that has the backing of traders. Providing the services expected by traders globally, innovating in the supply of special and unique trading products, providing an easy trading platform with advanced tools are just some of the features of Aron Group Broker.')}</p>
						<div className={styles.linkWhat}>
							{/*<a href="#">{__('Why Aron Groups')}</a>*/}
						</div>
					</div>
					<img data-aos="fade-right" data-aos-offset="100" data-aos-delay="150" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" src={require('../../about-us/history/brand.png').default} alt=""/>
				</div>
				<div className={styles.whatAronGroupsWrapper}>
					{whatDat.map( (item, index) =>{
						return <div className={styles.whatItem} data-aos={(index%2 === 0) ? "fade-left" : "fade-right"} data-aos-offset="100"  data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<img src={item.src} alt=""/>
							<div className={styles.content}>
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
							<div className={styles.link}>
								{
									(item.href.length <= 12) ? <Link to={item.href}>{item.linkTitle}</Link> : <a href={item.href}>{item.linkTitle}</a>
								}
							</div>
						</div>
					})}					
				</div>
			</Container>
		</div>;
	}
}