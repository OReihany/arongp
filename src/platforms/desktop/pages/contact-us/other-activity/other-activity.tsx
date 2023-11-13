import React, {PureComponent} from "react";
import styles from './other-activity.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class OtherActivity extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		const holding = [

			{
				id:3,
				title: __('Aron Groups (Turkey)'),
				description: __('Aron Groups consultancy and management firm, located in Istanbul, has assisted hundreds of clients to achieve their business goals for several years across a wide range of industries. These services include financial evaluation, management services, international branding, and marketing.'),
				city: __('Republic of Turkey (Istanbul):'),
				address: __('neighbourhood: sakızağacı Kennedi street-pruva 34-  bakırköy -Istanbul, Turkey')

			},
			{
				id:0,
				title: __('Aron Groups (UK)'),
				description: __(''),
				city: __('United Kingdom (London):'),
				address: __('Kemp House, 152 - 160 City Road, London, United Kingdom, EC1V 2NX')

			},
			{
				id:1,
				title: __('Aron Groups (Seychelle)'),
				description: __(''),
				city: __('Seychelles (Victoria):'),
				address: __('Unit 117, Orion Mall, Palm Street, P.O.Box 828 Victoria, Mahe, Seychelles')

			},
			{
				id:2,
				title: __('Aron Groups (UAE)'),
				description: __(''),
				city: __('Emirate (Dubai):'),
				address: __('Dubai, Oud Metha, AL Fajer Complex, Office NO:203, 204, 205')

			},
		]
		return <div className={styles.otherActivity}>
			<Container className={styles.container}>
				<div className={styles.holding}>
					{holding.map( (item, index) => {
						return <div key={index} className={styles.holdingItem} data-aos={(index%2 === 0) ? "fade-left" : "fade-right"} data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
							<h5>{item.title}</h5>
							<p>{item.description}</p>
							<div className={styles.contactInfo}>
								<div className={styles.icon}>
									<img src={require('../assistance/navigation.png').default} alt=""/>
								</div>
								<div className={styles.content}>
									<p>{item.city}</p>
									<span>{item.address}</span>
								</div>
							</div>
						</div>
					})}
				</div>
			</Container>
		</div>;
	}
}