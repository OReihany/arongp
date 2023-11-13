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
		const {language, __} = this.i18;
		const displayMode = (language === 'fa') ? require('./zulutrade.jpg').default : require('./zulutrade-flap.jpg').default;
		return <div className={styles.topSlider} style={{background: `url(${displayMode})`}}>
			<div className={styles.contentWrapper}>
				<SocialMedia />
				<div className={styles.content}>
					<h1>{__('Aron Copy Trading')}</h1>
					{/*<img src={require('./zulu-logo big transparent.png').default} alt=""/>*/}
					<div className={styles.btn}>
						<a onClick={() => window.open(language === 'fa' ? 'https://my.arongroups.co/fa/register' : 'https://my.arongroups.co/en/register', "_blank")}>
							{__('OPEN LIVE ACCOUNT')}
						</a>
					</div>
				</div>
			</div>
		</div>;
	}
}