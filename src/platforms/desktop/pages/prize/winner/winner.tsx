import React, {PureComponent} from "react";
import styles from './winner.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class Winner extends PureComponent{
	@wired i18 = pick(I18nService)
	render() {
		const {__} = this.i18
		const winnerData = [
			{
				id:0,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p1.jpg').default,
			},
			{
				id:1,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p2.jpg').default,
			},
			{
				id:2,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p3.jpg').default,
			},
			{
				id:3,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p4.jpg').default,
			},
			{
				id:4,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p5.jpg').default,
			},
			{
				id:5,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p6.jpg').default,
			},
			{
				id:6,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p7.jpg').default,
			},
			{
				id:7,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p8.jpg').default,
			},
			{
				id:8,
				title: 'AFC Champions League Final Prediction Lottery',
				src: require('./p9.jpg').default,
			},
		]
		return <div className={styles.winner}>
			<Container className={styles.container}>
				<h5>{__('Winners of previous competitions')}</h5>
				<div className={styles.winnerWrapper}>
					{winnerData.map( (item, index) => {
						return <div className={styles.winnerItem}>
							<img src={item.src} alt=""/>
							<p>{item.title}</p>
						</div>
					})}
				</div>
			</Container>
		</div>;
	}
}