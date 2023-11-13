import React, {PureComponent} from "react";
import styles from './leader-board.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {TopTrader} from "services/top-trader";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([TopTrader])
export class LeaderBoard extends PureComponent {
	@wired i18 = pick(I18nService)
	@wired topTrader = pick(TopTrader)
	state = {
		'path': 0
	}

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh()
	}

	render() {
		const {data} = this.topTrader;
		const {path} = this.state;
		const {__, commafy} = this.i18;
		const daily = data[0] || [];
		const weekly = data[2] || [];
		const monthly = data[1] || [];
		const aron_report = data[3] || [{'value': ''}, {'value': ''}, {'value': ''}];
		const rankData = (path === 0) ? daily : (path === 1) ? weekly : monthly;

		const menu = [
			__('Daily'), __('Weekly'), __('Monthly')
		]
		const setPath = (index) => {
			this.setState({'path': index});
		}
		return <div className={styles.leaderBoard}>
			<Container className={styles.container}>
				<h2 className={styles.leaderBoardTitle} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('Aron Groups Traders LeaderBoard')}
				</h2>
				<div className={styles.leaderBoardContentResult} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<div className={styles.leaderBoardContent}>
						<h4 className={styles.leaderBoardContentTitle}>{__('Active Traders Daily')}</h4>
						<p className={styles.leaderBoardContentValue}>{commafy(aron_report[0]['value'])} <span>{__(' ')}</span></p>
					</div>
					<div className={styles.leaderBoardContent}>
						<h4 className={styles.leaderBoardContentTitle}>{__('Daily Trading Volume')}</h4>
						<p className={styles.leaderBoardContentValue}>{commafy(aron_report[1]['value'])} <span>{__('Lots')}</span></p>
					</div>
					<div className={styles.leaderBoardContent}>
						<h4 className={styles.leaderBoardContentTitle}>{__('Worth of Daily Transaction')}</h4>
						<p className={styles.leaderBoardContentValue}>{commafy(aron_report[2]['value'])} <span>{__('Dollars')}</span></p>
					</div>
				</div>
				<ul className={styles.leaderBoardMenu}>
					{menu.map(((value, index) => {
						return <li key={index} className={{[styles.leaderBoardMenuItem]: 1, [styles.active]: (path === index) ? 1 : ''}.toCss} onClick={() => setPath(index)}>
							{value}
						</li>
					}))}
				</ul>
				<div className={styles.leaderBoardContentWrapper}>
					<div className={styles.leaderBoardContentRanks}>
						{
							(rankData) ? rankData.map(((value, index) => {
								return <div key={index} data-aos={(index % 2 === 0) ? "flip-left" : "flip-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"
											className={styles.leaderBoardContentRank}>
									<div className={styles.rankMedal}>
										{index + 1}
									</div>
									<div className={styles.content}>
										<div className={styles.userId}>
											<h4>{__('User')}</h4>
											<p>{(path === 0) ? value.user_id : value._id} <b> </b></p>
										</div>
										<div className={styles.tradeVolume}>
											<h4>{__('Trade Volume')}</h4>
											<p>{value.total_volume.toFixed(2)} <b>{__('Lots')}</b></p>
										</div>
										<div className={styles.benefit}>
											<h4>{__('Benefit')}</h4>
											<p>{commafy(value.benefit.toFixed(2))} <b>{__('Dollars')}</b></p>
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