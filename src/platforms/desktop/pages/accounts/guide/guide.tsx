import React, {PureComponent} from "react";
import styles from './guide.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Routes} from "core/routes";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Guide extends PureComponent {
	@wired i18 = pick(I18nService)
	componentDidMount() {
		AOS.init({
			duration: 1000
		});
		AOS.refresh();
	}

	render() {
		const {__, getRoute, language} = this.i18
		const guidItems = [
			{
				title: __('Support'),
				src: require('./guideItem1.png').default,
				href: getRoute(Routes.desktop.contactUs())
			},
			{
				title: __('What is Forex?'),
				src: require('./guideItem2.png').default,
				href: 'https://blog.arongroups.co/category/articles/forex-articles/'
			},
			{
				title: __('MetaTrader 5 Training'),
				src: require('./guideItem3.png').default,
				href: getRoute(Routes.desktop.metaTraderMobile())
			}
		]
		return <div className={styles.guide}>
			<Container className={styles.container}>
				<h2 data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Starting Guide with Aron Groups')}</h2>
				<div className={styles.itemsWrapper}>
					<div className={styles.Items}>
						{guidItems.map((value, index) => {
							return (value.href.startsWith('https')) ? <a key={index} className={styles.item} onClick={()=> window.open(value.href, "_blank")} data-aos={(index < 2) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<img src={value.src} alt=""/>
								<p>{value.title}</p>
							</a> : <Link key={index} className={styles.item} to={value.href} data-aos={(index < 2) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<img src={value.src} alt=""/>
								<p>{value.title}</p>
							</Link>
						})}
						<a key={3} className={styles.item}  onClick={()=> window.open((language === 'fa') ? 'https://my.arongroups.co/fa/register' : 'https://my.arongroups.co/en/register', "_blank")} data-aos={"fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<img src={require('./guideItem4.png').default} alt=""/>
							<p>{__('Open a Trial Account')}</p>
						</a>
					</div>
				</div>
			</Container>
		</div>;
	}
}