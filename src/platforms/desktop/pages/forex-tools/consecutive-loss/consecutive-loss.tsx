import React, {PureComponent} from "react";
import styles from './consecutive-loss.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";



export interface ConsecutiveLossProps {
	title: string,
	description: string,
}

@Observer([])
export class ConsecutiveLoss extends PureComponent<ConsecutiveLossProps> {
	@wired i18 = pick(I18nService);
	state = {
		winRate: '0',
		numberOfTrade: '0',
		numberOfConsecutiveLoss: 0
	}
	render() {
		const {__} = this.i18;
		return <div className={styles.consecutiveLoss}>
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
						<p>{__("Win Rate:")}</p>
						<input type="text" placeholder={__("Win Rate...")} value={`${this.state.winRate}`} onChange={(e) => {
							this.setState({winRate: e.target.value, numberOfConsecutiveLoss: (-Math.log(parseFloat(this.state.numberOfTrade))/(Math.log(1-(parseFloat(e.target.value)/100))))})
						}
						}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Number of Trade:")}</p>
						<input type="text" placeholder={__("Number of Trade...")} value={this.state.numberOfTrade} onChange={(e) => {
							this.setState({numberOfTrade: e.target.value, numberOfConsecutiveLoss: (-Math.log(parseFloat(e.target.value))/(Math.log(1-(parseFloat(this.state.winRate)/100))))})
						}
						}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.green]: 1}.toCss}>
						<p>{__("Number of Consecutive Loss:")}</p>
						<input type="text" placeholder={__("Number of Consecutive Loss...")} value={`${this.state.numberOfConsecutiveLoss}`}/>
					</div>
				</div>
			</div>
		</div>;
	}
}