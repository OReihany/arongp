import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {Introduce} from "./introduce/introduce";
import {OngoingBonus} from "./ongoing-bonus/ongoing-bonus";
import {PreviousBonus} from "./previous-bonus/previous-bonus";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";
import Layout from "../../layout";

declare const window: any;

@Observer([])
export class AronBonus extends PureComponent {

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
				<OngoingBonus/>
				<PreviousBonus/>
				<PaymentMethods/>
				<Footer/>
			</Layout>
		</Fragment>;
	}
}