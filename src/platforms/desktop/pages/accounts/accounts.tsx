import React, {PureComponent, Fragment} from "react";
import {Plans} from "./plans/plans";
import {Guide} from "./guide/guide";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";
import Layout from "../../layout";
import {PageMenu} from "../contract-specification/page-menu/page-menu";
import styles from "../contract-specification/contract-specification.module.scss";
import {Vacation} from "../contract-specification/vacation/vacation";

declare const window: any;

@Observer([])
export class Accounts extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		subPage: 0,
	}

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	onChangeSubPage = (index) => {
		this.setState({subPage: index})
	}

	render() {
		const {__, language} = this.i18;
		const {subPage} = this.state;
		const display = (language === 'fa') ? {background: `url(${require("../background/tradying-symbols-fa.jpg").default}) no-repeat`} : {background: `url(${require("../background/tradying-symbols-en.jpg").default}) no-repeat`}
		const menu = [__("Trading Accounts"), __("Trading Conditions")]
		return <Fragment>
			<Layout>
				<TopMenu/>
				<TopSlider style={display} title={__('Aron Groups Trading Accounts')}/>
				<PageMenu menu={menu} path={subPage} onChange={this.onChangeSubPage}/>
				<Plans subPage={subPage}/>
				<div className={{[styles.conditions]: 1, [styles.active]: subPage === 1}.toCss}>
					<Vacation/>
				</div>
				<Guide/>
				<PaymentMethods/>
				<Footer/>
			</Layout>
		</Fragment>;
	}
}