import React, {PureComponent} from "react";
import styles from './history.module.scss'
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class History extends PureComponent {
	@wired i18 = pick(I18nService)
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18
		return <div className={styles.history}>
			<Container className={styles.container}>
				<div className={styles.historyContent}>
					<h3 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Benefits of Crypto Loan in Aron Groups Broker')}</h3>
					<p data-aos="fade-right" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<span style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}} className="material-icons-outlined">
							check_circle
						</span>
						{__('No interest rate')}
					</p>
					<p data-aos="fade-left" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<span style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}} className="material-icons-outlined">
							check_circle
						</span>
						{__('No guarantor')}
					</p>
					<p data-aos="fade-right" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<span style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}} className="material-icons-outlined">
							check_circle
						</span>
						{__('Fast funding')}
					</p>
					<p data-aos="fade-left" data-aos-offset="100" data-aos-delay="10" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<span style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}} className="material-icons-outlined">
							check_circle
						</span>
						{__('Ability to obtain 15 different cryptocurrencies')}
					</p>
				</div>
			</Container>
		</div>;
	}
}