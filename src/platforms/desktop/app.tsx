import React, {Fragment, PureComponent} from "react";
import {Observer} from "react-soa/dist/class";
import {Redirect, Route, Switch} from 'react-router-dom';
import {Routes} from "core/routes";
import {Homepage} from "./pages/homepage/homepage";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Symbols} from "./pages/symbols/symbols";
import {MetaTrader} from "./pages/meta-trader/meta-trader";
import {Accounts} from "./pages/accounts/accounts";
import {IntroMetaTrader} from "./pages/intro-meta-trader/intro-meta-trader";
import {MetaTraderMobile} from "./pages/mobile-meta-trader/mobile-meta-trader";
import {Faq} from "./pages/faq/faq";
import {JobPosition} from "./pages/job-position/job-position";
import {ContactUs} from "./pages/contact-us/contact-us";
import {AboutUs} from "./pages/about-us/about-us";
import {AronBank} from "./pages/aron-bank/aron-bank";
import {Prize} from "./pages/prize/prize";
import {Webinar} from "./pages/webinar/webinar";
import WebinarInside from "./pages/webinar-inside/webinar-inside";
import {JobPositionList} from "./pages/job-position-list/job-position-list";
import {IntroducingBroker} from "./pages/introducing-broker/introducing-broker";
import {Ib} from "./pages/ib/ib";
import {JobPositionDetail} from "./pages/job-position-detail/job-position-detail";
import {AronBonus} from "./pages/aron-bounce/aron-bonus";
import {AronGuide} from "./pages/aron-guide/aron-guide";
import {DepositWithdrawal} from "./pages/deposit-withdrawal/deposit-withdrawal";
import {ContractSpecification} from "./pages/contract-specification/contract-specification";
// import {EconomicCalendar} from "./pages/economic-calendar/economic-calendar";
import TagManager from 'react-gtm-module';
import {ForexTools} from "./pages/forex-tools/forex-tools";
import {InvestmentFund} from "./pages/investment-fund/investment-fund";
import {CryptoLoan} from "./pages/crypto-loan/crypto-loan";
import {WhyAronGroups} from "./pages/why-aron-groups/why-aron-groups";
import {Competition} from "./pages/competition/competition";
// import {AronAnniversary} from "./pages/aron-anniversary/aron-anniversary";
import {Loader} from "./pages/common/loader/loader";
import CookieConsent from "react-cookie-consent";
import {ZuluTrading} from "./pages/zulu-trading/zulu-trading";
import {Layout} from "./layout";
import {Sitemap} from "./pages/sitemap/sitemap";
import {NotFound} from "./pages/not-found/not-found";
import {CustomersSatisfaction} from "./pages/customers-satisfaction/customers-satisfaction";
import {Pamm} from "./pages/pamm/pamm";
import {Prop} from "./pages/prop/prop";
import {AronVip} from "./pages/aron-vip/aron-vip";
// import {Football} from "./pages/football/football";
import AronVipOffer from "./pages/aron-vip-offer/aron-vip-offer";




@Observer([I18nService])
export class App extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		loading: false,
	}

	componentDidMount() {
		TagManager.initialize({ gtmId: 'GTM-T4NQH3T' });
		setInterval(() => {
			this.setState({loading: false})
		}, 3000);
	}

	render() {
		const {__} = this.i18;
		return (
			<Fragment key={this.i18.language}>
				<CookieConsent
					location="bottom"
					buttonText={__("OK")}
					cookieName="cookieAccepted"
					style={{background: "#2B373B", padding: "24px 96px 24px 24px"}}
					buttonStyle={{background: "#967E07FF", fontSize: "13px", padding: "6px 12px", borderRadius: "6px", color: "#ffffff", border: "1px solid #967E07FF"}}
					expires={150}
				>
					{__('Notice. This website uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to our Privacy Policy and our cookies usage.')}
				</CookieConsent>
				{
					this.state.loading ? <Loader/> :
						<Layout>
							<Switch>
								<Route path={Routes.desktop.desktop()} exact component={Homepage}/>
								<Route path={this.i18.getRoute(Routes.desktop.desktop())} exact component={Homepage}/>
								<Route path={this.i18.getRoute(Routes.desktop.symbols())} exact component={Symbols}/>
								<Route path={this.i18.getRoute(Routes.desktop.metaTrader())} exact component={MetaTrader}/>
								<Route path={this.i18.getRoute(Routes.desktop.metaTraderMobile())} exact component={MetaTraderMobile}/>
								<Route path={this.i18.getRoute(Routes.desktop.accounts())} exact component={Accounts}/>
								<Route path={this.i18.getRoute(Routes.desktop.introMetaTrader())} exact component={IntroMetaTrader}/>
								<Route path={this.i18.getRoute(Routes.desktop.faq())} exact component={Faq}/>
								<Route path={this.i18.getRoute(Routes.desktop.jobPosition())} exact component={JobPosition}/>
								<Route path={this.i18.getRoute(Routes.desktop.jobPositionDetail())} exact component={JobPositionDetail}/>
								<Route path={this.i18.getRoute(Routes.desktop.contactUs())} exact component={ContactUs}/>
								<Route path={this.i18.getRoute(Routes.desktop.about())} exact component={AboutUs}/>
								<Route path={this.i18.getRoute(Routes.desktop.aronBank())} exact component={AronBank}/>
								<Route path={this.i18.getRoute(Routes.desktop.prize())} exact component={Prize}/>
								<Route path={this.i18.getRoute(Routes.desktop.webinar())} exact component={Webinar}/>
								<Route path={this.i18.getRoute(Routes.desktop.webinarInside())} exact component={WebinarInside}/>
								<Route path={this.i18.getRoute(Routes.desktop.jobPositionList())} exact component={JobPositionList}/>
								<Route path={this.i18.getRoute(Routes.desktop.introducingBroker())} exact component={IntroducingBroker}/>
								<Route path={this.i18.getRoute(Routes.desktop.ib())} exact component={Ib}/>
								<Route path={this.i18.getRoute(Routes.desktop.cryptoLoan())} exact component={CryptoLoan}/>
								<Route path={this.i18.getRoute(Routes.desktop.aronBonus())} exact component={AronBonus}/>
								<Route path={this.i18.getRoute(Routes.desktop.aronGuide())} exact component={AronGuide}/>
								<Route path={this.i18.getRoute(Routes.desktop.depositWithdrawal())} exact component={DepositWithdrawal}/>
								<Route path={this.i18.getRoute(Routes.desktop.contractSpecification())} exact component={ContractSpecification}/>
								{/*<Route path={this.i18.getRoute(Routes.desktop.economicCalendar())} exact component={EconomicCalendar}/>*/}
								<Route path={this.i18.getRoute(Routes.desktop.forexTools())} exact component={ForexTools}/>
								<Route path={this.i18.getRoute(Routes.desktop.investmentFund())} exact component={InvestmentFund}/>
								<Route path={this.i18.getRoute(Routes.desktop.whyAronGroups())} exact component={WhyAronGroups}/>
								<Route path={this.i18.getRoute(Routes.desktop.competition())} exact component={Competition}/>
								{/*<Route path={this.i18.getRoute(Routes.desktop.aronAnniversary())} exact component={AronAnniversary}/>*/}
								<Route path={this.i18.getRoute(Routes.desktop.customerSatisfaction())} exact component={CustomersSatisfaction}/>
								<Route path={this.i18.getRoute(Routes.desktop.zuluTrading())} exact component={ZuluTrading}/>
								<Route path={this.i18.getRoute(Routes.desktop.pamm())} exact component={Pamm}/>
								<Route path={this.i18.getRoute(Routes.desktop.prop())} exact component={Prop}/>
								<Route path={this.i18.getRoute(Routes.desktop.vip())} exact component={AronVip}/>
								{/*<Route path={this.i18.getRoute(Routes.desktop.football())} exact component={Football}/>*/}
								<Route path={this.i18.getRoute(Routes.desktop.aronVipOffer())} exact component={AronVipOffer}/>
								<Route path={this.i18.getRoute(Routes.desktop.notFound())} exact component={NotFound}/>
								<Route path={this.i18.getRoute(Routes.desktop.siteMap())} exact component={Sitemap}/>
								<Redirect from="*" to={this.i18.getRoute(Routes.desktop.notFound())}/>
							</Switch>
						</Layout>
				}
			</Fragment>
		)
	}
}
