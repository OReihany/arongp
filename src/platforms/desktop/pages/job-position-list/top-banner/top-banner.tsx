import React, {PureComponent} from "react";
import styles from './top-banner.module.scss';
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Container} from "components/container/container";
import {NeedAssistance} from "../../faq/need-assistance/need-assistance";


export class TopBanner extends PureComponent{

	render() {
		return <div className={styles.topBanner}>
			<SocialMedia/>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h4>Job Position</h4>
					<p>Those interested in working with Aron Groups Broker can fill in the form according to the job background and conditions stated for each title, in order to provide the conditions for cooperation by reviewing the resume and job interview.</p>
				</div>
			</Container>
		</div>;
	}
}