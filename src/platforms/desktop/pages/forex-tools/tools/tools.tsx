import React, {PureComponent} from "react";
import styles from './tools.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {CompoundInterest} from "../compound-interest/compound-interest";
import {PositionSize} from "../position-size/position-size";
import {MoneyManagement} from "../money-management/money-management";
import {MinimumWinRate} from "../minimum-win-rate/minimum-win-rate";
import {ConsecutiveLoss} from "../consecutive-loss/consecutive-loss";
import {AsymmetryOfLoss} from "../asymmetry-of-loss/asymmetry-of-loss";


@Observer([])
export class Tools extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		page: 0
	}
	render() {
		const {__} = this.i18;
		return <div className={styles.tools}>
			<Container className={styles.container}>
				<div className={styles.forexToolsWrapper}>
					<ul className={styles.headWrapper}>
						<li className={{[styles.active] : (this.state.page === 0)}.toCss} onClick={() => this.setState({page: 0})}>
							<img src={(this.state.page === 0) ? require('./1.png').default : require('./2-1.png').default} alt=""/>
							<p>{__("Compound Interest")}</p>
						</li>
						<li className={{[styles.active] : (this.state.page === 1)}.toCss} onClick={() => this.setState({page: 1})}>
							<img src={(this.state.page === 1) ? require('./2.png').default : require('./2-2.png').default} alt=""/>
							<p>{__("Position Size")}</p>
						</li>
						<li className={{[styles.active] : (this.state.page === 2)}.toCss} onClick={() => this.setState({page: 2})}>
							<img src={(this.state.page === 2) ? require('./3.png').default : require('./2-3.png').default} alt=""/>
							<p>{__("Money Management")}</p>
						</li>
						<li className={{[styles.active] : (this.state.page === 3)}.toCss} onClick={() => this.setState({page: 3})}>
							<img src={(this.state.page === 3) ? require('./4.png').default : require('./2-4.png').default} alt=""/>
							<p>{__("Minimum Win Rate")}</p>
						</li>
						<li className={{[styles.active] : (this.state.page === 4)}.toCss} onClick={() => this.setState({page: 4})}>
							<img src={(this.state.page === 4) ? require('./5.png').default : require('./2-5.png').default} alt=""/>
							<p>{__("Consecutive Loss")}</p>
						</li>
						<li className={{[styles.active] : (this.state.page === 5)}.toCss} onClick={() => this.setState({page: 5})}>
							<img src={(this.state.page === 5) ? require('./3.png').default : require('./2-3.png').default} alt=""/>
							<p>{__("Asymmetry of Loss")}</p>
						</li>
					</ul>
					<div className={styles.content}>
						{(this.state.page === 0) ? <CompoundInterest title={__("Compound Interest")} description={__('This instrument calculates the compound interest of your deposit. Just enter the amount of your initial capital, number of transactions and the interest rate (percentage) in the field to show the amount of capital after the compound interest is added to your deposit.')} /> : ''}
						{(this.state.page === 1) ? <PositionSize title={__("Position Size")} description={__("The position size calculator calculates the required transaction volume. All you have to do is enter the necessary parameters such as currency pairs, balance, risk percentage, price at the entry point, stop loss price, leverage, etc.; to in the desired sections getting an estimated volume of the transaction you need.")}/> : ''}
						{(this.state.page === 2) ? <MoneyManagement title={__("Money Management")} description={__("By using the money management calculator and entering parameters such as the total number of trades you have made, the number of profit times, the number of loss times, your gross profit and your gross loss, you can calculate things like net profit, return ratio, win rate, profit rate, loss rate, etc.")}/> : ''}
						{(this.state.page === 3) ? <MinimumWinRate title={__("Minimum Win Rate")} description={__("This instrument helps you estimate the minimum win rate suited with your desired risk/reward ratio. All you need is to enter your desired risk/reward ratio in the calculator.")} /> : ''}
						{(this.state.page === 4) ? <ConsecutiveLoss title={__("Consecutive Loss")} description={__("In this part you can calculate number of consecutive losses of your trade and use them for improving your future performance. Just enter the number of transactions and your win rate in the fields.")} /> : ''}
						{(this.state.page === 5) ? <AsymmetryOfLoss title={__("Asymmetry of Loss")} description={__("This calculator calculates the minimum profit you need to make to compensate your loss in percentage. All you need is to enter your loss percentage in the field.")}/> : ''}
					</div>
				</div>
			</Container>
		</div>
	}
}