import React, {PureComponent} from "react";
import styles from './zulu-platform.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class ZuluPlatform extends PureComponent {
	@wired i18 = pick(I18nService);
	render() {
		const {__} = this.i18;
		return <div className={styles.zuluPlatform}>
			<Container className={styles.container}>
				<div className={styles.zuluWrapper}>
					<div className={styles.animate}>
						<p>{__('Platform')}</p>
						<h1>{__('Social Trading Features')}</h1>
						<img src={require('./hero-banner.gif').default} alt=""/>
					</div>
					<div className={styles.content}>
						<div className={styles.contentWrapper}>
							<div className={styles.contentImg}>
								<img src={require('./credit-relation-icon.png').default} alt=""/>
							</div>
							<div className={styles.contentText}>
								<h2>{__('ZuluRank')}</h2>
								<p>{__('Is a complex algorithm that ranks signal providers based on different factors such as overall functionality (total profit, drawdown, average pips in every trade and etc.), consistency (even if there aren’t much ups and downs in trades), successful management (Several positions may get opened at once), minimum required investment in order to follow other traders’ positions and other functional criteria. ')}</p>
							</div>
						</div>
						<div className={styles.contentWrapper}>
							<div className={styles.contentImg}>
								<img src={require('./decrease-icon.png').default} alt=""/>
							</div>
							<div className={styles.contentText}>
								<h2>{__('ZuluGuard')}</h2>
								<p>{__('An advanced feature which keeps user accounts safe and monitors clients’ activity 24/7 and takes necessary measures to protect the invested amount.')}</p>
							</div>
						</div>
						<div className={styles.contentWrapper}>
							<div className={styles.contentImg}>
								<img src={require('./flow-icon-blue.png').default} alt=""/>
							</div>
							<div className={styles.contentText}>
								<h2>{__('Simulation')}</h2>
								<p>{__('A strong tool which allows clients to test the function of each trader in accordance with the adjustments of their own user account. Calculates the potential loss or profit of the positions. This allows clients to test their strategies before entering the real market.')}</p>
							</div>
						</div>
						<div className={styles.contentWrapper}>
							<div className={styles.contentImg}>
								<img src={require('./anonymous-icon-blue.png').default} alt=""/>
							</div>
							<div className={styles.contentText}>
								<h2>{__('Social Charts')}</h2>
								<p>{__('Clients are able to choose a chart and share their opinions anytime. They are also able to interact with other traders and share their opinions.')}</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>;
	}
}