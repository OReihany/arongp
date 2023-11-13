import React, {PureComponent, useEffect, useState} from "react";
import styles from './lessons.module.scss';
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useService} from "react-soa/dist/hook";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";


export interface topProps {
	title: string,
}

@Observer([])
export class Lessons extends PureComponent<topProps>{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration : 1000
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		const webinarData = [
			{
				id: 0,
				title: __('Learn how to start trading with broker Aron Groups'),
				abstract: __(''),
				class: __('Aron Groups Masters'),
				sessions: 7,
				time: __('7 hours and 50 minutes'),
				status: __('Basic and Free'),
				src_en: require('../../webinar/introduce/webinar-pic/Tutorial-to-begin-trading-in-Aron-Groups-broker(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/Tutorial-to-begin-trading-in-Aron-Groups-broker(fa).jpg').default,
				videos: [
					{
						session: __('MetaTrader 5 training course (Android version)'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p1.mp4'
					},
					{
						session: __('MetaTrader 5 training course (Android version)'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p2.mp4'
					},
					{
						session: __('MetaTrader 5 training course (Android and desktop version)'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p3.mp4'
					},
					{
						session: __('How to access MetaTrader training 5'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p4.mp4'
					},
					{
						session: __('Introducing Traders to Aron Groups Broker Support Services'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p5.mp4'
					},
					{
						session: __('Different deposit and withdrawal methods in Aron Groups broker'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p6.mp4'
					},
					{
						session: __('CRM training class'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p7.mp4'
					},
					{
						session: __('Using the IB plan and bonus offers'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/agbstart/p8.mp4'
					},
				],
				description: [
					__('Aron Groups offers educational courses to financial market enthusiasts. Several topics are discussed during these courses. Trading essentials such as acquaintance with MetaTrader 5 desktop and mobile version. Users are able to access educational resources in Aron Groups Broker in several ways such as Telegram bot and written tutorials and visual tutorials in Telegram channels.'),
					__('The other topic included in this course is how to contact support efficiently. Users will get familiar with Aron Groups support services. Deposit and withdrawal methods is something that all users shall be familiar with. Educate yourself by watching this video. Each user needs to have access to a practical tool for communication with the investment company. CRM tutorial, teaches traders how to register in Aron Groups Broker, deposit and withdraw, contact support, access the news, etc.')
				]
			},
			{
				id: 1,
				title: __('Robert Miner style technical analysis'),
				abstract: __(''),
				class: __('Master Rashidi'),
				sessions: 26,
				time: __('38 hours'),
				status: __('Advanced and free'),
				src_en: require('../../webinar/introduce/webinar-pic/ostad-rashidi(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/ostad-rashidi(fa).jpg').default,
				videos: [
					{
						session: __('Introductory training (Part 1)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-1-part1.mp4'
					},
					{
						session: __('Basic Training (Part 2)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-1-part2.mp4'
					},
					{
						session: __('Basic Training (Part 3)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-1-part3.mp4'
					},
					{
						session: __('MetaTrader Training (Part 1)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-2-part1.mp4'
					},
					{
						session: __('MetaTrader Training (Part 2)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-2-part2.mp4'
					},
					{
						session: __('MetaTrader Training (Part 3)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-2-part3.mp4'
					},
					{
						session: __('Momentum and DT Oscillator Review'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-3.mp4'
					},
					{
						session: __('Momentum and divergence'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-4.mp4'
					},
					{
						session: __('Momentum'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-5.mp4'
					},
					{
						session: __('Pattern (Elliott)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-6.mp4'
					},
					{
						session: __('Pattern (Elliott)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-7.mp4'
					},
					{
						session: __('Pattern (Elliott)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-8.mp4'
					},
					{
						session: __('Price Analysis (Fibonacci Price)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-9.mp4'
					},
					{
						session: __('Price Analysis (Fibonacci Price)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-10.mp4'
					},
					{
						session: __('Price Analysis (Fibonacci Price)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-11.mp4'
					},
					{
						session: __('Time Analysis (Fibonacci Time)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-12.mp4'
					},
					{
						session: __('Time Analysis (Fibonacci Time)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-12.mp4'
					},
					{
						session: __('Time Analysis (Fibonacci Time)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-13.mp4'
					},
					{
						session: __('Trading Strategies'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-14.mp4'
					},
					{
						session: __('Capital Management (Part I)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-15-part1.mp4'
					},
					{
						session: __('Capital Management (Part II)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-15-part2.mp4'
					},
					{
						session: __('Capital Management (Part I)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-16-part1.mp4'
					},
					{
						session: __('Capital Management (Part II)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-16-part2.mp4'
					},
					{
						session: __('Capital Management'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-17.mp4'
					},
					{
						session: __('An Overview of Fibonacci (Part I)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-fibo1.mp4'
					},
					{
						session: __('An Overview of Fibonacci (Part II)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-fibo2.mp4'
					},
					{
						session: __('An Overview of Fibonacci (Part III)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Rashidi/MRS-fibo3.mp4'
					},
				],
				description: [
					__('One of the popular theories among technical analysts is Elliot wave counting. Robert Miner method has also employed this theory. This method has four basic parts including pattern, momentum, price analysis and time analysis. '),
					__('In this educational course presented by Aron Groups Academy, the Robert Miner method is completely taught. After this course, participants will be able to count Elliot waves and conduct momentum and Fibonacci analysis on every price chart.'),
					__('This course is taught through 17 sessions. In addition to the above topics, acquaintance with MetaTrader and dynamic trader, divergence, candlesticks, risk management and trading strategies are also discussed throughout this course. The Elliot wave counting is taught comprehensively in this course.'),
					__('Other courses include applying technical analysis, basics of technical analysis and 5 important basics of technical analysis.'),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},
			{
				id: 2,
				title: __('Market Psychology'),
				abstract: __(''),
				class: __('Master Aron'),
				sessions: 5,
				time: __('6 hours and 45 minutes'),
				status: __('Preliminary and Free'),
				src_en: require('../../webinar/introduce/webinar-pic/ostad-Aron(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/ostad-Aron(fa).jpg').default,
				videos: [
					{
						session: __('Session 1'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Aron/1-Ravanshenasi-Bazar-Aron.mp4'
					},
					{
						session: __('Session 2'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Aron/2-Ravanshenasi-Bazar-Aron.mp4'
					},
					{
						session: __('Session 3'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Aron/3-Ravanshenasi-Bazar-Aron.mp4'
					},
					{
						session: __('Session 4'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Aron/4-Ravanshenasi-Bazar-Aron.mp4'
					},
					{
						session: __('Session 5'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Aron/5-Ravanshenasi-Bazar-Aron.mp4'
					}
				],
				description: [
					__('In addition to trading knowledge, traders need to control their emotions to be successful in financial markets. Emotion and excitement in market is discussed within the market sentiment concept. All traders have experienced excitement and frustration in financial markets. The most crucial thing is to know how to control these emotions. The most important factors which are discussed by the market sentiments are fear and greed, that are expressed according to the trader’s performance. '),
					__('Traders shall be able to know themselves well and control their emotions in order to make the best decisions possible. Success and defeat are the two ends of a financial activity. Success can be reached by omitting the negative influence on your performance.'),
					__('In the sentiment and market psychology course, Aron Groups Broker offers several ways such as trading strategies and practical methods to control your mindset when trading in financial markets. This could specially benefit novice traders. '),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},
			{
				id: 3,
				title: __('5 important indicators in technical analysis'),
				abstract: __(''),
				class: __('Master Parvin'),
				sessions: 6,
				time: __('10 hours and 38 minutes'),
				status: __('Basic and free'),
				src_en: require('../../webinar/introduce/webinar-pic/ostad-parvin(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/ostad-parvin(fa).jpg').default,
				videos: [
					{
						session: __('Dow Theory'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Parvin/1-Parvin-2020-4-5.mp4'
					},
					{
						session: __('Support and Resistance'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Parvin/2-%E2%80%8CParvin-2020-4-9.mp4'
					},
					{
						session: __('Trends'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Parvin/3-Parvin-2020-4-12.mp4'
					},
					{
						session: __('Indicator'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Parvin/%DB%B4-Parvin-2020-4-16.mp4'
					},
					{
						session: __('Classic Patterns'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Parvin/5-Parvin-2020-4-19.mp4'
					},
					{
						session: __('Classic Patterns'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Parvin/6-Parvin-2020-4-25.mp4'
					}
				],
				description: [
					__('Each trader should have technical analysis knowledge. Aron Academy presents "5 important basics of technical analysis" course including several topics about technical analysis.'),
					__('In the first session Dow theory is introduced. Support and resistance are taught in the second session along with several practical examples. The third session is about trends. Trends play a crucial role in market movements. Technical indicators are introduced in the fourth session. Several classic patterns such as triangle, corner, etc are taught in fifth and sixth sessions. This course is presented in 6 sessions. '),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},
			{
				id: 4,
				title: __('The most basic technical principles for any trader'),
				abstract: __(''),
				class: __('Master Bagherzadeh'),
				sessions: 10,
				time: __('14 hours and 30 minutes'),
				status: __('Basic and free'),
				src_en: require('../../webinar/introduce/webinar-pic/ostad-bagherzade(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/ostad-bagherzade(fa).jpg').default,
				videos: [
					{
						session: __('Introduction to MetaTrader and Trading View, Trend Line and Fibonacci Review, Using Movings'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/%DB%B1-Bagherzade-%DB%B2%DB%B0%DB%B1%DB%B9-%DB%B1%DB%B2-%DB%B2%DB%B4.mp4'
					},
					{
						session: __('Candlesticks'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/%DB%B2-Bagherzade-2019-11-26.mp4'
					},
					{
						session: __('Continuation of candlesticks, training of RSI and MACD indicators'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/%DB%B3-Bagherzade-2019-12-3.mp4'
					},
					{
						session: __('Divergence, CCI and ADX indicators'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/4-Bagherzade-2019-12-10.mp4'
					},
					{
						session: __('Andrews Fork and Stochastic Indicator'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/5-Bagherzade-2019-12-18.mp4'
					},
					{
						session: __('MFI and OBV indicators'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/6-Bagherzade-2019-12-24.mp4'
					},
					{
						session: __('Mentum Indicator and Bandbulinger'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/7-Bagherzade-2019-12-31.mp4'
					},
					{
						session: __('Ichimoku Preliminaries'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/8-Bagherzade-2020-1-7.mp4'
					},
					{
						session: __('Single session, before the course'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/0-1-Bagherzade-2019-10-29.mp4'
					},
					{
						session: __('Single session, before the course'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/0-2-Bagherzade-2019-11-5.mp4'
					}
				],
				description: [
					__('Each trader needs to know about technical analysis. Aron Groups Broker presents the "What every trader shall know about technical analysis" course.'),
					__('The technical analysis concepts are presented in the most understandable way in this course. The first session is about trading platforms and a review of several tools such as trendlines, Fibonacci and moving averages. Candlesticks and several important indicators such as Stochastic, OBV, MFI, MACD, RSI, CCI and ADX, Momentum and Bolinger Band are also discussed in this session. Andrew’s pitchfork and Ichimoku are discussed in other chapters of this educational course.'),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},
			{
				id: 5,
				title: __('Applied technical analysis training'),
				abstract: __(''),
				class: __('Amushahi Master'),
				sessions: 10,
				time: __('25 hours and 30 minutes'),
				status: __('Basic and free'),
				src_en: require('../../webinar/introduce/webinar-pic/ostad-amooshahi(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/ostad-amooshahi(fa).jpg').default,
				videos: [
					{
						session: __('The Psychology of Candlesticks'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/1-Amooshahi-2019-11-04.mp4'
					},
					{
						session: __('Psychology of candlesticks (continuation of the first session)'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/2-Amooshahi-2019-11-11.mp4'
					},
					{
						session: __('History of technical analysis, chart recognition, support and resistance, trends and types of channels'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/3-Amooshahi-2019-12-2.mp4'
					},
					{
						session: __('Pewpoint and the basics of trading'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/4-Amooshahi-2019-12-9.mp4'
					},
					{
						session: __('An Overview of Kendall Steak, Pivot and Capital Management'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/5-Amooshahi-2019-12-16.mp4'
					},
					{
						session: __('Fibonacci and Moving Average'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/6-Amooshahi-2019-12-23.mp4'
					},
					{
						session: __('Mentum Indicator and Bandbulinger'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Bagherzadeh/7-Bagherzade-2019-12-31.mp4'
					},
					{
						session: __('Fibonacci and Moving Average'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/7-Amooshahi-2019-12-30.mp4'
					},
					{
						session: __('CCI, RSI, MACD and types of divergence indicators'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/8-Amooshahi-2020-1-6.mp4'
					},
					{
						session: __('An Overview of Divergences and Some Purchasing Strategies'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/9-Amooshahi-2020-1-13.mp4'
					},
					{
						session: __('Harmonic Patterns'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/10-Amoshahi-2020-1-20.mp4'
					},
					{
						session: __('Continuation of harmonic patterns'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/11-Amooshahi-2020-1-27.mp4'
					},
					{
						session: __('Continuation of harmonic patterns'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/12-mooshahi-2020-2-3.mp4'
					},
					{
						session: __('Continuation of harmonic patterns'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/13-Amooshahi-2020-2-10.mp4'
					},
					{
						session: __('Session Fourteen: Classic Patterns'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/14-Amooshahi-2020-05-02.mp4'
					}
				],
				description: [
					__('Each trader needs to know how to apply his/her technical analysis knowledge. The practical aspects of technical analysis is discussed in this educational course.'),
					__('The technical analysis history, various charts, candlestick psychology, pivot points, support and resistance, divergence, indicators, Fibonacci, moving average, classic patterns and harmonic patterns are taught in this course. Basics of trading and investment management is also discussed throughout this course.'),
					__('The course begins with an introduction to candlesticks and generating signals based on them (Price Action), which are popular concepts. This course is taught through 14 sessions. You can also checkout other courses related to technical analysis in Aron Groups including “Robert Miner method”, “What every trader should know about technical analysis” and “5 important basics in technical analysis”.'),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},
			{
				id: 6,
				title: __('Familiarity with gold metal'),
				abstract: __(''),
				class: __('Master Salamat'),
				sessions: 5,
				time: __('4 hours and 30 minutes'),
				status: __('Basic and free'),
				src_en: require('../../webinar/introduce/webinar-pic/ostad-salamat(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/ostad-salamat(fa).jpg').default,
				videos: [
					{
						session: __('First session'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Salamat/Shenakhte-Tala-Salamat-1.mp4'
					},
					{
						session: __('second session'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Salamat/Shenakhte-Tala-Salamat-2.mp4'
					},
					{
						session: __('third session'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Salamat/Shenakhte-Tala-Salamat-3.mp4'
					},
					{
						session: __('fourth Session'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Salamat/Shenakhte-Tala-Salamat-4.mp4'
					},
					{
						session: __('fifth meeting'),
						src: 'https://dl.arongroups.co/academy/Courses/NonTechnical/Salamat/Shenakhte-Tala-Salamat-5.mp4'
					}
				],
				description: [
					__('Gold is a popular metal in financial markets, therefore every trader shall know several things about it. This precious metal is sometimes used as jewelry, but it’s also a valuable asset. Therefore the production procedure of gold is important.'),
					__('Aron Groups offers several educational courses in technical analysis, market sentiments and other factors related to financial markets. The "Gold as a precious metal" course, provides crucial information about the production procedure of gold. In this course the mining, purification, melting and molding procedures are discussed and the existing methods to distinguish between real gold and fake gold are also taught. This course is taught in 5 sessions for gold enthusiasts.'),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},
			{
				id: 7,
				title: __('MetaTrader 5 training course'),
				abstract: __(''),
				class: __('Master Shirazi'),
				sessions: 'On performing',
				time: __('On performing'),
				status: __('Basic and free'),
				src_en: require('../../webinar/introduce/webinar-pic/mt5(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/mt5(en).jpg').default,
				videos: [
					{
						session: __('First session'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/mt5-shirazi/p1.mp4'
					}
				],
				description: [
					__('MetaTrader platform is one of the most popular trading platforms available in the industry. This platform enables traders to trade and analyze different currency pairs and other financial instruments. This platform was designed by the Russian company "MetaQuotes" in 2005, and has released 5 versions since then.'),
					__('The newest version of this platform is MetaTrader 5, which offers amazing trading tools including technical analysis tools, algorithmic trading and copy trading. Hedging can be easily done in MetaTrader 5 platform. Hedging is a useful strategy to trade currency pairs. Meta 5 software supports Persian language, to facilitate trading for Tomans allover the world.'),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},
			{
				id: 8,
				title: __('Haghdoost Master Weekly Class'),
				abstract: __(''),
				class: __('Haghdoost Master'),
				sessions: 'On performing',
				time: __('On performing'),
				status: __('Basic and free'),
				src_en: require('../../webinar/introduce/webinar-pic/ostad-haghdoost(en).jpg').default,
				src_fa: require('../../webinar/introduce/webinar-pic/ostad-haghdoost(fa).jpg').default,
				videos: [
					{
						session: __('About the broker - Introducing the types of trading accounts'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/1-Amooshahi-2019-11-04.mp4'
					},
					{
						session: __('How to deposit and withdraw to the broker'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/2-Amooshahi-2019-11-11.mp4'
					},
					{
						session: __('Installation of MetaTrader - Login to trading account'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/3-Amooshahi-2019-12-2.mp4'
					},
					{
						session: __('Kendallology - Support and Resistance'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/4-Amooshahi-2019-12-9.mp4'
					},
					{
						session: __('Introducing the types of charts - Introducing the trend and drawing it'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/5-Amooshahi-2019-12-16.mp4'
					},
					{
						session: __('Back Patterns - Soroshaneh - Twin Floor - Saucer'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/6-Amooshahi-2019-12-23.mp4'
					},
					{
						session: __('Continuing Pattern - Triangle - Rectangle - Corner'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/7-Amooshahi-2019-12-30.mp4'
					},
					{
						session: __('Doing transactions live - calculating the user\'s profit and loss'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/8-Amooshahi-2020-1-6.mp4'
					},
					{
						session: __('Introducing the indicator - macd - Rsi'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/9-Amooshahi-2020-1-13.mp4'
					},
					{
						session: __('Capital Management'),
						src: 'https://dl.arongroups.co/academy/Courses/Technical/Amooshahi/10-Amoshahi-2020-1-20.mp4'
					},
				],
				description: [
					__('Each trader needs to know how to apply his/her technical analysis knowledge. The practical aspects of technical analysis is discussed in this educational course.'),
					__('The technical analysis history, various charts, candlestick psychology, pivot points, support and resistance, divergence, indicators, Fibonacci, moving average, classic patterns and harmonic patterns are taught in this course. Basics of trading and investment management is also discussed throughout this course.'),
					__('The course begins with an introduction to candlesticks and generating signals based on them (Price Action), which are popular concepts. This course is taught through 14 sessions. You can also checkout other courses related to technical analysis in Aron Groups including “Robert Miner method”, “What every trader should know about technical analysis” and “5 important basics in technical analysis”.'),
					__('All courses are held and published by Aron Groups and are available for free. All rights are reserved by Aron Groups Broker.'),
				]
			},

		];
		const paramsList = {
			"start-trading": {"id": 0},
			"technical-robert-miner": {"id": 1},
			"market-psychology": {"id": 2},
			"5-technical-indexes": {"id": 3},
			"technical-basis": {"id": 4},
			"practical-technical-analysis": {"id": 5},
			"gold-metal": {"id": 6},
			"mt5": {"id": 7},
			"haqdust": {"id": 8},
		}
		return <div className={styles.lessons}>
			<Container className={styles.container}>
				{
					(this.props.title.replace('/fa/webinar-inside/', '').trim() in paramsList) ? webinarData[paramsList[this.props.title.replace('/fa/webinar-inside/', '').trim()].id].description.map(item =>{
						return 	<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{item}</p>
					}) : ''
				}
				<div className={styles.lessonsWrapper}>
					{
						(this.props.title.replace('/fa/webinar-inside/', '').trim() in paramsList) ? webinarData[paramsList[this.props.title.replace('/fa/webinar-inside/', '').trim()].id].videos.map((item, index) => {
							return <div key={index} className={styles.lessonsItem} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<ReactPlayer
									url={item.src}
									width='100%'
									height='100%'
									controls={true}
									className={styles.lessonVideo}
									config={{
										file: {
											attributes: {
												preload: 'none'
											}
										}
									}}
								/>
								<p>{item.session}</p>
							</div>
						}) : ''
					}
				</div>
			</Container>
		</div>;
	}
}
