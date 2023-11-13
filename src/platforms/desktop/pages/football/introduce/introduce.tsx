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
					<div className={styles.introduce}>
						<div className={styles.manage}>
							<h1> <b className={styles.bold}>{__('Invest on Your Favorite Players')}</b></h1>
							<p>{__(' A unique sports stock exchange where users can buy and sell shares of professional athletes as if they were stocks')}</p>
							<p>{__('The transactions of this Aron Group platform are actually transactions based on CFD Valley on athletes. In fact, traders can buy and sell more than 1,300 of the worlds top football and cricket stars, just like corporate stocks and tradable commodities in the financial markets.')}</p>
							<p>{__('In fact, the most important option for investing in a market is to make a profit, and naturally, if you do not have enough knowledge in a market, you may lose your capital. The important thing in this market is your knowledge of football, which makes your knowledge more than other markets.')}</p>
							<p>{__('On the other hand, to carry out these transactions, it is enough to open one of the standard or VIP broker accounts of Aron Groups and participate in these exciting transactions just like other markets.')}</p>
							<p>{__('Pay attention that the method of trading and analysis in the football CFD market is not different from other markets, and just like any other market or symbol, you can open buy or sell positions based on the analysis of the players performance.')}</p>
							<p>{__('On this platform, you can buy, sell or trade your favorite athletes just like stocks in the financial markets.')}</p>
						</div>
						<div className={styles.manageFeature}>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('./secure.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Secure Payments')}</h2>
									{/*<p>{__('')}</p>*/}
								</div>
							</div>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('./all-clear.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('All Clear')}</h2>
									{/*<p>{__('')}</p>*/}
								</div>
							</div>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('./active-support.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Active Support 24*7')}</h2>
									{/*<p>{__('')}</p>*/}
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div className={styles.introduceBottom}>
				<Container className={styles.container}>
					<div className={styles.left}>
						<h1>
							<b className={styles.bold}>{__('How Does It Work?')}</b>
						</h1>
						<p>
							{__('It’s easier than you think. Follow 3 simple easy steps')}
						</p>
						<div className={styles.steps}>
							<div className={styles.step}>
								<div className={styles.image}>
									<img src={require('./deposit.png').default} alt="deposit"/>
								</div>
								<p className={styles.title}>{__('Deposit Funds')}</p>
							</div>
							<div className={styles.step}>
								<div className={styles.image}>
									<img src={require('./market.png').default} alt="deposit"/>
								</div>
								<p className={styles.title}>{__('Watch The Market')}</p>
							</div>
							<div className={styles.step}>
								<div className={styles.image}>
									<img src={require('./trade.png').default} alt="deposit"/>
								</div>
								<p className={styles.title}>{__('Make A Trade')}</p>
							</div>
						</div>
					</div>
					<div className={styles.right}>
						<img src={require('./Cricket-and-football.png').default || ''} alt=""/>
					</div>
				</Container>
			</div>
		</div>;
	}
}