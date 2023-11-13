import React, {PureComponent, Fragment} from "react";
import {TopSlider} from "./top-slider/top-slider";
import {Plans} from "./plans/plans";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Guide} from "../accounts/guide/guide";
import {Footer} from "../homepage/footer";
import {PaymentMethods} from "../homepage/payment-methods";
import {TopMenu} from "../homepage/top-menu";

declare const window: any;

@Observer([])
export class IntroducingBroker extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		return <Fragment>
			<TopMenu/>
			<TopSlider/>
			<Plans/>
			<Guide/>
			<PaymentMethods/>
			<Footer/>
		</Fragment>;
	}
}