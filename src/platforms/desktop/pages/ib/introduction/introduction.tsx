import React, {PureComponent} from "react";
import styles from './introduction.module.scss';
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Introduction extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.introduction}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="20" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Why IB? Forex is an amazing world to make money. IB is one of easy yet profitable ways to have a reliable income. You can make money without any knowledge about trading, by participating in Aron Groups IB plan.')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="20" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('You just need to register in Aron Groups and become an IB member. An invitation link will be sent to you, which you can send to your friends.')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="20" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('IB is a way to systematically support groups of people such as bloggers, influencers in social media and Forex teachers towards making profit in Forex.')}
					</p>
				</div>
				<div className={styles.video} data-aos="fade-right" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<div className={styles.videoContainer}>
						<ReactPlayer
							url="https://dl.arongroups.co/academy/crm/IB-Mobile.mp4"
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