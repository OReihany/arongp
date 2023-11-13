import React, {Fragment, PureComponent, useState} from 'react';

import styles from './top-menu.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Link} from "react-router-dom";
import {Routes} from "core/routes";
import {Container} from "components/container/container";
import {SettingService} from "services/setting";

const media_server = 'https://media.arongroups.co';

function LanguageSwitcher(props: {
	activeLanguage: string,
	setLanguage: (lang: string) => any
}) {
	const languages = ['en', 'fa'];
	const {activeLanguage} = props;
	return <div className={{
		[styles.menuItem]: 1,
		[styles.menuItemWithSubmenu]: 1,
		[styles.menuItemLanguage]: 1,
	}.toCss}>
		<div className={styles.menuItemContent}>
			<img src={(activeLanguage === 'en') ? require('./united-kingdom.svg').default : require('./iran.svg').default} alt=""/>
			<span>{(activeLanguage === 'en') ? 'En' : (activeLanguage === 'fa') ? 'فا' : ''}</span>
			<div className={styles.arrowDown}>
				<img src={require('./icons/down-arrow.png').default} alt=""/>
			</div>
		</div>
		<div className={styles.menuItemSubmenu} id="languages">
			{languages.map(lang => {
				const active = lang === props.activeLanguage;
				return <div key={lang} className={{
					[styles.subMenuItem]: 1,
					[styles.subMenuItemActive]: active
				}.toCss} onClick={() => {
					props.setLanguage(lang);
				}} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '32px'}}>{lang}</div>
			})}
		</div>
	</div>

}

function LanguageSwitcherMobile(props: {
	activeLanguage: string,
	setLanguage: (lang: string) => any
}) {
	const [path, setPath] = useState(0)
	const languages = ['en', 'fa'];
	const {activeLanguage} = props;
	return <div className={{
		[styles.menuItem]: 1,
		[styles.menuItemWithSubmenu]: 1,
		[styles.menuItemLanguage]: 1,
	}.toCss}>
		<div className={styles.menuItemLangContent} onClick={() => setPath(1)}>
			<div className={styles.languageSelected}>
				<img src={(activeLanguage === 'en') ? require('./united-kingdom.svg').default : require('./iran.svg').default} alt=""/>
				<span>{(activeLanguage === 'en') ? 'English' : (activeLanguage === 'fa') ? 'Persian' : ''}</span>
				<i className="material-icons">keyboard_arrow_down</i>
			</div>
			<div className={{[styles.menuItemSubmenu]: 1, [styles.menuItemSubmenuActive]: path}.toCss} id="languages">
				{languages.map((lang) => {
					const active = lang === props.activeLanguage;
					return <div key={lang} className={{
						[styles.subMenuItem]: 1,
						[styles.subMenuItemActive]: active
					}.toCss} onClick={() => {
						setPath(0);
						props.setLanguage(lang);
					}} style={{fontSize: '12px'}}>{lang}</div>
				})}
			</div>
		</div>
	</div>

}


function DropDown(props: { __: any, menuItem: any }) {
	const {__, menuItem} = props;
	return <Fragment>
		{
			menuItem.map((item, key) => {
				return <div className={{
					[styles.menuItem]: 1,
					[styles.menuItemWithSubmenu]: item.children.length > 0,
					[styles.menuItemLink]: 1,
				}.toCss} key={key}>
					{
						item.href.startsWith('http') ? <a href={(item.children.length === 0) ? item.href : ''} className={styles.menuItemContent}
														  onClick={(e) => this.setPath(key, e)}>
							<span style={{fontSize: '16px'}}>{item.title}</span>
							<div className={styles.arrowDown}>
								<img src={require('./icons/down-arrow.png').default} alt=""/>
							</div>
						</a> : <Link to={(item.children.length === 0) ? item.href : ''} className={styles.menuItemContent}>
							{/*onClick={(e) => this.setPath(key, e)}>*/}
							<span style={{fontSize: '16px'}}>{item.title}</span>
							<div className={styles.arrowDown}>
								<img src={require('./icons/down-arrow.png').default} alt=""/>
							</div>
						</Link>
					}
					<div className={styles.menuItemSubmenu}>
						{item.children.map((value, index) => {
							return <div key={index} className={{
								[styles.subMenuItem]: 1
							}.toCss}>
								{
									(value.href.startsWith('http')) ? <a href={value.href} className={styles.menuItemContent}>{value.title}</a> : <Link to={value.href} className={styles.menuItemContent}>{value.title}</Link>
								}
							</div>
						})}
					</div>

				</div>
			})
		}
	</Fragment>

}

declare const window: any;

@Observer([I18nService, SettingService])
export class TopMenu extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired settingService = pick(SettingService);
	state = {
		path: 0,
		menu: 0,
		scroll: false
	}
	setPath = (key, e) => {
		e.preventDefault();
		return this.setState({path: key});
	};
	setMenu = (state) => this.setState({menu: state, path: 0})

	scrollUp = () => {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	componentDidMount(): void {
		window.addEventListener("scroll", () => {
			this.setState({scroll: window.scrollY > 250})
		});
	}

	render() {
		const {__, language, getRoute} = this.i18;
		const faqs = !!this.settingService.data ? this.settingService.data : {"files": {"file1": [{"filename": ""}], "file2": [{"filename": ""}], }};
		const menuItem = [
			{
				'title': __('Home'),
				'href': getRoute(Routes.desktop.desktop()),
				'children': []
			},
			{
				'title': __('Trade'),
				'href': '#',
				'children': [
					{
						'title': __('Trading Accounts'),
						'href': getRoute(Routes.desktop.accounts())
					},
					{
						'title': __('Deposit and Withdrawal'),
						'href': getRoute(Routes.desktop.depositWithdrawal())
					},
					{
						'title': __('Introducing MetaTrader 5'),
						'href': getRoute(Routes.desktop.introMetaTrader())
					},
					{
						'title': __('Social Trading'),
						'href': getRoute(Routes.desktop.zuluTrading())
					},
					{
						'title': __('Aron Prop'),
						'href': getRoute(Routes.desktop.prop())
					},
					{
						'title': __('Trading Symbols'),
						'href': getRoute(Routes.desktop.contractSpecification())
					},
					// {
					// 	'title': __('Forex Tools'),
					// 	'href': getRoute(Routes.desktop.forexTools())
					// },
					{
						'title': __('Economic Calendar'),
						'href': 'https://blog.arongroups.co/category/news/economic-calendar/'
					},
					// {
					// 	'title': __('Instant price'),
					// 	'href': getRoute(Routes.desktop.symbols())
					// },
				]
			},
			{
				'title': __('Education'),
				'href': '#',
				'children': [
					{
						'title': __('Starting Guide'),
						'href': getRoute(Routes.desktop.aronGuide())
					},
					{
						'title': __('MetaTrader Mobile Training'),
						'href': getRoute(Routes.desktop.metaTraderMobile())
					},
					{
						'title': __('MetaTrader Desktop Training'),
						'href': 'https://blog.arongroups.co/category/tutorials/software-tutorials/'
					},
					{
						'title': __('Webinars'),
						'href': getRoute(Routes.desktop.webinar())
					},
					// {
					// 	'title': __('Aron Vip'),
					// 	'href': getRoute(Routes.desktop.vip())
					// }
				]
			},
			{
				'title': __('Special Offer'),
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
					{
						'title': __('Competition'),
						'href': getRoute(Routes.desktop.competition())
					},
					{
						'title': __('PAMM'),
						'href': getRoute(Routes.desktop.pamm())
					}
				]
			},
			// {
			// 	'title': __('Aron Anniversary'),
			// 	'href': getRoute(Routes.desktop.aronAnniversary()),
			// 	'children': []
			// },
			{
				'title': __('About Us'),
				'href': '#',
				'children': [
					{
						'title': __('About Us'),
						'href': getRoute(Routes.desktop.about())
					},
					{
						'title': __('Why Aron Groups'),
						'href': getRoute(Routes.desktop.whyAronGroups())
					},
					{
						'title': __('Contact Us'),
						'href': getRoute(Routes.desktop.contactUs())
					},
					{
						'title': __('FAQ'),
						'href': getRoute(Routes.desktop.faq())
					},
					{
						'title': __('Customers Satisfaction'),
						'href': getRoute(Routes.desktop.customerSatisfaction())
					},
				]
			},
			{
				'title': __('Blog'),
				'href': 'https://blog.arongroups.co/',
				'children': []
			}
		];
		const {path, menu} = this.state;
		return <div>
			<div className={styles.mainLayout}>
				<Container className={styles.container}>
					<div className={styles.menuItems}>
						<div className={styles.topMenu}>
							<div className={styles.topMenuGroupLog}>
								<Link to={getRoute(Routes.desktop.desktop())} className={styles.branding}>
									<img src={`${media_server}/${faqs['files']['file1'][0]['filename']}`} alt=""/>
								</Link>
							</div>
							{/*<div className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="60007a4a8b18380001bcfa9f" data-style-height="24px" data-style-width="100%" data-theme="dark" data-min-review-count="50">*/}
							{/*	<a href="https://uk.trustpilot.com/review/arongroups.co" target="_blank" rel="noopener">Trustpilot</a>*/}
							{/*</div>*/}
							<div className={styles.topMenuGroup}>
								<div className={{[styles.menuItem]: 1, [styles.menuItemButton]: 1, [styles.menuItemButtonOutline]: 1}.toCss}>
									<a href="https://client.arongroups.co" className={styles.menuItemContent}>{__('Login')}</a>
									{/*<a onClick={() => window.open("https://client.arongroups.co/", "_blank")} href="https://client.arongroups.co" className={styles.menuItemContent}>{__('Login')}</a>*/}
								</div>

								<div className={{[styles.menuItem]: 1, [styles.menuItemButton]: 1}.toCss}>
									<a href="https://client.arongroups.co/register/" className={styles.menuItemContent}>{__('Signup')}</a>
								</div>

								<div className={{[styles.menuItem]: 1, [styles.menuItemButton]: 1, [styles.menuItemButtonOutline]: 1}.toCss}>
									<a href="https://social.arongroups.co/portal/registration/subscription" className={styles.menuItemContent}>{__('Social Trading')}</a>
								</div>

								<LanguageSwitcher activeLanguage={language} setLanguage={this.i18.setLanguage}/>
							</div>
						</div>
						<div className={styles.downMenu}>
							<div className={styles.downMenuGroup}>
								<DropDown __={__} menuItem={menuItem}/>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div className={styles.main}>
				<div className={styles.menuOut}>
					<Container className={styles.container}>
						<div className={styles.menu} onClick={() => this.setMenu(1)}>
							<div className={styles.menuIcon}>
								<img src={require('./icons/menu.png').default} alt=""/>
							</div>
							<span>menu</span>
						</div>
						<Link to={getRoute(Routes.desktop.desktop())} className={styles.logo}>
							<img src={`${media_server}/${faqs['files']['file2'][0]['filename']}`} alt=""/>
						</Link>
						<div className={styles.loginButton}>
							<Link to="" onClick={() => window.open("https://client.arongroups.co/", "_blank")} className={styles.menuItemContent}>{__('Login')}</Link>
						</div>
					</Container>
				</div>
				<div className={{[styles.mainLayoutMobile]: 1, [styles.menuActive]: menu, [styles.menuDeactivate]: menu === 0 ? 1 : 0}.toCss}>
					<Container className={styles.container}>
						<div className={styles.menuItems}>
							<div className={styles.branding}>
								<Link to={getRoute(Routes.desktop.desktop())}>
									<img src={`${media_server}/${faqs['files']['file1'][0]['filename']}`} alt=""/>
								</Link>
								<div className={styles.closeMenu} onClick={() => this.setMenu(0)}>
									<i className="material-icons">close</i>
								</div>
							</div>

							{/*<div className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="60007a4a8b18380001bcfa9f" data-style-height="64px" data-style-width="100%" data-theme="dark" data-min-review-count="50">*/}
							{/*	<a style={{display: 'flex', 'width': '100%'}} href="https://uk.trustpilot.com/review/arongroups.co" target="_blank" rel="noopener">Trustpilot</a>*/}
							{/*</div>*/}
							{
								menuItem.map((item, key) => {
									return <div className={{
										[styles.menuItem]: 1,
										[styles.menuItemWithSubmenu]: item.children.length > 0,
										[styles.menuItemLink]: 1,
									}.toCss} key={key}>
										{
											item.href.startsWith('http') ? <a href={(item.children.length === 0) ? item.href : ''} className={styles.menuItemContent}
																			  onClick={(e) => this.setPath(key, e)}>
												<span>{item.title}</span>
												<div className={styles.arrowDown}>
													<img src={require('./icons/down-arrow.png').default} alt=""/>
												</div>
											</a> : (item.children.length > 0) ? <Link to={(item.children.length === 0) ? item.href : ''} className={styles.menuItemContent}
																					  onClick={(e) => this.setPath(key, e)}>
												<span>{item.title}</span>
												<div className={styles.arrowDown}>
													<img src={require('./icons/down-arrow.png').default} alt=""/>
												</div>
											</Link> : <Link to={(item.children.length === 0) ? item.href : ''} className={styles.menuItemContent}>
												{/*onClick={(e) => this.setPath(key, e)}>*/}
												<span>{item.title}</span>
												<div className={styles.arrowDown}>
													<img src={require('./icons/down-arrow.png').default} alt=""/>
												</div>
											</Link>
										}
										<div className={{[styles.menuItemSubmenu]: 1, [styles.menuItemSubmenuActive]: (key === path) ? 1 : 0}.toCss}>
											{item.children.map((value, index) => {
												return <div key={index} className={{
													[styles.subMenuItem]: 1
												}.toCss}>
													{
														(value.href.startsWith('http')) ? <a onClick={() => this.scrollUp()} href={value.href} className={styles.menuItemContent}>{value.title}</a> : <Link onClick={() => this.scrollUp()} to={value.href} className={styles.menuItemContent}>{value.title}</Link>
													}
												</div>
											})}
										</div>

									</div>
								})
							}

							<LanguageSwitcherMobile activeLanguage={language} setLanguage={this.i18.setLanguage}/>
							<div className={{[styles.menuItem]: 1, [styles.menuItemButton]: 1, [styles.menuItemButtonOutline]: 1}.toCss}>
								<Link to="" onClick={() => window.open("https://client.arongroups.co/register/", "_blank")} className={styles.menuItemContent}>{__('Signup')}</Link>
							</div>

							<div className={{[styles.menuItem]: 1, [styles.menuItemButton]: 1, [styles.menuItemButtonOutline]: 1}.toCss}>
								<a onClick={() => window.open("https://client.arongroups.co/register/", "_blank")} className={styles.menuItemContent}>{__('Demo Account')}</a>
							</div>

							<div className={{[styles.menuItem]: 1, [styles.menuItemButton]: 1}.toCss}>
								<Link to="" onClick={() => window.open("https://client.arongroups.co/", "_blank")} className={styles.menuItemContent}>{__('Login')}</Link>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</div>

	}
}