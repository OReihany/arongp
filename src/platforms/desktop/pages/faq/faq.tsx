import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Introduce} from "./introduce/introduce";
import {NeedAssistance} from "./need-assistance/need-assistance";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";

declare const window: any;

@Observer([])
export class Faq extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__} = this.i18
		return <Fragment>
			<TopMenu/>
			<Introduce/>
			<NeedAssistance/>
			<PaymentMethods/>
			<Footer/>
		</Fragment>;
	}
}