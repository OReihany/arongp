import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {History} from "./history/history";
import {Goals} from "./goals/goals";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";

declare const window: any;

@Observer([])
export class AboutUs extends PureComponent{
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
			<TopSlider style={display} title={__('About Us')}/>
			<History />
			<Goals />
			<PaymentMethods/>
			<Footer />
		</Fragment>;
	}
}