import React, {PureComponent} from "react";
import styles from './contract-table.module.scss';
import {Menu} from "./components/menu";
import {Table} from "./components/table";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {Container} from "components/container/container";
import {I18nService} from "services/i18n-service";
import {dataEn, dataFa} from '../meta-data/meta-data';
import {TableMenu} from "../table-menu/table-menu";
import {Notice} from "./components/notice";


declare const window: any;


function mobileCheck() {
	let check = false;
	if (typeof navigator !== "undefined") {
		(function (a) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	} else {
		return check;
	}
}


const dataModel = [
	{
		id: 'Iranian Market',
		title: 'Iranian Market',
		icon: require('./icons/others.svg').default,
		subCategories: [
			{
				id: 'CFD',
				title: 'CFD',
			}
		],
	},
	{
		id: 'Forex',
		title: 'Forex',
		icon: require('./icons/forex.svg').default,
		subCategories: []
	},
	{
		id: 'Spot Metals',
		title: 'Spot Metals',
		icon: require('./icons/spot-metals.svg').default,
		subCategories: [],
	},
	{
		id: 'Indices',
		title: 'Indices',
		icon: require('./icons/indices.svg').default,
		subCategories: []
	},
	{
		id: 'Spot Energies',
		title: 'Spot Energies',
		icon: require('./icons/spot-energies.svg').default,
		subCategories: []
	},
	{
		id: 'Crypto Currency',
		title: 'Crypto Currency',
		icon: require('./icons/crypto-currencies.svg').default,
		subCategories: [
			{
				id: 'Crypto Major',
				title: 'Crypto Major',
			},
			{
				id: 'Crypto-Crypto',
				title: 'Crypto-Crypto',
			},
			{
				id: 'Crypto-Minor',
				title: 'Crypto-Minor',
			},
			{
				id: 'Others 2',
				title: 'Others 2',
			}
		]
	},
	{
		id: 'Shares',
		title: 'Shares',
		icon: require('./icons/shares-usa.svg').default,
		subCategories: [
			{
				id: 'Shares USA',
				title: 'Shares USA',
			},
			{
				id: 'Shares Europe',
				title: 'Shares Europe',
			},
			{
				id: 'Shares Asia',
				title: 'Shares Asia',
			},
			{
				id: 'Shares Russia',
				title: 'Shares Russia',
			},
			{
				id: 'ETFs',
				title: 'ETFs',
			}
		]
	}
];


export interface ContractTableProp {
	page: number;
	onChange: (value: any) => any;

	onKeyUp: (event: any) => any;

	searchValue: string;

	sortKey: number;

	setSortKey: (value: number) => any;

	setPathString: (value: number) => any;
}


@Observer([])
export class ContractTable extends PureComponent <ContractTableProp> {
	@wired i18 = pick(I18nService);
	state = {
		path: [dataModel[0]?.id, dataModel[0]?.subCategories[0]?.id].filter(a => !!a).join('.'),
	}

	setPath = (path) => {
		this.props.setPathString(path);
		this.setState({path});
	};

	render() {
		const {__, language} = this.i18;
		const {path} = this.state;
		const {searchValue, sortKey, setSortKey, onKeyUp, onChange, page, setPathString} = this.props;
		const isMobile = mobileCheck();
		if (isMobile) {
			return <div className={styles.contractSpecification}>
				<Container className={styles.container}>
					<TableMenu onKeyUp={onKeyUp} sortKey={sortKey} setSortKey={setSortKey} searchValue={searchValue} path={page} onChange={onChange}/>
					{
						(page === 0) ? <div className={styles.tableWrapper}>
							<h2 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Broker Trading Symbols')}</h2>
							<div className={{[styles.appForexTable]: 1, [styles.isMobile]: 1}.toCss} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<Menu  path={path} setPath={this.setPath} dataModel={dataModel} mobile={isMobile}>
									<Table path={path} data={(language === 'fa') ? dataFa : dataEn} __={__} language={language} searchValue={searchValue} sortKey={sortKey}/>
								</Menu>
							</div>
						</div> : <div>

						</div>
					}
					{/*<Notice/>*/}
				</Container>
			</div>
		} else {
			return <div className={styles.contractSpecification}>
				<Container className={styles.container}>
					<TableMenu onKeyUp={this.props.onKeyUp} sortKey={this.props.sortKey} setSortKey={this.props.setSortKey} searchValue={this.props.searchValue} path={this.props.page} onChange={this.props.onChange}/>
					{
						(this.props.page === 0) ? <div className={styles.tableWrapper}>
							<h2 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('Aron Groups Broker Trading Symbols')}</h2>
							<div className={styles.appForexTable} data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
								<div className={styles.sidebarLayout}>
									<Menu path={path} setPath={this.setPath} dataModel={dataModel}/>
								</div>
								<div className={styles.tableLayout}>
									<Table path={path} data={(language === 'fa') ? dataFa : dataEn} __={__} language={language} searchValue={searchValue} sortKey={sortKey}/>
								</div>
							</div>
						</div> : <div>

						</div>
					}
					<Notice />
				</Container>
			</div>

		}
	}
}