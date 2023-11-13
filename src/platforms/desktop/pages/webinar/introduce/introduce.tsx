import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Link} from "react-router-dom";
import {Routes} from "core/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Introduce extends PureComponent {
	@wired i18 = pick(I18nService);

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	state = {
		path: 0,
		numberInPage: 6,
		page: 1,
	}
	setPath = (id) => {
		this.setState({path: id})
	}
	setNumberInPage = (number) => {
		this.setState({numberInPage: number})
	}
	setPage = (page) => {
		this.setState({page: page})
	}
	setNumberOfPage = (length) => {
		let number = (this.state.numberInPage > 0) ? Math.ceil(length / this.state.numberInPage) : 1;
		let numberTag = [];
		for (let i = 0; i < number; i++) {
			numberTag.push(i);
		}
		return numberTag;
	}

	render() {
		const {__, language, getRoute} = this.i18;
		const webinarData = [
			{
				id: 0,
				name: 'start-trading',
				title: __('Learn how to start trading with broker Aron Groups'),
				class: __('Aron Groups Masters'),
				sessions: 7,
				time: __('7 hours and 50 minutes'),
				status: __('Basic and Free'),
				src_en: require('./webinar-pic/Tutorial-to-begin-trading-in-Aron-Groups-broker(en).jpg').default,
				src_fa: require('./webinar-pic/Tutorial-to-begin-trading-in-Aron-Groups-broker(fa).jpg').default,
			},
			{
				id: 1,
				name: 'technical-robert-miner',
				title: __('Robert Miner style technical analysis'),
				class: __('Master Rashidi'),
				sessions: 26,
				time: __('38 hours'),
				status: __('Advanced and free'),
				src_en: require('./webinar-pic/ostad-rashidi(en).jpg').default,
				src_fa: require('./webinar-pic/ostad-rashidi(fa).jpg').default,
			},
			{
				id: 2,
				name: 'market-psychology',
				title: __('Market Psychology'),
				class: __('Master Aron'),
				sessions: 5,
				time: __('6 hours and 45 minutes'),
				status: __('Preliminary and Free'),
				src_en: require('./webinar-pic/ostad-Aron(en).jpg').default,
				src_fa: require('./webinar-pic/ostad-Aron(fa).jpg').default,
			},
			{
				id: 3,
				name: '5-technical-indexes',
				title: __('5 important indicators in technical analysis'),
				class: __('Master Parvin'),
				sessions: 6,
				time: __('10 hours and 38 minutes'),
				status: __('Basic and free'),
				src_en: require('./webinar-pic/ostad-parvin(en).jpg').default,
				src_fa: require('./webinar-pic/ostad-parvin(fa).jpg').default,
			},
			{
				id: 4,
				name: 'technical-basis',
				title: __('The most basic technical principles for any trader'),
				class: __('Master Bagherzadeh'),
				sessions: 10,
				time: __('14 hours and 30 minutes'),
				status: __('Basic and free'),
				src_en: require('./webinar-pic/ostad-bagherzade(en).jpg').default,
				src_fa: require('./webinar-pic/ostad-bagherzade(fa).jpg').default,
			},
			{
				id: 5,
				name: 'practical-technical-analysis',
				title: __('Applied technical analysis training'),
				class: __('Amushahi Master'),
				sessions: 10,
				time: __('25 hours and 30 minutes'),
				status: __('Basic and free'),
				src_en: require('./webinar-pic/ostad-amooshahi(en).jpg').default,
				src_fa: require('./webinar-pic/ostad-amooshahi(fa).jpg').default,
			},
			{
				id: 6,
				name: 'gold-metal',
				title: __('Familiarity with gold metal'),
				class: __('Master Salamat'),
				sessions: 5,
				time: __('4 hours and 30 minutes'),
				status: __('Basic and free'),
				src_en: require('./webinar-pic/ostad-salamat(en).jpg').default,
				src_fa: require('./webinar-pic/ostad-salamat(fa).jpg').default,
			},
			{
				id: 7,
				name: 'mt5',
				title: __('MetaTrader 5 training course'),
				class: __('Master Shirazi'),
				sessions: __('On performing'),
				time: __('On performing'),
				status: __('Basic and free'),
				src_en: require('./webinar-pic/mt5(en).jpg').default,
				src_fa: require('./webinar-pic/mt5(en).jpg').default,
			},
			{
				id: 8,
				name: 'haqdust',
				title: __('Haghdoost Master Weekly Class'),
				class: __('Haghdoost Master'),
				sessions: __('On performing'),
				time: __('On performing'),
				status: __('Basic and free'),
				src_en: require('./webinar-pic/ostad-haghdoost(en).jpg').default,
				src_fa: require('./webinar-pic/ostad-haghdoost(fa).jpg').default,
			},

		];
		const menu = [
			__('All')
		];
		const {path, numberInPage, page} = this.state;
		const paginationNumber = this.setNumberOfPage(webinarData.length);
		return <div className={styles.introduce}>
			<Container className={styles.container}>
				<h2 data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Academy Webinars')}</h2>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out"
				   data-aos-mirror="true">{__('Virtual training process can be done in different ways. In addition to providing educational materials in the form of text, audio or video files, holding online webinars with the presence of audiences and trainees is also very useful. In educational webinars, there is a possibility of interaction between the presenter and the audience, and if there is a need for questions and answers, learning can be done more deeply. Aron Groups Broker training webinars aimed at increasing students’ knowledge and traders in financial markets staged.')}</p>
				<div className={styles.webinarWrapper}>
					<div className={styles.searchBox}>
						<h4>{__('Aron Academy Webinar')}</h4>
						{/*<div className={styles.searchBoxInput}>*/}
						{/*	<img src={require('../../symbols/table/search.svg').default} alt=""/>*/}
						{/*	<input type="text" placeholder={__('Search...')}/>*/}
						{/*	/!*<input value={search_key.toUpperCase()} type="text" placeholder="Search..." onChange={set_search_key}/>*!/*/}
						{/*</div>*/}
						<div className={styles.searchBoxSort}>
							<span>{__('Sort By:')}</span>
							{/*<select className={styles.searchBoxSortSelect} onChange={(event => set_sort_by(parseInt(event.target.value)))}>*/}
							<select className={styles.searchBoxSortSelect}>
								<option value="0">{__('Name A-Z')}</option>
								<option value="1">{__('Name Z-A')}</option>
							</select>
						</div>
					</div>
					<ul className={styles.leaderBoardMenu}>
						{menu.map(((value, index) => {
							return <li key={index} className={{[styles.leaderBoardMenuItem]: 1, [styles.active]: (path === index) ? 1 : ''}.toCss} onClick={() => this.setPath(index)}>
								{value}
							</li>
						}))}
					</ul>
					<div className={styles.webinarItems}>
						{webinarData.map((item, index) => {
							return <div key={index} className={styles.webinarItem} data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<Link to={`${getRoute(Routes.desktop.webinarInside()).replace(':id', '')}${item.name}`}>
									<img src={(language === 'fa') ? item.src_fa : item.src_en} alt=""/>
								</Link>
								<div className={styles.content}>
									<h5>{item.title}</h5>
									<div>
										<i className="material-icons">supervisor_account</i>
										<span>{item.class}</span>
									</div>
									<div>
										<i className="material-icons">video_library</i>
										<span>{item.sessions} {__('sessions')}</span>
									</div>
									<div>
										<i className="material-icons">query_builder</i>
										<span>{item.time}</span>
									</div>
									<div>
										<i className="material-icons">all_inclusive</i>
										<span>{item.status}</span>
									</div>
								</div>
							</div>
						})}
						{/*<div className={styles.pagination}>*/}
						{/*	<div className={styles.numberInPage}>*/}
						{/*		<span>Show in page </span>*/}
						{/*		<input value={numberInPage} type="number" min="1" maxLength={webinarData.length}*/}
						{/*			   onChange={(event) => {*/}
						{/*				   this.setNumberInPage(event.target.value)*/}
						{/*			   }*/}
						{/*			   }/>*/}
						{/*	</div>*/}
						{/*	<div className={styles.numbering}>*/}
						{/*		<i className="material-icons">chevron_left</i>*/}
						{/*		{*/}
						{/*			paginationNumber.map((item, index) => {*/}
						{/*				return <span className={{[styles.active]: (page === index + 1) ? 1 : 0}.toCss}*/}
						{/*							 onClick={() => {*/}
						{/*								 this.setPage(index + 1);*/}
						{/*							 }*/}
						{/*							 }*/}
						{/*				>{index + 1}</span>*/}
						{/*			})*/}
						{/*		}*/}
						{/*		<i className="material-icons">chevron_right</i>*/}
						{/*	</div>*/}
						{/*</div>*/}
					</div>
				</div>
			</Container>
		</div>;
	}
}