import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Introduce extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		return <div className={styles.introduce}>
			<SocialMedia/>
			<Container className={styles.container}>
				<div className={styles.introduceMobile}>
					<div className={styles.content}>
						<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('Customer Satisfaction with Aron Groups Binance Account')}
						</h2>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{
							__('Aron Groups Binance Account, another service from Aron Groups global broker in order to satisfy our dear customers')
						}</p>
						<div className={styles.buttonGroup}>
							<button onClick={() => window.open("https://client.arongroups.co/register/", "_blank")}>{__('Signup')}</button>
							<button className={styles.buttonSecondary} onClick={() => window.open("https://client.arongroups.co/register/", "_blank")}>{__('Signup Demo')}</button>
						</div>
					</div>
					<div className={styles.opencc} data-aos="fade-right" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<img src={require('./customer-satisfaction.jpg').default} alt=""/>
					</div>
				</div>
			</Container>
		</div>;
	}
}