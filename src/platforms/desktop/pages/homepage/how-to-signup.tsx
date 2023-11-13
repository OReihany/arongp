import React, {PureComponent} from "react";
import styles from './how-to-signup.module.scss';
import {Container} from "components/container/container";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class HowToSignUp extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh()
	}

	render() {
		const {__} = this.i18
		const howToSignUpData = [
			{
				'src':require('./signup1.png').default,
				'title':__('Registration'),
				'subtitle':__('After registration, open your real account.'),
			},
			{
				'src':require('./signup2.png').default,
				'title':__('Authentication'),
				'subtitle':__('Upload the documents required to activate your account.'),
			},
			{
				'src':require('./signup3.png').default,
				'title':__('Investment'),
				'subtitle':__('Log in to your account and charge your account.'),
			},
			{
				'src':require('./signup4.png').default,
				'title':__('Start Trading'),
				'subtitle':__('Start trading and make a profit'),
			},
		]

		return <div className={styles.howToSignUp}>
			<Container className={styles.container}>
				<div className={styles.howToSignUpTitle}>
					<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('How to Sign Up')}</h2>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Start trading with just four simple steps and make a profit')}</p>
				</div>
				<div className={styles.howToSignUpSteps}>
					{howToSignUpData.map(((value, index) => {
						return <div key={index} className={styles.howToSignUpStep} data-aos={(index%2 === 0) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<img src={value.src} alt=""/>
							<div className={styles.subtitleHowToSignUpStep}>
								<h4>{value.title}</h4>
								<p>{value.subtitle}</p>
							</div>
						</div>
					}))}
				</div>
			</Container>
		</div>;
	}

}