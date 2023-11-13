import React, {PureComponent} from "react";
import styles from './top-trader.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class TopTrader extends PureComponent {
	@wired i18 = pick(I18nService);

	render() {
		const {__} = this.i18;
		return <div className={styles.topTrader}>
			<Container className={styles.container}>
				<div className={styles.topTraderContent}>
					<h1>{__('Grand Trader Award')}</h1>
					<p>{__('Aron Groups is organizing a Trading Competition to celebrates its 3rd anniversary. The company invites all clients to participate.')}</p>
					<div className={styles.topTraderWrapper}>
						<div className={styles.leftContent}>
							<div className={styles.notice}>
								<p>{__('Wait for the winners of Aron’s Grand Trader Award to be announced.')}</p>
							</div>
							<div className={styles.notice}>
								<p>{__('Eligible winners will be announced within the next 30 days and will be notified by email.')}</p>
							</div>
						</div>
						{/*<div className={styles.rightContent}> <img src={require('./why-choose.svg').default} alt=""/> </div>*/}
					</div>
					{/*<div className={styles.btnShowMore}>*/}
					{/*	<Link to={getRoute(Routes.desktop.competition())} > {__('show more')} </Link>*/}
					{/*</div>*/}
				</div>
			</Container>

		</div>;
	}
}