import React, {PureComponent} from "react";
import styles from './top-banner.module.scss';
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Container} from "components/container/container";
import {NeedAssistance} from "../../faq/need-assistance/need-assistance";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';



@Observer([])
export class TopBanner extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18
		const display = (language==='fa') ? {background: `url(${require("../../background/contact-us.jpg").default}) no-repeat`} :{background: `url(${require("../../background/contact-us-en.jpg").default}) no-repeat`}
		return <div className={styles.topBanner} style={display}>
			<SocialMedia/>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h4 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Contact Us')}</h4>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('The experts of the collection, 24 hours a day, 7 days a week and 365 days a year, answer the questions and possible problems of the customers and applicants. You can use the following methods to contact us.')}
					</p>
				</div>
			</Container>
		</div>;
	}
}