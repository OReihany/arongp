import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";


export class Introduce extends PureComponent{

	render() {
		return <div className={styles.introduce}>
			<Container className={styles.container}>
				<div className={styles.contentWrapper}>
					<div className={styles.content}>
						<h5>Introducing of IB incentive plan?</h5>
						<p>
							Traders have their own variety of methods and strategies. One of the most popular trading methods is the scalp.
						</p>
						<p>
							Scalping is one of the most lucrative trading methods that depends on the very high skills of traders. The scalp method is performed in short timeframes such as 1 minute or 5 minute charts. In this method, traders enter a position with a high volume of lots and after getting a small amount of PIP (pip) in a short time, they quickly close that position. However, the number of daily trades is very high, sometimes reaching 500 trades.
						</p>
						<p>
							Now it is enough to consider the plan of IB broker Aron Groups. Each scalp earns an average of about $ 300 a day for brokerage, and the IB plan considered by broker Aron Groups because it is networked is enough. By introducing 10 scalpers and receiving their commission, you will earn over $ 3,000 a month. Had.Of course, it goes without saying that the more referrals you have, the more income you will have, and even a $ 30,000 income is easily available, and on the other hand, in addition to direct referrals, you will also receive profits from sub-categories.
						</p>
						<p>
							Tip: If you have an active and strong social network or website, become a millionaire with Aron Gropes Broker IB.
						</p>
					</div>
					<div className={styles.image}>
						<video src=""></video>
					</div>
				</div>
			</Container>

		</div>;
	}
}
