import React, {PureComponent} from "react";
import styles from './football-account.module.scss';
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";


@Observer([])
export class FootballAccount extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		faqQueId: 0
	}

	render() {
		const {__} = this.i18;
		return <div className={styles.moneyManager}>
			<div className={styles.guidePlatform}>
				<Container className={styles.container}>
					<div className={styles.guideWrapper}>
						<div className={styles.content}>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('./players.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Players')}</h2>
									<p>{__('Players who beat projections raise in value')}</p>
								</div>
							</div>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('./invest.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Invest')}</h2>
									<p>{__('Invest in the value of a player')}</p>
								</div>
							</div>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('./trade.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Trade')}</h2>
									<p>{__('Trade from Anywhere, Anytime')}</p>
								</div>
							</div>
						</div>
						<div className={styles.animate}>
							<h1>{__('Buy Low, Sell High')}</h1>
							<p>{__('Changes in Players Share prices provide a valuable opportunity to profit from trading either long or short term. The concept is simple: buy low and sell high.')}</p>
							<img src={require('./players-football.png').default} alt=""/>
						</div>
					</div>
				</Container>
			</div>
		</div>;
	}
}