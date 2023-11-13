import React, {Fragment, PureComponent} from "react";
import styles from "./contract-specification.module.scss";
import {Observer} from "react-soa/dist/class";
import {ContractTable} from "./contract-table/contract-table";
import {TopSlider} from "../symbols/top-slider/top-slider";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Vacation} from "./vacation/vacation";
import {Footer} from "../homepage/footer";
import {TopMenu} from "../homepage/top-menu";
import {ContractTableNano} from "./contract-table-nano/contract-table-nano";
import {ContractTableZulu} from "./contract-table-zulu/contract-table-zulu";
// import {ContractTableBinance} from "./contract-table-binance/contract-table-binance";
import {PageMenu} from "./page-menu/page-menu";

declare const window: any;


@Observer([])
export class ContractSpecification extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		path: 0,
		subPage: 0,
		searchValue: "",
		sortKey: 0,
	}

	componentDidMount() {
		window.scrollTo({
			behavior: 'smooth',
			top: 0,
		})
	}

	onChange = (e) => {
		if (this.state.path !== parseInt(e.target.value)) {
			this.setState({path: parseInt(e.target.value)});
		}
	}

	onChangeSubPage = (index) => {
		this.setState({subPage: index})
	}

	onKeyUp = (e) => {
		this.setState({"searchValue": e.target.value});
	}

	setPathString = (pathValue) => {
		this.setState({"pathString": pathValue});
	}

	setSortKey = (value) => {
		this.setState({"sortKey": value});
	}

	render() {
		const {__, language} = this.i18;
		const display = (language === 'fa') ? {background: `url(${require("../background/tradying-symbols-fa.jpg").default}) no-repeat`} : {background: `url(${require("../background/tradying-symbols-en.jpg").default}) no-repeat`};
		const {path, subPage, searchValue, sortKey} = this.state;
		const menu = [__("Trading Symbols"), __("Trading Conditions")]
		return <Fragment>
			<TopMenu/>
			<TopSlider style={display} title={__('Aron Groups Trading Symbols')}/>
			<PageMenu menu={menu} path={subPage} onChange={this.onChangeSubPage}/>
			<div className={{[styles.tables]: 1, [styles.active]: subPage === 0}.toCss}>
				<ContractTable setPathString={this.setPathString} sortKey={sortKey} setSortKey={this.setSortKey} onKeyUp={this.onKeyUp} searchValue={searchValue} page={path} onChange={this.onChange}/>
				<ContractTableNano sortKey={sortKey} searchValue={searchValue} page={path}/>
				<ContractTableZulu sortKey={sortKey} searchValue={searchValue} page={path}/>
				{/*<ContractTableBinance sortKey={sortKey} searchValue={searchValue} page={path}/>*/}
			</div>
			<div className={{[styles.conditions]: 1, [styles.active]: subPage === 1}.toCss}>
				<Vacation/>
			</div>
			<Footer/>
		</Fragment>;
	}
}