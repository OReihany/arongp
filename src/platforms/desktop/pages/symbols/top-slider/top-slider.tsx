import React, {PureComponent} from "react";
import styles from './top-slider.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";

export interface TopSliderProps {
	title: string,
	style: any
}

@Observer([])
export class TopSlider extends PureComponent<TopSliderProps>{
	@wired i18 = pick(I18nService);

	render() {
		const {language} = this.i18;
		const display = (language==='fa') ? {background: `url(${require("./top-slider-fa.png").default}) no-repeat`} :{background: `url(${require("./top-slider.png").default}) no-repeat`};
		const {title, style} = this.props;
		return <div className={styles.topSlider} style={(style !== {}) ? style : display}>
			<div className={styles.contentWrapper}>
				<SocialMedia />
				<div className={styles.content}>
					<h1>
						{title}
					</h1>
				</div>
			</div>
		</div>;
	}
}