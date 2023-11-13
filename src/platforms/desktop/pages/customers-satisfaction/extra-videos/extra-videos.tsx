import React, {PureComponent} from "react";
import styles from './extra-videos.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';

@Observer([])
export class ExtraVideos extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18;
		const videoDataExtra = [
			{
				title: __('item1'),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction01.mp4'
			},
			{
				title: __('item2'),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction02.mp4'
			},
			{
				title: __('item3'),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction03.mp4'
			},
			{
				title: __('item4'),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction04.mp4'
			},
			{
				title: __('item5'),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction05.mp4'
			},
			{
				title: __('item6'),
				src: 'https://dl.arongroups.co/customers/Customer-satisfaction06.mp4'
			}
		]
		return <div className={styles.extraVideos}>
			<Container className={styles.container}>
				{
					videoDataExtra.map( (item, index) => {
						return <div key={index} data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<ReactPlayer
								url={item.src}
								width='100%'
								height='100%'
								controls={true}
								config={{
									file: {
										attributes: {
											preload: 'none'
										}
									}
								}}
							/>
						</div>
					})
				}
			</Container>
		</div>;
	}
}