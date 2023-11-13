import React, {PureComponent} from "react";
import styles from './search-box.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


export interface SearchBoxProps {
	set_search_key: any;
	set_sort_by: any;
	search_key: string;

	sort_by: number;
}


@Observer([])
export class SearchBox extends PureComponent<SearchBoxProps> {
	@wired i18 = pick(I18nService);

	render() {
		const {set_search_key, set_sort_by, search_key, sort_by} = this.props;
		return (
			<div className={styles.searchBox}>
				<div className={styles.searchBoxInput}>
					<img src={require('./search.svg').default} alt=""/>
					<input type="text" placeholder="Search..." onChange={(e) => {
						return set_search_key(e)
					}}
						   value={search_key}
					/>
				</div>
				<div className={styles.searchBoxSort}>
					<span>Sort By: </span>
					<select className={styles.searchBoxSortSelect} onChange={(event => set_sort_by(parseInt(event.target.value)))}>
						<option value="0">default</option>
						<option value="1">Name A-Z</option>
						<option value="2">Name Z-A</option>
					</select>
				</div>
			</div>
		);
	}
}