import React, {PureComponent} from "react";
import styles from './compound-interest.module.scss';
import {Container} from "components/container/container";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";

export interface CompoundInterestProps {
	title: string,
	description: string,
}

@Observer([])
export class CompoundInterest extends PureComponent<CompoundInterestProps> {
	@wired i18 = pick(I18nService);
	state = {
		invest: 0,
		numberTransaction: 0,
		percentage: 0,
		data: [],
		com: 0,
		nonCom: 0
	}

	changeInvest = (e) => {
		let value = e.target.value;
		this.setState({invest: value, nonCom: parseFloat(value) * (1 + (this.state.numberTransaction * (this.state.percentage / 100))), com: parseFloat(value) * Math.pow((1 + (this.state.percentage / 100)), this.state.numberTransaction)});
		this.createData(parseFloat(value), (this.state.percentage/100))
	}
	changeNumber = (e) => {
		if (this.isInt(parseInt(e.target.value))) {
			//@ts-ignore
			this.setState({numberTransaction: parseInt(e.target.value), nonCom: this.state.invest * (1 + (parseInt(e.target.value) * (this.state.percentage / 100))), com: this.state.invest * Math.pow((1 + (this.state.percentage / 100)), parseInt(e.target.value))});
		} else {
			this.setState({numberTransaction: 0, nonCom: this.state.invest , com: this.state.invest * Math.pow((1 + (this.state.percentage / 100)), 0)});
		}
	}

	changePercentage = (e) => {
		let value = (e.target.value);
		this.setState({percentage: value, nonCom: this.state.invest * (1 + (this.state.numberTransaction * parseFloat(value) / 100)), com: this.state.invest * Math.pow((1 + parseFloat(value) / 100), this.state.numberTransaction)});
		this.createData(this.state.invest, parseFloat(value)/100);
	}

	createData = (inv, per) => {
		let count = 0;
		let data = []
		while (count < 101) {
			data.push({name: count, com: inv*Math.pow((1 + (per)), count), nonCom: inv*(1+(per*count))});
			count += 1 ;
		}
		this.setState({data})
	}

	isInt = (n) => {
		return Number(n) === n && n % 1 === 0;
	}

	isFloat = (n) => {
		return Number(n) === n && n % 1 !== 0;
	}

	render() {
		const {invest, numberTransaction, percentage, data, com, nonCom} = this.state;
		const {__} = this.i18;
		return <div className={styles.compoundInterest}>
			<Container className={styles.container}>
				<div className={styles.title}>
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</div>
				<div className={styles.compoundInterestWrapper}>
					<div className={styles.problems}>
						<div className={styles.problem}>
							<p>{__("Initial Investment")}</p>
							<input type="text" onChange={(e) => this.changeInvest(e)} value={invest}/>
						</div>
						<div className={styles.problem}>
							<p>{__("Number of transactions")}</p>
							<input type="text" onChange={(e) => this.changeNumber(e)} value={numberTransaction}/>
						</div>
						<div className={styles.problem}>
							<p>{__("Interest rates")}</p>
							<input type="text" onChange={(e) => this.changePercentage(e)} value={percentage}/>
						</div>
						<div className={styles.problem}>
							<p>{__("Secondary capital (non-composite)")}</p>
							<input type="text" disabled={true} value={nonCom}/>
						</div>
						<div className={styles.problem}>
							<p>{__("Secondary capital (composite)")}</p>
							<input type="text" disabled={true} value={com}/>
						</div>
					</div>
					<div className={styles.result}>
						<ResponsiveContainer width="100%" height="100%">
							<AreaChart
								width={500}
								height={400}
								data={data}
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								}}
							>
								<CartesianGrid strokeDasharray="3 3"/>
								<XAxis dataKey="name"/>
								<YAxis/>
								<Tooltip/>
								<Area type="monotone" dataKey="nonCom" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
								<Area type="monotone" dataKey="com" stackId="1" stroke="#8884d8" fill="#8884d8"/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
			</Container>
		</div>;
	}
}