import React, {PureComponent, Fragment, useEffect} from "react";
import {Observer} from "react-soa/dist/class";
import {Introduce} from "./introduce/introduce";
import {OngoingBonus} from "./ongoing-bonus/ongoing-bonus";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";
import Layout from "../../layout";
import WebinarInside from "../webinar-inside/webinar-inside";
import {withRouter} from "react-router-dom";

declare const window: any;

const AronVipOffer = (props) => {
	const query = (props.location.pathname.includes('/en/aron-vip-offer/')) ? props.location.pathname.replace('/en/aron-vip-offer/', '') : props.location.pathname.replace('/fa/aron-vip-offer/', '');
	console.log(query);
	useEffect(()=>{
		let mount = true;
		if (mount){
			window.scrollTo({
				behavior: 'smooth',
				top: 0,
			})

			mount = false;
		}
	}, [])

	return <Fragment>
		<Layout>
			<TopMenu/>
			<Introduce/>
			<OngoingBonus id={query}/>
			<PaymentMethods/>
			<Footer/>
		</Layout>
	</Fragment>;
}

export default withRouter(AronVipOffer);