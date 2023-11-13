import React, {PureComponent} from "react";
import styles from './what.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class What extends PureComponent{
	@wired i18 = pick(I18nService);
	render() {
		const {__} = this.i18;
		const whatDat = [
			{
				id: 1,
				title: __('Easy deposit and withdrawal without commission'),
				description: __('Providing the best deposit and withdrawal methods with the ability to deposit and withdraw in Tomans in Aron Groups global broker is possible for the clients of this broker.'),
				href: '#',
				src: require('./New-logos/Deposit-withdrawal.jpg').default
			},
			{
				id:2,
				title: __('Valid licenses and regulations'),
				description: __('Aron Markets LTD is incorporated under Marshall Island law, under licence number 118046. Aron Markets LTD registered address is Ajeltake Road Ajeltake Island, Majuro, Marshall Islands, MH96960. Aron Markets LTD office is located at. 59 Agios Athamasios Avenue, D. VRACHIMIS BUILDING, Limassol, 4102, Cyprus.'),
				href: '#',
				src: require('./New-logos/License.jpg').default
			},
			{
				id: 3,
				title: __('Daily profit of trading accounts'),
				description: __('Standard, VIP and cash accounts for Aron Groups receive an average daily profit (to free margins) of between 5 and 20% on average.'),
				href: '#',
				src: require('./New-logos/Daily-Profit.jpg').default
			},
			{
				id:4,
				title: __('24 hours support'),
				description: __('Our partners in the support department of Aron Groups are ready to provide services 24 hours a day, 7 days a week to the customers of this complex./24 services'),
				href: '#',
				src: require('./New-logos/Support-24.jpg').default
			},
			{
				id:5,
				title: __('High security'),
				description: __('Aron Groups is one of the best brokers in the field of security and financial software updates among other global brokers.'),
				href: '#',
				src: require('./New-logos/Security.jpg').default
			},
			{
				id:6,
				title: __('Receive currency remittances from around the world'),
				description: __('Aron Groups Exchange is ready to receive foreign currency remittances from all over the world at the lowest cost and in the fastest time, at the Istanbul branch.'),
				href: '#',
				src: require('./New-logos/Forigen-exchange.jpg').default
			},
			{
				id:7,
				title: __('Attractive bonuses'),
				description: __('Aron Groups Broker has provided the conditions for its traders to experience net profit by opening an account in Aron Groups Broker.'),
				href: '#',
				src: require('./New-logos/Bonus.jpg').default
			},
			{
				id:8,
				title: __('IB high percentage'),
				description: __('At Aron Groups Broker IB, you will receive commissions from all symbols and types of accounts, up to 50%, with the simplest terms.'),
				href: '#',
				src: require('./New-logos/IB.jpg').default
			},
			{
				id:9,
				title: __('Providing free charts of Iranian and international symbols'),
				description: __('In Aron Groups broker, in addition to international symbols, Toman symbols have also been provided to traders in line with the global market.'),
				href: '#',
				src: require('./New-logos/Chart.jpg').default
			},
			{
				id:10,
				title: __('Strong market depth'),
				description: __('In the MetaTrader application, by selecting the Depth of Market option, and then Market Depth, you can trade buy or sell or order type.'),
				href: '#',
				src: require('./New-logos/Market-depth.jpg').default
			},
			{
				id:11,
				title: __('Low Risk'),
				description: __('With MetaTrader 5, conduct your trades with high accuracy and careful review, and significantly reduce the risk of trading errors compared to other applications.'),
				href: '#',
				src: require('./New-logos/Low-Risk.jpg').default
			},
			{
				id:12,
				title: __('Bilateral trading of shares of the world largest companies'),
				description: __('At Aron Groups, it is possible to trade the world superpowers such as Apple, Sony, McDonald, Toshiba, Microsoft, Google, Facebook and Boeing.'),
				href: '#',
				src: require('./New-logos/Bylateral-trading.jpg').default
			},
			{
				id:13,
				title: __('Protect the account against negative balance'),
				description: __('Protecting your account against negative balances (traders whose accounts are negative) at Aron Groups Broker is free of charge.'),
				href: '#',
				src: require('./New-logos/Protection.jpg').default
			},
			{
				id:14,
				title: __('Presenting Toman and Forex symbols'),
				description: __('For the welfare of Aron Groups traders, it is possible to trade Iranian symbols such as gold and currency for Aron Groups broker clients.'),
				href: '#',
				src: require('./New-logos/Toman-Inter-symbols.jpg').default
			},
			{
				id:15,
				title: __('The latest trading platform (MT5)'),
				description: __('Successful trading in the financial markets is done with a simple and at the same time complete platform, MetaTrader 5 is the best choice for today traders.'),
				href: '#',
				src: require('./New-logos/Metatrader.jpg').default
			},
			{
				id:16,
				title: __('Diverse trading accounts'),
				description: __('Aron Group Broker offers a variety of accounts for a variety of traders, including Nano, Standard, Cash and VIP accounts.'),
				href: '#',
				src: require('./New-logos/Trading-Accounts.jpg').default
			},
			{
				id:17,
				title: __('Investment accounts'),
				description: __("Aron Banks high bank interest rates have made those who are looking for low investment risks enter this market without any worries."),
				href: '#',
				src: require('./New-logos/Investing_Accounts.jpg').default
			},
			{
				id:18,
				title: __('Ability expert advisor'),
				description: __('At Aron Group Global Broker, it is possible to provide expert advisor for all trading accounts available in this broker.'),
				href: '#',
				src: require('./New-logos/advisor.jpg').default
			},
			// {
			// 	id:19,
			// 	title: __('Precious metals without soup in Aron Groups'),
			// 	description: __(''),
			// 	href: '#',
			// 	src: require('./New-logos/Intermarket.jpg').default
			// },
			{
				id:20,
				title: __('Buy and sell cryptocurrencies in Aron Groups'),
				description: __('In Aron Groups broker, it is possible for traders to buy and sell more than 120 digital currencies with the lowest commission and spreads.'),
				href: '#',
				src: require('./New-logos/Nano.jpg').default
			},
			// {
			// 	id:21,
			// 	title: __('Cash accounts (swap free)'),
			// 	description: __(''),
			// 	href: '#',
			// 	src: require('./New-logos/Spot-Account.jpg').default
			// },
			{
				id:21,
				title: __('Mutual Funds (PAMM)'),
				description: __('With an Aron Fund account, you will receive your profit from transactions with the least risk. The more shares you have, the more profit you make.'),
				href: '#',
				src: require('./New-logos/PAMM.jpg').default
			},
			{
				id:22,
				title: __('400 different market trading facilities with just one trading account'),
				description: __('By opening an account in Aron Broker, you can trade more than +1000 Market/Symbol with the lowest commission and spreads with high leverage and zero margin.'),
				href: '#',
				src: require('./New-logos/Markets.jpg').default
			},
			{
				id:23,
				title: __('Possibility of trading (hedge)'),
				description: __('At Aron Groups you can enter into a hedge where you buy a currency pair and at the same time you can sell the same currency pair.'),
				href: '#',
				src: require('./New-logos/hedge.jpg').default
			},
			{
				id:24,
				title: __('Global gold ounce deal without commission, without swap, and with a volume of 0:01'),
				description: __('At Aron Groups Broker, trade ounce of global gold with no commission, no swap and with a volume of 0:01 with confidence and no restrictions on trading.'),
				href: '#',
				src: require('./New-logos/Gold-Ounce.jpg').default
			},
			{
				id:25,
				title: __('Educational Academy'),
				description: __('The Aron Groups Broker Academy section offers a variety of instructional videos in all areas required by traders and trading methods.'),
				href: '#',
				src: require('./New-logos/Academi.jpg').default
			}
		]
		return <div className={styles.what}>
			<Container className={styles.container}>
				<div className={styles.whatAronGroupsWrapper}>
					{whatDat.map( (item, index) =>{
						return <div className={styles.whatItem} data-aos={(index%2 === 0) ? "fade-up" : "fade-down"} data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<img src={item.src} alt=""/>
							<div className={styles.content}>
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
							{/*<div className={styles.link}>*/}
							{/*	<a href={item.href}>{__('Show More')}</a>*/}
							{/*</div>*/}
						</div>
					})}					
				</div>
			</Container>
		</div>;
	}
}