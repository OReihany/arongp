import React, {PureComponent} from "react";
import styles from './main-yalda.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {YaldaService} from "services/yalda-service";
import {toast} from "react-toastify";

@Observer([YaldaService])
export class MainYalda extends PureComponent {
	@wired yaldaService = pick(YaldaService);
	state = {
		items: []
	}
	editYaldas = async (e) => {
		e.preventDefault();
		const {items} = this.state;
		try {
			let res = await this.yaldaService.editeYalda({data: items});
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
		} catch (e) {
			toast.error('مشکل سرور رخ داده است.', {
				position: "top-right",
				closeOnClick: true
			});
		}

	}
	componentDidMount() {
		let mont = true;
		if (mont) {
			this.yaldaService.yaldas().then((data) => {
				return this.setState({items: data['data'].length > 0 ? data['data'] : []});
			})
			mont = false;
		}
	}

	setValueYalda = (value, index, state) => {
		let new_data = [...this.state.items];
		new_data[index][state] = value;
		return this.setState({items: new_data});
	}

	render() {
		const {items} = this.state;
		return <div className={styles.mainBanner}>
			<Container className={styles.container}>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({
						items: [...items, {
							user_id: '',
							total_volume: '',
							benefit: '',
							level: '',
							createdAt: '',
							_id: ''

						}]
					})}>ایجاد کاربر جدید</a>
				</div>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>نام کاربری</th>
							<th>مجموع معاملات</th>
							<th>سود</th>
						</tr>
						</thead>
						<tbody>
						{

							items.map((item, index) => {
								return <tr key={index}>
									<td>
										<input onChange={(event) => this.setValueYalda(event.target.value, index, 'level')} key={`${index}-level`} type="text" value={item["level"]}/>
									</td>
									<td>
										<input onChange={(event) => this.setValueYalda(event.target.value, index, 'user_id')} key={`${index}-user_id`} type="text" value={item["user_id"]}/>
									</td>
									<td>
										<input onChange={(event) => this.setValueYalda(event.target.value, index, 'total_volume')} key={`${index}-total-volume`} type="text" value={item["total_volume"]}/>
									</td>
									<td>
										<input onChange={(event) => this.setValueYalda(event.target.value, index, 'benefit')} key={`${index}-benefit`} type="text" value={item["benefit"]}/>
									</td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
				<div className={styles.createNew}>
					<a style={{backgroundColor: "blue"}} onClick={(e) => this.editYaldas(e)}>ویرایش اطلاعات</a>
				</div>
			</Container>

		</div>
	}
}