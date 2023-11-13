import React, {PureComponent} from "react";
import styles from './time-line.module.scss';
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";

@Observer([])
export class TimeLine extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		{/*const cards = [*/}
		// 	{
		// 		id: 0,
		{/*		title: __('First Session'),*/}
		{/*		description: [__('Introducing Broker Aron Groups'), __('Introducing different types of broker accounts'), __('Step-by-step instruction on registration and authentication steps in the broker'), __('Complete training on how to deposit and withdraw money')],*/}
		{/*		date: '4 JUN 2022',*/}
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/348014178777'
		// 	},
		// 	{
		// 		id: 1,
		// 		title: __('Second Session'),
		// 		description: [__('Familiarity with MetaTrader 5, complete installation and commissioning training and familiarity with different parts of MetaTrader trading platform including:'), __('Watch list'), __('Types of purchase and sale orders in MetaTrader 5'), __('Toolbox'), __('Tools and analysis on the chart')],
		// 		date: '7 JUN 2022',
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/350706662067'
		{/*	},*/}
		{/*	{*/}
		// 		id: 2,
		// 		title: __('Zulu Trade'),
		// 		description: [__('Answer and Question Session on Introduction to Aron Groups Broker Copy Trading Account')],
		// 		date: '9 JUN 2022',
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/350704615947'
		// 	},
		// 	{
		// 		id: 4,
		// 		title: __('Second Session'),
		// 		description: [__('Familiarity with MetaTrader 5, complete installation and commissioning training and familiarity with different parts of MetaTrader trading platform including:'), __('Watch list'), __('Types of purchase and sale orders in MetaTrader 5'), __('Toolbox'), __('Tools and analysis on the chart')],
		// 		date: '14 JUN 2022',
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/351702199747'
		// 	},
		// 	{
		// 		id: 5,
		// 		title: __('Webinar'),
		// 		description: [__('Aron Gropes Academy team discussion on market trends and market analysis')],
		// 		date: '16 JUN 2022',
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/351742369897'
		// 	},
		// 	{
		// 		id: 6,
		// 		title: __('First Session'),
		// 		description: [__('Introducing Broker Aron Groups'), __('Introducing different types of broker accounts'), __('Step-by-step instruction on registration and authentication steps in the broker'), __('Complete training on how to deposit and withdraw money')],
		// 		date: '18 JUN 2022',
		{/*		content: [],*/}
		// 		link: 'https://www.eventbrite.com/e/351667997447'
		// 	},
		// 	{
		// 		id: 7,
		// 		title: __('Second Session'),
		// 		description: [__('Familiarity with MetaTrader 5, complete installation and commissioning training and familiarity with different parts of MetaTrader trading platform including:'), __('Watch list'), __('Types of purchase and sale orders in MetaTrader 5'), __('Toolbox'), __('Tools and analysis on the chart')],
		// 		date: '21 JUN 2022',
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/351705981057'
		// 	},
		// 	{
		// 		id: 8,
		// 		title: __('Zulu Trade'),
		// 		description: [__('Answer and Question Session on Introduction to Aron Groups Broker Copy Trading Account')],
		// 		date: '23 JUN 2022',
		{/*		content: [],*/}
		{/*		link: 'https://www.eventbrite.com/e/351661548157'*/}
		// 	},
		// 	{
		// 		id: 9,
		// 		title: __('First Session'),
		{/*		description: [__('Introducing Broker Aron Groups'), __('Introducing different types of broker accounts'), __('Step-by-step instruction on registration and authentication steps in the broker'), __('Complete training on how to deposit and withdraw money')],*/}
		// 		date: '25 JUN 2022',
		// 		content: [],
		{/*		link: 'https://www.eventbrite.com/e/351669923207'*/}
		{/*	},*/}
		{/*	{*/}
		// 		id: 10,
		// 		title: __('Second Session'),
		// 		description: [__('Familiarity with MetaTrader 5, complete installation and commissioning training and familiarity with different parts of MetaTrader trading platform including:'), __('Watch list'), __('Types of purchase and sale orders in MetaTrader 5'), __('Toolbox'), __('Tools and analysis on the chart')],
		// 		date: '28 JUN 2022',
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/351707244837'
		// 	},
		// 	{
		// 		id: 11,
		{/*		title: __('Webinar'),*/}
		// 		description: [__('Aron Gropes Academy team discussion on market trends and market analysis')],
		// 		date: '30 JUN 2022',
		// 		content: [],
		// 		link: 'https://www.eventbrite.com/e/351769992517'
		// 	}
		// ];
		const cards = [
			{
				id: 0,
				title: __('VIP class'),
				description: [__('on Saturdays at 14:00'), __('VIP class from registration to trading'), __('Introduction of Aron Groups broker'), __('Introduction of types of accounts'), __('CRM user panel training'), __('Download and install Metatrader 5'), __('Watch list'), __('Toolbox'), __('Tools and analysis on the chart')],
				date: '23 Dec 2022',
				content: [],
				link: 'https://meet.google.com/por-fxya-gew'
			},
			// {
			// 	id: 1,
			// 	title: __('ZuluTrader webinar VIP class'),
			// 	description: [__('on Tuesday at 21:00')],
			// 	date: '26 Dec 2022',
			// 	content: [],
			// 	link: 'https://meet.google.com/por-fxya-gew'
			// },
			// {
			// 	id: 2,
			// 	title: __('Webinar and specialized round table'),
			// 	description: [__('on Tuesday at 21:00')],
			// 	date: '26 Dec 2022',
			// 	content: [],
			// 	link: 'https://meet.google.com/por-fxya-gew'
			// }
		];
		return <div className={styles.timeLine}>
			<Container className={styles.container}>
				{
					cards.map((item, index) => {
						return <div className={{[styles.cardWrapper]: 1, [styles.right]: (index % 2) !== 0 ? 1 : 0}.toCss}>
							<div className={styles.cardItem} >
								<div className={styles.item}>
									<div className={styles.cardContent}>
										<h2>{item.title}</h2>
										{/*<div style={{direction: "ltr"}} className={styles.date}>{item.date}</div>*/}
										{item.description.map((item, key) => {
											return <p key={key}>{item}</p>
										})}
										<div className={styles.btn}>
											<a onClick={() => window.open(item.link)}>{__('More')}</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					})
				}
			</Container>
		</div>;
	}
}