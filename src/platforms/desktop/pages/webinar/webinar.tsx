import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Introduce} from "./introduce/introduce";
import {Guide} from "../accounts/guide/guide";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {Footer} from "../homepage/footer";
import {PaymentMethods} from "../homepage/payment-methods";
import {TopMenu} from "../homepage/top-menu";

declare const window: any;

@Observer([])
export class Webinar extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__, language} = this.i18
		const display = (language==='fa') ? {background: `url(${require("../background/webinar-fa.jpg").default}) no-repeat`} :{background: `url(${require("../background/webinar-en.jpg").default}) no-repeat`}
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Aron Groups Academy Webinars')}/>
			<Introduce />
			<Guide />
			<PaymentMethods/>
			<Footer/>
		</Fragment>;
	}
}