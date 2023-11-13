import React, {PureComponent} from "react";
import styles from './features.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class Features extends PureComponent{
	@wired i18 = pick(I18nService);
	render() {
		const {__} = this.i18;
		return <div className={styles.features}>
			<Container className={styles.container}>
				<h2>{__('Features')}</h2>
				<div className={styles.featuresList}>
					<div className={styles.featureItem}>
						<h3>{__('Use of artificial intelligence')}</h3>
						<p>{__('In this platform, artificial intelligence, analysis and algorithms and more than 500 different types of data are used to review data, create tradable indices and derivative trading products, and athletes are priced based on that.')}</p>
					</div>
					<div className={styles.featureItem}>
						<h3>{__('High diversity in trading options')}</h3>
						<p>{__('So far, more than 1,300 athletes from the fields of football and cricket have been priced, and this list includes more than 500 top footballers from leagues such as the English Premier League, La Liga, French Ligue 1, Bundesliga, Serie A, FA Cup, European Champions League, Europa League, They are the European Football Championship (EUROS) and the World Cup.')}</p>
					</div>
					<div className={styles.featureItem}>
						<h3>{__('Significant trading leverage')}</h3>
						<p>{__('Offering trading leverage of 1:100, which provides traders with the chance to earn high profits.')}</p>
					</div>
					<div className={styles.featureItem}>
						<h3>{__('No time limit for transactions')}</h3>
						<p>{__('The symbols of this market are available 24 hours a day, 7 days a week.')}</p>
					</div>
					<div className={styles.featureItem}>
						<h3>{__('The possibility of suspending liquidity during competitions')}</h3>
						<p>{__('In order to create proper liquidity in an important event, liquidity may be suspended. Because when the outcome of the event is not known, the market cannot establish a price without considering the performance results.')}</p>
					</div>
					<div className={{[styles.featureItem]: 1, [styles.deactivate]: 1}.toCss}>
						<h3>{__('')}</h3>
						<p>{__('')}</p>
					</div>
				</div>
				<div className={styles.link}>
					<p>{__("Click to enter Aron Football site")}</p>
					<div className={styles.btn}>
						<a onClick={() => window.open('https	://aronfootball.com/', "_blank")} >{__("Aron Football")}</a>
					</div>
				</div>
			</Container>
		</div>;
	}
}