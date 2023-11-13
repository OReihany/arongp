import React, {PureComponent} from "react";
import styles from './asymmetry-of-loss.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";



export interface AsymmetryOfLossProps {
	title: string,
	description: string,
}

@Observer([])
export class AsymmetryOfLoss extends PureComponent<AsymmetryOfLossProps> {
	@wired i18 = pick(I18nService);
	state = {
		lossPercentage: '0',
		winPercentage: 0,
	}
	render() {
		const {__} = this.i18;
		return <div className={styles.asymmetryOfLoss}>
			<div className={styles.title}>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
			</div>
			<div className={styles.notice}>
				<h3>{__("Just fill in the gray boxes.")}</h3>
			</div>
			<div className={styles.consecutiveLossContent}>
				<div className={styles.consecutiveLossWrapper}>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Percentage of Loss:")}</p>
						<input type="text" placeholder={__("Percentage of Loss...")} value={`${this.state.lossPercentage}`} onChange={(e) => {
							this.setState({lossPercentage: e.target.value, winPercentage: ((1/(1-(parseFloat(e.target.value)/100)))-1)*100})
						}
						}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.green]: 1}.toCss}>
						<p>{__("Percentage of Profit Required to Compensate:")}</p>
						<input type="text" placeholder={__("Percentage of Profit Required to Compensate...")} value={`${this.state.winPercentage}`}/>
					</div>
				</div>
			</div>
		</div>;
	}
}