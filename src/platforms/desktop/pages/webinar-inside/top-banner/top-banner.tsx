import React, {PureComponent, useEffect, useState} from "react";
import styles from './top-banner.module.scss';
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useService} from "react-soa/dist/hook";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Observer} from "react-soa/dist/class";

export interface topProps {
	title: string,
}

@Observer([])
export class TopBanner extends PureComponent<topProps>{
	@wired i18 = pick(I18nService);
	state = {
		id: null,
	}

	componentDidMount() {
		AOS.init({
			duration : 1000
		});
		AOS.refresh();
	}
	render() {
		const {__} = this.i18;
		const webinarData = [
			{
				id: 0,
				title: __('Learn how to start trading with broker Aron Groups'),
			},
			{
				id: 1,
				title: __('Robert Miner style technical analysis'),
			},
			{
				id: 2,
				title: __('Market Psychology'),
			},
			{
				id: 3,
				title: __('5 important indicators in technical analysis'),
			},
			{
				id: 4,
				title: __('The most basic technical principles for any trader'),
			},
			{
				id: 5,
				title: __('Applied technical analysis training'),
			},
			{
				id: 6,
				title: __('Familiarity with gold metal'),
			},
			{
				id: 7,
				title: __('MetaTrader 5 training course'),
			},
			{
				id: 8,
				title: __('Haghdoost Master Weekly Class'),
			}

		];
		const paramsList = {
			"start-trading": {"id": 0},
			"technical-robert-miner": {"id": 1},
			"market-psychology": {"id": 2},
			"5-technical-indexes": {"id": 3},
			"technical-basis": {"id": 4},
			"practical-technical-analysis": {"id": 5},
			"gold-metal": {"id": 6},
			"mt5": {"id": 7},
			"haqdust": {"id": 8},
		}
		return <div className={styles.topBanner}>
			<SocialMedia/>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h4 data-aos="fade-up" data-aos-offset="100" data-aos-delay="25" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{
						(this.props.title.replace('/fa/webinar-inside/', '').trim() in paramsList) ? webinarData[paramsList[this.props.title.replace('/fa/webinar-inside/', '').trim()].id].title : ''
					}</h4>
				</div>
			</Container>
		</div>;
	}
}

