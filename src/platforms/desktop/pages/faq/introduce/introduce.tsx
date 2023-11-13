import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaqService} from "services/faq";
import {HomepageService} from "services/homepage-service";

@Observer([FaqService])
export class Introduce extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired faqService = pick(FaqService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	state = {
		faqId: 0,
		faqCatId: 0,
		faqQueId:0,
	}
	setFaqId = (id) => {
		return this.setState({faqId: id, faqCatId: 0, faqQueId:0})
	}
	setFaqCatId = (id) => {
		return this.setState({faqCatId: id, faqQueId:0})
	}
	setFaqQueId = (id) => {
		return this.setState({faqQueId: id})
	}
	render() {
		const {__, language} = this.i18;
		const {faqId, faqCatId, faqQueId} = this.state
		const faqs = this.faqService.data || [];
		return <div className={styles.introduce}>
			<SocialMedia/>
			<Container className={styles.container}>
				<h4 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Frequently Asked Questions (FAQ)')}</h4>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('In this section, you can find the answers to the questions with the highest number of repetitions from the users, if you still have questions in mind, you can get help from our experts in the online support department.')}
				</p>
				<div className={styles.faqWrapper}>
					<div className={styles.faqMenu}>
						<ul className={styles.faqMenuTab} data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{faqs.map((item, index) => {
								return <li key={index} className={{[styles.active]: (faqId === index) ? 1 : 0}.toCss} onClick={() => this.setFaqId(index)}>{item.title[language]}</li>
							})}
						</ul>
					</div>
					<div className={styles.faqContent} data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<div className={styles.faqCatMenuWrapper}>
							<ul className={styles.faqCatMenu}>
								{faqs[faqId].subCategory.map(((value, index) => {
									return <li key={index} className={{[styles.faqCatMenuItem]: 1, [styles.active]: (this.state.faqCatId === index) ? 1 : ''}.toCss} onClick={() => this.setFaqCatId(index)}>
										{value.title[language]}
									</li>
								}))}
							</ul>
						</div>
						<div className={styles.faqContentWrapper}>
							{faqs[faqId].subCategory[faqCatId].faq.map((value, index) => {
								return <div key={value.id} className={{[styles.faqItem]: 1, [styles.active]: (faqQueId === index) ? 1 : 0}.toCss}>
									<div className={styles.faqQuestion} onClick={() => {
										this.setFaqQueId(index);
									}
									}>
										<p className={styles.faqItemQuestion}>{value[`q_${language}`]}</p>
										<span className={styles.faqItemIcon}> {(faqQueId === index) ? '-' : '+'} </span>
									</div>
									<div className={styles.faqAnswer}>
										<p> {value[`a_${language}`]} </p>
									</div>
								</div>
							})}
						</div>
					</div>
				</div>

			</Container>
		</div>;
	}
}