import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Introduce} from "./introduce/introduce";
import {What} from "./what/what";
import {Footer} from "../homepage/footer";
import {TopMenu} from "../homepage/top-menu";
import {Expo} from "./expo/expo";

declare const window: any;

@Observer([])
export class WhyAronGroups extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		return <Fragment>
			<TopMenu/>
			<Introduce/>
			<Expo/>
			<What/>
			<Footer/>
		</Fragment>;
	}
}