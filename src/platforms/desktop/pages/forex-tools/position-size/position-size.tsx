import React, {PureComponent} from "react";
import styles from './position-size.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


export interface PositionSizeProps {
	title: string,
	description: string,
}

@Observer([])
export class PositionSize extends PureComponent<PositionSizeProps> {
	@wired i18 = pick(I18nService);
	state = {
		balanceF: '0',
		percentageOfRiskF: '0',
		amountRiskF: 0,
		priceF: '0',
		priceLossF: '0',
		percentageLossF: 0,
		volumeF: 0,
		leverageF: 0,
		balanceL: '0',
		percentageOfRiskL: '0',
		amountRiskL: 0,
		percentageLossL: '0',
		volumeL: 0,
		leverageL: 0
	}
	changeValue = (e, name = 'balance', mode = 'f') => {
		let volume = 0;
		let leverage = 0;
		switch (mode) {
			case 'f':
				switch (name) {
					case 'balance':
						const amountRiskF = (parseFloat(e.target.value) * parseFloat(this.state.percentageOfRiskF)) / 100;
						volume = (this.state.percentageLossF > 0) ? (amountRiskF / this.state.percentageLossF) * 100 : 0;
						leverage = (volume <= parseFloat(e.target.value)) ? 1 : (volume) / (parseFloat(e.target.value));
						this.setState({balanceF: e.target.value, amountRiskF: amountRiskF});
						break;
					case 'percentageOfRisk':
						const percentageOfRisk = e.target.value;
						const amountRiskPer = (parseFloat(percentageOfRisk) * parseFloat(this.state.balanceF)) / 100;
						volume = (this.state.percentageLossF > 0) ? (amountRiskPer / this.state.percentageLossF) * 100 : 0;
						leverage = (volume <= parseFloat(this.state.balanceF)) ? 1 : (volume) / (parseFloat(this.state.balanceF))
						this.setState({percentageOfRiskF: percentageOfRisk, amountRiskF: amountRiskPer});
						break;
					case 'price':
						const price = e.target.value;
						const percentageLoss = (parseFloat(price) > 0) ? Math.abs((parseFloat(price) - parseFloat(this.state.priceLossF)) / (parseFloat(price))) * 100 : 0;
						volume = (percentageLoss > 0) ? (this.state.amountRiskF / percentageLoss) * 100 : 0;
						leverage = (volume <= parseFloat(this.state.balanceF)) ? 1 : (volume) / (parseFloat(this.state.balanceF));
						this.setState({priceF: price, percentageLossF: percentageLoss});
						break;
					case 'priceLoss':
						const priceLoss = e.target.value;
						const percentageLossPri = (parseFloat(this.state.priceF) > 0) ? Math.abs((parseFloat(this.state.priceF) - parseFloat(priceLoss)) / (parseFloat(this.state.priceF))) * 100 : 0;
						volume = (percentageLossPri > 0) ? (this.state.amountRiskF / percentageLossPri) * 100 : 0;
						leverage = (volume <= parseFloat(this.state.balanceF)) ? 1 : (volume) / (parseFloat(this.state.balanceF));
						this.setState({priceLossF: priceLoss, percentageLossF: percentageLossPri});
						break;
					default:
						break
				}
				this.setState({volumeF: volume});
				this.setState({leverageF: leverage});
				break;
			case 'l':
				switch (name) {
					case 'balance':
						const amountRiskL = (parseFloat(e.target.value) * parseFloat(this.state.percentageOfRiskL)) / 100;
						volume = (parseFloat(this.state.percentageLossL) > 0) ? (amountRiskL / parseFloat(this.state.percentageLossL)) * 100 : 0;
						leverage = (volume <= parseFloat(e.target.value)) ? 1 : (volume) / (parseFloat(e.target.value));
						this.setState({balanceL: e.target.value, amountRiskL: amountRiskL});
						break;
					case 'percentageOfRisk':
						const percentageOfRiskL = e.target.value;
						const amountRiskPerL = (parseFloat(percentageOfRiskL) * parseFloat(this.state.balanceL)) / 100;
						volume = (parseFloat(this.state.percentageLossL) > 0) ? (amountRiskPerL / parseFloat(this.state.percentageLossL)) * 100 : 0;
						leverage = (volume <= parseFloat(this.state.balanceL)) ? 1 : (volume) / (parseFloat(this.state.balanceL))
						this.setState({percentageOfRiskL: percentageOfRiskL, amountRiskL: amountRiskPerL});
						break;
					case 'percentageLoss':
						const percentageLossL = e.target.value;
						volume = (parseFloat(percentageLossL) > 0) ? (this.state.amountRiskL / parseFloat(percentageLossL)) * 100 : 0;
						leverage = (volume <= parseFloat(this.state.balanceL)) ? 1 : (volume) / (parseFloat(this.state.balanceL));
						this.setState({percentageLossL: percentageLossL});
						break;
					default:
						break
				}
				this.setState({volumeL: volume});
				this.setState({leverageL: leverage});
				break

		}
	}

	render() {
		const {__} = this.i18;
		return <div className={styles.positionSize}>
			<div className={styles.title}>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
			</div>
			<div className={styles.notice}>
				<h3>{__("Just fill in the gray boxes.")}</h3>
			</div>
			<div className={styles.positionWrapper}>
				<div className={styles.positionLeft}>
					<h4>{__("Calculated based on price at entry point and loss limit")}</h4>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Balance:")} </p>
						<input type="text" placeholder={__("Balance...")}
							   onChange={(e) => this.changeValue(e, 'balance', 'f')}
							   value={this.state.balanceF}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Percentage of Risk:")}</p>
						<input type="text" placeholder={__("Percentage of Risk...")}
							   onChange={(e) => this.changeValue(e, 'percentageOfRisk', 'f')} value={this.state.percentageOfRiskF}
						/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.yellow]: 1}.toCss}>
						<p>{__("Calculate the Amount of Risk:")}</p>
						<input type="text" placeholder={__("Calculate the Amount of Risk...")} disabled={true} value={this.state.amountRiskF}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Price at the Point of Entry:")}</p>
						<input type="text" placeholder={__("Price at the Point of Entry...")}
							   onChange={(e) => this.changeValue(e, 'price', 'f')}
							   value={this.state.priceF}
						/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Price at a Loss:")}</p>
						<input type="text" placeholder={__("Price at a Loss...")}
							   onChange={(e) => this.changeValue(e, 'priceLoss', 'f')} value={this.state.priceLossF}
						/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.red]: 1}.toCss}>
						<p>{__("Calculate the Percentage of Loss Limit:")}</p>
						<input type="text" placeholder={__("Calculate the Percentage of Loss Limit...")} disabled={true} value={this.state.percentageLossF}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.blue]: 1}.toCss}>
						<p>{__("Volume:")} </p>
						<input type="text" placeholder={__("Volume...")} disabled={true} value={this.state.volumeF}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.blue]: 1}.toCss}>
						<p>{__("Leverage:")} </p>
						<input type="text" placeholder={__("Leverage...")} disabled={true} value={this.state.leverageF}/>
					</div>
				</div>
				<div className={styles.positionRight}>
					<h4>{__("Calculated based on loss percentage")}</h4>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Balance:")} </p>
						<input type="text" placeholder={__("Balance...")}
							   onChange={(e) => this.changeValue(e, 'balance', 'l')}
							   value={this.state.balanceL}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Percentage of Risk:")}</p>
						<input type="text" placeholder={__("Percentage of Risk...")}
							   onChange={(e) => this.changeValue(e, 'percentageOfRisk', 'l')} value={this.state.percentageOfRiskL}
						/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.yellow]: 1}.toCss}>
						<p>{__("Calculate the Amount of Risk:")}</p>
						<input type="text" placeholder={__("Calculate the Amount of Risk...")} disabled={true} value={this.state.amountRiskL}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
						<p>{__("Calculate the Percentage of Loss Limit:")}</p>
						<input type="text" placeholder={__("Calculate the Percentage of Loss Limit...")} onChange={(e) => this.changeValue(e, 'percentageLoss', 'l')} value={this.state.percentageLossL}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.blue]: 1}.toCss}>
						<p>{__("Volume:")} </p>
						<input type="text" placeholder={__("Volume...")} disabled={true} value={this.state.volumeL}/>
					</div>
					<div className={{[styles.inputField]: 1, [styles.blue]: 1}.toCss}>
						<p>{__("Leverage:")} </p>
						<input type="text" placeholder={__("Leverage...")} disabled={true} value={this.state.leverageL}/>
					</div>
				</div>
			</div>
		</div>;
	}
}