import React, {Fragment} from "react";
import {Login} from "./pages/login/login";
import {Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "core/routes";
import {I18nService} from "services/i18n-service";
import {Dashboard} from "./pages/dashboard/dashboard";
import {Account} from "./pages/account/account";
import {DepositWithdrawal} from "./pages/deposit-withdrawal/deposit-withdrawal";
import {Bounce} from "./pages/bounce/bounce";
import {TradingSymbols} from "./pages/trading-symbols/trading-symbols";
import {useService} from "react-soa/dist/hook";
import {Admin} from "./pages/admin/admin";
import {Setting} from "./pages/setting/setting";
import {Faq} from "./pages/faq/faq";
import {Comment} from "./pages/comment/comment";
import {Yalda} from "./pages/yalda/yalda";

export const App = () => {
	const i18 = useService(I18nService);
	return (
		<Fragment>
			<Switch>
				<Route path={i18.getRoute(Routes.dashboard.dashboard())} exact component={Dashboard}/>
				<Route path={i18.getRoute(Routes.dashboard.account())} exact component={Account}/>
				<Route path={i18.getRoute(Routes.dashboard.depositWithdrawal())} exact component={DepositWithdrawal}/>
				<Route path={i18.getRoute(Routes.dashboard.bounce())} exact component={Bounce}/>
				<Route path={i18.getRoute(Routes.dashboard.tradingSymbol())} exact component={TradingSymbols}/>
				<Route path={i18.getRoute(Routes.dashboard.setting())} exact component={Setting}/>
				<Route path={i18.getRoute(Routes.dashboard.faq())} exact component={Faq}/>
				<Route path={i18.getRoute(Routes.dashboard.login())} exact component={Login}/>
				<Route path={i18.getRoute(Routes.dashboard.admin())} exact component={Admin}/>
				<Route path={i18.getRoute(Routes.dashboard.yalda())} exact component={Yalda}/>
				<Route path={i18.getRoute(Routes.dashboard.comment())} exact component={Comment}/>
				{/*<Redirect from="*" to={this.i18.getRoute(Routes.dashboard.login())}/>*/}
			</Switch>
		</Fragment>
	)
}