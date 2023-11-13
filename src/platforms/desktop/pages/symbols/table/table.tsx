import React, {PureComponent} from "react";
import styles from './table.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {TopSymbols} from "services/top-symbols";
// import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";
// import {ChartDraw} from "services/chart-draw";
import { TooltipProps } from 'recharts';
import {
	ValueType,
	NameType,
} from 'recharts/src/component/DefaultTooltipContent';
import {SearchBox} from "./search-box";
import {TableSymbols} from "./table-symbols";



declare const window: any;

const CustomTooltip = ({active, payload, label}: TooltipProps<ValueType, NameType>)  => {
	if (active) {
		return (
			<div className={styles.tooltip}>
				<p className={styles.label}>{`date : ${(new Date(parseInt(label)*1000)).toDateString()}`}</p>
				<p className={styles.desc}>{`price: $${payload[0].value}`}</p>
			</div>
		);
	}

	return null;
};

const max_min_array = (data) => {
	data.sort(function (a, b) {
		return a.Cost - b.Cost
	})
	let min = data[0],
		max = data[data.length-1]
	return {min: min, max: max}
}

// @Observer([TopSymbols, ChartDraw])
@Observer([TopSymbols])
export class Table extends PureComponent {
	@wired i18 = pick(I18nService)
	@wired topSymbols = pick(TopSymbols)
	// @wired chartDraw = pick(ChartDraw)
	state = {
		path: 'Forex',
		chart: 'EURUSD',
		searchKey: '',
		sortBy: 0
	}
	setPath = (item) => {
		return this.setState({path: item, chart: this.topSymbols.data[item][0]['Symbol']})
	}
	setChart = (item) => {
		window.scrollTo({
			behavior: 'smooth',
			top: document.getElementById('contentTable').offsetTop,
		})
		return this.setState({chart: item})
	}
	setSearchKey = event => {
		return this.setState({searchKey: event.target.value})
	}
	setSortBy = (item) => {
		return this.setState({sortBy: item})
	}
	render() {
		const {path, chart, searchKey, sortBy} = this.state
		const {data, categories} = this.topSymbols;
		// const dataChartDraw = this.chartDraw.data;
		const {commafy, __} = this.i18
		return <div className={styles.table}>
			<Container className={styles.container}>
				<div className={styles.topContent}>
					<p>{__('Did you know that for the first time in the world, you can trade over 360 different symbols with the lowest commission and spread in Aron Groups global broker.')}</p>
					<p>{__('By opening an account at Aron Groups Broker, you can make a daily profit from your balance at Aron Groups and even be one of the lucky winners of various Aron competitions. In Aron, you can have a unique deal with your favorite Toman symbols, tailored to your taste and knowledge.')}</p>
					<p>{__('Also, in Aron Groups Broker, for the first time, you can trade with high leverage and zero margin, you will not find these golden opportunities together anywhere else.')}</p>
					<p>{__('The traded symbols in Aron Groups Broker are as follows:')}</p>
					<span>{__('13 Symbol of Precious Metals')}</span>
					<span>{__('103 Currency pair symbol')}</span>
					<span>{__('33 special symbols of Aron Groups Broker (Toman)')}</span>
					<span>{__('3 energy symbols')}</span>
					<span>{__('12 symbols of global stock indices (Dow Jones, Nasdaq, S & P, Dex Germany, Coke France, Fetsy London, etc.)')}</span>
					<span>{__('80 digital currency symbols')}</span>
					<span>{__('48 stock symbols registered in the US market')}</span>
					<span>{__('32 stock symbols of European companies')}</span>
					<span>{__('30 stock symbols of Asian companies')}</span>
					<span>{__('25 stock symbols of Russian companies')}</span>
					<span>{__('7 Icons for ETFs')}</span>
					<p>{__('Trade the world with Aron Groups global broker .')}</p>
				</div>
				<h2 className={styles.tableTitle}>{__('Aron Groups Broker Trading Symbols')}</h2>
				<div className={styles.contentTable} id="contentTable">
					<ul className={styles.tableMenu}>
						{categories.map(((item, index) => {
							return (item.includes(('_')) ? <li key={index} className={{[styles.tableMenuItem]: 1,[styles.active]: (item === path) ? 1 : 0}.toCss} onClick={() => this.setPath(item)}>{item.replace('_', ' ')}</li> :
								<li key={index} className={{[styles.tableMenuItem]: 1, [styles.active]: (item === path) ? 1 : 0}.toCss} onClick={() => this.setPath(item)}>{item}</li>)
						}))}
					</ul>
					<div className={styles.chart}>
						<ul className={styles.chartNavigation}>
							<li className={styles.chartNavigationItem}>1D</li>
							<li className={styles.chartNavigationItem}>1M</li>
							<li className={{[styles.chartNavigationItem]: 1, [styles.active]: 1}.toCss}>3M</li>
							<li className={styles.chartNavigationItem}>1Y</li>
							<li className={styles.chartNavigationItem}>All</li>
						</ul>
						<div className={styles.mainChart}>
							<div className={styles.chartTitle}>
								<h4>{chart}</h4>
							</div>
							{/*<ResponsiveContainer width='100%' aspect={20.0/4.0}>*/}
							{/*	<AreaChart data={dataChartDraw[chart]}>*/}
							{/*		<defs>*/}
							{/*			<linearGradient id="color" x1="0" y1="0" x2="0" y2="1">*/}
							{/*				<stop offset="35%" stopColor="#0C606E" stopOpacity={0.75}/>*/}
							{/*				<stop offset="75%" stopColor="#0C606E" stopOpacity={0.15}/>*/}
							{/*			</linearGradient>*/}
							{/*		</defs>*/}
							{/*		<Area dataKey='value' stroke="#0C606E" fill="url(#color)" />*/}
							{/*		<XAxis dataKey='time' axisLine={false} tickLine={false} tickFormatter={timestamp => {*/}
							{/*			let date = new Date(timestamp*1000);*/}
							{/*			return date.toDateString();*/}
							{/*		}}/>*/}
							{/*		<YAxis domain={[max_min_array(dataChartDraw[chart]).min, max_min_array(dataChartDraw[chart]).max]} orientation='right' dataKey="value" axisLine={false} tickLine={false} tickCount={8}*/}
							{/*		tickFormatter={(number) => {*/}
							{/*			return `$${commafy(number)}`*/}
							{/*		}}*/}
							{/*		/>*/}
							{/*		<Tooltip content={<CustomTooltip />} />*/}
							{/*		<CartesianGrid opacity={0.1} vertical={false}/>*/}
							{/*	</AreaChart>*/}
							{/*</ResponsiveContainer>*/}
						</div>
					</div>
					<SearchBox set_search_key={this.setSearchKey} set_sort_by={this.setSortBy} search_key={searchKey} sort_by={0}/>
					{/*<TableSymbols search_key={searchKey} data={data[path]} sort_by={sortBy} dataChartDraw={dataChartDraw} max_min_array={max_min_array} set_chart={this.setChart}/>*/}
				</div>
			</Container>
		</div>
	}

}