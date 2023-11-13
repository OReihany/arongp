import React, {PureComponent} from "react";
import styles from './top-slider.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([])
export class TopSlider extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18;
		return <div className={styles.topSlider} style={(language==='fa') ? {background: `url(${require("./aron-anniversary-fa.jpg").default}) no-repeat`} :{background: `url(${require("./aron-anniversary.jpg").default}) no-repeat`} }>
			<div className={styles.contentWrapper}>
				<SocialMedia />
			</div>
		</div>;
	}
}