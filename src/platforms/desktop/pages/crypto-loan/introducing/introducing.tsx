import React, {PureComponent} from "react";
import styles from './introducing.module.scss';
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class Introducing extends PureComponent{
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.introducing}>
			<Container className={styles.container}>
				<div className={styles.content}>
					<h2 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" className={styles.title}>{__('Process & Fund`s Loan Rules')}</h2>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('1. The Applicant Must Have Aron`s Fund Account, and Have Purchased the Stock ')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('2. You Can Apply for Loan to The Customer Support Team From the 22 to the 28 Of Each Month Using a Ticket, After Initial Checking, This Will be Referred to Management, and After His Confirmation, Will be Referred to The Financial Section')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('3. The Financial Section Creates Two Accounts, Loan Trade, and Fund Loan That Doesn`t Have Withdrawal or Transfer to Other Accounts')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('4. The Financial Section Transfer the Double of Loan Amount from The Client`s Fund Account to The Fund`s Loan Account, and Deposit the Loan Amount Minus 1% Commission to The Client`s Loan Trade Account')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('5. Loan Rules')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('6. The Client by Purchasing the Fund`s Share to The Ceiling Of 50%, Can Receive His/her Capital as a Loan')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('7. The Date for Loan Application Is from the 22 to the 28 Of Each Month, and If Confirmed, The Loan Will Be Paid at The End of The Month')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('8. The Loan Is Non-Withdrawable, and Is Just for Using in Trading ')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('9. The Minimum Amount of the Loan Is $500, and The Minimum Account`s Balance as Guarantee Is $1000')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('10. The Client Can Purchase Fund`s Shares by Fund`s Account, and Fund`s Loan Account')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('11. The Client to Apply for The Loan Must Have At Least Three Months` Record of Purchasing Fund`s Share')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('12. The Loan Time Is Three Months the Client Can Cancel It at Any Time by Paying a 5% Commission')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('13. The Fund`s Account and Trade Account Will Be Blocked till Loan Settlement Time')}
					</p>
					<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
						{__('14. Deposit to The Loan & Trade Accounts Is Allowed but Will Be Non-Withdrawable till The Loan Settlement Time ')}
					</p>
				</div>
			</Container>
		</div>;
	}
}