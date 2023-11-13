import React, {PureComponent} from "react";
import styles from './assistance.module.scss';
import {Container} from "components/container/container";
import {SVGInline} from "components/svg-inline";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {toast} from "react-toastify";
import {CommentService} from "services/comment";
import {SettingService} from "services/setting";

declare const window: any;

@Observer([CommentService, SettingService])
export class Assistance extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired commentService = pick(CommentService);
	@wired settingService = pick(SettingService);
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
		const {firstName, lastName, email, phoneNumber, message, status} = this.state;
		const {__, language} = this.i18;
		const data = this.settingService.data;
		const socialNetwork = [
			{
				id: 0,
				name: 'facebook',
				href: JSON.parse(data['facebook']) || {fa: 'https://www.facebook.com/arongroupsco', en: 'https://www.facebook.com/arongroupsco'},
				src: require('../../faq/need-assistance/facebook.svg').default
			},
			{
				id: 3,
				name: 'instagram',
				href: JSON.parse(data['instagram']) || {fa: 'https://insatagram.com/Arongroups', en: 'https://www.instagram.com/arongroups_en'},
				src: require('../../faq/need-assistance/instagram.svg').default
			},
			{
				id: 4,
				name: 'telegram channel',
				href: JSON.parse(data['telegram']) || {fa: 'https://t.me/arongroupsbroker', en: 'https://t.me/arongroupsbroker'},
				src: require('../../faq/need-assistance/icons8-telegram-app.svg').default
			}
		];
		return <div className={styles.needAssistance}>
			<Container className={styles.container}>
				<div className={styles.contact}>
					<div className={styles.contactForm} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						<h4>{__('Contact Form')}</h4>
						<div className={styles.groupInput}>
							<div className={styles.inputField}>
								<input value={firstName} onChange={(e) => this.setState({firstName: e.target.value})} type="text" name="first-name" placeholder={__("first name...")}/>
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
						{/*<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
						{/*	<div className={styles.icon}>*/}
						{/*		<img src={require('./phone-number.png').default} alt=""/>*/}
						{/*	</div>*/}
						{/*	<div className={styles.content}>*/}
						{/*		<p>{__('Phone number (Istanbul)')}</p>*/}
						{/*		<span><a href={`tel:${data['phone']||'00908503468857'}`}>{data['phone'] || '00908503468857'}</a></span>*/}
						{/*	</div>*/}
						{/*</div>*/}
						<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.icon}>
								<img src={require('./phone-number.png').default} alt=""/>
							</div>
							<div className={styles.content}>
								<p>{__('UK Office Contact Number:')}</p>
								<span>
									<a href={`tel:${'00442037475808'}`}> {'00442037475808'}</a>
								</span>
							</div>
						</div>
						<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.icon}>
								<img src={require('./phone-number.png').default} alt=""/>
							</div>
							<div className={styles.content}>
								<p>{__('Cyprus Office Contact Number:')}</p>
								<span>
									<a href={`tel:${'0035725654181'}`}> {'0035725654181'}</a>
								</span>
							</div>
						</div>
						<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.icon}>
								<img src={require('./mail.png').default} alt=""/>
							</div>
							<div className={styles.content}>
								<p>{__('Support Email')}</p>
								<span><a href={`mailto:${data['email']}` || 'mailto:aronsupport@arongroups.co'}>{data['email'] || 'aronsupport@arongroups.co'}</a></span>
							</div>
						</div>
						<div className={styles.contactInfo} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<div className={styles.icon}>
								<img src={require('./navigation.png').default} alt=""/>
							</div>
							<div className={styles.content}>
								{/*<p>{__('St. Vicent (Kingston):')}</p>*/}
								<span>
									{__('Aron Markets LTD office is located at. 59 Agios Athamasios Avenue, D. VRACHIMIS BUILDING, Limassol, 4102, Cyprus.')}
								</span>
							</div>
						</div>
						<div className={styles.socialNetwork} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							{socialNetwork.map((item) => {
								return <SVGInline className={styles.svgIcon} key={item.id} src={item.src} onClick={() => window.open(item.href[language], "_blank")}/>
							})}
						</div>
						<div className={styles.aronSupport}>
							<div data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.item} onClick={() => window.open(data['whatsApp'] || "https://wa.me/message/TKYF6PON4RNLA1", "_blank")}>
								<div>
									<SVGInline className={styles.svgInline} src={require('../../faq/need-assistance/whatsapp.svg').default}/>
								</div>
								<p>{__('WhatsApp Support Aron Groups')}</p>
							</div>
							<div data-aos="fade-right" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.item} onClick={() => window.open(JSON.parse(data['telegram'])[language] || {fa: 'https://t.me/arongroupsbroker', en: 'https://t.me/arongroupsbroker'}[language], "_blank")}>
								<div>
									<SVGInline className={styles.svgInline} src={require('../../faq/need-assistance/telegram.svg').default}/>
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