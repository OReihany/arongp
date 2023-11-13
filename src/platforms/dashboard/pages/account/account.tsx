import React, {Fragment, PureComponent, useEffect, useState} from "react";
import styles from './account.module.scss';
import {Menu} from "../common/menu/menu";
import {Introduce} from "../common/page-introduce/introduce";
import {TradingAccount} from "./trading-account/trading-account";
import {CompareAccount} from "./compare-account/compare-account";
import {Routes} from "core/routes";
import {useService} from "react-soa/dist/hook";
import {AuthService} from "services/auth-service";
import {I18nService} from "services/i18n-service";
import {useHistory} from "react-router-dom";


export const Account = () => {
	let history = useHistory();
	const authService = useService(AuthService);
	const [isLogin, setIsLogin] = useState(false);
	const i18 = useService(I18nService);
	const [role, setRole] = useState('isNone')
	const [roles, setRoles] = useState([])
	useEffect(() => {
		async function infoFetch() {
			try {
				const res = await authService.info();
				if (!res) {
					history.push(`/${i18.language}${Routes.dashboard.login()}`);
					setIsLogin(false);
				} else {
					setRole((res['credentials']['isAdmin'] === 1) ? 'isAdmin' : (res['credentials']['isMeta'] === 1) ? 'isMeta' : (res['credentials']['isFinance'] === 1) ? 'isFinance' : 'isAdvertisement')
					setRoles(res['roles']);
					setIsLogin(true);
				}
			} catch (e) {
				history.push(`/${i18.language}${Routes.dashboard.login()}`);
				setIsLogin(false);
			}
		}

		infoFetch()
	}, [])
	return <Fragment>
		{
			(isLogin) ? <div className={styles.main}>
				<Menu roles={roles} role={role} index={1}/>
				<div className={styles.mainContent}>
					<Introduce title='مدیریت حساب های معاملاتی'/>
					<TradingAccount/>
					<CompareAccount/>
				</div>
			</div> : <div className={styles.main}>

			</div>
		}
	</Fragment>;
}