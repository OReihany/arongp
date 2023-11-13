import React, {useEffect, useState} from "react";
import styles from './login.module.scss';
import {Button, Checkbox, Form, Input, Row, Typography} from 'antd';
import {Link} from "react-router-dom";
import {AuthService} from "services/auth-service";
import {useService} from "react-soa/dist/hook";
import {useHistory} from "react-router-dom";
import {Routes} from "core/routes";
import {I18nService} from "services/i18n-service";
import {toast} from "react-toastify";

const {Title} = Typography;


export const Login = () => {
	const i18 = useService(I18nService);
	let history = useHistory();
	const authService = useService(AuthService);
	const [email, setMail] = useState('');
	const [password, setPassword] = useState('');
	const finish = async () => {
		try {
			const res = await authService.login({email, password});
			window.localStorage.setItem('token', res['token']);
			if (res['role'] === 0){
				history.push(`/${i18.language}${Routes.dashboard.dashboard()}`);
			}else {
				if (res['roles'].length > 0){
					const menuItems = [
						{
							id: 0,
							title: 'مدیریت صفحه اصلی',
							href: i18.getRoute(Routes.dashboard.dashboard()),
						},
						{
							id: 1,
							title: 'مدیریت حساب های معاملاتی',
							href: i18.getRoute(Routes.dashboard.account()),
						},
						{
							id: 2,
							title: 'مدیریت واریز برداشت',
							href: i18.getRoute(Routes.dashboard.depositWithdrawal()),
						},
						{
							id: 3,
							title: 'مدیریت جوایز',
							href: i18.getRoute(Routes.dashboard.bounce()),
						},
						{
							id: 4,
							title: 'مدیریت نمادهای معاملاتی',
							href: i18.getRoute(Routes.dashboard.tradingSymbol()),
						},
						{
							id: 5,
							title: 'مدیریت ادمین ها',
							href: i18.getRoute(Routes.dashboard.admin()),
						},
						{
							id: 6,
							title: 'مدیریت لینک ها',
							href: i18.getRoute(Routes.dashboard.setting()),
						},
						{
							id: 7,
							title: 'مدیریت faq',
							href: i18.getRoute(Routes.dashboard.faq()),
						},
						{
							id: 8,
							title: 'خروج',
							href: i18.getRoute(Routes.dashboard.login()),
						}
					];
					const href = menuItems.filter(item => item.id === res['roles'].sort()[0])[0].href || '';
					history.push(`${href}`);
				}else{
					history.push(`/${i18.language}${Routes.dashboard.login()}`);
				}
			}
			toast.success(`ادمین خوش آمدید.`, {
				position: "top-right",
				closeOnClick: true
			})
		} catch (e) {
			toast.error('نام کاربری یا رمز عبور اشتباه می باشد.', {
				position: "top-right",
				closeOnClick: true
			})
		}

	};
	useEffect(() => {
		async function infoFetch() {
			try {
				const res = await authService.info();
				if (!!res){
					history.push(`/${i18.language}${Routes.dashboard.dashboard()}`);
				}
			} catch (e) {
				toast.error('مشکل سرور رخ داده است.', {
					position: "top-right",
					closeOnClick: true
				});
			}
		}

		infoFetch()
	}, [])
	return <div className={styles.mainLayout}>
		<Form layout="vertical" className={styles.form} onFinish={finish}>
			<Title>Aron Groups Login</Title>
			<Form.Item label="Email address">
				<Input placeholder="Enter your email address" dir="ltr" value={email} onChange={(event) => setMail(event.target.value)}/>
			</Form.Item>
			<Form.Item label="Password">
				<Input type="password" placeholder="Enter you password" dir="ltr" value={password} onChange={(event) => setPassword(event.target.value)}/>
			</Form.Item>
			<Form.Item>
				<Row justify="space-between">
					<Checkbox>Keep me logged in</Checkbox>
					<Link to=" " component={Button} type="link">Forgot Password</Link>
				</Row>
			</Form.Item>
			<Button type="primary" onClick={finish}>Login</Button>
		</Form>
	</div>
}