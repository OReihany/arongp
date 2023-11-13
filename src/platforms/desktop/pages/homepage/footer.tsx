import React, {PureComponent} from 'react'
import styles from './footer.module.scss'
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {Routes} from "core/routes";
import {SVGInline} from "components/svg-inline";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {SettingService} from "services/setting";

const media_server = 'https://media.arongroups.co';


declare const window: any

@Observer([SettingService])
export class Footer extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired settingService = pick(SettingService);
	state = {
		title: 0,
		contact: 0
	}

	componentDidMount() {
		AOS.init({
			duration: 1000,
			once: true
		});
		AOS.refresh()
	}

	scrollUp = () => {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	setTitle = (index) => this.setState({title: index, contact: 0});

	render() {
		const data = this.settingService.data;
		const footerIcons = [
			{
				'title': 'telegram',
				'href': JSON.parse(data['telegram']) || {fa: 'https://t.me/arongroupsbroker', en: 'https://t.me/arongroupsbroker'},
				'src': require('./telegram-circule.svg').default,
			},
			{
				'title': 'instagram',
				'href': JSON.parse(data['instagram']) || {fa: 'https://insatagram.com/Arongroups', en: 'https://www.instagram.com/arongroups_en'},
				'src': require('./instagram.svg').default
			},
			{
				'title': 'twitter',
				'href': JSON.parse(data['twitter']) || {fa: 'https://twitter.com/AronGroupsco', en: 'https://twitter.com/AronGroupsco'},
				'src': require('./twitter.svg').default
			},
			{
				'title': 'youtube',
				'href': JSON.parse(data['youtube']) || {fa: 'https://www.youtube.com/c/AronGroups/', en: 'https://www.youtube.com/c/AronGroups/'},
				'src': require('./youtube-circule-1.svg').default,
			},
			{
				'title': 'aparat',
				'href': JSON.parse(data['aparat']) || {fa: 'https://aparat.com/AronGroups', en: ''},
				'src': require('./aparat-circle.svg').default,
			},
		];
		const {__, getRoute, language} = this.i18;
		const {title, contact} = this.state;
		const footerTopCategoryList = [
			{
				'title': __('Trade'),
				'href': '#',
				'children': [
					{
						'title': __('Trading accounts'),
						'href': getRoute(Routes.desktop.accounts())
					},
					{
						'title': __('Deposit and Withdrawal'),
						'href': getRoute(Routes.desktop.depositWithdrawal())
					},
					{
						'title': __('Trading Symbols'),
						'href': getRoute(Routes.desktop.contractSpecification())
					},
					{
						'title': __('Economic calendar'),
						'href': 'https://blog.arongroups.co/category/news/economic-calendar/'
					}
				]
			},
			{
				'title': __('Education'),
				'href': '#',
				'children': [
					{
						'title': __('MetaTrader Mobile Training'),
						'href': getRoute(Routes.desktop.metaTraderMobile())
					},
					{
						'title': __('Webinars'),
						'href': getRoute(Routes.desktop.webinar())
					},
					{
						'title': __('Blog'),
						'href': 'https://blog.arongroups.co'
					}
				]
			},
			{
				'title': __('Special offer'),
				'href': '#',
				'children': [
					{
						'title': __('IB Plan'),
						'href': getRoute(Routes.desktop.ib())
					},
					{
						'title': __('Aron Bank'),
						'href': getRoute(Routes.desktop.aronBank())
					},
					{
						'title': __('Investment Fund'),
						'href': getRoute(Routes.desktop.investmentFund())
					},
					{
						'title': __('Bonus Plan'),
						'href': getRoute(Routes.desktop.aronBonus())
					},
					// {
					// 	'title': __('Aron Football'),
					// 	'href': getRoute(Routes.desktop.football())
					// },
					{
						'title': __('Fund Loan'),
						'href': getRoute(Routes.desktop.cryptoLoan())
					},
				]
			}
		]
		const platform = [
			{
				'title': 'android',
				'src': require('./android.svg').default,
				'href': 'https://download.mql5.com/cdn/mobile/mt5/android?server=AronMarkets-Server'
			},
			{
				'title': 'apple',
				'src': require('./apple.svg').default,
				'href': 'https://download.mql5.com/cdn/mobile/mt5/ios?server=AronMarkets-Server'
			},
			{
				'title': 'windows',
				'src': require('./windows.svg').default,
				'href': 'https://download.mql5.com/cdn/web/aron.markets.ltd/mt5/aronmarkets5setup.exe'
			}
		]
		return <div className={styles.footer}>
			<Container className={styles.container}>
				<div className={styles.footerContent}>
					<div className={styles.footerDown}>
						<p data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<span>{__('Aron Markets LTD')}</span> {__('is incorporated under Marshall Island law, under licence number 118046. Aron Markets LTD registered address is Ajeltake Road Ajeltake Island, Majuro, Marshall Islands, MH96960. Aron Markets LTD office is located at. 59 Agios Athamasios Avenue, D. VRACHIMIS BUILDING, Limassol, 4102, Cyprus.')}
						</p>
						<p data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<span>{__('Aron Groups Broker')}</span> {__(' is a subsidiary of Aron Groups, which currently operates in several different business segments. Aron Groups has official commercial offices around the world. See the About Us page for more information on other services and offices.')}
						</p>
						<p data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<span>{__('Risk Disclaimer:')}</span> {__(' there is a very high degree of risk involved in trading. Past performance is not necessarily indicative of future results. Aron Groups and all individuals affiliated with this site assume no responsibility for your trading and investment results. All the material contained herein is believed to be correct, however, Aron Groups will not be held responsible for accidental oversights, typos, or incorrect information from sources that generate fundamental and technical information. Only risk capital should be used. You are responsible for understanding the risk involved with trading foreign exchange products. The indicators, strategies, setups, methods, and all other products and features on this website are for educational purposes only and should not be construed as advice')}
						</p>
						<p data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<span>{__('Warning:')}</span> {__(' Aron Group does not provide any services in Saint Vincent and the Grenadines, Turkey, USA, United Kingdom, Cyprus, China and United Arab Emirates.')}
						</p>
					</div>
					<div className={styles.footerTop}>
						<div className={styles.platForm}>
							<h4 data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('What is MT5')}</h4>
							{platform.map(((value, index) => {
								return <div data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true" key={index} className={styles.platFormIcon}>
									<a href={value.href}>
										<SVGInline key={index} src={value.src} className={styles.platFormSvg}/>
									</a>
								</div>
							}))}
						</div>
						<div className={styles.navigationFooter}>
							{
								footerTopCategoryList.map(((value, index) => {
									return <div key={index} data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true"
												className={styles.footerTopCategory}>
										<h4 onClick={() => this.setTitle(index + 1)}>{value.title}</h4>
										<ul className={{[styles.footerTopSubCategory]: 1, [styles.active]: (index === title - 1)}.toCss}>
											{
												value.children.map((item, index) => {
													return <li className={styles.footerTopSubCategoryItem}>
														{
															item.href.startsWith('http') ? <a href={item.href} className={styles.menuItemContent}
																							  onClick={() => this.scrollUp()}> {item.title}     </a> : <Link onClick={() => this.scrollUp()} to={item.href} className={styles.menuItemContent}>{item.title}</Link>
														}
													</li>
												})
											}
										</ul>
									</div>
								}))
							}
						</div>
						<div className={styles.footerMiddle} data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.footerMiddleWrapper}>
								<div className={styles.footerMiddleLogo}>
									<img src={`${media_server}/${data['files']['file1'][0]['filename']}`} alt=""/>
								</div>
								<div className={styles.footerMiddleIcons}>
									{
										footerIcons.map((value, index) => {

											return <img onClick={() => window.open(value.href[language], "_blank")} src={value.src} alt=""/> ? value.href[language] !== '' : ''
										})
									}
								</div>
							</div>
						</div>
						<div className={styles.footerTopCategory} data-aos="fade" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<h4 onClick={() => (contact === 1) ? this.setState({contact: 0, title: 0}) : this.setState({contact: 1, title: 0})}>Contacts</h4>
							<ul className={{[styles.footerTopSubCategory]: 1, [styles.active]: contact}.toCss}>
								<li className={styles.footerTopSubCategoryItem}>
									<i className="material-icons " style={{color: '#bea830'}}>phone</i>
									<p>
										{__('UK Office Contact Number:')}
									</p>
									<a href={`tel:${'00442037475808'}`}> {'00442037475808'}</a>
								</li>
								<li className={styles.footerTopSubCategoryItem}>
									<i className="material-icons " style={{color: '#bea830'}}>phone</i>
									<p>
										{__('Cyprus Office Contact Number:')}
									</p>
									<a href={`tel:${'0035725654181'}`}> {'0035725654181'}</a>
								</li>
								<li className={styles.footerTopSubCategoryItem}>
									<i className="material-icons" style={{color: '#bea830'}}>mail</i>
									<a href={`mailto:${data['email']}` || 'mailto:aronsupport@arongroups.co'}>{data['email']||'aronsupport@arongroups.co'}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.copyRight}>
					<p>{__('Aron Groups © ')}{new Date().getUTCFullYear()}</p>
				</div>
				<div className={styles.scrollUp} onClick={() => this.scrollUp()}>
						<span>
							<img src={require('./icons/arrow-up.png').default} alt=""/>
						</span>
				</div>
			</Container>
		</div>;
	}

}