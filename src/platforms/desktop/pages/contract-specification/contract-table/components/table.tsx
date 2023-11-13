import React, {PureComponent} from "react";
import styles from './table.module.scss';


interface TableProps {
	path: string;
	data: any;
	__: any;
	language: any;

	searchValue: string,
	sortKey: number
}

function numberExponentToLarge(numIn) {
	numIn += "";
	var sign = "";
	numIn.charAt(0) == "-" && (numIn = numIn.substring(1), sign = "-");
	var str = numIn.split(/[eE]/g);
	if (str.length < 2) return sign + numIn;
	var power = str[1];
	if (power == 0 || power == -0) return sign + str[0];

	var deciSp = 1.1.toLocaleString().substring(1, 2);
	str = str[0].split(deciSp);
	var baseRH = str[1] || "",
		baseLH = str[0];

	if (power > 0) {
		if (power > baseRH.length) baseRH += "0".repeat(power - baseRH.length);
		baseRH = baseRH.slice(0, power) + deciSp + baseRH.slice(power);
		if (baseRH.charAt(baseRH.length - 1) == deciSp) baseRH = baseRH.slice(0, -1);

	} else {
		let num = Math.abs(power) - baseLH.length;
		if (num > 0) baseLH = "0".repeat(num) + baseLH;
		baseLH = baseLH.slice(0, power) + deciSp + baseLH.slice(power);
		if (baseLH.charAt(0) == deciSp) baseLH = "0" + baseLH;
	}
	return sign + baseLH + baseRH;
}


export class Table extends PureComponent<TableProps> {
	state = {

	}
	componentDidMount() {

	}
	sort_by = (field, reverse, primer) => {

		const key = primer ?
			function(x) {
				return primer(x[field])
			} :
			function(x) {
				return x[field]
			};

		reverse = !reverse ? 1 : -1;

		return function(a, b) {
			//@ts-ignore
			return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
		}
	}

	render() {
		const {searchValue, sortKey, __, path, data} = this.props;
		const category = path.includes('.') ? path.split('.')[0] : path;
		const subCategory = path.includes('.') ? path.split('.')[1] : '';
		const dataFiltered = (searchValue.trim() !== "") ? data : subCategory === '' ? data.filter(value => value['category'] === category) : data.filter(value => value['category'] === category && value["sub-category"] === subCategory);
		let data_filter = (sortKey === 0) ? dataFiltered.filter(item => item["symbol"].toLowerCase().includes(searchValue)) : dataFiltered.sort(this.sort_by("symbol", sortKey !== 1 ? 1 : 0, (a) =>  a.toLowerCase())).filter(item => item["symbol"].toLowerCase().includes(searchValue));
		return (
			<div className={styles.tableContainer}>
				<table>
					{
						<thead>
						<tr>
							<th>#</th>
							<th>{__('Symbol')}</th>
							<th>{__('Full Name')}</th>
							<th>{__('Contract Size')}</th>
							<th>{__('Tick Size')}</th>
							<th>{__('Max Leverage')}</th>
							<th>{__('Trading Time (GMT+3)')}</th>
						</tr>
						</thead>
					}
					<tbody>
					{
						data_filter.map((item, i) => {
							return <tr key={i}>
								<td>{i + 1}</td>
								<td>{item['symbol']}</td>
								<td>{item['fullname']}</td>
								<td>{item['contract-size']}</td>
								<td>{numberExponentToLarge(parseFloat(item['tick-size']))}</td>
								<td>{item['leverage']}</td>
								<td>{item['trading-time']}</td>
							</tr>
						})
					}
					</tbody>
				</table>
			</div>
		)
	}
}