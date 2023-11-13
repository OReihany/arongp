import React, {Fragment, PureComponent} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {TopSlider} from "./top-slider/top-slider";
import {Table} from "./table/table";
import {TopMenu} from "../homepage/top-menu";
import {TradingPlatform} from "../homepage/trading-platform";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";
import Layout from "../../layout";

declare const window: any;

@Observer([])
export class Symbols extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__} = this.i18;
		return <Fragment>
			<Layout>
				<TopMenu/>
				<TopSlider style={{}} title={__('Aron Groups Instant Price')}/>
				<Table/>
				<TradingPlatform/>
				<PaymentMethods/>
				<Footer/>
			</Layout>
		</Fragment>
	}

}