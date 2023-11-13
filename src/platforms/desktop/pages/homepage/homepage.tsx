import React, {Fragment, PureComponent} from "react";
import {Observer} from "react-soa/dist/class";
import {TopMenu} from "./top-menu";
import {MainBanner} from "./main-banner";
import {QuickLinks} from "./quick-links";
import {ImportantSymbols} from "./important-symbols";
import {TradingPlatform} from "./trading-platform";
import {HowToSignUp} from "./how-to-signup";
import {LeaderBoard} from "./leader-board";
import {PaymentMethods} from "./payment-methods";
import {Footer} from "./footer";
// import {TopTrader} from "./top-trader/top-trader";
import Layout from "../../layout";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {YaldaPlan} from "./yalda/yalda";
// import {CustomersFeedback} from "./customers-feedback/customers-feedback";

declare const window: any;

@Observer([])
export class Homepage extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
		if (this.i18.language === '' || this.i18.language === 'en'){
			this.i18.setLanguage('en')
		}
	}

	render() {
		return <Fragment>
			<Layout>
				<TopMenu/>
				<MainBanner/>
				<QuickLinks/>
				{/*<YaldaPlan/>*/}
				<ImportantSymbols/>
				{/*<CustomersFeedback/>*/}
				{/*<TopTrader/>*/}
				<TradingPlatform/>
				<HowToSignUp/>
				<LeaderBoard/>
				<PaymentMethods/>
				<Footer/>
			</Layout>
		</Fragment>
	}
}