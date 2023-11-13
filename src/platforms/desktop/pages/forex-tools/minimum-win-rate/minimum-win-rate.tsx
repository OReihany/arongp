import React, {PureComponent} from "react";
import styles from './minimum-win-rate.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


export interface MinimumWinRateProps {
	title: string,
	description: string,
}

@Observer([])
export class MinimumWinRate extends PureComponent<MinimumWinRateProps> {
	@wired i18 = pick(I18nService);
	state = {
		rtr: '0',
		mwr: 0
	}
	render() {
		const {__} = this.i18;
		return <div className={styles.minimumWinRate}>
			<div className={styles.title}>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
			</div>
			<div className={styles.notice}>
				<h3>{__("Just fill in the gray boxes.")}</h3>
			</div>
			<div className={styles.minimumWinRateContent}>
				<div className={styles.minimumWinRateWrapper}>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Risk to Reward:")}</p>
						<input type="text" placeholder={__("Risk to Reward...")} value={this.state.rtr} onChange={(e) => {
							this.setState({rtr: e.target.value, mwr: (1/(1+parseFloat(e.target.value)))})
						}
						}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.green]: 1}.toCss}>
						<p>{__("Minimum Win Rate:")}</p>
						<input type="text" placeholder={__("Minimum Win Rate...")} value={`${this.state.mwr*100}`}/>
					</div>
				</div>
				<div className={styles.minimumWinRateTable}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>{__("Risk to Reward")}</th>
							<th>{__("Minimum Win Rate")}</th>
						</tr>
						</thead>
						<tbody>
						{
							[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((item, index) => {
								return <tr key={index}>
									<td>{item}</td>
									<td>{Math.round((1/(1+item))*100)}</td>
								</tr>;
							})
						}
						</tbody>
					</table>
				</div>
			</div>
		</div>;
	}
}