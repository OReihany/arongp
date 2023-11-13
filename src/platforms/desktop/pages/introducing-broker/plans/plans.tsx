import React, {PureComponent} from "react";
import styles from './plans.module.scss';
import {Container} from "components/container/container";


const currencyData = [
	{
		id: 0,
		title: 'Standard',
		description: 'Suitable for traders who intend to trade in large volumes. Limited leverage to protect the profit in large volumes',
		feature: [
			{
				name: 'Minimum deposit : ',
				value: '500 $',
			},
			{
				name: 'Account currency : ',
				value: 'Dollar',
			},
			{
				name: 'Leverage : ',
				value: '1:1',
			},
			{
				name: 'annual daily profit(tomans) : ',
				value: '2%',
			},
			{
				name: 'Expert advisor',
				value: '',
			},
			{
				name: 'Trading symbols : ',
				value: 'Toman and International',
			},
		],
		currency: 0,
		href: '#'
	},
	{
		id: 1,
		title: 'Vip',
		description: 'Suitable for traders who intend to trade in large volumes. Limited leverage to protect the profit in large volumes',
		feature: [
			{
				name: 'Minimum deposit : ',
				value: '500 $',
			},
			{
				name: 'Account currency : ',
				value: 'Dollar',
			},
			{
				name: 'Leverage : ',
				value: '1:1',
			},
			{
				name: 'annual daily profit(tomans) : ',
				value: '2%',
			},
			{
				name: 'Expert advisor',
				value: '',
			},
			{
				name: 'Trading symbols : ',
				value: 'Toman and International',
			},
		],
		currency: 0,
		href: '#'
	},
	{
		id: 2,
		title: 'Cash',
		description: 'Suitable for traders who intend to trade in large volumes. Limited leverage to protect the profit in large volumes',
		feature: [
			{
				name: 'Minimum deposit : ',
				value: '500 $',
			},
			{
				name: 'Account currency : ',
				value: 'Dollar',
			},
			{
				name: 'Leverage : ',
				value: '1:1',
			},
			{
				name: 'annual daily profit(tomans) : ',
				value: '2%',
			},
			{
				name: 'Expert advisor',
				value: '',
			},
			{
				name: 'Trading symbols : ',
				value: 'Toman and International',
			},
		],
		currency: 0,
		href: '#'
	},
	{
		id: 3,
		title: 'Nano',
		description: 'Suitable for traders who intend to trade in large volumes. Limited leverage to protect the profit in large volumes',
		feature: [
			{
				name: 'Minimum deposit : ',
				value: '500 $',
			},
			{
				name: 'Account currency : ',
				value: 'Dollar',
			},
			{
				name: 'Leverage : ',
				value: '1:1',
			},
			{
				name: 'annual daily profit(tomans) : ',
				value: '2%',
			},
			{
				name: 'Expert advisor',
				value: '',
			},
			{
				name: 'Trading symbols : ',
				value: 'Toman and International',
			},
		],
		currency: 0,
		href: '#'
	},
]


export class Plans extends PureComponent {
	state = {
		currency: 0,
	}
	setCurrency = () => {
		return this.state.currency === 0 ? this.setState({currency: 1}) : this.setState({currency: 0})
	}

	render() {
		const {currency} = this.state
		return <div className={styles.plans}>
			<Container className={styles.container}>
				<h4>Aron Groups Broker Trading Symbols : </h4>
				<div className={{[styles.currencyStatus]: 1, [styles.active]: (currency === 1) ? 1 : 0}.toCss}>
					<span>Dollar</span>
					<label className={styles.switch}>
						<input type={styles.checkbox}/>
						<span className={{[styles.slider]: 1, [styles.round]: 1, [styles.active]: (currency === 1) ? 1 : 0}.toCss} onClick={() => {
							this.setCurrency()
						}}></span>
					</label>
					<span>Tomans</span>
				</div>
				<div className={styles.accountCardWrapper}>
					{currencyData.filter((item) => {
						return currency === item.currency
					}).map((value, index) => {
						return <div className={styles.accountCard}>
							<div className={styles.title}>
								<h4>{value.title}</h4>
								<p>{value.description}</p>
							</div>
							<div className={styles.features}>
								{value.feature.map((item, index) => {
									return <div className={styles.feature}>
										<i className="material-icons-outlined" style={{opacity: (!item.value) ? 0 : 1}}>
											task_alt
										</i>
										<span className={{[styles.featureName]: 1, [styles.active]: (!item.value) ? 1 : 0}.toCss}>
											{item.name} <b className={styles.featureValue}>{item.value}</b>
											
										</span>
									</div>
								})}
							</div>
							<div className={styles.seePlan}>
								<a href={value.href} key={index}>See Plane & Pricing Details</a>
							</div>
							<div className={styles.getStart}>
								<a>Get Started</a>
							</div>
						</div>
					})}
				</div>
				<div className={styles.attention}>
					<h4>Attention Please: </h4>
					<p> 1. In Aron Groups broker, you can open 10 live accounts and 5 demo accounts, so please pay attention in creating accounts. </p>
					<p> 2. If the broker finds out about traders who enter the broker with the identity of a third party, their account will be blocked and will include penalty.</p>
				</div>
			</Container>
		</div>;
	}
}