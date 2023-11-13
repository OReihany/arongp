import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {TopBanner} from "./top-banner/top-banner";
import {Assistance} from "./assistance/assistance";
import {OtherActivity} from "./other-activity/other-activity";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";

declare const window: any;

@Observer([])
export class ContactUs extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		return <Fragment>
			<TopMenu/>
			<TopBanner/>
			<Assistance/>
			{/*<OtherActivity/>*/}
			<PaymentMethods/>
			<Footer/>
		</Fragment>;
	}
}