import React, {Fragment, PureComponent} from 'react';

import styles from './down-menu.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Link} from "react-router-dom";
import {Container} from "components/container/container";


function DropDown(props: {__: any}) {
	const {__} = props;
	const menuItem = [
		{
			'title': __('Home'),
			'href': '/',
			'children': []
		},
		{
			'title': __('Trade'),
			'href': '/trade',
			'children': [
				{
					'title': __('Trading Accounts'),
					'href': '/item1'
				},
				{
					'title': __('Deposit and Withdrawal'),
					'href': '/item2'
				},
				{
					'title': __('Introducing MetaTrader 5'),
					'href': '/item3'
				},
				{
					'title': __('Trading Symbols'),
					'href': '/item4'
				},
				// {
				// 	'title': __('Forex calculator'),
				// 	'href': '/item4'
				// },
				{
					'title': __('Economic Calendar'),
					'href': '/item4'
				},
				// {
				// 	'title': __('Instant price'),
				// 	'href': '/item4'
				// },
			]
		},
		{
			'title': __('Education'),
			'href': '/education',
			'children': [
				{
					'title': __('Starting Guide'),
					'href': '/item1'
				},
				{
					'title': __('MetaTrader Mobile Training'),
					'href': '/item2'
				},
				{
					'title': __('MetaTrader Desktop Training'),
					'href': '/item3'
				},
				{
					'title': __('Webinars'),
					'href': '/item4'
				},
				{
					'title': __('Blog'),
					'href': '/item4'
				}
			]
		},
		{
			'title': __('Special Offer'),
			'href': '/special-offer',
			'children': [
				{
					'title': __('IB Plan'),
					'href': '/item1'
				},
				{
					'title': __('Aron Bank'),
					'href': '/item1'
				},
				{
					'title': __('Investment Fund'),
					'href': '/item1'
				},
				{
					'title': __('Bonus Plan'),
					'href': '/item1'
				},
				{
					'title': __('Fund Loan'),
					'href': '/item1'
				},
			]
		},
		{
			'title': __('Aron Anniversary'),
			'href': '/aron-anniversary',
			'children': []
		},
		{
			'title': __('About Us'),
			'href': '/about-us',
			'children': [
				{
					'title': __('About Us'),
					'href': '/item1'
				},
				{
					'title': __('Why Aron Groups'),
					'href': '/item1'
				},
				{
					'title': __('Contact Us'),
					'href': '/item1'
				},
				{
					'title': __('FAQ'),
					'href': '/item1'
				},
			]
		},
	]
	return <Fragment>
		{
			menuItem.map((item, key) => {
				return <div className={{
					[styles.menuItem]: 1,
					[styles.menuItemWithSubmenu]: item.children.length > 0,
					[styles.menuItemLink]: 1,
				}.toCss} key={key} >
					<Link to={item.href} className={styles.menuItemContent}>
						<span>{item.title}</span>
						<i className="material-icons">keyboard_arrow_down</i>
					</Link>
					<div className={styles.menuItemSubmenu}>
						{item.children.map((value, index) => {
							return <div key={index} className={{
								[styles.subMenuItem]: 1
							}.toCss}>
								<Link to={value.href} className={styles.menuItemContent}>{value.title}</Link>
							</div>
						})}
					</div>

				</div>
			})
		}
	</Fragment>

}

@Observer([])
export class DownMenu extends PureComponent {
	@wired i18 = pick(I18nService);
	render() {
		const {__} = this.i18;
		return <div className={styles.mainLayout}>
			<Container className={styles.container}>
				<div className={styles.menuGroup}>
					<DropDown __={__}/>
				</div>
			</Container>
		</div>
	}
}