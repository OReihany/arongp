import React, {PureComponent, Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {Footer} from "../homepage/footer";
import {TopMenu} from "../homepage/top-menu";
import {AronGame} from "./aron-game/aron-game";
import Layout from "../../layout";
// import {CompetitionPage} from "./competition-page/competition-page";

declare const window: any;

@Observer([])
export class Competition extends PureComponent {
	@wired i18 = pick(I18nService)

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__, language} = this.i18;
		const display = (language === 'fa') ? {background: `url(${require("../background/why-aron-groups-fa.jpg").default}) no-repeat`} : {background: `url(${require("../background/why-aron-groups-en.jpg").default}) no-repeat`};
		return <Fragment>
			<Layout>
				<TopMenu/>
				<TopSlider style={display} title={__('Aron Groups Competitions')}/>
				{/*<CompetitionPage/>*/}
				<AronGame/>
				<Footer/>
			</Layout>
		</Fragment>;
	}
}