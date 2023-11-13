import React, {PureComponent, Fragment} from "react";
import {Introducing} from "./introducing/introducing";
import {History} from "./history/history";
import {DescriptionCrypto} from "./description-crypto/description-crypto";
import {InstallMetaTrader} from "../meta-trader/install-meta-trader/install-meta-trader";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {Crypto} from "./crypto/crypto";
import {Borrow} from "./borrow/borrow";
import {CryptoFaq} from "./crypto-faq/crypto-faq";
import {Footer} from "../homepage/footer";
import {TopMenu} from "../homepage/top-menu";

declare const window: any;

@Observer([])
export class CryptoLoan extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__, language} = this.i18
		const display = (language==='fa') ? {background: `url(${require("../background/aron-guide-fa.jpg").default}) no-repeat`} :{background: `url(${require("../background/aron-guide-en.jpg").default}) no-repeat`};
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Fund Loan')}/>
			<Introducing/>
			{/*<History/>*/}
			{/*<DescriptionCrypto/>*/}
			{/*<Crypto/>*/}
			{/*<Borrow/>*/}
			{/*<CryptoFaq/>*/}
			<Footer/>
		</Fragment>;
	}
}