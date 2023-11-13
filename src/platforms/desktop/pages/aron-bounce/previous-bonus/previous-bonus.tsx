import React, {PureComponent} from "react";
import styles from './previous-bonus.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Modal} from "../../accounts/modal/modal";
import {BounceService} from "services/bounce";
import moment from "moment/moment";
const media_server = 'https://media.arongroups.co';

@Observer([BounceService])
export class PreviousBonus extends PureComponent{
	@wired i18 = pick(I18nService);
	@wired bounceService = pick(BounceService);
	state = {
		modal: -1,
		data: [],
	}
	componentDidMount() {
		let mount = true;
		if (mount){
			this.setState({data: this.bounceService.data.filter(item => item.type === 1 && item.showStatus === 0) || []})
		}
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}
	resetModal = () => this.setState({modal: -1});
	modalSet = (index) => this.setState({modal: index});
	render() {
		const {__, language} = this.i18
		const {modal, data} = this.state;
		const scrollLeft = () => {
			document.getElementById('sliderBounce').scrollLeft -= 200;
		}
		const scrollRight = () => {
			document.getElementById('sliderBounce').scrollLeft += 200;
		}
		return <div className={styles.previousBonus}>
			{
				data.map( (value, index) =>{
					if (value.modal.length > 0) {
						return (
							<Modal key={index} modal_reset={this.resetModal} close={0} active={(modal === index) ? 1 : 0} title={(language === 'fa') ? value.title_fa: value.title_en} modal_data={value.modal}/>
						)
					}
				})
			}
			<Container className={styles.container}>
				<div className={styles.leftArrow}>
					<i onClick={scrollLeft} className="material-icons">arrow_back</i>
				</div>
				<div className={styles.previousBonusWrapper} id="sliderBounce">
					<div className={styles.previousBonusTimeLine} >
						{data.reverse().map( (item, index) => {
							return <div onClick={() => (item.modal.length > 0) ? this.modalSet(index) : ''} style={(item.modal.length > 0) ? {cursor: 'pointer'} : {}} className={styles.previousBonusItem} data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<div key={index} className={styles.previousBonusItemContent}>
									<img src={(language === 'fa') ? `${media_server}/${item['files']['file2'][0]['filename']}` : `${media_server}/${item['files']['file1'][0]['filename']}`} alt={item.title_en}/>
									<div className={styles.subtitle}>
										<span>{(language === 'fa') ? item.title_fa: item.title_en}</span>
										<p>{(language === 'fa') ? item.description_fa : item.description_en}</p>
									</div>
								</div>
								<p className={styles.dateTime}>{moment(item.createdAt).format('Do MMM YY')}</p>
								<i className="material-icons" style={{color: '#bea830'}}>ac_unit</i>
							</div>
						})}
					</div>
				</div>
				<div className={styles.rightArrow}>
					<i onClick={scrollRight} className="material-icons">arrow_forward</i>
				</div>
			</Container>
		</div>;
	}
}