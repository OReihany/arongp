import React, {PureComponent} from "react";
import styles from './economic.module.scss';
import {Container} from "components/container/container";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {EconomicCalendarService} from "services/economic-calendar";
import AOS from 'aos';
import 'aos/dist/aos.css';


const clock = () => {
	let date = new Date();
	let hourOffset = 3;
	date.setUTCHours(date.getUTCHours(), date.getUTCMinutes());
	let time = date.getTime();
	date.setUTCFullYear(date.getUTCFullYear(), 2, 22);
	let dstStart = date.getTime();
	date.setUTCFullYear(date.getUTCFullYear(), 8, 22);
	let dstEnd = date.getTime();
	if (time > dstStart && time < dstEnd) hourOffset = 4;
	date.setUTCHours(date.getUTCHours() + hourOffset, date.getUTCMinutes() + 30);
	let output = date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
	return output;
}

// @Observer([EconomicCalendarService])
@Observer([])
export class Economic extends PureComponent {
	@wired i18 = pick(I18nService)
	// @wired economicCalendar = pick(EconomicCalendarService)
	state = {
		path: 0,
		today: 0,
		todayNew: 0,
	}

	componentDidMount() {
		AOS.init({
			duration: 1000
		});
		AOS.refresh();
	}

	setTodayNews = () => {
		return this.state.todayNew === 0 ? this.setState({todayNew: 1, path: this.state.today}) : this.setState({todayNew: 0, path: 0});
	}

	render() {
		return <div>

		</div>
		// const {__} = this.i18;
		// const {path, todayNew} = this.state;
		// const {data} = this.economicCalendar;
		// const {data} = [];
		// const setPath = (index) => {
		// 	document.getElementById(`item-${index}`).scrollIntoView({
		// 		behavior: "smooth",
		// 		block: "start",
		// 		inline: "nearest"
		// 	});
		// 	return this.setState({path: index});
		// };
		// return <div className={styles.economic}>
		// 	<SocialMedia/>
		// 	<Container className={styles.container}>
		// 		<div className={styles.header}>
		// 			<h2 data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Broker Economic Calendar')}</h2>
		// 			<p>
		// 				{__('Current Time:')} <span>
		// 			{
		// 				clock()
		// 			}
		// 		</span>
		// 			</p>
		// 		</div>
		// 		<div className={styles.now}>
		// 			<div className={{[styles.todayNewsStatus]: 1, [styles.active]: (todayNew === 1) ? 1 : 0}.toCss}>
		// 				<span>{__('Just Today’s News')}</span>
		// 				<label className={styles.switch}>
		// 					<input type={styles.checkbox}/>
		// 					<span className={{[styles.slider]: 1, [styles.round]: 1, [styles.active]: (todayNew === 1) ? 1 : 0}.toCss} onClick={() => {
		// 						this.setTodayNews()
		// 					}}>
		//
		// 				</span>
		// 				</label>
		// 			</div>
		// 		</div>
		// 		<div className={styles.economicTable}>
		// 			<ul className={styles.economicTableHead}>
		// 				<li className={styles.time}>{__('time')}</li>
		// 				<li className={styles.currency}>{__('currency')}</li>
		// 				<li className={styles.title}>{__('title')}</li>
		// 				<li className={styles.prev}>{__('previous')}</li>
		// 				<li className={styles.fore}>{__('forecast')}</li>
		// 				<li className={styles.actu}>{__('current')}</li>
		// 			</ul>
		// 			<ul className={styles.economicTableWrapper}>
		// 				{data.map((value, index) => {
		// 					if (value.date.indexOf('امروز') > 0){
		// 						this.setState({today: index});
		// 					}
		// 					return (
		// 						<li className={styles.economicTableItem} key={index} onClick={() => setPath(index)}>
		// 							<p id={`item-${index}`} className={styles.economicTableItemTitle}>{value.date}</p>
		// 							<div className={{[styles.economicTableContent]: 1, [styles.active]: (index === path) ? 1 : 0}.toCss}>
		// 								{
		// 									value.data.map((item) => {
		// 										return (
		// 											<ul className={styles.contentRow}>
		// 												<li className={styles.time}>{item.time}</li>
		// 												<li className={styles.currency}>{item.currency}</li>
		// 												<li className={styles.title}>
		// 													<img alt="" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.currency.substr(0, 2)}.svg`} /> {item.title}</li>
		// 												<li className={styles.prev}>{item.prev}</li>
		// 												<li className={styles.fore}>{item.fore}</li>
		// 												<li className={styles.actu}>{item.actu}</li>
		// 											</ul>
		// 										)
		// 									})
		// 								}
		// 							</div>
		// 						</li>
		// 					)
		// 				})}
		// 			</ul>
		// 		</div>
		// 	</Container>
		// </div>;
	}
}