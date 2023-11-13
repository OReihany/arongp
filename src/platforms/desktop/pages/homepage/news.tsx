import React, {PureComponent} from "react";
import styles from './news.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";


const menu = [
	'Aron News', 'Trading News', 'Today News'
]
const newsData = [
	[
		{
			'id': 1,
			'title': 'Bitcoin price rebounds to $40K, Ethereum nears $3K: Is a bigger crypto rally looming?',
			'description': 'Bitcoin has been recovering over the past week due to three major factors.\n' +
				'\n' +
				'First, Tesla CEO Elon Musk and MicroStrategy CEO Michael Saylor have been encouraging Bitcoin miners to use cleaner energy.\n' +
				'\n' +
				'Musk and Saylor have gone further since, speaking with Bitcoin miners in the United States about reliable energy consumption.',
			'src': require('./news1.png').default,
			'date': '2021-05-25'
		},
		{
			'id': 2,
			'title': 'Bitcoin price rebounds to $40K, Ethereum nears $3K: Is a bigger crypto rally looming?',
			'description': 'Bitcoin has been recovering over the past week due to three major factors.\n' +
				'\n' +
				'First, Tesla CEO Elon Musk and MicroStrategy CEO Michael Saylor have been encouraging Bitcoin miners to use cleaner energy.\n' +
				'\n' +
				'Musk and Saylor have gone further since, speaking with Bitcoin miners in the United States about reliable energy consumption.',
			'src': require('./news1.png').default,
			'date': '2021-05-25'
		},
		{
			'id': 3,
			'title': 'Bitcoin price rebounds to $40K, Ethereum nears $3K: Is a bigger crypto rally looming?',
			'description': 'Bitcoin has been recovering over the past week due to three major factors.\n' +
				'\n' +
				'First, Tesla CEO Elon Musk and MicroStrategy CEO Michael Saylor have been encouraging Bitcoin miners to use cleaner energy.\n' +
				'\n' +
				'Musk and Saylor have gone further since, speaking with Bitcoin miners in the United States about reliable energy consumption.',
			'src': require('./news1.png').default,
			'date': '2021-05-25'
		}
	]
]

@Observer([])
export class News extends PureComponent {
	@wired i18 = pick(I18nService)
	state = {
		'path': 0
	}

	render() {
		const {__} = this.i18
		const setPath = (index) => {
			this.setState({'path': index});
		}
		return <div className={styles.news}>
			<Container className={styles.container}>
				<h4 className={styles.newsTitle}>
					{__('AronGroups News')}
				</h4>
				<ul className={styles.newsMenu}>
					{menu.map(((value, index) => {
						return <li key={index} className={{[styles.newsMenuItem]: 1, [styles.active]: (this.state.path === index) ? 1 : ''}.toCss} onClick={() => setPath(index)}>
							{value}
						</li>
					}))}
				</ul>
				<div>
					<div className={styles.newsContentWrapper}>
						{
							(newsData[this.state.path]) ? newsData[this.state.path].map(((value, index) => {
								return <div className={styles.newsContent}>
									<img src={value.src} className={styles.newsContentImg} alt=""/>
									<div className={styles.newsContentDescription}>
										<p>{value.description}</p>
									</div>
									<div className={styles.newsContentDate}>
										<p>Date: {value.date}</p>
									</div>
									<div className={styles.newsContentLink}>
										<a href='#'>Show More</a>
									</div>
								</div>
							})) : ''
						}
					</div>
				</div>
			</Container>
		</div>
	}

}