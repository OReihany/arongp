import React, {PureComponent} from "react";
import styles from "./education-animate.module.scss";

interface educationAnimateProps{
	title: string;
	description: string;
	src: string;
	target: any;
}


export class EducationAnimate extends PureComponent<educationAnimateProps> {
	state = {
		playMode: 0,
		itemActive: 0,
	}
	setPlayMode = () => {
		this.setState({playMode: 1});
	}
	setItem = (index) => {
		if (index === this.state.itemActive) {
			return this.setState({itemActive: 0})
		}
		return this.setState({itemActive: index})
	}

	render() {
		const {playMode, itemActive} = this.state
		const {title, description, src, target} = this.props
		return <div className={styles.educationContent}>
			<h4 className={styles.educationTitle}>{title}</h4>
			<p className={styles.educationAbstract}>{description}</p>
			<div className={styles.educationAnimate}>
				<div className={{[styles.educationAnimateImg]: 1, [styles.active]: (playMode === 1) ? 1 : 0}.toCss}>
					<img src={src} alt=""/>
					<div className={{[styles.educationAnimatePlay]: 1, [styles.active]: (playMode === 1) ? 1 : 0}.toCss} onClick={() => {
						this.setPlayMode();
					}}>
						<img src={require('./arrow.svg').default} alt=""/>
					</div>
				</div>
				<div className={{[styles.educationAnimateTag]: 1, [styles.active]: (playMode === 1) ? 1: 0}.toCss}>
					{target.map( (item, index) => {
						return <div key={index} className={styles.item} style={{top: item.top, left: item.left}} onClick={() => {
							this.setItem(item.id);
						}
						}>
							<div className={{[styles.itemTarget]: 1, [styles.active]: (itemActive === item.id) ? 1 : 0}.toCss}>
								<div className={styles.circle1}>
									<div className={styles.circle2}>
										<div className={styles.circle3}>

										</div>
									</div>
								</div>
							</div>
							<div className={{[styles.itemContent]: 1, [styles.active]: (itemActive === item.id) ? 1 : 0}.toCss}>
								<p className={styles.description}>
									{item.description}
								</p>
								<img src={item.src} alt=""/>
							</div>
						</div>
					})}
				</div>
			</div>
		</div>;
	}
}