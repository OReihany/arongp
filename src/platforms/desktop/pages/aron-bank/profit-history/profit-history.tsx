import React, {PureComponent} from "react";
import styles from './profit-history.module.scss';
import {Container} from "components/container/container";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Cell,LabelList, ResponsiveContainer} from 'recharts';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";


const data = [
	{
		name: 'January',
		A_Nav: 30.92,
		A_Nav_Ins: 0,
		amt: 2400,
	},
	{
		name: 'February',
		A_Nav: 15.95,
		A_Nav_Ins: 0,
		amt: 2210,
	},
	{
		name: 'March',
		A_Nav: 20.01,
		A_Nav_Ins: 0,
		amt: 2290,
	},
	{
		name: 'June',
		A_Nav: 13.79,
		A_Nav_Ins: 0,
		amt: 2000,
	},
	{
		name: 'July',
		A_Nav: 9.03,
		A_Nav_Ins: 0,
		amt: 2181,
	},
	{
		name: 'August',
		A_Nav: 22.47,
		A_Nav_Ins: 25.24,
		amt: 2500,
	},
	{
		name: 'September',
		A_Nav: 0,
		A_Nav_Ins: 15.69,
		amt: 2500,
	},
	{
		name: 'October',
		A_Nav: 0,
		A_Nav_Ins: 10.21,
		amt: 2500,
	},
	{
		name: 'November',
		A_Nav: 0,
		A_Nav_Ins: 7.15,
		amt: 2500,
	},
	{
		name: 'December',
		A_Nav: 0,
		A_Nav_Ins: 9.05,
		amt: 2500,
	}
];



const dataR = [
	{name: 'January', value: 7.10},
	{name: 'February', value: 8.32},
	{name: 'March', value: 6.25},
	{name: 'April', value: 6.10},
	{name: 'May', value: 5.09},
	{name: 'June', value: 5.10},
	{name: 'July', value: 4.50},
	{name: 'August', value: 5.20},
];
const dataB = [
	{name: 'April - June', value: 44.46},
	{name: 'July - September', value: 52.48},
];

@Observer([I18nService])
export class ProfitHistory extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		invest: 0,
		numberTransaction: 0,
		percentage: 0,
		data: [],
		com: 0,
		nonCom: 0
	}

	CustomTooltip = ({active, payload, label}) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip" style={{position: 'relative', top: '-70px', fontWeight: 700}}>
					<p className="label">{`${label} : ${payload[0].value} %`}</p>
					{/*<p className="desc">Anything you want can be displayed here.</p>*/}
				</div>
			);
		}

		return null;
	};

	render() {
		const {language} = this.i18;
		return <div className={styles.profitHistory}>
			<Container className={styles.container}>
				<div className={styles.historyWrapper}>
					<div className={styles.top}>
						<h2>{(language === 'fa') ? 'سود سال 2021 صندوق سرمایه گذاری آرون' : 'Aron Investment Fund 2021 Profit'}</h2>
						<div className={styles.content}>
							<div>
								<p>Aron NAV</p>
								<div style={{direction: "ltr", width: '100%'}}>
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											width={600}
											height={300}
											data={data}
											margin={{
												top: 20,
												right: 30,
												left: 20,
												bottom: 5,
											}}
										>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="name" />
											<YAxis />
											<Tooltip />
											<Legend />
											<Bar dataKey="A_Nav" stackId="a" fill="#8884d8" />
											<Bar dataKey="A_Nav_Ins" stackId="a" fill="#82ca9d" />
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
							<div>
								<p>Aron NAV - 3 Months</p>
								<div style={{direction: "ltr", width: '100%'}}>
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											width={500}
											height={300}
											data={dataB}
											margin={{
												top: 5,
												right: 20,
												left: 30,
												bottom: 5,
											}}
										>
											<CartesianGrid strokeDasharray="3 3"/>
											<XAxis dataKey="name"/>
											<YAxis/>
											<Tooltip content={this.CustomTooltip}/>
											<Legend/>
											<Bar dataKey="value" barSize={15} fill="#8884d8"/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.bottom}>
						<h2>{(language === 'fa') ? 'سود سال 2022 صندوق سرمایه گذاری آرون' : 'Aron Investment Fund 2022 Profit'}</h2>
						<div className={styles.content}>
							<div>
								<p>Aron NAV - Insured</p>
								<div style={{direction: "ltr", width: '100%'}}>
									<ResponsiveContainer width="100%" height="100%">
										<BarChart
											width={500}
											height={300}
											data={dataR}
											margin={{
												top: 5,
												right: 20,
												left: 30,
												bottom: 5,
											}}
										>
											<CartesianGrid strokeDasharray="3 3"/>
											<XAxis dataKey="name"/>
											<YAxis/>
											<Tooltip content={this.CustomTooltip}/>
											<Legend/>
											<Bar dataKey="value" barSize={15} fill="#8884d8"/>
										</BarChart>
									</ResponsiveContainer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>;
	}
}