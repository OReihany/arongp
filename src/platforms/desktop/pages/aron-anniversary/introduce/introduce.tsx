import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Introduce extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}
	render() {
		// (function () {
		// 	const second = 1000,
		// 		minute = second * 60,
		// 		hour = minute * 60,
		// 		day = hour * 24;
		//
		// 	let today: Date = new Date(),
		// 		dd = String(today.getDate()).padStart(2, "0"),
		// 		mm = String(today.getMonth() + 1).padStart(2, "0"),
		// 		yyyy = today.getFullYear(),
		// 		nextYear = yyyy + 1 ,
		// 		dayMonth = "03/18/",
		// 		birthday = dayMonth + yyyy;
		//
		// 	// @ts-ignore
		// 	today = mm + "/" + dd + "/" + yyyy;
		// 	// @ts-ignore
		// 	if (today > birthday) {
		// 		birthday = dayMonth + nextYear;
		// 	}
		// 	//end
		//
		// 	const countDown = new Date(birthday).getTime(),
		// 		x = setInterval(function () {
		//
		// 			const now = new Date().getTime(),
		// 				distance = countDown - now;
		//
		// 			document.getElementById("days").innerText = String(Math.floor(distance / (day)));
		// 			document.getElementById("hours").innerText = String(Math.floor((distance % (day)) / (hour)));
		// 			document.getElementById("minutes").innerText = String(Math.floor((distance % (hour)) / (minute)));
		// 			document.getElementById("seconds").innerText = String(Math.floor((distance % (minute)) / second));
		// 			this.setState({
		// 				days: Math.floor(distance / (day)).toString(),
		// 				hours: Math.floor((distance % (day)) / (hour)).toString(),
		// 				minutes: Math.floor((distance % (hour)) / (minute)).toString(),
		// 				seconds: Math.floor((distance % (minute)) / second).toString()
		// 			})
		//
		// 			//do something later when date is reached
		// 			if (distance < 0) {
		// 				document.getElementById("headline").innerText = "It's Aron Anniversary";
		// 				document.getElementById("countdown").style.display = "none";
		// 				document.getElementById("content").style.display = "block";
		// 				clearInterval(x);
		// 			}
		// 			//seconds
		// 		}, 1000)
		// }());
		const {__} = this.i18;
		return <div className={styles.introduce}>
			<Container className={styles.container}>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('Aron Groups Holding aims to commemorate 3 years of support and empathy of its customers, dozens of festivals and challenges in cyberspace, special and unique offers and finally its biggest trading competition with prizes worth a total of 150 thousand The dollar holds. Stay with us')}
				</p>

				{/*<h1 id="headline">{__('Countdown to Aron Anniversary')}</h1>*/}
				{/*<div id="countdown">*/}
				{/*	<ul style={{direction: 'ltr'}}>*/}
				{/*		<li><span id="days">{this.state.days}</span>{__('days')}</li>*/}
				{/*		<li><span id="hours">{this.state.hours}</span>{__('Hours')}</li>*/}
				{/*		<li><span id="minutes">{this.state.minutes}</span>{__('Minutes')}</li>*/}
				{/*		<li><span id="seconds">{this.state.seconds}</span>{__('Seconds')}</li>*/}
				{/*	</ul>*/}
				{/*</div>*/}
				{/*<div id="content" className={styles.emoji}>*/}
				{/*	<span>🥳</span>*/}
				{/*	<span>🎉</span>*/}
				{/*	<span>🎂</span>*/}
				{/*</div>*/}
			</Container>
		</div>;
	}
}