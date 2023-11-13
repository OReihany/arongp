import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";


@Observer([])
export class Introduce extends PureComponent{
	@wired i18 = pick(I18nService)
	render() {
		const {__} = this.i18
		return <div className={styles.introduce}>
			<div className={styles.introduceTop}>
				<Container className={styles.container}>
					<div className={styles.manage}>
						<h1> <b className={styles.bold}>{__('Aron Prop')}</b></h1>
						<p>{__('Our goal is to offer the best. If you are a professional trader, start now, 90% profit, without limitation; the opportunity is yours.')}</p>
					</div>
				</Container>
			</div>
			<div className={styles.introduceBottom}>
				<Container className={styles.container}>
					<div className={styles.left}>
						<h1>
							<b className={styles.bold}>{__('What is Prop Trading?')}</b>
						</h1>
						<p>
							{__('In simple words, prop trading means trading in financial markets, receiving your funds from another company. You can not withdraw the money that this company deposited in the broker, but you are able to trade with this fund and make money.')}
						</p>
						<p>
							{__('You will be offered 1:200 leverage by depositing at least 300 U.S Dollars, without paying any monthly subscription fees. As long as the drawdown rule is observed, you can continue trading on this account; and as soon as you reach 1% profit, you can withdraw 90% of the gained income.')}
						</p>
						<p>
							{__('In Aron Prop service, you are able to trade more than 400 trading symbols including precious metals, energy, stocks, currency pairs and cryptocurrency markets.')}
						</p>
					</div>
					<div className={styles.right}>
						<img src={require('./proprietary-trading.png').default || ''} alt=""/>
					</div>
				</Container>
			</div>
		</div>;
	}
}