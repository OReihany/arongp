import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Modal} from "../modal/modal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactPlayer from "react-player";


@Observer([])
export class Introduce extends PureComponent {
	@wired i18 = pick(I18nService)
	state = {
		modalSet: 0
	}
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	resetModal = () => this.setState({modalSet: 0});
	render() {
		const {__, language} = this.i18;
		// const {modalSet} = this.state;
		return <div className={styles.introduce} >
			{/*<Modal  modal_reset={this.resetModal} active={modalSet}  />*/}
			{/*<SocialMedia/>*/}
			{/*<Container className={styles.container}>*/}
			{/*	<div className={styles.left}>*/}
			{/*		<h1 data-aos={"fade-up"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Starting Guide with Aron Groups')}</h1>*/}
			{/*		<p data-aos={"fade-up"} data-aos-easing={"ease-in-sine"} data-aos-duration={600}>{__('Aron Groups is the first global broker to offer popular Tomans trading products such as molten gold, gold coins and the dollar / toman currency pair. Experience profitable trading with Tomans and global symbols along with easy and fast deposit and request services, free training, market analyst consulting and 24-hour support at Aron Groups.')}</p>*/}
			{/*		<div className={styles.guideLink} data-aos={"fade-left"} data-aos-easing={"ease-in-sine"} data-aos-duration={800}>*/}
			{/*			<a onClick={() => this.setState({modalSet: 1})}> <i className="material-icons">play_circle_filled</i> {__('How to register in Aron Groups Broker')} </a>*/}
			{/*			/!*<a href="#"> <i className="material-icons">play_circle_filled</i> {__('Meet Aron Groups')} </a>*!/*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div className={styles.right}>*/}
			{/*		<div>*/}
			{/*			<ReactPlayer*/}
			{/*				url="https://dl.arongroups.co/academy/arongroups_int/Authentication.mp4"*/}
			{/*				width='100%'*/}
			{/*				height='100%'*/}
			{/*				controls={true}*/}
			{/*			/>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</Container>*/}
			<img src={(language === 'fa')? require('./aron-vip-fa.jpg').default : require('./aron-vip-fa.jpg').default} alt=""/>
		</div>;
	}
}