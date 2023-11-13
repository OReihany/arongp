import React, {PureComponent} from "react";
import styles from './introducing.module.scss';
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([])
export class Introducing extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.introducing}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h2 data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.title}>{__('Introducing and Downloading MetaTrader 5')}</h2>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Successful trading in the financial markets starts with a simple yet complete platform. MetaTrader 5 is the best choice for today’s traders.')}
					</p>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('MetaTrader 5 is a product of MetaQuotes, which was launched in 2010 after MetaTrader 4.')}
					</p>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('MetaTrader is an analytics-trading platform that has become popular as a comprehensive and powerful platform in the Forex, stock and futures markets by offering a wide range of scripts and expert software to facilitate trading.')}
					</p>
					<p data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Aron Groups broker allows you to install both desktop and mobile versions of MetaTrader 5 which you can trade in both ways at the same time. By opening real and demo accounts, you can use your completely personal space in several languages of the world, including Persian, for trading.')}
					</p>
				</div>
				<div className={styles.video}>
					<div className={styles.videoContainer} data-aos={"fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<ReactPlayer
							url="https://dl.arongroups.co/academy/mt5/p1/mt5-intro.mp4"
							width='100%'
							height='100%'
							controls={true}
							config={{
								file: {
									attributes: {
										preload: 'none'
									}
								}
							}}
						/>
					</div>
				</div>
			</Container>
		</div>;
	}
}