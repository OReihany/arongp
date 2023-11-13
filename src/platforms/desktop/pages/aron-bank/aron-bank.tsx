import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Statistical} from "./statistical/statistical";
import {InvestmentPackage} from "./investment-package/investment-package";
import {SignUp} from "./sign-up/sign-up";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";
import Layout from "../../layout";

declare const window: any;

@Observer([])
export class AronBank extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__, language} = this.i18
		const display = (language==='fa') ? {background: `url(${require("../background/aron-guide-fa.jpg").default}) no-repeat`} :{background: `url(${require("../background/aron-guide-en.jpg").default}) no-repeat`}
		return <Fragment>
			<Layout>
				<TopMenu/>
				<TopSlider style={display} title={__('Aron Bank')}/>
				<Statistical/>
				<InvestmentPackage/>
				<SignUp/>
				<PaymentMethods/>
				<Footer/>
			</Layout>
		</Fragment>;
	}
}