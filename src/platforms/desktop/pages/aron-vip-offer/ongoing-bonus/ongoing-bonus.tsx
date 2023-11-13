import React, {PureComponent} from "react";
import styles from './ongoing-bonus.module.scss'
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {Modal} from "../../accounts/modal/modal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BounceService} from "services/bounce";

const media_server = 'https://media.arongroups.co';


export interface AronVipProps {
	id: string,
}


@Observer([BounceService])
export class OngoingBonus extends PureComponent<AronVipProps> {
	@wired i18 = pick(I18nService);
	@wired bounceService = pick(BounceService);
	state = {
		modal: -1,
		data: [],
	}

	componentDidMount() {
		let mount = true;
		if (mount) {
			this.setState({data: this.bounceService.data.filter(item => ["2022 World Cup"].includes(item.title_en) && this.props.id === '2898aebd6e198540680d4aa728c032ec') || []})
		}
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	resetModal = () => this.setState({modal: -1});
	modalSet = (index) => this.setState({modal: index});

	render() {
		const {__, language} = this.i18;
		const {modal, data} = this.state;
		return <div className={styles.onGoing}>
			{
				data.map((value, index) => {
					return (
						<Modal key={index} modal_reset={this.resetModal} close={0} active={(modal === index) ? 1 : 0} title={(language === 'fa') ? value.title_fa : value.title_en} modal_data={value.modal}/>
					);
				})
			}
			<Container className={styles.container}>
				<div className={styles.onGoingWrapper}>
					<h2 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups VIP Offer')}</h2>
					<div className={styles.onGoingCards}>
						{
							data.map((item, index) => {
								return <div key={index} className={styles.onGoingCard} data-aos={(index % 2 === 0) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
									<img src={(language === 'fa') ? `${media_server}/${item['files']['file2'][0]['filename']}` : `${media_server}/${item['files']['file1'][0]['filename']}`} alt=""/>
									<div className={styles.onGoingCardContent}>
										<h4>{((language === 'fa')) ? item.title_fa : item.title_en}</h4>
										<p>{(language === 'fa') ? item.description_fa : item.description_en}</p>
										<div className={styles.ongoingButton}>
											{
												(item.modal.length > 0) ? <a>
													<span onClick={() => this.modalSet(index)}>{__('Terms and Conditions')}</span>
												</a> : ''
											}
										</div>
									</div>
								</div>
							})
						}
					</div>

				</div>
			</Container>
		</div>;
	}
}