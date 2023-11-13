import React, {PureComponent} from 'react';
import styles from './important-symbols.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {TableImportant} from "./table-important";

@Observer([])
export class ImportantSymbols extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh()
	}

	render() {
		const {__, language} = this.i18
		const imageList = [
			{
				'title' : 'item1',
				'src' : {fa: require('./icons/important/Academy(fa).jpg').default, en: require('./icons/important/Academy(en).jpg').default},
				'subtitle': __('Providing free charts of Toman and international symbols and education and analysis at Aron Academy')

			},
			{
				'title' : 'item2',
				'src' : {fa: require('./icons/important/BankFund(fa).jpg').default, en: require('./icons/important/BankFund(en).jpg').default},
				'subtitle': __('Risk-free investments such as Arun Fund and Bank')
			},
			{
				'title' : 'item3',
				'src' : {fa: require('./icons/important/BlackFriday(fa).jpg').default, en: require('./icons/important/BlackFriday(en).jpg').default},
				'subtitle': __('Attractive bonuses, gifts, contests and Black Friday')
			},
			// {
			// 	'title' : 'item4',
			// 	'src' : {fa: require('./icons/important/CryptoLoan(fa).jpg').default, en: require('./icons/important/CryptoLoan(en).jpg').default},
			// 	'subtitle': __('Interest-free instant currency loan without loans and all other attractive services ...')
			// },
			{
				'title' : 'item5',
				'src' : {fa: require('./icons/important/NegativeBalance(fa).jpg').default, en: require('./icons/important/NegativeBalance(en).jpg').default},
				'subtitle': __('Protect your account against negative balances and protect you with bonuses')
			},
			{
				'title' : 'item6',
				'src' : {fa: require('./icons/important/NoCommision(fa).jpg').default, en: require('./icons/important/NoCommision(en).jpg').default},
				'subtitle': __('Accounts and symbols without commission and swap, spreads from 0 and leverage 1: 1000')
			},
			{
				'title' : 'item7',
				'src' : {fa: require('./icons/important/AronProp(fa).jpg').default, en: require('./icons/important/AronProp(en).jpg').default},
				'subtitle': __('Aron prop a trading service for professionals, no qualification, up to 80% profit share')
			},
			{
				'title' : 'item8',
				'src' : {fa: require('./icons/important/CopyTrading(fa).jpg').default, en: require('./icons/important/CopyTrading(en).jpg').default},
				'subtitle': __('Copy Trading a trading service for beginners, make money according to the strategy of hundreds of traders')
			}
		]
		return <div className={styles.mainLayout}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<div className={styles.leftContent}>
						<h2 className={styles.contentTitle} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Why Should be Join Aron Groups')}</h2>
						<p className={styles.contentDescription} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{__('After 2 years of successful experience in the online trading market, with the assurance of the satisfaction of more than 10,000 traders, Aron Groups has now provided the opportunity for all people to experience online trading in global markets by offering more trading tools. All you have to do is be interested in financial markets, everything you need to get started and continue will be available to you at Aron Groups.')}
						</p>
							<div className={styles.imageGroup}>
							{imageList.map(((value, index) => {
								if (value.title === "item1"){
									return <div style={{cursor: "pointer"}} onClick={()=> window.open("https://t.me/AronGroupsBroker_Academy", "_blank")} key={index} className={styles.imageItemWrapper} data-aos={(index%2 === 0) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
										<img className={styles.imageItemImage} src={value.src[language]} alt=""/>
										<p>{value.subtitle}</p>
									</div>
								}else {
									return <div key={index} className={styles.imageItemWrapper} data-aos={(index%2 === 0) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
										<img className={styles.imageItemImage} src={value.src[language]} alt=""/>
										<p>{value.subtitle}</p>
									</div>
								}
							}))}
						</div>
					</div>
					{/*<div className={styles.rightContent}>*/}
					{/*	<div className={styles.tableContainer} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
					{/*		<TableImportant />*/}
					{/*	</div>*/}
					{/*</div>*/}
				</div>
			</Container>
		</div>
	}
}