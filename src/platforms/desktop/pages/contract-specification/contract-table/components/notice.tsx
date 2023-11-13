import React, {PureComponent} from "react";
import styles from './notice.module.scss'
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class Notice extends PureComponent{
	@wired i18 = pick(I18nService);
    render() {
    	const {__} = this.i18;
        return <div className={styles.notice}>
			<p>
				{__('The number and specifications of the symbols are different in each broker account. For more information, refer to the specifications of the symbols on the Metatrader platform.')}
			</p>
			{/*<p>*/}
			{/*	{__('Please note that the calculation formula for Commission on ECN MT4 is: (Volume * Contract Size * Open Price) / 1,000,000 * Commission * 2.')}*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	{__('Assume you have a USD account with Equity between 0$ - 2,999$ and trading volume below 100 million. Commission for 1 lot per each symbol would be:')}*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	{__('EURUSD: (1 * 100,000 * 1.21892) / 1,000,000 * 20 * 2 = 4.88 USD')}*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	{__('AUDCAD: (1 * 100,000 * 0.97969) / 1,000,000 * 20 * 2 = 3.92 CAD / 1.30231 = 3.01 USD')}*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	{__('XAUUSD: (1 * 100 * 1,323.25) / 1,000,000 * 20 * 2  = 5.29 USD')}*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	{__('WSt30m: (1 * 10 * 24,182) / 1,000,000 * 20 * 2 = 9.67 USD')}*/}
			{/*</p>*/}
			{/*<p>*/}
			{/*	{__('STOX50: (1 * 10 * 3,443.4) / 1,000,000 * 20 * 2 = 1.38 EUR * 1.15786 = 1.60 USD')}*/}
			{/*</p>*/}
		</div>
    }
}