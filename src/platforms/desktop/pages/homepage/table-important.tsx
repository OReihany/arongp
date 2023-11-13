import React, {PureComponent} from "react";
import styles from './table-important.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {TopSymbols} from "services/top-symbols";
import {tr} from "date-fns/locale";


@Observer([TopSymbols])
export class TableImportant extends PureComponent {
	@wired i18 = pick(I18nService)
	@wired topSymbols = pick(TopSymbols)
	state = {
		path: 'Forex'
	}

	render() {
		const {path} = this.state;
		let dataSymbol = this.topSymbols.data || {};
		let data = {};
		data['Shares'] = []
		Object.keys(dataSymbol).map((item) => {
			if (item.includes('Shares')) {
				data['Shares'].push(...dataSymbol[item]);
			} else {
				if (!item.includes('Others')) {
					data[item] = dataSymbol[item]
				}
			}
		})
		const categories = this.topSymbols.categories || [];
		const templateSymbols = [
			'EURUSD', 'USDJPY', 'GBPUSD', 'USDCHF', 'USDCAD', 'AUDUSD', 'NZDUSD', 'EURGBP', 'GBPJPY', 'GBPAUD', 'EURCHF',
			'AUDCAD', 'GBPNZD', 'CHFJPY', 'AronGold.IR', 'AronCoin.IR', 'AronGOLD17W_Mesghal', 'USDIRT', 'USDIRT_Harat', 'USDIRT_Soleymanie', 'EURIRT',
			'GBPIRT', 'TRYIRT', 'AEDIRT', 'AUDIRT', 'CADIRT', 'CNHIRT', 'JPYIRT', 'XAUUSD', 'XAGUSD', 'XPDUSD', 'XPTUSD', 'CUCUSD', 'DJIUSD',
			'NDXUSD', 'DAXEUR', 'FTSGBP', 'NIKJPY', 'F40EUR', 'ESXEUR', 'SPXUSD', 'IBXEUR', 'SMICHF', 'HSIHKD', 'ASXAUD', 'XINUSD', 'DXY', 'BRNUSD', 'NGCUSD',
			'WTIUSD', 'BTCUSD', 'ETHUSD', 'LTCUSD', 'XRPUSD', 'BCHUSD', 'BNBUSD', 'ADAUSD', 'DOGUSD', 'DOTUSD', 'SOLUSD', 'SHBUSD', 'CAKEUSD', 'UNIUSD',
			'TRXUSD', 'AAPL', 'AMZN', 'GOOGL', 'IBM', 'INTC', 'MSFT', 'BMW', 'DAI', 'VOW3', 'Canon', 'Honda', 'Toyota', 'Sony', 'GAZP',
		];
		const {__} = this.i18;
		const tableHeader = [__('Symbol'), __('Price'), __('Spread'), __('Day'), __('Week')]
		const setTabRow = (pathName) => {
			this.setState({'path': pathName})
		}
		return <div className={styles.main}>
			<div className={styles.tableComponent}>
				<div className={styles.tableTitle}>
					<h4>{__('Most Important Symbols')}</h4>
				</div>
				<div className={styles.tableWrapper}>
					<ul className={styles.menu} id="menuSlider">{
						categories.map(((item, index) => {
							if (item.includes('Shares') || item.includes('Other') || item.includes('ETFs')) {

							} else {
								return (item.includes(('_'))) ? <li key={index} className={{[styles.active]: (item === path) ? 1 : 0}.toCss} onClick={() => setTabRow(item)}>{item.replace('_', ' ')}</li> :
									<li key={index} className={{[styles.active]: (item === path) ? 1 : 0}.toCss} onClick={() => setTabRow(item)}>{item}</li>
							}

						}))
					}
						<li key={20} className={{[styles.active]: ('Shares' === path) ? 1 : 0}.toCss} onClick={() => setTabRow('Shares')}>Shares</li>
					</ul>
					<div className={styles.tableContentWrapper}>
						<table cellSpacing="0" cellPadding="0">
							<thead>
							<tr>
								{tableHeader.map((item, index) => {
									return <th key={index}>
										{item}
									</th>
								})}
							</tr>
							</thead>
							<tbody>
							{data[path] ? data[path].map((item, index) => {
								if (templateSymbols.indexOf(item['Symbol']) > -1) {
									return <tr>
										<td>
											{item['Symbol']}
										</td>
										<td>
											{item['BidLast'].toFixed(item['Digits'])}
										</td>
										<td>
											{item['Spreed']}
										</td>
										<td style={{direction: 'ltr'}}>
											{(item['Day'] * 100).toFixed(2)} %
										</td>
										<td style={{direction: 'ltr'}}>
											{(item['Week'] * 100).toFixed(2)} %
										</td>
									</tr>
								}

							}) : ''}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	}

}
