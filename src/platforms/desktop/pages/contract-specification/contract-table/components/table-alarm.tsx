import React, {PureComponent} from "react";
import styles from './table-alarm.module.scss'
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Category} from "./menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Container} from "components/container/container";


interface AlarmTableProps {
	path: string;
}


@Observer([])
export class TableAlarm extends PureComponent<AlarmTableProps> {
	@wired i18 = pick(I18nService);


	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		const {path} = this.props;
		const indexPath = (path.includes('.')) ? path.split('.')[0] : path;
		const dataAlarm = {
			"Iranian Market": [0.03, 0.02, 0.015, 0, 0.01, 0],
			"Forex": [0.006, 0.0028, 0.0014, 0, 0.004, 0],
			"Spot Metals": [0.006, 0.0028, 0.0014, 0, 0.004, 0],
			"Spot Energies": [0.006, 0.0028, 0.0014, 0, 0.004, 0],
			"Indices": [0.006, 0.0028, 0.0014, 0, 0.004, 0],
			"Crypto Currency": [0.13, 0.07, 0.06, 0.023, 0.18, 0.044],
			"Shares": [0, 0.06, 0.04, 0, 0.4, 0],
			"Binance": [0.2, 0.1, 0, 0.5, 0.4, 0],
		}
		const dataAlarmSwap = dataAlarm[indexPath]
		const data = [
			{'title': __('Standard Account Commission'), 'value': `${dataAlarmSwap[0]}%` + __(' of the trading value'), 'color': '#0dd2e1'},
			{'title': __('VIP Account Commission'), 'value': `${dataAlarmSwap[1]}%` + __(' of the trading value'), 'color': '#0cd106'},
			{'title': __('Swap Free Account Commission'), 'value': `${dataAlarmSwap[2]}%` + __(' of the trading value'), 'color': '#09dc88'},
			{'title': __('Nano Account Commission'), 'value': `${dataAlarmSwap[3]}%` + __(' of the trading value'), 'color': '#ff5454'},
			{'title': __('Zulu Account Commission'), 'value': `${dataAlarmSwap[4]}%` + __(' of the trading value'), 'color': '#0962c2'},
			{'title': __('Binance Account Commission'), 'value': `${dataAlarmSwap[5]}%` + __(' of the trading value'), 'color': '#8d7511'},
		]
		const data_filter = [
			{"symbol": "Iranian Market", "lot": "≤ 3", "leverage": "100"},
			{"symbol": "Iranian Market", "lot": "3 < Lot ≤ 10", "leverage": "50"},
			{"symbol": "Iranian Market", "lot": ">10", "leverage": "20"},
			{"symbol": "AronGOLD17w_Mesghal", "lot": "0.3", "leverage": "100"},
			{"symbol": "AronGOLD17w_Mesghal", "lot": "3 < Lot ≤ 1", "leverage": "50"},
			{"symbol": "AronGOLD17w_Mesghal", "lot": ">1", "leverage": "20"},
		]
		return <div className={styles.tableAlarm}>
			<Container className={styles.container}>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Did you know that for the first time in the world, you can trade over +1000 Market/Symbol with the lowest commission and spread in Aron Groups global broker.')}</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('By opening an account at Aron Groups Broker, you can make a daily profit from your balance at Aron Groups and even be one of the lucky winners of various Aron competitions.')}</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('In Aron, you can have a unique deal with your favorite Toman symbols, tailored to your taste and knowledge.')}</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Also, in Aron Groups Broker, for the first time, you can trade with high leverage and zero margin, you will not find these golden opportunities together anywhere else.')}</p>

				<h2>{__("New Trading Conditions in Aron Groups")}</h2>
				<p> <b>{__("Note:")}</b> {__("The total volume of open transactions is calculated on the above symbols. For example, if a trader opens 3 trading lots on the Tehran-USD symbol in a standard account, these transactions will be created for him with a leverage of 100. If the mentioned person adds two more lots to his volume, due to crossing the first limit, the second 2 lots will be opened for him with the 50 leverage.")}</p>
				<p> <b>{__("Note:")}</b> {__("The abovementioned volume for nano accounts is calculated based on Nano account's base volume.")}</p>
				<div className={styles.tableContainer}>
					<table>
						{
							<thead>
							<tr>
								<th>{__('Symbols')}</th>
								<th>{__('Lot')}</th>
								<th>{__('Leverage')}</th>
							</tr>
							</thead>
						}
						<tbody>
						{
							data_filter.map((item, i) => {
								return <tr key={i}>
									<td>{item['symbol']}</td>
									<td style={{direction:"ltr"}}>{item['lot']}</td>
									<td>{item['leverage']}</td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				<h2 data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Broker Trading Symbols')}</h2>
				<div className={styles.contentWrapper}>
					{
						data.map((item, index) => {
							return <div data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"
										key={index} className={styles.contentGroup}>
								<p data-aos={(index < 2) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{item.title}</p>
								<span data-aos={(index < 2) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"
									  style={{color: item.color}}>{item.value}</span>
							</div>
						})
					}
				</div>
			</Container>
		</div>;
	}

}