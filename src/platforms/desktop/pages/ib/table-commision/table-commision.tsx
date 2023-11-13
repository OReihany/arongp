import React, {PureComponent} from "react";
import styles from './table-commision.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class TableCommission extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__, language} = this.i18;
		const tableData = [
			[1, 75, 3, '1$', '5%'],
			[2, 130, 9, '2$', '10%'],
			[3, 200, 15, '3$', '15%'],
			[4, 300, 20, '4$', '20%'],
			[5, 450, 25, '5$', '25%'],
			[6, 700, 30, '6$', '30%'],
			[7, 1000, 35, '7$', '35%'],
			[8, 1500, 40, '8$', '40%'],
			[9, 2200, 50, '9$', '45%'],
			[10, 2200, 60, '10$', '50%'],
		]
		return <div className={styles.tableCommission}>
			<Container className={styles.container}>
				<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Commission table for IB members')}</h2>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Categorizing introducers in IB plan based on level, volume of trades and subsidiaries.')}</p>
				{/*<table className={styles.table} data-aos="fade-up" data-aos-offset="100" data-aos-delay="20" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">*/}
				{/*	<thead>*/}
				{/*	<tr>*/}
				{/*		<th>{__('IB level')}</th>*/}
				{/*		<th>{__('Trading Volume up to(Lots)')}</th>*/}
				{/*		<th>{__('Minimum Number of Customize')}</th>*/}
				{/*		<th>{__('Currency Pairs + Metals (each lot) Fixed $ Amount per Lots')}</th>*/}
				{/*		<th>{__('Other Symbols (%) % IB Level Commission')}</th>*/}
				{/*	</tr>*/}
				{/*	</thead>*/}
				{/*	<tbody>*/}
				{/*	{*/}
				{/*		tableData.map( (item, index) =>{*/}
				{/*			return <tr key={index}>*/}
				{/*				{item.map( value => {*/}
				{/*					return <td>*/}
				{/*						{value}*/}
				{/*					</td>*/}
				{/*				} )}*/}
				{/*			</tr>*/}
				{/*		})*/}
				{/*	}*/}
				{/*	</tbody>*/}
				{/*</table>*/}
				<img src={(language === 'fa') ? require('./table-commission.jpg').default : require('./table-commission-en.jpg').default} alt=""/>
			</Container>

		</div>;
	}
}