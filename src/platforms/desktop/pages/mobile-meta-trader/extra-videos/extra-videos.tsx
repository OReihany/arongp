import React, {PureComponent} from "react";
import styles from './extra-videos.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([])
export class ExtraVideos extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		const videoDataExtra = [
			{
				title: __('Trading in the depth of the market in Metatrader 5 (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/order_in_depth.mp4',
				desc: __('By watching this video, you can see the best buying and selling price in the market as well as the volume of your and others orders so that you can have a successful transaction.')
			},
			{
				title: __('Training on Metatrader 5 settings (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/setting_mt5.mp4',
				desc: __('By watching this video, you can change the settings of the Metatrader 5 application according to your conditions, or so to speak, personalize it.')
			},
			{
				title: __('Metatrader 5 chat activation tutorial (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/mt5_chatroom.mp4',
				desc: __('By watching this video, you can learn the necessary training to activate the Metatrader 5 chat in the Android version.')
			},
			{
				title: __('Training on how to activate Metatrader 5 chat through the MQL5 site'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/chatroom_mql5.mp4',
				desc: __('By watching this video, you can learn how to open the Metatrader 5 chat through the MQL5 site.')
			},
			{
				title: __('Toolbar training in Metatrader 5 trading section (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/mt5_toolbar.mp4',
				desc: __('By watching this video, you can manage your open trades. For example, you can move your profit and loss limits.')
			},
			{
				title: __('How to close trades in Metatrader 5 (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/mt5_close_order.mp4',
				desc: __('By watching this video, you can fully see how to close open trades, pending trades and trades through the depth of the market.')
			},
			{
				title: __('Trading training in instant execution mode in Metatrader 5 (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/trade-in-instant-execution.mp4',
				desc: __('By watching this video, you can learn how to open a deal or close it at the current market price.')
			},
			{
				title: __('How to open a demo version account in Aron Groups Metatrader 5 broker (mobile version)'),
				src: 'https://dl.arongroups.co/academy/mt5/mobile/install_mt5.mp4',
				desc: __('You can learn how to open a demo account from zero to hundred by watching this educational video.')
			},
			{
				title: __('User panel training or CRM in Aron Groups broker (mobile version)'),
				src: 'https://dl.arongroups.co/academy/crm/intro_crm_mobile.mp4',
				desc: __('By watching this video, you can fully learn all the tips in your user panel, such as the Exchange menu, how to transfer money between two wallets, etc.')
			},
			{
				title: __('Training on depositing money or charging wallet in Aron Groups Broker (mobile version)'),
				src: 'https://dl.arongroups.co/academy/crm/deposite-mobile.mp4',
				desc: __('You can learn how to deposit currencies supported by the broker by watching this video.')
			},
			{
				title: __('Teaching how to use the IB plan in Aron Groups broker (mobile version)'),
				src: 'https://dl.arongroups.co/academy/crm/IB-Mobile.mp4',
				desc: __('IB scheme is one of Aron Groups broker services that allows users to get rewards by referring their friends.')
			},
			{
				title: __('Transfer and request money training in Aron Groups broker (mobile version)'),
				src: 'https://dl.arongroups.co/academy/crm/mt5-withdraw-mobile.mp4',
				desc: __('By watching this video, you can learn how to transfer and request your account balance from the broker.')
			}
		]
		return <div className={styles.extraVideos}>
			<Container className={styles.container}>
				{
					videoDataExtra.map( (item, index) => {
						return <div key={index} data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<ReactPlayer
								url={item.src}
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
								<h3>{item.title}</h3>
								<p>{item.desc}</p>
							</div>
						</div>
					})
				}
			</Container>
		</div>;
	}
}