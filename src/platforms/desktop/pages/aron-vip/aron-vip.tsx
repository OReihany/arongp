import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Introduce} from "./introduce/introduce";
import {Footer} from "../homepage/footer";
import {PaymentMethods} from "../homepage/payment-methods";
import {TopMenu} from "../homepage/top-menu";
import Layout from "../../layout";
import {TimeLine} from "./time-line/time-line";

declare const window: any;

@Observer([])
export class AronVip extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		return <Fragment>
			<Layout>
				<TopMenu/>
				<Introduce/>
				<TimeLine/>
				<PaymentMethods/>
				<Footer/>
			</Layout>
		</Fragment>;
	}
}