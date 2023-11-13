import React, {PureComponent} from "react";
import styles from './yalda.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {YaldaService} from "services/yalda-service";


@Observer([YaldaService])
export class YaldaPlan extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired yaldaService = pick(YaldaService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh()
	}

	render() {
		const {__, commafy} = this.i18;
		const yaldas_data = this.yaldaService.data.filter((item, index) => index < 10) || []
		const rankData = [
			{
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			}, {
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			},{
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			}, {
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			},{
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			}, {
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			},{
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			}, {
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			},{
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			}, {
				user_id: "???",
				total_volume: "???",
				benefit: "???"

			}
		];
		return <div className={styles.leaderBoard}>
			<Container className={styles.container}>
				<h2 className={styles.leaderBoardTitle} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('Aron Groups Golden Yalda')}
				</h2>
				<p className={styles.leaderDescription} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('In this plan, all the traders that have traded the Bitcoin symbol at least 10 lots (close only) from the date of 15 December 2022 hour 12:01 at the time of Iran till the 25 December 2022 hour 23:59 for the eleven days will participate in the lottery of this contest.')}
				</p>
				<div className={styles.leaderBoardContentWrapper}>
					<div className={styles.leaderBoardContentRanks}>
						{
							(yaldas_data) ? yaldas_data.map(((value, index) => {
								return <div key={index} data-aos={(index % 2 === 0) ? "flip-left" : "flip-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"
											className={styles.leaderBoardContentRank}>
									<div className={styles.rankMedal}>
										<img src={require('./yalda-rank.png').default} alt="Yalda"/>
									</div>
									<div className={styles.content}>
										<div className={styles.userId}>
											<h4>{__('Rank')}</h4>
											<p>{index + 1} <b> </b></p>
										</div>
										<div className={styles.tradeVolume}>
											<h4>{__('User')}</h4>
											{/*<p>{value.total_volume.toFixed(2)} <b>{__('Lots')}</b></p>*/}
											<p>{value.user_id} <b> </b></p>
										</div>
										<div className={styles.benefit}>
											<h4>{__('Trading Volume')}</h4>
											{/*<p>{commafy(value.benefit.toFixed(2))} <b>{__('Dollars')}</b></p>*/}
											<p>{value.total_volume} <b>{__('Lots')}</b></p>
										</div>
									</div>
								</div>
							})) : ''
						}
					</div>
				</div>
			</Container>
		</div>
	}

}