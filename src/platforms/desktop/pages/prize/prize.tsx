import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {TopBanner} from "./top-banner/top-banner";
import {Rules} from "./rules/rules";
import {Winner} from "./winner/winner";
import {Footer} from "../homepage/footer";
import {PaymentMethods} from "../homepage/payment-methods";
import {TopMenu} from "../homepage/top-menu";

declare const window: any;

@Observer([])
export class Prize extends PureComponent {
	@wired i18 = pick(I18nService);

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
			<TopBanner/>
			<Rules />
			<Winner />
			<PaymentMethods/>
			<Footer/>
		</Fragment>;
	}
}