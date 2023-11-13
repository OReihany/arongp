import React, {PureComponent} from "react";
import styles from './quick-links.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';

declare const window: any;

@Observer([])
export class QuickLinks extends PureComponent{
	@wired i18 = pick(I18nService)

	scrollDown() {
		window.scrollTo({
			behavior: 'smooth',
			top: 1000,
		})
	}

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh()
	}

	render() {
		const {__} = this.i18;
		const quickIcon = [
			{
				'title': __('Pay Interest on Your Account Balance'),
				'src' : require('./quick1.svg').default
			},
			{
				'title': __('Deposit Various Withdrawals with Cashback'),
				'src' : require('./quick2.svg').default
			},
			{
				'title': __('Valid Licenses and Regulations'),
				'src' : require('./quick3.svg').default
			},
			{
				'title': __('Expert Advisor for All Accounts'),
				'src' : require('./quick4.svg').default
			},
			{
				'title': __('Access to +600 Symbols'),
				'src' : require('./quick5.svg').default
			},
			{
				'title': __('Protection of users assets by international insurance companies'),
				'src' : require('./quick6.svg').default
			}
		]
		return <div className={styles.main}>
			<Container className={styles.container}>
				<div className={styles.icons}>
					{quickIcon.map(((value, index) => {
						return <div key={index} className={styles.item} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<img src={value.src} className={styles.itemIcon} alt=""/>
							<p className={styles.itemTitle}>{value.title}</p>
						</div>
					}))}
				</div>
			</Container>
			<div className={styles.scrollDown}>
				<img onClick={this.scrollDown} src={require('./go-down.png').default} alt=""/>
			</div>
		</div>
	}

}
