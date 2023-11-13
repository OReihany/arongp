import React, {PureComponent} from "react";
import styles from './money-management.module.scss';
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";



export interface MoneyManagementProps {
	title: string,
	description: string,
}

@Observer([])
export class MoneyManagement extends PureComponent<MoneyManagementProps> {
	@wired i18 = pick(I18nService);
	state = {
		grossProfit: '0',
		grossLoss: '0',
		totalTrades: '0',
		numberWinningTrades: '0',
		numberLosingTrades: '0',
		netProfit: 0,
		averageWin: 0,
		averageLoss: 0,
		winRate: 0,
		lossRate: 0,
		payoffRatio: 0,
		profitFactor: 0,
		expectency: 0,

	}

	changeInput = (e, name) => {
		switch (name) {
			case 'grossProfit':
				const averageWin = (parseFloat(this.state.numberWinningTrades) !== 0) ? parseFloat(e.target.value) / parseFloat(this.state.numberWinningTrades) : 0;
				this.setState({grossProfit: e.target.value, netProfit: parseFloat(e.target.value) - parseFloat(this.state.grossLoss)})
				this.setState({
					averageWin: averageWin, payoffRatio: (this.state.averageLoss !== 0) ? averageWin / this.state.averageLoss : 0,
					profitFactor: (parseFloat(this.state.grossLoss) !== 0) ? parseFloat(e.target.value) / parseFloat(this.state.grossLoss) : 0,
					expectency: (this.state.winRate * averageWin) - (this.state.lossRate * this.state.averageLoss)
				})
				break;
			case 'grossLoss':
				const averageLoss = (parseFloat(this.state.numberLosingTrades) !== 0) ? parseFloat(e.target.value) / parseFloat(this.state.numberLosingTrades) : 0;
				this.setState({grossLoss: e.target.value, netProfit: parseFloat(this.state.grossProfit) - parseFloat(e.target.value)})
				this.setState({
					averageLoss: averageLoss, payoffRatio: (averageLoss !== 0) ? this.state.averageWin / averageLoss : 0,
					profitFactor: (parseFloat(e.target.value) !== 0) ? parseFloat(this.state.grossProfit) / parseFloat(e.target.value) : 0,
					expectency: (this.state.winRate * this.state.averageWin) - (this.state.lossRate * averageLoss)
				})
				break;
			case 'totalTrades':
				this.setState({totalTrades: e.target.value,
					winRate: (parseFloat(e.target.value) !== 0) ? parseFloat(this.state.numberWinningTrades)/parseFloat(e.target.value) : 0,
					lossRate: (parseFloat(e.target.value) !== 0) ? parseFloat(this.state.numberLosingTrades)/parseFloat(e.target.value) : 0,
					expectency: (((parseFloat(e.target.value) !== 0) ? parseFloat(this.state.numberWinningTrades)/parseFloat(e.target.value) : 0) * this.state.averageWin) - (((parseFloat(e.target.value) !== 0) ? parseFloat(this.state.numberLosingTrades)/parseFloat(e.target.value) : 0) * this.state.averageLoss)
				})
				break;
			case 'numberWinningTrades':
				const averageWinNum = (parseFloat(e.target.value) !== 0) ? parseFloat(this.state.grossProfit) / parseFloat(e.target.value) : 0;
				this.setState({numberWinningTrades: e.target.value, averageWin: averageWinNum,
					winRate: (parseFloat(this.state.totalTrades) !== 0) ? parseFloat(e.target.value)/parseFloat(this.state.totalTrades) : 0,
					payoffRatio: (this.state.averageLoss !== 0) ? averageWinNum / this.state.averageLoss : 0,
					expectency: (this.state.winRate * averageWinNum) - (this.state.lossRate * this.state.averageLoss)
				})
				break;
			case 'numberLosingTrades':
				const averageLossNum = (parseFloat(e.target.value) !== 0) ? parseFloat(this.state.grossLoss) / parseFloat(e.target.value) : 0;
				this.setState({numberLosingTrades: e.target.value, averageLoss: averageLossNum,
					payoffRatio: (averageLossNum !== 0) ? this.state.averageWin / averageLossNum : 0,
					lossRate: (parseFloat(this.state.totalTrades) !== 0) ? parseFloat(e.target.value)/parseFloat(this.state.totalTrades) : 0,
					expectency: (this.state.winRate * this.state.averageWin) - (this.state.lossRate * averageLossNum)
				})
				break;

		}
	}

	render() {
		const {__} = this.i18;
		return <div className={styles.moneyManagement}>
			<div className={styles.title}>
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
			</div>
			<div className={styles.notice}>
				<h3>{__("Just fill in the gray boxes.")}</h3>
			</div>
			<div className={styles.moneyManagementWrapper}>
				<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
					<p>{__("Gross Profit:")}</p>
					<input type="text" placeholder={__("Gross Profit...")} onChange={(e) => this.changeInput(e, 'grossProfit')} value={this.state.grossProfit}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
					<p>{__("Gross Loss:")}</p>
					<input type="text" placeholder={__("Gross Loss...")} value={this.state.grossLoss} onChange={(e) => this.changeInput(e, 'grossLoss')}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
					<p>{__("Total Trades:")}</p>
					<input type="text" placeholder={__("Total Trades...")} value={this.state.totalTrades} onChange={(e) => this.changeInput(e, 'totalTrades')}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
					<p>{__("Number Winning Trades:")}</p>
					<input type="text" placeholder={__("Number Winning Trades...")} value={this.state.numberWinningTrades} onChange={(e) => this.changeInput(e, 'numberWinningTrades')}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.grey]: 1}.toCss}>
					<p>{__("Number Losing Trades:")}</p>
					<input type="text" placeholder={__("Number Losing Trades...")} value={this.state.numberLosingTrades} onChange={(e) => this.changeInput(e, 'numberLosingTrades')}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.green]: 1}.toCss}>
					<p>{__("Net Profit:")}</p>
					<input type="text" placeholder={__("Net Profit...")} value={this.state.netProfit}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.red]: 1}.toCss}>
					<p>{__("Average Win:")}</p>
					<input type="text" placeholder={__("Average Win...")} value={this.state.averageWin}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.red]: 1}.toCss}>
					<p>{__("Average Loss:")}</p>
					<input type="text" placeholder={__("Average Loss...")} value={this.state.averageLoss}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.yellow]: 1}.toCss}>
					<p>{__("Win Rate:")}</p>
					<input type="text" placeholder={__("Win Rate...")} value={`${this.state.winRate*100}`}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.yellow]: 1}.toCss}>
					<p>{__("Loss Rate:")}</p>
					<input type="text" placeholder={__("Loss Rate...")} value={`${this.state.lossRate*100}`}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.yellow]: 1}.toCss}>
					<p>{__("Payoff Ratio:")}</p>
					<input type="text" placeholder={__("Payoff Ratio...")} value={this.state.payoffRatio}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.yellow]: 1}.toCss}>
					<p>{__("Profit Factor:")}</p>
					<input type="text" placeholder={__("Profit Factor...")} value={this.state.profitFactor}/>
				</div>
				<div className={{[styles.inputField]: 1, [styles.yellow]: 1}.toCss}>
					<p>{__("Expectancy:")} </p>
					<input type="text" placeholder={__("Expectancy...")} value={this.state.expectency}/>
				</div>
			</div>
		</div>
	}
}