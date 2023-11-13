import React, {Fragment, PureComponent} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Introduce} from "./introduce/introduce";
import {ExtraVideos} from "./extra-videos/extra-videos";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";
import Layout from "../../layout";

declare const window: any;

@Observer([])
export class CustomersSatisfaction extends PureComponent {
	@wired i18 = pick(I18nService);

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
				<ExtraVideos/>
				<PaymentMethods/>
				<Footer/>
			</Layout>
		</Fragment>;
	}
}