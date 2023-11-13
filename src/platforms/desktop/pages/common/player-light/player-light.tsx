import React, {PureComponent} from "react";
import styles from './player-light.module.scss';
import {Observer} from "react-soa/dist/class";


@Observer([])
export class PlayerLight extends PureComponent{

	render() {
		return <div>
			say hello
		</div>;
	}
}