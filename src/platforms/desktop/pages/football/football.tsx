import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {Footer} from "../homepage/footer";
import {PaymentMethods} from "../homepage/payment-methods";
import {TopMenu} from "../homepage/top-menu";
import {Introduce} from "./introduce/introduce";
import {FootballAccount} from "./football-account/football-account";
import {Features} from "./features/features";


declare const window: any;

@Observer([])
export class Football extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {language, __} = this.i18;
		const display = (language === 'fa') ? {background: `url(${require("../background/accounts-fa.jpg").default}) no-repeat`} : {background: `url(${require("../background/accounts-en.jpg").default}) no-repeat`};
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Aron Football')} key={0}/>
			<Introduce/>
			<FootballAccount/>
			<Features/>
			<PaymentMethods/>
			<Footer/>
		</Fragment>;
	}
}