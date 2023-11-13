import React, {Fragment, useEffect} from "react";
import {Lessons} from "./lessons/lessons";
import {TopMenu} from "../homepage/top-menu";
import {PaymentMethods} from "../homepage/payment-methods";
import {Footer} from "../homepage/footer";
import {withRouter} from "react-router-dom";
import {TopBanner} from "./top-banner/top-banner";

declare const window: any;

const WebinarInside = (props) => {
	const query = props.location.pathname.replace('/en/webinar-inside/', '');
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
		<TopMenu/>
		<TopBanner title={query}/>
		<Lessons title={query}/>
		<PaymentMethods/>
		<Footer/>
	</Fragment>;
}

export default withRouter(WebinarInside);
