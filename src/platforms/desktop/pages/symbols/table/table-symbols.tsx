import React, {PureComponent} from "react";
import styles from './table-symbols.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";



export interface TableSymbolsProps {
	data: any,
	dataChartDraw: any,
	max_min_array: any,
	set_chart: any,
	search_key: string,
	sort_by: number,
}


@Observer([])
export class TableSymbols extends PureComponent<TableSymbolsProps>{
	@wired i18 = pick(I18nService)
	render() {
		const {data, dataChartDraw, max_min_array, set_chart, search_key, sort_by} = this.props
		const {__, commafy} = this.i18
		return (
			<div className={styles.tableSymbols}>
				<table>
					<thead>
					<tr>
						<th>#</th>
						<th>Symbol</th>
						<th>Price</th>
						<th>Spread</th>
						<th>Day</th>
						<th>Week</th>
						<th>Chart</th>
						<th>Trade</th>
					</tr>
					</thead>
					<tbody>
					{
						data.sort((a,b) => {
							if (sort_by === 0){
								let nameA=a.Symbol.toLowerCase(), nameB=b.Symbol.toLowerCase()

								if (nameA < nameB)
									return -1
								if (nameA > nameB)
									return 1
								return 0
							}else {
								let nameA=a.Symbol.toLowerCase(), nameB=b.Symbol.toLowerCase()

								if (nameA > nameB)
									return -1
								if (nameA < nameB)
									return 1
								return 0
							}
						}).filter((value => {
							const title = value.Symbol.toLowerCase()
							return title.includes(search_key.toLowerCase())
						})).map((item, index) => {
							return (
								<tr className={{[styles.contentRow]: 1, [styles.active]:(index%2 === 0 ? 0 : 1)}.toCss} key={index}>
									<td>{index+1}</td>
									<td>{item['Symbol']}</td>
									<td>{commafy(item['BidLast'].toFixed(item['Decimal']))}</td>
									<td>{item['Spreed']}</td>
									<td className={{[styles.red]: (item['Day'] > 0) ? 0 : 1,[styles.white]: (item['Day'] === 0) ? 1 : 0,[styles.green]: (item['Day'] > 0) ? 1 : 0}.toCss}>{(item['Day'] > 0 ? (item['Day'] * 100).toFixed(3) : (item['Day'] * (-100)).toFixed(3))} %</td>
									<td className={{[styles.red]: (item['Week'] > 0) ? 0 : 1,[styles.white]: (item['Week'] === 0) ? 1 : 0,[styles.green]: (item['Week'] > 0) ? 1 : 0}.toCss}>{(item['Week'] > 0 ? (item['Week'] * 100).toFixed(3) : (item['Week'] * (-100)).toFixed(3))} %</td>
									<td style={{cursor: 'pointer'}} onClick={() => set_chart(item['Symbol'])}>
										<ResponsiveContainer width='100%' height='100%'>
											<AreaChart data={dataChartDraw[item['Symbol']]}>
												<defs>
													<linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
														<stop offset="35%" stopColor="#0C606E" stopOpacity={0.75}/>
														<stop offset="75%" stopColor="#0C606E" stopOpacity={0.15}/>
													</linearGradient>
												</defs>
												<Area dataKey='value' stroke="#0C606E" fill="url(#color)" />
												<XAxis hide={true} dataKey='time' axisLine={false} tickLine={false} />
												<YAxis hide={true} domain={[max_min_array(dataChartDraw[item['Symbol']]).min, max_min_array(dataChartDraw[item['Symbol']]).max]} orientation='right' dataKey="value" axisLine={false} tickLine={false} tickCount={8}/>
												<CartesianGrid opacity={0.1} vertical={false}/>
											</AreaChart>
										</ResponsiveContainer>
									</td>
									<td>
										<a className={styles.trade} href="https://my.arongroups.co/en/register">
											Trade
										</a>
									</td>
								</tr>
							);
						})
					}
					</tbody>
				</table>
			</div>
		);
	}
}