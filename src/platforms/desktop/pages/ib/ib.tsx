import React, {PureComponent, Fragment} from "react";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Introduce} from "./introduce/introduce";
import {Introduction} from "./introduction/introduction";
import {IncentivePlan} from "./incentive-plan/incentive-plan";
import {TableCommission} from "./table-commision/table-commision";
import {Footer} from "../homepage/footer";
import {PaymentMethods} from "../homepage/payment-methods";
import {TopMenu} from "../homepage/top-menu";

declare const window: any;

@Observer([])
export class Ib extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {language, __} = this.i18;
		const display = (language==='fa') ? {background: `url(${require("../background/aron-guide-fa.jpg").default}) no-repeat`} :{background: `url(${require("../background/aron-guide-en.jpg").default}) no-repeat`}
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Aron Groups IB Plan')}/>
			<Introduce />
			<Introduction />
			<IncentivePlan />
			<TableCommission />
			<PaymentMethods/>
			<Footer/>
		</Fragment>;
	}
}