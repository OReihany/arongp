import React, {PureComponent} from "react";
import styles from './fund.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Fund extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {language} = this.i18;
		return <div className={styles.previousBonus}>
			<Container className={styles.container}>
				<div className={styles.texture}>
					<h2 className={styles.mainHeader}>{
						{
							en: "Aron Broker Investment Fund",
							fa: "صندوق سرمایه گذاری بروکر آرون"
						}[language]}</h2>
					<p className={styles.text}>
						{
							{
								en: "Trading in the financial markets requires knowledge, experience, and skill. It takes a lot of time and energy to learn how to trade effectively. However, there is another way to participate in the forex market: Aron Broker has established an investment fund for people who do not have the time or expertise to trade themselves. This fund allows investors to participate in the forex market indirectly, without having to trade themselves.",
								fa: "معامله کردن در بازارهای مالی به دانش، تخصص و مهارت نیاز دارد و از طرفی کسب تجربه در انجام معاملات، نیازمند صرف وقت و انرژی فراوان است. اما انجام معامله و داشتن مهارت و دانشِ ترید، تنها راه ورود به بازار فارکس نیست و بروکر آرون برای افرادی که دانش یا زمان لازم برای انجام این کار را ندارند، صندوق سرمایه‌گذاری تأسیس کرده که برای فعالیت غیرمستقیم در فارکس مناسب است."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "Many people want to invest in the foreign exchange (Forex) market to make money, but they don't know how to trade effectively. They may also lose money due to unexpected market movements. An investment fund can be a safe and secure way to invest in Forex without having to trade yourself.",
								fa: "افراد زیادی می‌خواهند سرمایه خودشان را وارد فارکس کرده و از آن کسب سود نمایند؛ اما راه و چاه آن را نمی‌دانند و ممکن است با حرکت‌های حساب‌نشده در معاملات، متضرر شوند. صندوق سرمایه‌گذاری می‌تواند راهکاری تضمینی برای افرادی باشد که به دنبال سرمایه‌گذاری امن و مطمئن بدون نیاز به انجام معاملات و سردرآوردن از پیچ‌وخم ترید کردن و هزارتوی بازارهای معاملاتی هستند."
							}[language]
						}
					</p>
				</div>
				<div className={styles.texture}>
					<h2 className={styles.mainHeader}>{
						{
							en: "How does Aron Broker's investment fund work?",
							fa: "صندوق سرمایه‌گذاری بروکر آرون چگونه کار می‌کند؟"
						}[language]}</h2>
					<p className={styles.text}>
						{
							{
								en: "By opening an account in Aron Broker's investment fund, you can invest any amount of money you want. The fund will then trade on your behalf, and you will receive a share of the profits. The more shares you own, the larger your share of the profits will be.",
								fa: "با افتتاح حساب در صندوق سرمایه‌گذاری بروکر آرون، مبلغ مورد نظرتان را در حساب صندوق تزریق کرده و با آسودگی خاطر، سود خود را از معاملات دریافت می‌کنید. میزان سود شما از این صندوق، بستگی به تعداد سهم سرمایه‌گذاری شما دارد و هر چه تعداد سهامتان بیشتر باشد، سود شما نیز چشمگیرتر خواهد بود."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "In this fund, a professional trader takes charge of the capital and initiates trading. The risk of this type of investment is low because of the expertise and experience of the traders who manage the fund. Although the amount of profit is not guaranteed, the fund is insured against losses, so there is no possibility of the fund losing money.",
								fa: "در این صندوق، یک معامله‌گر حرفه‌ای سرمایه را مدیریت کرده و دست به معامله می‌زند. با توجه به تخصص و تجربه‌ی معامله‌گرانی که صندوق‌ها را در دست دارند، میزان ریسک این نوع سرمایه‌گذاری بسیار کم است و اگرچه میزان سود آن قطعی نیست، اما صندوق در برابر زیان‌های احتمالی بیمه شده و بنابراین امکان ضرردهی صندوق وجود ندارد."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "The trader or fund manager receives a fee for managing capital and conducting trades. Aron’s investment fund is launched and managed directly under the supervision and management of Aron's manager. Based on his experience and expertise in the foreign exchange market and transactions, profit and income are guaranteed in this fund.",
								fa: "معامله‌گر یا مدیر صندوق نیز به‌ازای مدیریت سرمایه و انجام معامله کارمزد دریافت می‌کند. صندوق سرمایه‌گذاری بروکر آرون مستقیماً تحت نظارت و مدیریت مدیر آرون راه‌اندازی شده و گردانده می‌شود و به پشتوانه‌ی تجربه و مهارت ایشان در بازار فارکس و انجام معاملات، کسب سود و درآمد در این صندوق تضمینی است."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "Aron Broker's investment fund is available in monthly periods and its shares are sold for a limited time. The trustee of the fund announces the terms and duration of the transactions and the amount of the client's profit percentage to investors.",
								fa: "دوره‌های صندوق سرمایه‌گذاری بروکر آرون به صورت یک ماهه برگزار شده و سهام آن در مدت زمان محدود به فروش می‌رسد. شرایط و مدت‌زمان معاملات و میزان درصد سود مشتری از طرف متولی صندوق به سرمایه‌گذاران اعلام می‌شود."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "Aron Broker has been managing monthly and quarterly investment funds for several years. If you are interested in investing in this fund, you should stay up-to-date on its news. The fund's shares are limited and sell out quickly due to high demand. Therefore, visit Aron's website at the end of each month to learn about the start date, investment terms, and new trading symbol for each course.",
								fa: "بروکر آرون سابقه چندین سال سبدگردانی دوره‌های یک‌ماهه و سه‌ماهه صندوق سرمایه‌گذاری را دارد. در صورتی که به سرمایه‌گذاری در این صندوق علاقه‌مند هستید، می‌بایست پیگیر اخبار آن باشید، زیرا سقف سهم‌های صندوق محدود بوده و با توجه به استقبال کاربران به سرعت به پایان می‌رسد؛ بنابراین در اواخر هر ماه میلادی به وب‌سایت آرون سر بزنید تا زمان شروع دوره، شرایط سرمایه‌گذاری و نماد معاملاتی جدید هر دوره آگاه شوید."
							}[language]
						}
					</p>
				</div>
				<div className={styles.texture}>
					<h2 className={styles.mainHeader}>{
						{
							en: "Benefits of depositing in Aron Broker's investment fund",
							fa: "مزایای سپرده‌گذاری در صندوق سرمایه گذاری بروکر آرون"
						}[language]}</h2>
					<h4 className={styles.secondHeader}>
						{
							{
								en: "Asset management",
								fa: " مدیریت دارایی"
							}[language]
						}
					</h4>
					<p className={styles.text}>
						{
							{
								en: "The main advantage of investing in this fund is that Aron Broker's experienced managers and analysts use their expertise to choose the best investment strategies for your capital. They buy and sell assets at the right time to maximize your returns.",
								fa: "مزیت اصلی سپرده‌گذاری در این صندوق، مدیریت حرفه‌ای دارایی سرمایه‌گذاران است. مدیران و تحلیل‌گران باتجربه در بروکر آرون، همواره بهترین استراتژی را برای انجام معاملات با سرمایه مشتری انتخاب می‌کنند و با خرید و فروش به‌موقع، سود قابل توجهی به صاحب سرمایه می‌رسانند."
							}[language]
						}
					</p>
					<h4 className={styles.secondHeader}>
						{
							{
								en: "Capital insurance",
								fa: "بیمه سرمایه"
							}[language]
						}
					</h4>
					<p className={styles.text}>
						{
							{
								en: "Your capital is insured by the insurance company that Aron Broker has partnered with. If the fund experiences a loss in a given month, your capital will not be subject to loss. This has not happened in the dozens of periods that the fund has been in operation.",
								fa: "در صورت سپرده‌گذاری در این صندوق، اصل سرمایه شما توسط شرکت بیمه‌ای که طرف حساب کارگزاری بروکر آرون است، بیمه خواهد شد و چنانچه معاملات پیش رو، سودده نباشد و صندوق، یک ماه با ضرر مواجه شود، اصل سرمایه مشتری حفظ شده و مشمول ضرر نخواهد شد. البته در طی ده‌ها دوره اجرای صندوق، تاکنون چنین موردی پیش نیامده است."
							}[language]
						}
					</p>
					<h4 className={styles.secondHeader}>
						{
							{
								en: "Reducing investment risk",
								fa: "کاهش ریسک سرمایه‌گذاری"
							}[language]
						}
					</h4>
					<p className={styles.text}>
						{
							{
								en: "Investment fund are managed by professional traders and forex market specialists, which makes them much less risky than doing transactions yourself. This is an easy and safe way to earn profit without the stress and hassle of trading on your own.",
								fa: "مدیریت این صندوق‌ها بر عهده معامله‌گران حرفه‌ای و متخصصان بازار فارکس است و نسبت به انجام معاملات توسط خود مشتری، ریسک بسیار کمتری دارد. صندوق سرمایه‌گذاری، روشی آسان و مطمئن برای کسب سود به دور از مشکلات و تنش‌های معامله است."
							}[language]
						}
					</p>
					<h4 className={styles.secondHeader}>
						{
							{
								en: "Easy earning",
								fa: "کسب آسان درآمد"
							}[language]
						}
					</h4>
					<p className={styles.text}>
						{
							{
								en: "When a large amount of capital is pooled into a fund, it has higher currency credit and liquidity than individual customer capitals. This gives the fund manager more flexibility to take margin or collateral, and make more targeted and profitable trades. This can benefit investors by increasing their profits and capital.",
								fa: "از آن‌جایی که سرمایه بالایی جذب یک صندوق می‌شود، اعتبار ارزی و نقدینگی این صندوق بسیار بیشتر از سرمایه‌های فردی مشتریان است و این حجم اعتباری، دست معامله‌گر یا مدیر صندوق را در گرفتن مارجین یا وجه تضمینی بازتر می‌کند و معاملات هدف‌دار و پربازده همراه با سود کلان نصیب سرمایه‌گذاران خواهد کرد. استراتژی‌های معاملاتی مدیران صندوق در مدیریت این حجم از سرمایه می‌تواند سودهای چشمگیری برای سرمایه‌گذاران به دنبال داشته باشد و به سرمایه ایشان بیفزاید."
							}[language]
						}
					</p>
				</div>
				<div className={styles.texture}>
					<h2 className={styles.mainHeader}>{
						{
							en: "How to open an account in Aron’s Investment Fund",
							fa: "نحوه افتتاح حساب در صندوق سرمایه گذاری بروکر آرون"
						}[language]}</h2>
					<p className={styles.text}>
						{
							{
								en: "1- First, register and authenticate on Aron Groups website.",
								fa: "1- ابتدا در سایت آرون گروپس ثبت‌نام و احراز هویت کنید."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "2- Enter the accounts section in the user panel and select the option \"Open live account\".",
								fa: "2- در پنل کاربری وارد قسمت حساب‌ها شوید و گزینه «حساب زنده (Live) باز کنید» را انتخاب کنید."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "3- In the account type section, select \"fund account\" and click on continue.",
								fa: "3- در قسمت نوع حساب، «حساب صندوق» را انتخاب و روی ادامه کلیک کنید."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "4- In this way, the account will be created for you and the username and password will be sent to your email. You must use this username and password to log in to MetaTrader 5.",
								fa: "4- به این ترتیب حساب برای شما ساخته شده و نام کاربری و پسورد ورود به حساب به ایمیل شما ارسال می‌شود. شما برای ورود به متاتریدر 5 باید از این نام کاربری و پسورد استفاده کنید."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "5- You can directly deposit or transfer money to the fund's account to buy shares of the new month.",
								fa: "5- برای خرید سهام ماه جدید می‌توانید مستقیماً به حساب صندوق واریز و یا انتقال وجه را انجام دهید."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "6- Get the help of online support to get the every month’s symbol and more guidance.",
								fa: "6- برای دریافت نماد ماه جدید و راهنمایی بیشتر، از پشتیبانی آنلاین کمک بگیرید."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "Aron Broker's investment fund is a safe way to invest indirectly in the forex market. This fund is suitable for those who do not have enough time to participate in the financial markets and analyze transactions and frequent trades, but want to invest in this large market.",
								fa: "صندوق سرمایه‌گذاری بروکر آرون روشی مطمئن برای سرمایه‌گذاری غیرمستقیم در بازار فارکس است. این صندوق مناسب کسانی است که فرصت کافی برای حضور در بازارهای مالی و تجزیه و تحلیل معاملات و تریدهای مکرر را ندارند، اما خواهان سرمایه‌گذاری در این بازار بزرگ هستند."
							}[language]
						}
					</p>
					<p className={styles.text}>
						{
							{
								en: "If you are looking to participate in the forex market and earn profit and passive income, without spending time and energy, we recommend depositing in Aron Broker's investment fund.",
								fa: " اگر به دنبال حضور در بازار فارکس و کسب سود و درآمد، بدون صرف وقت و انرژی هستید، پیشنهاد ما سپرده‌گذاری در صندوق سرمایه‌گذاری بروکر آرون است."
							}[language]
						}
					</p>
				</div>
			</Container>
		</div>;
	}
}