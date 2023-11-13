import React, {PureComponent} from "react";
import styles from './plans.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import "aos/dist/aos.css";
import {AccountService} from "services/account";
import {ContractTableZulu} from "../../contract-specification/contract-table-zulu/contract-table-zulu";


@Observer([AccountService])
export class Plans extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired accountService = pick(AccountService);

	state = {
		currency: 0,
		modal: -1,
		accountData: [],
		modalSet: 0,

	}

	componentDidMount() {
		AOS.init({
			duration: 1000
		});
		AOS.refresh();
	}

	setCurrency = () => {
		return this.state.currency === 0 ? this.setState({currency: 1}) : this.setState({currency: 0})
	}

	resetModal = () => this.setState({modalSet: 0});

	render() {
		const accountData = [
			{
				"title": {"en": "Investor Account", "fa": "حساب کپی تریدینگ"},
				"description": {"en": "Clients can choose their traders according to functionality charts, which is prepared based on different factors.", "fa": "حساب کپی تریدینگ برای آن دسته از کاربرانی است که می خواهند تریدرهای مورد نظرشان را با استفاده از جدول عملکرد که به‌صورت الگوریتمی و بر اساس فاکتورهای چندگانه عملکردی رتبه‌بندی شده‌اند را انتخاب و دنبال کنند."},
				"currency": 0,
				"href": {"en": "", "fa": ""},
				"feature": [
					{
						"name_en": "Minimum Deposit:",
						"value_en": "100 $",
						"name_fa": "حداقل واریز:",
						"value_fa": "100 $"
					},
					{
						"name_en": "Trading Currency:",
						"value_en": " USD",
						"name_fa": "ارز معاملاتی:",
						"value_fa": " دلار (USD)"
					},
					{
						"name_en": "Leverage:",
						"value_en": " 100",
						"name_fa": "لوریج (اهرم):",
						"value_fa": " 100"
					},
					{
						"name_en": "Trading Symbols:",
						"value_en": "All symbols except Tomans",
						"name_fa": "نمادهای معاملاتی:",
						"value_fa": "تمامی نمادها به غیر از تومانی ها"
					}
				],
				"modal": [
					{
						"title_en": "Social Trading",
						"description_en": "Clients can choose their traders according to functionality charts, which is prepared based on different factors. Clients can copy trade based on responses of society and according to their priorities and risk appetite.",
						"title_fa": "کپی تریدینگ",
						"description_fa": "حساب کپی تریدینگ برای آن دسته از کاربرانی است که می خواهند تریدرهای مورد نظرشان را با استفاده از جدول عملکرد که به‌صورت الگوریتمی و بر اساس فاکتورهای چندگانه عملکردی رتبه‌بندی شده‌اند را انتخاب و دنبال کنند. همچنین بر اساس بازخوردهای جامعه کپی تریدینگ کاربران می‌توانند بر اساس اولویت‌ها و ریسک‌پذیری‌ها نسبت به سفارشی‌سازی تریدهایی که از سمت تریدرها ثبت می‌شود اقدام کنند و به کپی تریدینگ بپردازند."
					},
					{
						"title_en": "Trading Platform:",
						"description_en": "SocialTrading",
						"title_fa": "پلتفرم معاملاتی:",
						"description_fa": "کپی ترید"
					},
					{
						"title_en": "Leverage:",
						"description_en": "Leverage is specified according to the type of each trading account and is limited to 100",
						"title_fa": "لوریج:",
						"description_fa": "لوریج بر اساس هر حساب معاملاتی تنظیم می‌شود و حداکثر به ۱۰۰ محدودشده است."
					},
					{
						"title_en": "Trading method:",
						"description_en": "Hedging: For each buy and sell a new position is opened, and you can have several buy and sell positions over a certain symbol.",
						"title_fa": "سبک معامله:",
						"description_fa": "هجینگ: به ازای هر خرید یا فروش یک فاکتور جدید باز میشود و شما بر روی یک نماد چندین معامله باز خرید و فروش می توانید داشته باشید."
					},
					{
						"title_en": "Spread:",
						"description_en": "variable (Dependent on market condition)",
						"title_fa": "اسپرد:",
						"description_fa": "شناور (بسته به شرایط بازار)"
					},
					{
						"title_en": "Order Execution:",
						"description_en": "Execution in instant price",
						"title_fa": "اجرای سفارش:",
						"description_fa": "اجرا در قیمت لحظه"
					},
					{
						"title_en": "Call margin level 100% , Stop out level 50%",
						"description_en": "",
						"title_fa": "سطح کال مارجین (Call Margin Level 100%) و سطح حراج (Stop Out 50%)",
						"description_fa": ""
					},
					{
						"title_en": "",
						"description_en": "When the margin level (ratio of instant balance to margin * 100) reaches 100% you can not open any new positions. When the amount of loss reaches margin level of 50%, according to the number of open positions, system begins to automatically close the positions, starting from a position with the most loss. This process keeps on until the margin level returns above 50%, and if the margin level reaches over 100% you can open new positions. Note that this procedure is automatic and is done in a fraction of a second. These numbers may change according to the conditions and volatility of the market.",
						"title_fa": "",
						"description_fa": "هنگامی‌که سطح مارجین لول (نسبت موجودی لحظه به مارجین *۱۰۰) به زیر ۱۰۰٪ برسد شما نمی‌توانید هیچ فاکتور جدیدی باز کنید و درصورتی‌که مقدار زیان به سطح مارجین به زیر 50٪ برسد برحسب تعداد فاکتور بازی که دارید سیستم به صورت کاملاً رباتیک و از فاکتور بازی که بیشترین ضرر را دارد شروع به بستن فاکتورهای شما می‌کند. با این کار سطح مارجین به بالای 50٪ برمی‌گردد و درصورتی‌که با هر بار بستن فاکتورهای باز، سطح مارجین بازهم زیر 50٪ باشد این پروسه تکرار خواهد شد و اگر روند برگشت و سطح مارجین به بالای ۱۰۰٪ رسید، شما می‌توانید برحسب مارجینی که دارید سفارش‌های جدید خود را ثبت کنید. دقت کنید کلیه این مراحل لحظه‌ای و کاملاً به‌صورت رباتیک و در کسری از ثانیه انجام می‌شود. این اعداد با توجه به شرایط بازار و نوسانات قابل‌تغییر است."
					}
				]
			},
			{
				"title": {"en": "Master Trader Account", "fa": "حساب کپی تریدینگ مستر"},
				"description": {"en": "This account is designed that wish to copy from signal providers. Signal providers account with tightest spread and lowest commission.", "fa": "این حساب برای ارائه دهندگان سیگنال ارائه شده است. حساب ارائه دهندگان سیگنال با کمترین اسپرد و کمترین کارمزد می باشد."},
				"currency": 0,
				"href": {"en": "", "fa": ""},
				"feature": [
					{
						"name_en": "Minimum Deposit:",
						"value_en": "500 $",
						"name_fa": "حداقل واریز:",
						"value_fa": "500 $"
					},
					{
						"name_en": "Trading Currency:",
						"value_en": " USD",
						"name_fa": "ارز معاملاتی:",
						"value_fa": " دلار (USD)"
					},
					{
						"name_en": "Leverage:",
						"value_en": " 100",
						"name_fa": "لوریج (اهرم):",
						"value_fa": " 100"
					},
					{
						"name_en": "Trading Symbols:",
						"value_en": "All symbols except Tomans",
						"name_fa": "نمادهای معاملاتی:",
						"value_fa": "تمامی نمادها به غیر از تومانی ها"
					}
				],
				"modal": [
				]
			},
		]
		const {__, language} = this.i18;
		let dataModal = accountData[0];
		return <div className={styles.plans}>
			<Container className={styles.container}>
				<div className={styles.accountCardWrapper}>
					<div className={styles.accountCard} >
						<div className={styles.title}>
							<h4>{accountData[0]["title"][language]}</h4>
							<p>{accountData[0]["description"][language]}</p>
						</div>
						<div className={styles.features}>
							{accountData[0].feature.map((item, i) => {
								return <div key={i} className={styles.feature}>
									<i className="material-icons-outlined" style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}}>
										task_alt
									</i>
									<span className={{[styles.featureName]: 1, [styles.active]: (!item[`value_${language}`]) ? 1 : 0}.toCss}>
											{item[`name_${language}`]} <b className={styles.featureValue}>{item[`value_${language}`]}</b>
										</span>
								</div>
							})}
						</div>
						{/*<div className={styles.seePlan}>*/}
						{/*	<a onClick={() => this.setState({modal: index, modalSet: 1})} key={index}>{__('Account Details')}</a>*/}
						{/*</div>*/}
						<div className={styles.getStart}>
							<a href="https://client.arongroups.co/login">{__('Get Started')}</a>
						</div>
					</div>
					<div className={styles.accountDesc}>
						<div className={styles.accountDescWrapper}>
							<h4 className={styles.title}>{dataModal["title"][language]}</h4>
							<div className={styles.modalContentWrapper}>
								{
									dataModal.modal.map((item, index) => {
										return <div key={index} className={styles.content}>
											<h5>{item[`title_${language}`]}</h5>
											<p>{item[`description_${language}`]}</p>
										</div>
									})
								}
							</div>
						</div>
					</div>
					<div className={styles.accountCard} >
						<div className={styles.title}>
							<h4>{accountData[1]["title"][language]}</h4>
							<p>{accountData[1]["description"][language]}</p>
						</div>
						<div className={styles.features}>
							{accountData[1].feature.map((item, i) => {
								return <div key={i} className={styles.feature}>
									<i className="material-icons-outlined" style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}}>
										task_alt
									</i>
									<span className={{[styles.featureName]: 1, [styles.active]: (!item[`value_${language}`]) ? 1 : 0}.toCss}>
											{item[`name_${language}`]} <b className={styles.featureValue}>{item[`value_${language}`]}</b>
										</span>
								</div>
							})}
						</div>
						{/*<div className={styles.seePlan}>*/}
						{/*	<a onClick={() => this.setState({modal: index, modalSet: 1})} key={index}>{__('Account Details')}</a>*/}
						{/*</div>*/}
						<div className={styles.getStart}>
							<a href="https://client.arongroups.co/login">{__('Get Started')}</a>
						</div>
					</div>
				</div>
			</Container>
			{/*<ContractTableZulu searchValue={""} sortKey={0} page={2} />*/}
		</div>
	}
}