import React, {PureComponent} from "react";
import styles from './install-meta-trader.module.scss';
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";

@Observer([])
export class InstallMetaTrader extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		menuIndex: 0,
	}

	setMenuIndex = (index) => {
		return this.setState({menuIndex: index})
	}

	render() {
		const {__} = this.i18;
		const menu = [
			{
				title: __('Windows Version'),
				howToInstall: [
					__("Download the installation file of Meta trader"),
					__("After the download is complete, Double click on the downloaded file in exe format."),
					__("After complete installation, click on the Aron Groups MT5 icon to open MetaTrader 5 Aron Groups"),
					__("After 	entering your username, password and selecting AronGroups server, you can trading with MT5")
				],
				src: "https://dl.arongroups.co/academy/mt5/mobile/install_mt5.mp4"
			},
			{
				title: __('Mac Version'),
				howToInstall: [
					__("Download the installation file of Meta trader"),
					__("After the download is complete, Double click on the downloaded file in exe format."),
					__("After complete installation, click on the Aron Groups MT5 icon to open MetaTrader 5 Aron Groups"),
					__("After 	entering your username, password and selecting AronGroups server, you can trading with MT5")
				],
				src: "https://dl.arongroups.co/academy/mt5/mobile/install_mt5.mp4"
			},
			{
				title: __('Android Version'),
				howToInstall: [
					__("Download the installation file of Meta trader"),
					__("After the download is complete, Double click on the downloaded file in exe format."),
					__("After complete installation, click on the Aron Groups MT5 icon to open MetaTrader 5 Aron Groups"),
					__("After 	entering your username, password and selecting AronGroups server, you can trading with MT5")
				],
				src: "https://dl.arongroups.co/academy/mt5/mobile/install_mt5.mp4"
			},
			{
				title: __('iOS Version'),
				howToInstall: [
					__("Download the installation file of Meta trader"),
					__("After the download is complete, Double click on the downloaded file in exe format."),
					__("After complete installation, click on the Aron Groups MT5 icon to open MetaTrader 5 Aron Groups"),
					__("After 	entering your username, password and selecting AronGroups server, you can trading with MT5")
				],
				src: "https://dl.arongroups.co/academy/mt5/mobile/install_mt5.mp4"
			}
		]
		const {menuIndex} = this.state
		return <div className={styles.installMetaTrader}>
			<Container className={styles.container}>
				<h2 className={styles.installMetaTraderTitle} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('How To Install Meta Trader 5')}
				</h2>
				{/*<ul className={styles.installMetaTraderMenu} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
				{/*	{menu.map(((value, index) => {*/}
				{/*		return <li key={index} className={{[styles.installMetaTraderMenuItem]: 1, [styles.active]: (this.state.menuIndex === index) ? 1 : ''}.toCss} onClick={() => this.setMenuIndex(index)}>*/}
				{/*			{value.title}*/}
				{/*		</li>*/}
				{/*	}))}*/}
				{/*</ul>*/}
				<div className={styles.installMetaTraderItemWrapper}>
					<div className={styles.installMetaTraderItemContent}>
						{
							menu[menuIndex].howToInstall.map((value, index) => {
								return <p key={index} data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{index + 1}. {value}</p>
							})
						}
					</div>
					<div className={styles.installMetaTraderItemImage} data-aos={"fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<ReactPlayer
							url={menu[menuIndex].src}
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