import React, {PureComponent, useEffect} from "react";
import styles from './loader.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
const media_server = 'https://media.arongroups.co';

// @Observer([SettingService])
export class Loader extends PureComponent {
	// @wired settingService = pick(SettingService);
	componentDidMount() {
		let mount = true;
		if (mount){
			AOS.init({
				duration : 1000
			});
			AOS.refresh();
		}
	}

	render() {
		// const faqs = this.settingService.data;
		return  <div data-aos="fade" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"
					 className={styles.loader}>
			{/*<img data-aos="slide-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"*/}
			{/*	 src={`${media_server}/${faqs['files']['file3'][0]['filename']}`} alt=""/>*/}
		</div>
	}
}
