import React, {PureComponent} from "react";
import styles from './vacation.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {Modal} from "../modal/modal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {TradingSymbolService} from "services/trading-symbol";


@Observer([TradingSymbolService])
export class Vacation extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired tradingSymbolService = pick(TradingSymbolService);
	state = {
		modalSet: 0,
		data: [],
		pageTable: 0
	}

	componentDidMount() {
		let mount = true;
		if (mount) {
			this.setState({data: this.tradingSymbolService.data.data || []});
		}
		AOS.init({
			duration: 1000,
			once: true
		});
		AOS.refresh();
	}

	resetModal = () => this.setState({modalSet: 0});

	render() {
		const {__} = this.i18;
		const {modalSet, data, pageTable} = this.state;
		const tableCondition = {
			"Iranian Market": [0.02, 0.015, 0],
			"Forex, Spot Metals, Indices, Spot Energies": [0.0032, 0.0016, 0],
			"Crypto Currency": [0.05, 0.04, 0.022],
			"Shares": [0.06, 0.04, 0]
		};
		const tableCommissions = [
			{"name": __("Minimum Volume"), "nano": "0.01 " + __("Nano Lots"), "standard": "0.01", "cash": "0.001", "vip": "0.01", "prop": "0.01"},
			{"name": __("Maximum Volume"), "nano": "5 " + __("Nano Lots"), "standard": "5", "cash": "5", "vip": "20", "prop": "5"},
			{"name": __("Increasing Step"), "nano": "0.01 " + __("Nano Lots"), "standard": "0.01", "cash": "0.001", "vip": "0.01", "prop": "0.01"},
			{"name": __("Open Position Maximum"), "nano": "50 " + __("Nano Lots"), "standard": "50", "cash": "50", "vip": "100", "prop": "50"},
			{"name": __("Open Position Maximum Value"), "nano": "500,000", "standard": "5,000,000", "cash": "5,000,000", "vip": "10,000,000", "prop": "5,000,000"}
		]
		const tableSwappFree = [{'Instrument': 'AUDCHF.nano', 'Name': 'Australian Dollar vs Swiss Franc', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.16}, {'Instrument': 'AUDJPY.nano', 'Name': 'Australian Dollar vs Japanese Yen', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.2}, {
			'Instrument': 'AUDNZD.nano',
			'Name': 'Australian Dollar vs New Zealand Dollar',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.08
		}, {'Instrument': 'AUDUSD.nano', 'Name': 'Australian Dollar vs US Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.06}, {'Instrument': 'CADCHF.nano', 'Name': 'Canadian Dollar vs Swiss Franc', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.2}, {'Instrument': 'CADJPY.nano', 'Name': 'Canadian Dollar vs Japanese Yen', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.24}, {
			'Instrument': 'CHFJPY.nano',
			'Name': 'Swiss Franc vs Japanese Yen',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.14
		}, {'Instrument': 'EURAUD.nano', 'Name': 'Euro vs Australian Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.12}, {'Instrument': 'EURCAD.nano', 'Name': 'Euro vs Canadian Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.14}, {'Instrument': 'EURCHF.nano', 'Name': 'Euro vs Swiss Franc', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.2}, {
			'Instrument': 'EURGBP.nano',
			'Name': 'Euro vs Great Britain Pound',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.16
		}, {'Instrument': 'EURJPY.nano', 'Name': 'Euro vs Japanese Yen', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.24}, {'Instrument': 'EURNZD.nano', 'Name': 'Euro vs New Zealand Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.18}, {'Instrument': 'AUDCAD.nano', 'Name': 'Australian Dollar vs Canadian Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.04}, {
			'Instrument': 'EURUSD.nano',
			'Name': 'Euro vs US Dollar',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.18
		}, {'Instrument': 'USDJPY.nano', 'Name': 'US Dollar vs Japanese Yen', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.34}, {'Instrument': 'GBPAUD.nano', 'Name': 'Great Britain Pound vs Australian Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.1}, {
			'Instrument': 'GBPCAD.nano',
			'Name': 'Great Britain Pound vs Canadian Dollar',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.1
		}, {'Instrument': 'GBPCHF.nano', 'Name': 'Great Britain Pound vs Swiss Franc', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.38}, {'Instrument': 'GBPJPY.nano', 'Name': 'Great Britain Pound vs Japanese Yen', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.4}, {
			'Instrument': 'GBPNZD.nano',
			'Name': 'Great Britain Pound vs New Zealand Dollar',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.16
		}, {'Instrument': 'GBPUSD.nano', 'Name': 'Great Britain Pound vs US Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.18}, {'Instrument': 'NZDCAD.nano', 'Name': 'New Zealand Dollar vs Canadian Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.06}, {
			'Instrument': 'NZDCHF.nano',
			'Name': 'New Zealand Dollar vs Swiss Franc',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.18
		}, {'Instrument': 'NZDJPY.nano', 'Name': 'New Zealand Dollar vs Japanese Yen', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.22}, {'Instrument': 'NZDUSD.nano', 'Name': 'New Zealand Dollar vs US Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.04}, {'Instrument': 'USDCAD.nano', 'Name': 'US Dollar vs Canadian Dollar', 'Type': 'Forex', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.08}, {
			'Instrument': 'USDCHF.nano',
			'Name': 'US Dollar vs Swiss Franc',
			'Type': 'Forex',
			'Grace Days': 35,
			'Fees after Grace Period (USD/day)': 0.3
		}, {'Instrument': 'XAGUSD.nano', 'Name': 'Silver vs US Dollar', 'Type': 'Spot Metal', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.42}, {'Instrument': 'XAUUSD.nano', 'Name': 'Gold vs US Dollar', 'Type': 'Spot Metal', 'Grace Days': 35, 'Fees after Grace Period (USD/day)': 0.66}, {'Instrument': 'DJIUSD.nano', 'Name': 'Dow Jones Industrial Average 30 Index', 'Type': 'Indices', 'Grace Days': 10, 'Fees after Grace Period (USD/day)': 1.88}, {
			'Instrument': 'DAXEUR.nano',
			'Name': 'DAX 40 – Germany',
			'Type': 'Indices',
			'Grace Days': 10,
			'Fees after Grace Period (USD/day)': 0.8
		}, {'Instrument': 'NDXUSD.nano', 'Name': 'Nasdaq 100', 'Type': 'Indices', 'Grace Days': 10, 'Fees after Grace Period (USD/day)': 0.84}, {'Instrument': 'SPXUSD.nano', 'Name': 'S&P 500 Index', 'Type': 'Indices', 'Grace Days': 10, 'Fees after Grace Period (USD/day)': 0.24}, {'Instrument': 'BRNUSD.nano', 'Name': 'Oil-Brent Crude', 'Type': 'Commodities', 'Grace Days': 10, 'Fees after Grace Period (USD/day)': 0.26}, {
			'Instrument': 'ETHUSD.nano',
			'Name': 'Ethereum vs US Dollar',
			'Type': 'Crypto Currency',
			'Grace Days': 5,
			'Fees after Grace Period (USD/day)': 0.014
		}, {'Instrument': 'BTCUSD.nano', 'Name': 'BitCoin vs US Dollar', 'Type': 'Crypto Currency', 'Grace Days': 5, 'Fees after Grace Period (USD/day)': 0.21}, {'Instrument': 'LTCUSD.nano', 'Name': 'LiteCoin vs US Dollar', 'Type': 'Crypto Currency', 'Grace Days': 5, 'Fees after Grace Period (USD/day)': 0.0006}, {'Instrument': 'BNBUSD.nano', 'Name': 'Binance Coin vs US Dollar', 'Type': 'Crypto Currency', 'Grace Days': 5, 'Fees after Grace Period (USD/day)': 0.002}]
		return <div className={styles.vacation}>
			<Modal modal_reset={this.resetModal} active={modalSet}/>
			<Container className={styles.container}>
				<div className={styles.tradingConditionTable}>
					<h1>{__("Account Commission Fraction Deduction Factor")}</h1>
					<table>
						<thead>
						<tr>
							<th>#</th>
							{/*<th>{__("Nano")}</th>*/}
							<th>{__("Standard / Investor")}</th>
							<th>{__("VIP / Master Trader")}</th>
							<th>{__("Cash")}</th>
						</tr>
						</thead>
						<tbody>
						{Object.keys(tableCondition).map(item => {
							return <tr>
								<td>{item}</td>
								{tableCondition[item].map(value => {
									return <td>
										{(value === 0) ? __("No commission") : (value === -1) ? "-" : `${value}%` + __(' of the trading value')}
									</td>
								})}
							</tr>
						})}
						</tbody>
					</table>
				</div>
				<div className={styles.notice}>
					<h1 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Turnover Commission:')}</h1>
					<div className={styles.noticeContents}>
						<p>{__("The maximum number of discounts of commissions on symbols that don't have a commission for each customer (not the trading account) is equivalent to the amounts mentioned in the above table daily. ")}</p>
						<p>{__("Please note that if you reach the determined value or volume, the commission will be applied for the trading. The broker has the right to change the maximum discount amount for commissions at any time based on the condition. It's important to note that you can use the Commission discount for one trading account only and if you trade these symbols using different trading accounts, the commissions for all of these trades will be received. ")} </p>
						<p>{__("Note: The volume of 10 lots is calculated from the sum of the two ends of the transaction. This means that if you open about 5 lots of trading in buy or sell position and then close it, 10 lots of trading volume will be calculated for you.")} </p>
						<p>{__("Note: the amounts placed based on each symbol are not separate and will be calculated based on the trading sum on these symbols. ")} </p>
						<p>{__("Note: calculation time is from 02:00 till the next day hour 01:59 with the server time of GMT+2. ")} </p>
						{/*<p>{__("Note: The inserted values are not based on each individual symbol and will be calculated based on the total number of transactions on these symbols.")} </p>*/}
						<div className={styles.image}>
							<img src={require("./table_commissions.png").default} alt="AronGroups"/>
						</div>
					</div>
				</div>
				<div className={styles.extraSwap}>
					<div className={styles.tableLeverage}>
						<p>{__("Note: The amount of commission in Standard accounts is calculated based on the amount of daily traded volume described in the above table and will be deducted from the trader's account.")}</p>
					</div>
					<div className={styles.extraSwapContent}>
						<h1>{__("Swap Free Conditions:")}</h1>
						<p>{__("XAU/USD and EUR/USD symbols will be swapped free only for 35 days (where applicable). Please note after 35 days, swap will be charged. After Grace Period Gold will be charged 66 USD/LOT and EUR/USD will be charged at 18 USD/LOT for overnight fees.")}</p>
						<p>{__("All swap-free symbols in the nano account calculated and deducted based on the following table.")}</p>
						<div className={styles.tableContainer}>
							<table>
								{
									<thead>
									<tr>
										<th>{__("Instrument")}</th>
										<th>{__("Name")}</th>
										<th>{__("Type")}</th>
										<th>{__("Grace Days")}</th>
										<th>{__("Fees after Grace Period (USD/day)")}</th>
									</tr>
									</thead>
								}
								<tbody>
								{
									tableSwappFree.map((item, i) => {
										if (pageTable * 8 <= i && (pageTable + 1)*8 > i){
											return <tr key={i}>
												<td>{item['Instrument']}</td>
												<td>{item['Name']}</td>
												<td>{item['Type']}</td>
												<td>{item['Grace Days']}</td>
												<td>{item['Fees after Grace Period (USD/day)']}</td>
											</tr>
										}
									})
								}
								</tbody>
							</table>
						</div>
						<div className={styles.pagination}>
							{tableSwappFree.map((item, index) => {
								if (tableSwappFree.length % 8 === 0 ? index < (tableSwappFree.length / 8) - 1: index <= tableSwappFree.length / 8){
									return <div onClick={() => this.setState({pageTable: index})} className={{[styles.paginationItem]: 1, [styles.active]: pageTable === index}.toCss}>
										<p className={styles.paginate}>
											{index + 1}
										</p>
									</div>
								}
								return null;
							})}
						</div>
						<p>{__("The swap amounts every day at 02:00 will be deducted. ")}</p>
						<p>{__("The numbers mentioned in the above table are the same for both buy and sell positions. ")}</p>
					</div>
					<div className={styles.extraSwapContent}>
						<h1>{__("Inactive trading accounts commission: ")}</h1>
						<p>{__("If any of the trading accounts of a trader remains inactive for 90 days constantly, the amount of $2 will be reduced from the trader's balance monthly for keeping the account. ")}</p>
						<p>{__("Commission deduction will be from the 90 days for the first time, and then it will change to 30 days. ")}</p>
						<p>{__("The amount of $2 will be deducted as a commission till the time the trader's account balance has enough credit to support it based on the determined period, then the account will be archived automatically. ")}</p>
						<p>{__("If the trader's account balance is less than $2, all the balance amount will be deducted, and the account will be archived. ")}</p>
						<p>{__("If there is no balance, the account will be archived automatically. ")}</p>
						<p>{__("Note: Traders who do not intend to trade in any of their trading accounts are advised to transfer the available amount to their Aron Bank account and then archive their account so that this cost is not included.")}</p>
					</div>
					<div className={styles.extraSwapContent}>
						<h2>{__("Leverage:")}</h2>
						<p>{__("The leverage of the trading symbols below will be calculated based on the volume of the trader's open positions.")}</p>
						<div className={styles.image}>
							<img src="https://dl.arongroups.co/aronforex/table_leverage1.png" alt=""/>
						</div>
						<p>{__("Note: if the trader's account leverage is lower than the mentioned leverages, the account's leverage will be considered. ")}</p>
						<p>{__("Note: The sum of open trading volume will be calculated on the above-mentioned symbols. For example, if a trader opens a 2 lots position on the Bitcoin symbol in the standard account, these trades will be created with 75 leverages for the trader, if then the trader adds 2 lots to its open position trade due to passing the first limitation, the next 2 lots will be opened for him with 50 leverages. ")}</p>
					</div>
					<div className={styles.extraSwapContent}>
						<h2>{__("Experts:")}</h2>
						<p>{__("Robot: Traders aren't allowed to use experts (trading robots) in none of the trading accounts except the VIP account. If using experts, the trader will be punished based on the laws of violation of terms and conditions. ")}</p>
					</div>
				</div>
				<div className={styles.tradingAccount}>
					<h2>{__("Trading account characteristics")}</h2>
					<table>
						<thead>
						<tr>
							<th>#</th>
							<th>{__("Nano")}</th>
							<th>{__("Standard")}</th>
							<th>{__("Cash")}</th>
							<th>{__("VIP")}</th>
							<th>{__("Prop")}</th>
						</tr>
						</thead>
						<tbody>
						{tableCommissions.map(item => {
							return <tr>
								<td>{item.name}</td>
								<td>{item.nano}</td>
								<td>{item.standard}</td>
								<td>{item.cash}</td>
								<td>{item.vip}</td>
								<td>{item.prop}</td>
							</tr>
						})}
						</tbody>
					</table>
					<div className={styles.extraSwapContent}>
						<p style={{fontWeight: "bold"}}>{__("Note: The specifications are different based on each symbol. For more information, refer to the symbol specifications in Metatrader.")}</p>
					</div>
				</div>
				<div className={styles.vacationContent} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					<p>{__('Click to see this month forex holiday: ')}</p>
					<a onClick={() => this.setState({modalSet: 1})}> {__('Show More')} </a>
				</div>
			</Container>
		</div>;
	}
}