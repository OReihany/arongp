import React, {useEffect, useState} from "react";
import styles from './menu.module.scss';
import {Link, useHistory} from "react-router-dom";
import {Routes} from "core/routes";
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {useService} from "react-soa/dist/hook";
import {AuthService} from "services/auth-service";


export interface menuProp {
	index: Number,
	roles: any,
	role: String
}

export const Menu = (props: menuProp) => {
	const i18 = useService(I18nService);
	const role = props.role;
	const {getRoute} = i18;
	const menuItems = [
		{
			id: 0,
			title: 'مدیریت صفحه اصلی',
			href: getRoute(Routes.dashboard.dashboard()),
		},
		{
			id: 1,
			title: 'مدیریت حساب های معاملاتی',
			href: getRoute(Routes.dashboard.account()),
		},
		{
			id: 2,
			title: 'مدیریت واریز برداشت',
			href: getRoute(Routes.dashboard.depositWithdrawal()),
		},
		{
			id: 3,
			title: 'مدیریت جوایز',
			href: getRoute(Routes.dashboard.bounce()),
		},
		{
			id: 4,
			title: 'مدیریت نمادهای معاملاتی',
			href: getRoute(Routes.dashboard.tradingSymbol()),
		},
		{
			id: 5,
			title: 'مدیریت ادمین ها',
			href: getRoute(Routes.dashboard.admin()),
		},
		{
			id: 6,
			title: 'مدیریت لینک ها',
			href: getRoute(Routes.dashboard.setting()),
		},
		{
			id: 7,
			title: 'مدیریت faq',
			href: getRoute(Routes.dashboard.faq()),
		},
		{
			id: 8,
			title: 'مدیریت پیغام ها',
			href: getRoute(Routes.dashboard.comment()),
		},
		{
			id: 9,
			title: 'یلدا ',
			href: getRoute(Routes.dashboard.yalda()),
		},
		{
			id: 10,
			title: 'خروج',
			href: getRoute(Routes.dashboard.login()),
		}
	];
	return <div className={styles.menu}>
		<div className={styles.menuWrapper}>
			<div className={styles.header}>
				<a onClick={() => window.location.replace("/")}>
					<img src={require('../../../../desktop/pages/homepage/logo.png').default} alt=""/>
				</a>
				<h4>ادمین خوش آمدید</h4>
			</div>
			<ul className={styles.menuItems}>
				{
					(role === 'isAdmin') ? menuItems.map((item, idx) => {
						if (item.id !== 10) {
							return <li key={item.id} className={{[styles.active]: (idx === props.index) ? 1 : 0}.toCss}>
								<Link to={item.href}>{item.title}</Link>
							</li>
						} else {
							return <li key={item.id} className={{[styles.active]: (idx === props.index) ? 1 : 0}.toCss} onClick={() => {
								window.localStorage.removeItem('token');
								document.location.reload(true);
							}}>
								<a >{item.title}</a>
							</li>
						}
					}) : menuItems.map((item, idx) => {
						if (props.roles.indexOf(item.id) > -1) {
							if (item.id !== 10) {
								return <li key={item.id} className={{[styles.active]: (idx === props.index) ? 1 : 0}.toCss}>
									<Link to={item.href}>{item.title}</Link>
								</li>
							} else {
								return <li key={item.id} className={{[styles.active]: (idx === props.index) ? 1 : 0}.toCss} onClick={() => {
									window.localStorage.removeItem('token');
									document.location.reload(true);
								}}>
									<a >{item.title}</a>
								</li>
							}

						} else {

						}
					})
				}
			</ul>
		</div>
	</div>
}