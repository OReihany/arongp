import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class Introduce extends PureComponent {
	@wired i18 = pick(I18nService)

	render() {
		const {__} = this.i18
		return <div className={styles.introduce}>
			<SocialMedia/>
			<Container className={styles.container}>
				<h4>{__('Shaping the Lorem money in your wallet the Lorem money')}</h4>
			</Container>
		</div>;
	}
}