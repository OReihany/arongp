import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Tools} from "./tools/tools";
import {PaymentMethods} from "../homepage/payment-methods";
import {TradingPlatform} from "../homepage/trading-platform";
import {TopMenu} from "../homepage/top-menu";

declare const window: any;

@Observer([])
export class ForexTools extends PureComponent{
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__, language} = this.i18;
		const display = (language==='fa') ? {background: `url(${require("../background/why-aron-groups-fa.jpg").default}) no-repeat`} :{background: `url(${require("../background/why-aron-groups-en.jpg").default}) no-repeat`}
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Forex Tools')}/>
			<Tools />
			<TradingPlatform />
			<PaymentMethods />
		</Fragment>;
	}
}