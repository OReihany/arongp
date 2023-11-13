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
		const {language, __} = this.i18
		return <div className={styles.introduce}>
			<div className={styles.introduceTop}>
				<Container className={styles.container}>
					<div className={styles.manage}>
						<h1> <b className={styles.bold}>{__('Aron Groups PAMM Account')}</b></h1>
						<p>{__('Money Management services allow traders to leverage their success by creating their own investment fund. Clients can invest with available fund managers for shared income.')}</p>
					</div>
				</Container>
			</div>
			<div className={styles.introduceBottom}>
				<Container className={styles.container}>
					<div className={styles.left}>
						<h1>
							{__('What is a')} <b className={styles.bold}>{__('MAM or PAMM?')}</b>
						</h1>
						<p>
							{__('Multi-Account Manager (MAM) and Percentage-Allocation-Management Manager (PAMM) Services allow clients to invest with Fund Managers. All the profits or losses are distributed between the Investors and Fund Managers in accordance to their share in the account and the account’s offer.')}
						</p>
					</div>
					<div className={styles.right}>
						<img src={require('./introduce.png').default} alt=""/>
					</div>
				</Container>
			</div>
		</div>;
	}
}