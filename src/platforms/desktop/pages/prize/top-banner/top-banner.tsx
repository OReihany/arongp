import React, {PureComponent} from "react";
import styles from './top-banner.module.scss';
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";


@Observer([])
export class TopBanner extends PureComponent{
	@wired i18 = pick(I18nService)
	render() {
		const {__} = this.i18
		return <div className={styles.topBanner}>
			<SocialMedia/>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h4>{__('Aron Groups Broker competitions')}</h4>
					<p>
						{__('')}
					</p>
				</div>
			</Container>
		</div>;
	}
}