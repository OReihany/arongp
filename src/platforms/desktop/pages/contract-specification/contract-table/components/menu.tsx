import React, {PureComponent} from "react";
import {SVGInline} from "./svg-inline";
import styles from './menu.module.scss';

export interface SubCategory {
	id: string;
	title: string;
}

export interface Category {
	id: string;
	title: string;
	icon: string;
	subCategories: SubCategory[];
}

interface MenuProps {
	path: string;
	setPath: (path: string) => any;
	dataModel: Category[];
	mobile?: boolean;
}

export class Menu extends PureComponent<MenuProps> {
	render() {
		const {path, setPath, dataModel, mobile} = this.props;
		const spl = path.split('.');
		return (
			<ul className={{[styles.menuContainer ]: 1, [styles.isMobile] : mobile ? 1 : 0}.toCss}>
				{dataModel.map((model, i) => {
					const active0 = spl[0] === model.id;
					const hasChild = model.subCategories.length > 0;
					return (
						<li key={i} className={{[styles.menuItem] : 1, [styles.active] : active0 ? 1 : 0}.toCss}>
							<div className={styles.menuContent} onClick={() => {
								const hasChild = model.subCategories.length > 0;
								const pathArray = [model.id];
								if (hasChild)
									pathArray.push(model.subCategories[0].id)
								const newPath = pathArray.join('.');
								setPath(newPath === path ? path : newPath);
							}}>
								<SVGInline src={model.icon}/>
								{model.title.replace('Binance', 'Binance')}
							</div>
							{hasChild ? (
								<ul className={styles.subMenu}>
									{model.subCategories.map((sub, j) => {
										const active1 = spl[1] === sub.id;
										return (
											<li key={j} className={{[styles.menuItem] : 1, [styles.active] : active1 ? 1 : 0}.toCss}>
												<div className={styles.menuContent} onClick={() => {
													const newPath = [model.id, sub.id].join('.');
													setPath(newPath === path ? path : newPath);
												}}>
													{sub.title}
												</div>
												{(active1 && this.props.children) ? (
													<div className={styles.childrenContainer}>{this.props.children}</div>
												) : null}
											</li>
										)
									})}
								</ul>
							) : (active0 && this.props.children) ? (
								<div className={styles.childrenContainer}>{this.props.children}</div>
							) : null}
						</li>
					)
				})}
			</ul>
		)
	}
}