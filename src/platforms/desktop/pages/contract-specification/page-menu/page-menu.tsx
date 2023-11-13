import React,{PureComponent} from "react";
import styles from './page-menu.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";

export interface TableMenuProp {
	path: number;
	onChange: (value: number) => any;
	menu: any;
}


@Observer([])
export class PageMenu extends PureComponent <TableMenuProp>{
	@wired i18 = pick(I18nService);
	render() {
		const {__} = this.i18;
		const {path, onChange, menu} = this.props;
		return <div className={styles.tableMenu}>
			<Container className={styles.container}>
				<ul className={styles.leaderBoardMenu}>
					{
						menu.map((item, index) => {
							return <li key={index} className={{[styles.leaderBoardMenuItem]: 1, [styles.active]: (path === index) ? 1 : 0}.toCss} onClick={() => onChange(index)}>
								{item}
							</li>
						})
					}
				</ul>
			</Container>
		</div>;
	}
}