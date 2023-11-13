import React, {PureComponent} from "react";
import styles from './need-assistance.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {CommentService} from "services/comment";
import {toast} from "react-toastify";

declare const window: any;

@Observer([CommentService])
export class NeedAssistance extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired commentService = pick(CommentService);
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: '',
		status: 0
	}

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	submitForm = async () => {
		const {firstName, lastName, email, phoneNumber, message} = this.state;
		if (email.trim().length > 5 && message.trim().length > 20 && message.trim().length < 1000) {
			try {
				let res = {};
				res = await this.commentService.createComment({firstName, lastName, email, phoneNumber, message});
				this.setState({
					firstName: '',
					lastName: '',
					email: '',
					phoneNumber: '',
					message: '',
					status: 0
				});
				window.scrollTo({
					behavior: 'smooth',
					top: 0,
				})
				toast.success(res['message'], {
					position: "bottom-left",
					closeOnClick: true
				});
			} catch (e) {
				toast.error('مشکل سیستمی رخ داده لطفا در ساعات دیگر تلاش نمایید.', {
					position: "bottom-left",
					closeOnClick: true
				});
			}
		} else {
			toast.error('حداقل طول ایمیل باید 5 کاراکتر باشد. حداقل تعداد کاراکترهای پیغام 20 کاراکتر و حداکثر 1000 کاراکتر می باشد.', {
				position: "bottom-left",
				closeOnClick: true
			});
		}
	}

	render() {
		const {__, language} = this.i18
		const {firstName, lastName, email, phoneNumber, message, status} = this.state;
		const socialNetwork = [
			{
				id: 0,
				name: 'facebook',
				href: 'https://www.facebook.com/arongroupsco',
				href_en: 'https://www.facebook.com/arongroupsco',
				src: require('./facebook.svg').default
			},
			{
				id: 1,
				name: 'twitter',
				href: 'https://twitter.com/AronGroupsco',
				href_en: 'https://twitter.com/AronGroupsco',
				src: require('./twitter-circled.svg').default
			},
			{
				id: 2,
				name: 'linkedin',
				href: 'https://www.linkedin.com/company/arongroups/',
				href_en: 'https://www.linkedin.com/company/arongroups/',
				src: require('./linkedin.svg').default
			},
			{
				id: 3,
				name: 'instagram',
				href: 'http://insatagram.com/Arongroups',
				href_en: 'https://www.instagram.com/arongroups_en/',
				src: require('./instagram.svg').default
			},
			{
				id: 4,
				name: 'telegram channel',
				href: 'https://t.me/arongroupsbroker',
				href_en: 'https://t.me/arongroupsbroker',
				src: require('./icons8-telegram-app.svg').default
			}
		];

		return <div className={styles.needAssistance}>
			<Container className={styles.container}>
				<h4 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Need Assistance')}</h4>
				<div className={styles.contact}>
					<div className={styles.contactForm} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<h4>{__('Contact Form')}</h4>
						<div className={styles.groupInput}>
							<div className={styles.inputField}>
								<input value={firstName} onChange={(e) => this.setState({firstName: e.target.value})} type="text" name="first-name" placeholder={__('first name...')}/>
							</div>
							<div className={styles.inputField}>
								<input value={lastName} onChange={(e) => this.setState({lastName: e.target.value})} type="text" name="last-name" placeholder={__("last name...")}/>
							</div>
						</div>
						<div className={styles.groupInput}>
							<div className={styles.inputField}>
								<input value={email} onChange={(e) => this.setState({email: e.target.value})} type="text" name="email" placeholder={__("email...")}/>
							</div>
							<div className={styles.inputField}>
								<input value={phoneNumber} onChange={(e) => this.setState({phoneNumber: e.target.value})} type="text" name="phone-number" placeholder={__("phone number...")}/>
							</div>
						</div>
						<div className={styles.message}>
							<textarea value={message} onChange={(e) => this.setState({message: e.target.value})} name="message" placeholder={__("message...")}/>
						</div>
						<div className={styles.submitBtn}>
							<button className={styles.btn} onClick={() => this.submitForm()}>{__('Send Message')}</button>
						</div>
					</div>
					<div className={styles.contactUs}>
						<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.icon}>
								<img src={require('./phone-number.png').default} alt=""/>
							</div>
							<div className={styles.content}>
								<p>{__('Phone number (Istanbul)')}</p>
								<span><a href="tel:+902128139202">+902128139202</a></span>
							</div>
						</div>
						<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.icon}>
								<img src={require('./email.png').default} alt=""/>
							</div>
							<div className={styles.content}>
								<p>{__('Support Email')}</p>
								<span><a href="mailto:aronsupport@arongroups.co">aronsupport@arongroups.co</a></span>
							</div>
						</div>
						<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.icon}>
								<img src={require('./phone-number.png').default} alt=""/>
							</div>
							<div className={styles.content}>
								{/*<p>{__('St. Vicent (Kingston):')}</p>*/}
								<span>
									{__('First Floor, First St. Vincent Bank Ltd Building, James Street, Kingstown, St Vincent and the Grenadines')}
								</span>
							</div>
						</div>
						<div className={styles.socialNetwork} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{socialNetwork.map((item) => {
								return <img onClick={() => window.open((language === 'fa') ? item.href : item.href_en, "_blank")} key={item.id} src={item.src} alt=""/>
							})}
						</div>
						<div className={styles.aronSupport} onClick={() => window.open('https://wa.me/447312152938', "_blank")}>
							<div className={styles.item} data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<div>
									<img src={require('./whatsapp.svg').default} alt=""/>
								</div>
								<p>{__('WhatsApp Support Aron Groups')}</p>
							</div>
							<div data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.item} onClick={() => window.open('https://wa.me/447312152938', "_blank")}>
								<div>
									<img src={require('./telegram.svg').default} alt=""/>
								</div>
								<p>{__('Telegram Support Aron Groups')}</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>;
	}
}