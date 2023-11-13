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
		const videoContent = {
			video_main: {
				title: __('Learn how to register with Aron Groups Broker'),
				src: 'https://dl.arongroups.co/academy/arongroups_int/reg_in_AGB.mp4',
				desc: __('By watching this educational video, you can easily register in Aron Group Broker.')
			},
			video_main_inside_1: {
				title: __('Training on opening an account in Aron Groups broker (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/make_accu.mp4',
				desc: __('By watching this educational video, you can easily learn how to create a main account and a demo account.')
			},
			video_main_inside_2: {
				title: __('Training on connecting to a trading account and making transactions (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/login_mt5.mp4',
				desc: __('By watching this video, you can learn how to connect your trading accounts and make transactions through the mobile version. (You must have registered in the broker first).')
			},
			video_main_inside_3: {
				title: __('Training on placing orders and making transactions in Metatrader 5 (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/order_mt5.mp4',
				desc: __('By watching this video, you can learn how to order and make transactions in MetaTrader 5.')
			},
			video_main_inside_4: {
				title: __('Training of the new order page of the market execution section in Metatrader 5 (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/neworder_me.mp4',
				desc: __('By watching this video, you can place your new orders at the market price in MetaTrader 5 version.')
			},
			video_main_inside_5: {
				title: __('Training of the new order page in the pending order section in Metatrader 5 (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/neworder_po.mp4',
				desc: __('By watching this video, you can place your orders in the desired price range.')
			},
			video_main_inside_6: {
				title: __('Authentication training in Aron Groups broker (mobile version)'),
				src: 'https://dl.arongroups.co/academy/arongroups_int/Authentication.mp4',
				desc: __('Each broker can have different authentication. You can easily authenticate in Aron Groups broker by watching this video.')
			}
		}
		return <div className={styles.introduce}>
			<SocialMedia/>
			<Container className={styles.container}>
				<div className={styles.introduceMobile}>
					<div className={styles.content}>
						<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Mobile MetaTrader training')}
							<br/>({__('Android and iOS')})</h2>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{
							__('Successful trading in the financial markets starts with a simple yet complete platform. MetaTrader 5 is the best choice for today’s traders.')
						}</p>
						<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{
							__('MetaTrader 5 is a product of MetaQuotes, which was launched in 2010 after MetaTrader 4.')
						}</p>
						<div className={styles.buttonGroup}>
							<button onClick={() => window.open("https://client.arongroups.co/register/", "_blank")}>{__('Signup')}</button>
							<button className={styles.buttonSecondary} onClick={() => window.open("https://client.arongroups.co/register/", "_blank")}>{__('Signup Demo')}</button>
						</div>
					</div>
					<div className={styles.opencc} data-aos="fade-right" data-aos-offset="100" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<img src={require('./openacc.png').default} alt=""/>
					</div>
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
									config={{
										file: {
											attributes: {
												preload: 'none'
											}
										}
									}}
								/>
								<div className={styles.content}>
									<h3>{videoContent.video_main.title}</h3>
									<p>{videoContent.video_main.desc}</p>
								</div>
							</div>
						</div>
						<div className={styles.item2}>
							<div>
								<ReactPlayer
									url={videoContent.video_main_inside_1.src}
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
								<div className={styles.content}>
									<h3>{videoContent.video_main_inside_1.title}</h3>
									<p>{videoContent.video_main_inside_1.desc}</p>
								</div>
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
								<div className={styles.content}>
									<h3>{videoContent.video_main_inside_2.title}</h3>
									<p>{videoContent.video_main_inside_2.desc}</p>
								</div>
							</div>
							<div>
								<ReactPlayer
									url={videoContent.video_main_inside_6.src}
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
								<div className={styles.content}>
									<h3>{videoContent.video_main_inside_6.title}</h3>
									<p>{videoContent.video_main_inside_6.desc}</p>
								</div>
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
							<div className={styles.content}>
								<h3>{videoContent.video_main_inside_3.title}</h3>
								<p>{videoContent.video_main_inside_3.desc}</p>
							</div>
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
							<div className={styles.content}>
								<h3>{videoContent.video_main_inside_4.title}</h3>
								<p>{videoContent.video_main_inside_4.desc}</p>
							</div>
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
							<div className={styles.content}>
								<h3>{videoContent.video_main_inside_5.title}</h3>
								<p>{videoContent.video_main_inside_5.desc}</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>;
	}
}