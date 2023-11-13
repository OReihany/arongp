import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Introduce extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.introducing}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.title}>{__('IB Introduction')}</h2>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('IB is the abbreviation for Introducing Broker.')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('IB could be a good opportunity for traders to gain profit from the activity of their subsidiaries in addition to their own trading.')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('As an Introducer, you just need to introduce clients to the broker and the broker will reward you for that. Each time a trader you introduced, conducts a trade, you will receive a commission. As long as your subsidiaries continue trading you will be receiving commissions.')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<b>{__('Note: ')}</b>
						{__('Your subsidiary doesn’t have to be profitable for you to receive commission. They just need to be active, and you will be receiving a commission based on volume and number of their trades.')}
					</p>
				</div>
				<div className={styles.image}>
					{/*<div className={styles.imageContainer} data-aos="fade-right" data-aos-offset="100" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
					{/*	<img src={require('./introduce.png').default} alt=""/>*/}
					{/*</div>*/}
				</div>
			</Container>
		</div>;
	}
}