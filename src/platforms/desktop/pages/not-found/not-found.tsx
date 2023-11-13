import React, {Fragment, PureComponent} from "react";
import {TopMenu} from "../homepage/top-menu";
import {Footer} from "../homepage/footer";
import {Section} from "./section/section";


export class NotFound extends PureComponent{
	render() {
		return <Fragment>
			<TopMenu/>
			<Section />
			<Footer/>
		</Fragment>
	}
}