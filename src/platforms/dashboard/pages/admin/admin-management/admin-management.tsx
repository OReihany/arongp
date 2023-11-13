import React, {PureComponent} from "react";
import styles from './admin-management.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {AuthService} from "services/auth-service";


@Observer([AuthService])
export class AdminManagement extends PureComponent {
	@wired authService = pick(AuthService);
	state = {
		modalSet: 0,
		name: '',
		email: '',
		password: '',
		role: 0,
		submitMode: 0,
		admins: [],
		_id: '',
		roles: [8]
	}
	showStatusHandler = (e) => {
		this.setState({showStatus: parseInt(e.target.value)})
	}
	roleHandler = (e) => {
		this.setState({role: parseInt(e.target.value)})
	}
	editAdmin = async (index) => {
		const admin = this.state.admins[index];
		const {name, email, role, roles} = admin;
		this.setState({roles: roles || [8], name, email, password: '', role: parseInt(role), submitMode: 1, modalSet: 1, _id: admin['_id']});
	}
	deleteAdmin = async (index) => {
		const admin = this.state.admins[index];
		this.setState({name: '', email: '', password: '', role: 0, modalSet: 1, submitMode: 2, _id: admin['_id']});
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.authService.admins().then((data) => {
				return this.setState({admins: data});
			})
			mont = false;
		}
	}

	formSubmit = async (e) => {
		e.preventDefault();
		const {name, email, password, role, submitMode, _id,roles} = this.state;
		try {
			let res = {};
			if (submitMode === 0) {
				res = await this.authService.register({roles, name, email, password, role: `${role}`});
			} else if (submitMode === 1) {
				res = await this.authService.editAdmin({roles, name, email, password, role: `${role}`, _id: `${_id}`});
			} else {
				res = await this.authService.deleteAdmin({_id: _id});
			}
			this.setState({modalSet: 0})
			if (res['status'] === 201) {
				toast.success(res['message'], {
					position: "top-right",
					closeOnClick: true
				});
			} else {
				toast.error(res['message'], {
					position: "top-right",
					closeOnClick: true
				})
			}
			const admins = await this.authService.admins();
			this.setState({admins})
		} catch (e) {
			toast.error('ادمین محترم مشکل رخ داده مجددا تلاش نمایید.', {
				position: "top-right",
				closeOnClick: true
			})
		}

	}
	modalData = () => {
		const {name, email, password, role, submitMode, roles} = this.state;
		const menuItems = [
			{
				id: 0,
				title: 'مدیریت صفحه اصلی',
			},
			{
				id: 1,
				title: 'مدیریت حساب های معاملاتی',
			},
			{
				id: 2,
				title: 'مدیریت واریز برداشت',
			},
			{
				id: 3,
				title: 'مدیریت جوایز',
			},
			{
				id: 4,
				title: 'مدیریت نمادهای معاملاتی',
			},
			{
				id: 5,
				title: 'مدیریت ادمین ها',
			},
			{
				id: 6,
				title: 'مدیریت لینک ها',
			},
			{
				id: 7,
				title: 'مدیریت faq',
			},
			{
				id: 8,
				title: 'مدیریت پیغام ها',
			},
			{
				id: 9,
				title: 'خروج',
			}
		];
		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				{
					(submitMode !== 2) ?
						<form id="create-deposit-withdrawal-form" onSubmit={(e) => this.formSubmit(e)}>
							<div className={styles.textFiled}>
								<p>نام: </p>
								<input type="text" onChange={(e) => this.setState({name: e.target.value})} value={name}/>
							</div>
							<div className={styles.textFiled}>
								<p>ایمیل(نام کاربری): </p>
								<input type="text" onChange={(e) => this.setState({email: e.target.value})} value={email}/>
							</div>
							<div className={styles.textFiled}>
								<p>رمز عبور:</p>
								<input type="password" onChange={(e) => this.setState({password: e.target.value})} value={password}/>
							</div>
							<div className={styles.type} onChange={(e) => this.roleHandler(e)}>
								<p>عنوان دسترسی: </p>
								<label className={styles.label}>سوپر ادمین
									<input value={0} type="radio" name="role" checked={(role === 0)}/>
								</label>
								<label className={styles.label}>متاتریدر
									<input value={1} type="radio" name="role" checked={(role === 1)}/>
								</label>
								<label className={styles.label}>مالی
									<input value={2} type="radio" name="role" checked={(role === 2)}/>
								</label>
								<label className={styles.label}>بنر
									<input value={3} type="radio" name="role" checked={(role === 3)}/>
								</label>
							</div>
							<div className={styles.roles} >
								<p>دسترسی ها:</p>
								<div className={styles.rolesItems}>
									{
										menuItems.map((item) => {
											return <label key={item.id} className={styles.label}>{item.title}
												<input onChange={(e) => {
													this.setState({roles: (roles.indexOf(parseInt(e.target.value)) > -1) ? roles.filter(item => item !== parseInt(e.target.value)) : [...roles, parseInt(e.target.value)]})
												}} value={item.id} type="checkbox" name="roles" checked={(roles.indexOf(item.id) > -1)}/>
											</label>
										})
									}
								</div>
							</div>
							<div className={styles.btnSubmit}>
								<button className={styles.btn} type="submit">{(submitMode === 0) ? 'بارگذاری' : 'ویرایش'}</button>
							</div>
						</form> :
						<div className={styles.deleteModal}>
							<div className={styles.content}>
								<p>آیا از حذف این ادمین مطمئن هستید؟</p>
							</div>
							<div className={styles.btnSubmit}>
								<button className={styles.btn} onClick={(e) => this.setState({modalSet: 0})}>خیر</button>
								<button className={styles.btn} onClick={(e) => this.formSubmit(e)}> بلی</button>
							</div>
						</div>
				}
			</Container>
		</div>
	}

	resetModal = (e) => {
		this.setState({modalSet: 0});
	}

	render() {
		const {admins} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title="ایجاد ادمین جدید">
				{
					this.modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>مدیریت ادمین های ثبت شده</h2>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, submitMode: 0})}>ایجادادمین جدید</a>
				</div>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>نام</th>
							<th>ایمیل</th>
							<th>دسترسی</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							admins.map((item, index) => {
								return <tr key={index}>
									<td>{index + 1}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{(item.role === 0) ? 'سوپر ادمین' : (item.role === 1) ? 'متا' : (item.role === 2) ? 'مالی' : 'تبلیغات'}</td>
									<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.editAdmin(index)}>edit</span></td>
									<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.deleteAdmin(index)}>remove_circle</span></td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
			</Container>

		</div>
	}
}