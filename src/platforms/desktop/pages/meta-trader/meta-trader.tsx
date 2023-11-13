import React, {PureComponent,Fragment} from "react";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {Education} from "./education/education";
import {InstallMetaTrader} from "./install-meta-trader/install-meta-trader";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";

declare const window: any;

@Observer([])
export class MetaTrader extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__, language} = this.i18;
		const display = (language==='fa') ? {background: `url(${require("../background/tradying-symbols-fa.jpg").default}) no-repeat`} :{background: `url(${require("../background/tradying-symbols-en.jpg").default}) no-repeat`}
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Training Meta Trader 5 Desktop Version')}/>
			<Education/>
			<InstallMetaTrader />
			<PaymentMethods/>
			<Footer />
		</Fragment>;
	}
}