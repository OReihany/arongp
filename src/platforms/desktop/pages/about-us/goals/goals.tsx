import React, {PureComponent} from "react";
import styles from './goals.module.scss';
import {Container} from "components/container/container";
import {Link} from "react-router-dom";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([])
export class Goals extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
			once: true
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18
		const certificateData = [
			{
				id: 0,
				title: 'certificate',
				src: require('./certificate1.jpg').default
			},
			{
				id: 1,
				title: 'certificate',
				src: require('./certificate2.jpg').default
			},
			{
				id: 2,
				title: 'certificate',
				src: require('./certificate3.jpg').default
			},
			{
				id: 3,
				title: 'certificate',
				src: require('./certificate4.jpg').default
			},
			{
				id: 4,
				title: 'certificate',
				src: require('./certificate5.jpg').default
			},
			{
				id: 5,
				title: 'certificate',
				src: require('./certificate6.jpg').default
			},
			{
				id: 6,
				title: 'certificate',
				src: require('./certificate7.jpg').default
			},
			{
				id: 7,
				title: 'certificate',
				src: require('./certificate8.jpg').default
			},
			{
				id: 8,
				title: 'certificate',
				src: require('./certificate9.jpg').default
			},
			{
				id: 8,
				title: 'certificate',
				src: require('./certificate10.jpg').default
			}
		]
		const linkLogo = [
			{
				id: 0,
				title: 'irannews',
				src: require('./media-icon1.png').default,
				href: 'https://irannews24.ir/'
			},
			{
				id: 1,
				title: 'eghtesadepooya',
				src: require('./media-icon2.png').default,
				href: 'https://eghtesadepooya.ir/'
			},
			{
				id: 2,
				title: 'tejarat',
				src: require('./media-icon3.png').default,
				href: 'https://tejaratnews.com/'
			},
			{
				id: 3,
				title: 'jahaneghtesad',
				src: require('./media-icon4.png').default,
				href: 'https://jahaneghtesad.com/'
			},
			{
				id: 4,
				title: 'sanatnews',
				src: require('./media-icon5.png').default,
				href: 'http://www.sanatnews.ir/'
			},
			{
				id: 5,
				title: 'khabaronline',
				src: require('./media-icon6.png').default,
				href: 'https://www.khabaronline.ir/'
			},
			{
				id: 6,
				title: 'sobh-eqtesad',
				src: require('./media-icon7.png').default,
				href: 'https://sobh-eqtesad.ir/'
			},
			{
				id: 7,
				title: 'mardomsalari',
				src: require('./media-icon8.png').default,
				href: 'https://www.mardomsalari.ir/'
			}
			// ,
			// {
			// 	id: 8,
			// 	title: 'tejaratOnline',
			// 	src: require('./media-icon9.jpg').default,
			// 	href: 'http://tejaratonline.ir/fa/news/128737/%D8%A2%D8%B1%D9%88%D9%86-%DA%AF%D8%B1%D9%88%D9%BE%D8%B3-%DA%A9%D8%A7%D8%B1%D8%A2%D9%81%D8%B1%DB%8C%D9%86-%D9%88-%D8%A8%D8%B1%D9%86%D8%AF-%D8%A8%D8%B1%D8%AA%D8%B1-%D8%AF%D8%B1-%D8%AD%D9%88%D8%B2%D9%87-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%B7%D9%84%D8%A7'
			// },
			// {
			// 	id: 9,
			// 	title: 'iraneconist',
			// 	src: require('./media-icon10.jpg').default,
			// 	href: 'http://iraneconomist.com/fa/news/359492/%D8%A2%D8%B1%D9%88%D9%86-%DA%AF%D8%B1%D9%88%D9%BE%D8%B3%C2%A0%DA%A9%D8%A7%D8%B1%D8%A2%D9%81%D8%B1%DB%8C%D9%86%C2%A0%D9%88%C2%A0%D8%A8%D8%B1%D9%86%D8%AF%C2%A0%D8%A8%D8%B1%D8%AA%D8%B1%C2%A0%D8%AF%D8%B1%C2%A0%D8%AD%D9%88%D8%B2%D9%87%C2%A0%D8%AA%D9%88%D9%84%DB%8C%D8%AF%C2%A0%D8%B7%D9%84%D8%A77%D9%84%D8%A7'
			// },
			// {
			// 	id: 10,
			// 	title: 'mehr',
			// 	src: require('./media-icon11.png').default,
			// 	href: 'https://www.mehrnews.com/news/4940376'
			// },
		]
		const importantLink = [
			{
				id: 0,
				title: __('AML & KYC (Anti-Money Laundering and Combating the Financing of Terrorism)'),
				href: 'https://dl.arongroups.co/privacy/AML&KYC(en).pdf',
				href_fa: 'https://dl.arongroups.co/privacy/AML&KYC(fa).pdf'
			},
			{
				id: 1,
				title: __('Client Agreement'),
				href: 'https://dl.arongroups.co/privacy/Agreement_English.pdf',
				href_fa: 'https://dl.arongroups.co/privacy/AgreementFinal.pdf'
			},
			{
				id: 2,
				title: __('Business Account Terms'),
				href: 'https://dl.arongroups.co/privacy/TERMS%20OF%20BUSINESS%20Account_English.docx.pdf',
				href_fa: 'https://dl.arongroups.co/privacy/TERMS%20OF%20BUSINESS%20Account.pdf'
			},
			{
				id: 3,
				title: __('Complaint Policy'),
				href: 'https://dl.arongroups.co/privacy/Complaint%20Handling%20Policy_English.pdf',
				href_fa: 'https://dl.arongroups.co/privacy/Complaint%20Handling%20Policy.pdf'
			},
			{
				id: 4,
				title: __('Non-Trading Operations T&Cs'),
				href: 'https://dl.arongroups.co/privacy/Regulations%20for%20non-trading%20operations_English.pdf',
				href_fa: 'https://dl.arongroups.co/privacy/Regulations%20for%20non-trading%20operations.pdf'
			},
			{
				id: 5,
				title: __('Privacy Policy'),
				href: 'https://dl.arongroups.co/privacy/Privacy%20policy_English.pdf',
				href_fa: 'https://dl.arongroups.co/privacy/Privacy%20policy.pdf'
			},
			{
				id: 6,
				title: __('CopyTrading Agreement'),
				href: 'https://dl.arongroups.co/privacy/copy%20trading%20agreement-English.pdf',
				href_fa: 'https://dl.arongroups.co/privacy/copy%20trading%20agreement-persian.pdf',
				href_tr: 'https://dl.arongroups.co/privacy/copy%20trading%20agreement-turkish.pdf'
			},
			// {
			// 	id: 6,
			// 	title: __('IB Rules'),
			// 	href: 'https://dl.arongroups.co/privacy/IB-Rules(en).pdf',
			// 	href_fa: 'https://dl.arongroups.co/privacy/IB-Rules.pdf'
			// },
		]
		const scrollLeft = () => {
			document.getElementById('sliderCertificateContent').scrollLeft -= 60;
		}
		const scrollRight = () => {
			document.getElementById('sliderCertificateContent').scrollLeft += 60;
		}
		return <div>
			<div className={styles.goals}>
				<Container className={styles.container}>
					<h5 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('What are our activities and goals?')}</h5>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Customer satisfaction with Aron Groups and their demand to operate in global markets has determined us to achieve our goals; In the first stage, we have provided the most popular and advanced analytical trading platform in the world (MT5) to our customers. ')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__(' Another important goal of Aron Groups is to supply the most profitable Tomans trading products, namely molten gold and coins, as the first Tomans symbols in the global financial arena, which has been achieved in Aron Groups Broker. ')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__(' We tried to expand our innovations at the same time as entering the global arena, including the introduction of the dollar currency pair to the toman. With this product, for the first time, all traders from all over the world can access it. ')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__(' Given that financial markets are dynamic markets, we also aim to provide customers with the safest, easiest and fastest ways to operate in this market. Numerous deposit and withdrawal methods, informing of events affecting financial markets, complete training from the beginning, consulting, analysis and presentation of trading signals, offering incentive plans and bonuses, inviting customers to attend training groups and success, etc. The goals of the broker are Aron Groups, which is a continuation of our previous activities. ')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('It is enough to be interested in working in the financial markets, we will provide you with everything you need to start and continue working. From basic training and skills to support in all stages of trading, we will be by your side. ')}</p>

					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('We seek to satisfy you with the services we, provide to further develop these services and provide you with a profitable trading environment by facilitating a secure trading environment, and we will soon be with you by providing Forex tools, commodities and digital currencies. .')}</p>
				</Container>
				<div className={styles.sliderCertificate}>
					<Container className={styles.container}>
						<div className={styles.backForward} onClick={() => scrollLeft()}>
							<i className="material-icons">chevron_left</i>
						</div>
						<div className={styles.sliderCertificateContent} id="sliderCertificateContent">
							{
								certificateData.map((value, index) => {
									return <img key={index} src={value.src}/>
								})
							}
						</div>
						<div className={styles.backForward} onClick={() => scrollRight()}>
							<i className="material-icons">chevron_right</i>
						</div>
					</Container>
				</div>
			</div>
			<div className={styles.aronMedia}>
				<Container className={styles.container}>
					<h4 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups in Media')}</h4>
					<div className={styles.logoMedia}>
						<div className={styles.logoMediaImageWrapper}>
							{linkLogo.map((item, index) => {
								return <img data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" onClick={() => window.open(item.href, "_blank")} key={index} src={item.src} alt=""/>;
							})}
						</div>
					</div>
				</Container>
			</div>
			<div className={styles.agreement}>
				<Container className={styles.container}>
					<h4 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Terms and Conditions:')}</h4>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('The following documents contain important information Aron Groups Broker clients are advised to read the Terms and Conditions documents:')}</p>
					<div className={styles.importantLink}>
						{importantLink.map((item, index) => {
							if (item.id === 6 && language === "fa"){
								return <div className={styles.downloadLink} onClick={() => window.open((item.href_fa ), "_blank")} data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<span className="material-icons-outlined">
									download
								</span>
									<a key={index} className={styles.link}>{item.title}</a>
								</div>
							}else if (item.id === 6 && language !== "fa"){
								return <div>
									<div className={styles.downloadLink} onClick={() => window.open((item.href ), "_blank")} data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<span className="material-icons-outlined">
									download
								</span>
										<a key={index} className={styles.link}>{`${item.title}(EN)`}</a>
									</div>
									<div className={styles.downloadLink} onClick={() => window.open((item.href_tr ), "_blank")} data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<span className="material-icons-outlined">
									download
								</span>
										<a key={index} className={styles.link}>{`${item.title} (Tr)`}</a>
									</div>
								</div>
							}else {
								return <div className={styles.downloadLink} onClick={() => window.open((language === 'fa' ? item.href_fa : item.href), "_blank")} data-aos="fade-left" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<span className="material-icons-outlined">
									download
								</span>
									<a key={index} className={styles.link}>{item.title}</a>
								</div>
							}
						})}
					</div>
				</Container>
			</div>
		</div>;
	}
}