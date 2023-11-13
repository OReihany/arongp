import React, {Fragment, useEffect, useState} from "react";
import styles from './admin.module.scss';
import {Menu} from "../common/menu/menu";
import {Introduce} from "../common/page-introduce/introduce";
import {useHistory} from "react-router-dom";
import {useService} from "react-soa/dist/hook";
import {AuthService} from "services/auth-service";
import {I18nService} from "services/i18n-service";
import {Routes} from "core/routes";
import {AdminManagement} from "./admin-management/admin-management";


export const Admin = () => {
	let history = useHistory();
	const authService = useService(AuthService);
	const i18 = useService(I18nService);
	const [isLogin, setIsLogin] = useState(false);
	const [role, setRole] = useState('isNone');
	const [roles, setRoles] = useState([]);
	useEffect(() => {
		async function infoFetch() {
			try {
				const res = await authService.info();
				if (!res) {
					history.push(`/${i18.language}${Routes.dashboard.login()}`);
					setIsLogin(false);
				}else {
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
				<Menu roles={roles} role={role} index={5}/>
				<div className={styles.mainContent}>
					<Introduce title='مدیریت ادمین ها'/>
					<AdminManagement />
				</div>
			</div> :
				<div className={styles.main}>

				</div>
		}
	</Fragment>;
}