import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";



@Observer([])
export class Introduce extends PureComponent{
	@wired i18 = pick(I18nService);
	render() {
		const {__} = this.i18;
		return <div className={styles.introduce}>
			<Container className={styles.container}>
				<div className={styles.zuluIntroduce}>
					<div className={styles.content}>
						<h2>
							{__('Forex Social Trading')}
						</h2>
						<p>
							{__('Join the most transparent trading platform and reach your goals by copying the strategy of popular traders in different brokers.')}
						</p>
						<p>
							{__('Join us')}
						</p>
						<h2>
							{__('How does copy trading work?')}
						</h2>
						<p>
							{__('Clients can choose their traders according to functionality charts, which is prepared based on different factors. Clients can copy trade based on responses of society  and according to their priorities and risk appetite.')}
						</p>
						<p>
							{__('This platform offers a number of professional features which allows traders to manage their positions and benefit from the experience of other traders. Clients can customize each trade for each specific currency pair, or manage the number of positions automatically. They are also able to modify the number of trades or any other feature.')}
						</p>
					</div>
					<div className={styles.img}>
						<img src={require('./intro-ecn-img.png').default} alt=""/>
					</div>
				</div>
			</Container>
		</div>;
	}
}