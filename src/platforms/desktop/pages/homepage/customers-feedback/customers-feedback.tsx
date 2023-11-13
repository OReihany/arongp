import React, {PureComponent} from "react";
import styles from './customers-feedback.module.scss';
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";
import {Routes} from "core/routes";

@Observer([])
export class CustomersFeedback extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, getRoute} = this.i18;
		const videoContent = {
			video_main: {
				title: __(''),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction01.mp4',
				thumb: require('./thumb.jpg').default
			},
			video_main_inside_1: {
				title: __(''),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction02.mp4',
				thumb: require('./thumb.jpg').default
			},
			video_main_inside_2: {
				title: __(''),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction03.mp4',
				thumb: require('./thumb.jpg').default
			},
			video_main_inside_3: {
				title: __(''),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction04.mp4',
				thumb: require('./thumb.jpg').default
			},
			video_main_inside_4: {
				title: __(''),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction05.mp4',
				thumb: require('./thumb.jpg').default
			},
			video_main_inside_5: {
				title: __(''),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction06.mp4',
				thumb: require('./thumb.jpg').default
			}
		}
		return <div className={styles.CustomersFeedback}>
			<Container className={styles.container}>
				<div className={styles.desWrapper}>
					<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Customer Satisfaction with Aron Groups Binance Account')}
					</h2>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('Aron Groups Binance Account, another service from Aron Groups global broker in order to satisfy our dear customers')}
					</p>
				</div>
				<div className={styles.videosGroup}>
					<div className={styles.groupTop} data-aos="fade-right" data-aos-offset="100" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<div className={styles.item1}>
							<div>
								<ReactPlayer
									url={videoContent.video_main.src}
									width='100%'
									height='100%'
									controls={true}
									// light={true}
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
						<div className={styles.item2}>
							<div>
								<ReactPlayer
									url={videoContent.video_main_inside_1.src}
									width='100%'
									height='100%'
									controls={true}
									// light={true}
									config={{
										file: {
											attributes: {
												preload: 'none'
											}
										}
									}}
								/>
							</div>
							<div>
								<ReactPlayer
									url={videoContent.video_main_inside_2.src}
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
					</div>
					<div className={styles.groupBottom} data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<div>
							<ReactPlayer
								url={videoContent.video_main_inside_3.src}
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
						<div>
							<ReactPlayer
								url={videoContent.video_main_inside_4.src}
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
						<div>
							<ReactPlayer
								url={videoContent.video_main_inside_5.src}
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
				</div>
				<div className={styles.btnShowMore}>
					<Link to={getRoute(Routes.desktop.customerSatisfaction())} > {__('show more')} </Link>
				</div>
			</Container>
		</div>;
	}
}