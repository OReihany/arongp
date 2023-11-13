import React, {PureComponent} from "react";
import styles from './table-menu.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {SearchBox} from "../../symbols/table/search-box";

export interface TableMenuProp {
	path: number;
	onChange: (value: any) => any;

	searchValue: string;

	onKeyUp: (event: any) => any;

	setSortKey: (value: any) => any;

	sortKey: number;
}


@Observer([])
export class TableMenu extends PureComponent <TableMenuProp> {
	@wired i18 = pick(I18nService);

	render() {
		const {__} = this.i18;
		const {path, onChange, searchValue, onKeyUp, sortKey, setSortKey} = this.props;
		const menu = [
			__('Standard/VIP/Swap Free'),
			__('Nano')
			// __('Zulu')
			// , __('Binance')
		]
		return <div className={styles.tableMenu}>
			<div className={styles.tableMenuWrapper}>
				<div className={styles.menu}>
					<select className={styles.leaderBoardMenu} onClick={(e) => onChange(e)}>
						{menu.map(((value, index) => {
							return <option style={{padding: "12px 0"}} value={index} key={index} className={{[styles.leaderBoardMenuItem]: 1, [styles.active]: (path === index) ? 1 : ''}.toCss}>
								{value}
							</option>
						}))}
					</select>
				</div>
				<div className={styles.search}>
					<SearchBox set_search_key={onKeyUp} sort_by={sortKey} set_sort_by={setSortKey} search_key={searchValue}/>
				</div>
			</div>
		</div>;
	}
}