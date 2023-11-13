import React, {PureComponent} from "react";
import styles from './top-slider.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";


@Observer([])
export class TopSlider extends PureComponent{
	@wired i18 = pick(I18nService)
	render() {
		return <div className={styles.topSlider}>
			<div className={styles.contentWrapper}>
				<SocialMedia />
				<div className={styles.content}>
					<h4>Shaping the Lorem money in your wallet the lorem money</h4>
				</div>
			</div>
		</div>;
	}
}