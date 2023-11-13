import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Method} from "./method/method";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {Footer} from "../homepage/footer";
import {TopMenu} from "../homepage/top-menu";

declare const window: any;

@Observer([])
export class DepositWithdrawal extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__, language} = this.i18
		const display = (language==='fa') ? {background: `url(${require("../background/deposit-withdrawal-fa.jpg").default}) no-repeat`} :{background: `url(${require("../background/deposit-withdrawal-en.jpg").default}) no-repeat`}
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Aron Groups Deposit & Withdrawal')}/>
			<Method/>
			<Footer/>
		</Fragment>;
	}
}