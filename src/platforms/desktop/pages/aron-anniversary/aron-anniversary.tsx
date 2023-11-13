import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {TopMenu} from "../homepage/top-menu";
import {Footer} from "../homepage/footer";
import {TopSlider} from "./top-slider/top-slider";
import {Introduce} from "./introduce/introduce";
import {EconomicAwards} from "./economic-awards/economic-awards";
import Layout from "../../layout";

declare const window: any;

@Observer([])
export class AronAnniversary extends PureComponent {

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
				<TopSlider/>
				<EconomicAwards/>
				<Introduce/>
				<Footer/>
			</Layout>
		</Fragment>;
	}
}