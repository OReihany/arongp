import React, {PureComponent,Fragment} from "react";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {TopMenu} from "../homepage/top-menu";
import {Footer} from "../homepage/footer";
import {Introduce} from "./introduce/introduce";
import {ZuluPlatform} from "./zulu-platform/zulu-platform";
import {Feature} from "./feature/feature";
import {TopSlider} from "./top-slider/top-slider";

declare const window: any;

@Observer([])
export class ZuluTrading extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	render() {
		const {__} = this.i18;
		return <Fragment>
			<TopMenu/>
			<TopSlider  />
			<Introduce />
			{/*<ZuluPlatform />*/}
			<Feature />
			<Footer />
		</Fragment>;
	}
}