import React, {PureComponent} from "react";
import styles from './list-position.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";



@Observer([])
export class ListPosition extends PureComponent{
	@wired i18 = pick(I18nService)
	state = {
		category: 0,
	}
	setCategory = (id) => {
		this.setState({category: id})
	}
	render() {
		const {__} = this.i18
		const jobPositionList = [
			{
				id:0,
				title: __('IT'),
				jobs: [
					{
						id:0,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:1,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:2,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:3,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:4,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:5,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					}
				]
			},
			{
				id:1,
				title: __('Finance'),
				jobs: [
					{
						id:0,
						title: __('Finance Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:1,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:2,
						title: __('Annotation Manager'),
						status: __('Koln | Product | Full-time')
					},
					{
						id:3,
						title: 'Annotation Manager',
						status: 'Koln | Product | Full-time'
					},
					{
						id:4,
						title: 'Annotation Manager',
						status: 'Koln | Product | Full-time'
					},
					{
						id:5,
						title: 'Annotation Manager',
						status: 'Koln | Product | Full-time'
					}
				]
			},
		]
		const {category} = this.state
		return <div className={styles.listPosition}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<ul className={styles.jobPositionMenu}>
						{jobPositionList.map(((value, index) => {
							return <li key={index} className={{[styles.jobPositionMenuItem]: 1, [styles.active]: (this.state.category === index) ? 1 : ''}.toCss} onClick={() => this.setCategory(index)}>
								{value.title}
							</li>
						}))}
					</ul>
					<div className={styles.jobPositionList}>
						{
							jobPositionList[category].jobs.map( (item, index) =>{
								return <div key={index} className={styles.jobPositionItem}>
									<div className={styles.jobPositionTitle}>
										<p>{item.title}</p>
										<p>{item.status}</p>
									</div>
									<a href='#'>More</a>
								</div>
							})
						}
					</div>
				</div>
			</Container>
		</div>;
	}
}