import React, {PureComponent} from "react";
import styles from './rules.module.scss';
import {Container} from "components/container/container";


export class Rules extends PureComponent{
	render() {
		return <div className={styles.rules}>
			<Container className={styles.container}>
				<div className={styles.rulesContent}>
					<img src={require('./aron-prize.png').default} alt=""/>
					<div className={styles.content}>
						<h5>Rules of the 15,000-person Aron Groups Broker Festival</h5>
						<p>
							1- The prize of the nominee is 10 dollars (250 thousand Tomans) and the nominee is 10 dollars
						</p>
						<p>
							2- Charging the transaction account of the invited person in the amount of 5 million Tomans within 10 days after registration
						</p>
						<p>
							3- A transaction of at least 5 lots in a broker will not be awarded within 10 days without completing the transaction.
						</p>
						<p>
							4 _ The nominated person must register through the link ib identifier, otherwise no prize will be awarded
						</p>
						<p>
							5 - With the introduction of every 20 people, the amount of $ 50 in addition to the bonus will be paid.
						</p>
						<p>
							6- The festival is from 11/30/99 to 12/19/99, and every trader who registers for the festival every day, the 10-day deadline from the time of registration begins.
						</p>
					</div>
				</div>
			</Container>
		</div>;
	}
}