import React, {PureComponent} from "react";
import styles from './education.module.scss';
import {Container} from "components/container/container";
import {EducationAnimate} from "./education-animate";


const menuItems = [
	{'id': 0, 'name': 'User Interface'},
	{'id': 1, 'name': 'Trade'},
	{'id': 2, 'name': 'Chart'},
	{'id': 3, 'name': 'User Setting'},
	{'id': 4, 'name': 'Trade Setting'},
	{'id': 5, 'name': 'Buy & Sell Orders'},
]


const educationAnimateData = [
	{
		title: "User Interface",
		description: "The platform interface provides access to all the necessary tools for trading in the financial markets. It includes various menus, toolbars, and service windows.",
		src: require('./metaQuotes.png').default,
		target: [
			{
				"id": 1,
				"description": "When you click on the File menu, The menu appears in the same window as the image",
				"src": require("./opt1.png").default,
				"top": "60px",
				"left": "40px"
			},
			{
				"id": 2,
				"description": "When you click on the File menu, The menu appears in the same window as the image",
				"src": require("./opt1.png").default,
				"top": "49px",
				"left": "215px"
			},
			{
				"id": 3,
				"description": "When you click on the File menu, The menu appears in the same window as the image",
				"src": require("./opt1.png").default,
				"top": "26px",
				"left": "380px"
			}
		]
	},
	{
		title: "",
		description: "The trading platform interface is highly customizable. You can choose to display only the tools that you currently need. For example, you can hide Market Watch and Navigator, and show the Depth of Market and Data Window.",
		src: require('./metaQuotes.png').default,
		target: [
			{
				"id": 1,
				"description": "When you click on the File menu, The menu appears in the same window as the image",
				"src": require("./opt1.png").default,
				"top": "60px",
				"left": "40px"
			},
			{
				"id": 2,
				"description": "When you click on the File menu, The menu appears in the same window as the image",
				"src": require("./opt1.png").default,
				"top": "49px",
				"left": "215px"
			},
			{
				"id": 3,
				"description": "When you click on the File menu, The menu appears in the same window as the image",
				"src": require("./opt1.png").default,
				"top": "26px",
				"left": "380px"
			}
		]
	}
]

export class Education extends PureComponent {
	state = {
		pathId: 0,
	}
	setPathId = (id) => {
		this.setState({pathId: id})
	}

	render() {
		const {pathId} = this.state
		return <div className={styles.education}>
			<Container className={styles.container}>
				<div className={styles.educationWrapper}>
					<div className={styles.educationSideBar}>
						<div className={styles.sideBarTitle}>
							<img src={require('./meta-trader-5-logo.png').default} alt=""/>
						</div>
						<div className={styles.sideBarMenu}>
							<ul className={styles.sideBarMenuItems}>
								{
									menuItems.map(((value, index) => {
										return <li
											key={index}
											onClick={() => this.setPathId(value.id)}
											className={{[styles.sideBarMenuItem]: 1, [styles.active]: (pathId === value.id) ? 1 : 0}.toCss}>{value.name}</li>
									}))
								}
							</ul>
						</div>
						<div className={styles.sideBarPlatform}>
							<div className={styles.sideBarPlatformItem}>
								<img src={require('./android-logo.svg').default}/>
							</div>
							<div className={styles.sideBarPlatformItem}>
								<img src={require('./apple-logo.svg').default}/>
							</div>
							<div className={styles.sideBarPlatformItem}>
								<img src={require('./windows-logo.svg').default}/>
							</div>
						</div>
						<div className={styles.sideBarSignUp}>
							<img src={require('./sign-up.png').default} alt=""/>
							<a className={styles.singUp}>Sign Up</a>
							<a className={styles.singUpDemo}>Sign Up Demo</a>
						</div>
					</div>
					<div className={styles.educationContent}>
						{educationAnimateData.map( (item, index) => {
							return <EducationAnimate key={index} title={item.title} description={item.description} src={item.src} target={item.target}/>
						} )}
					</div>
				</div>
			</Container>
		</div>;
	}
}