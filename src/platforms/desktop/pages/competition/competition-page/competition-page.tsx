import React, {PureComponent} from "react";
import styles from './competition-page.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Modal} from "../../../../dashboard/pages/common/modal/modal";
import {GradeTrader} from "services/grade-trader";
import moment from "moment/moment";


@Observer([GradeTrader])
export class CompetitionPage extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired gradeTrader = pick(GradeTrader);

	state = {
		modalSet: 0,
	}

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh()
	}

	resetModal = () => this.setState({modalSet: 0});


	render() {
		const modalData = () => {
			const data = {
				id: 8,
				title: __('Grand Trader Award'),
				date: __('30th Nov 2021'),
				dateTime: '12/01/2021',
				content: [
					{
						title: __(''),
						subtitle: __('Aron Groups is organizing a Trading Competition to celebrates its 3rd anniversary. The company invites all clients to participate. By participating in the competition, you agree to be bound by the Terms and Conditions set out on company`s website and below:'),
						type: 'normal'
					},
					{
						title: __('1. For the purposes of the present,'),
						subtitle: __('The Competition Period shall be 1 December 2021 to 18 March 2022.'),
						type: 'bold'
					},
					{
						title: __(''),
						subtitle: __('The Registration Period shall be 25 November 2021 to the end of the Competition Period. Times mentioned herein shall mean GMT+2 (i.e., Server time) as applicable.'),
						type: 'normal'
					},
					{
						title: __('2. To participate, you must meet the following requirements:'),
						subtitle: __('You are a verified Client of Aron Groups Broker, eligible to trade in accordance to, and have agreed to, Aron Groups Broker’s Client Agreement, and relevant agreements. '),
						type: 'bold'
					},
					{
						title: __(''),
						subtitle: __('You have registered for participation in the Competition and agreed to these Terms and Conditions during the Registration Period. '),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('You have deposited an amount equal or in excess of $100 (“Minimum Deposit”) within the Registration Period. [Transfers between accounts are not considered as deposits].'),
						type: 'normal'
					},
					{
						title: __('3. Trading terms for the Competition are as follow:'),
						subtitle: __('a. All trading instruments available on the Aron Contest account are applicable.'),
						type: 'bold'
					},
					{
						title: __(''),
						subtitle: __('b. The Competition is applicable to Aron Contest trading account offered by Aron Groups Broker. In the spirit of competition, Copy trading, Expert advisors, and robots are Not allowed.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('c. Only trading positions which are opened at least 3 minutes will be allowed for this Competition. Hence, position can not be closed under 3 minutes since opening.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('d. Each Contestant is allowed to have only one competition account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('e. The leverage for the account can vary from 10, 30, 60, and 100.'),
						type: 'normal'
					},
					{
						title: __('4. Withdrawal requests shall be processed normally during the Competition Period, subject to the Client meeting standard requirements set out in the company Agreements.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('5. Each Contestant is allowed to participate in the Competition with only one new live Aron contest trading account held with Aron Groups Broker, opened during the Registration Period. The Client shall not be eligible for any other Promotion or Bonus Scheme during the Registration Period in the Account. Crypto and USDT cashback are still applicable on every deposit until announced otherwise.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('6. Upon commencement of the Competition Period, the Contestants can trade as they wish.  These trades will be considered in the calculation set out in below paragraph when determining the Winners of the Competition.   '),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('7. The Winners of the Competition will be the Contestants who have the highest ratio of profits in percentage terms at 23:59:59 on the last day of the Competition Period, out of the total Pool of Contestants. The calculation formula for Profit is:'),
						subtitle: __('Profit (%) = [(Profit / (Deposits)] * 100'),
						type: 'bold'
					},
					{
						title: __('8. In the event that two or more Contestants have the same percentage (to the second decimal point), then the Contestant with the smallest drawdown will be the Winner. If there are still two or more Contestants with the same result, then the first prize will be shared equally between these Contestants.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('9. In calculating Profit, as set out in para.8, open positions in the Contestant’s Account are not calculated toward calculating profit. Hence, only close positions at time the end of competition are considered.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('10. Closed trades, for the purposes of calculating Profit, will be all the trades that are closed DURING the Competition Period.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('11. The trading account will be subjected to mandatory all position closed at 23:59:59 on 18 March 2022. Aron Contest trading account will be archive automatically and all open position will be closed at this time.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('12. To qualify as a winner, a minimum of 10 lot and 100 position must be traded in the Aron contest trading account over the period of the competition.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('13. The prizes that are available for distribution are set out in LINK WEBSITE and below table.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: '',
						subtitle: [[1, __('Peugeot 207'), __('Yes')], [2, __('Peugeot 206'), __('Yes')],
							[3, __('10x Gold Coins'), __('Yes')], [4, __('iPhone 13'), __('No')],
							[5, __('iPad Pro'), __('No')], ['6-10', __('900 USD per winner'), __('No')],
							['11-50', __('500 USD per winner'), __('No')], ['51-100', __('200 USD per winner'), __('No')],
							['101-300', __('100 USD per winner'), __('No')]
						],
						type: 'table'
					},
					{
						title: __('14. Within 30 days after the end of the Competition, the eligible Winners will be notified by email - to the email address they have specified during registration- accordingly (hereinafter “the notice”).  Prizes shall be awarded only to Approved Clients, meeting standard requirements in the company Agreements to be accepted by Aron Groups Broker. In the case an eligible Winner fails to provide such documents as deemed necessary by Aron Groups Broker within 5 days of notice, the Prize shall be awarded to the next Contestant in the ranking. The final list of the Winners will be announced on the Company’s website.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('15. Aron Groups Broker reserve the right, as it in their sole discretion deems fit, not to accommodate winners’ claim after 31 May 2022. '),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('16. The monetary Prizes set shall be credited to the Winners’ accounts as Credit and shall be available for trading purposes only.  Upon completion of the minimum lots, calculated in accordance with the following formula, the funds available shall be transferred to the Balance of Winners’ trading account and shall be available for withdrawal also. '),
						subtitle: __('Minimum Number of Lots = Prize /6'),
						type: 'bold'
					},
					{
						title: __(''),
						subtitle: __('a. Monetary prizes are only credited to Standard and VIP accounts.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('b. Only positions left open for a minimum of five minutes shall be calculated within the Minimum Number of lots.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('c. Only FX, Metal, Indices, and Energies instruments shall be considered for fulfilment of Minimum Number of lots.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('d. According to calculation, in order to withdraw the credit (monetary prizes), the trader needs to trade the related number of lots at least 1 month after crediting.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('e. If the account balance of the client is zeroed in case of any reason the credit will be eliminated from the client account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('f. In case of any transfer to a wallet or any other trading accounts during the scheme, the amount of credit will be eliminated.'),
						type: 'normal'
					},
					{
						title: __('17. In the event, where the first 5 prizes cannot be delivered to the winners, the company will convert the prizes to cash prizes at its own discretion.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('18. Aron Groups Broker has the right to disqualify any Contestant if:'),
						subtitle: __('a. A breach of these Terms and Conditions and/or any of company’s Business Terms occurs.'),
						type: 'bold'
					},
					{
						title: __(''),
						subtitle: __('b.  The Contestant provided incorrect or fraudulent details during the registration for the Competition. '),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('c. Contestant has more than one Aron contest live account or entry in the Competition.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('d. The same IP address is used by two or more Contestants or uses anonymous HTTP/socks proxy-servers for trading in the Competition.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('e. In case a person uses dynamic IP address, in which the IP address changes instantly during the time the client is connected to the internet, then he will be exposed to be disqualified from the Competition, even though he is entitled to a Prize.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('f.  Any indication or suspicion of fraud, manipulation, cash-back or bonus or swap arbitrage, or other forms of deceitful or fraudulent activity in a client’s account or multiple account with Aron Groups Broker or otherwise related or connected to the Bonus will nullify all transactions carried and/or profits or losses garnered therein.'),
						type: 'normal'
					},
					{
						title: __('19. Each Contestant hereby expressly consents that Aron Groups Broker: '),
						subtitle: __('a. May publicly announce their name and details of their participation in the Competition on the website(s) of Aron Groups Broker or any other publication (electronic or not).'),
						type: 'bold'
					},
					{
						title: __(''),
						subtitle: __('b.  Use a photo/Video of the Contestant in any appropriate manner and publication that the Company decides to use, without any recourse or compensation, and that the Contestant surrenders and waives all copyright and intellectual property rights to the use of such photo in relation to the Competition or Aron Groups Broker’s promotional activity.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('c. May conduct an interview with the Contestant and use such interview in any publication as it wishes in relation to the Competition or Aron Groups Broker’s promotional activity.'),
						type: 'normal'
					},
					{
						title: __('20. Aron Groups Broker reserve the right, as it in their sole discretion deems fit, to alter, amend, suspend, cancel, or terminate the Competition, or any aspect of the Competition at any time, subject to giving you prior notice. In this case, you will have the option to withdraw from the Contest.  Under no circumstances shall Aron Groups Broker be liable for any consequences of any alteration, amendment, suspension, cancelation, or termination of the Competition.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('21. Aron Groups Broker reserve the right, at their sole discretion, to deny, withhold or withdraw from a Contestant any award received and if necessary to suspend or cancel any terms and conditions with respect to that Contestant, either temporarily or permanently, or terminate a Contestants participation or access to the Competition if a Contestant acts in bad faith or in a manner that is no in the spirit of the Competition.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('22. In the event of any dispute or misinterpretation of the above applicable Terms and Conditions, such dispute or misinterpretation shall be resolved in good faith and as Aron Groups Broker shall, in their sole and absolute discretion, deem fit and proper. The decision shall be final and binding.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('23. The Contestant confirms that he/she is older than 18 years old and acknowledges that Forex and CFDs are leveraged products that involve a high level of risk and that it is possible to lose all his/her capital. These products may not be suitable for everyone, and the Contestant should ensure that he/she understands the risks involved. The Contestant shall seek independent financial advice if necessary.'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('24. Traders that have completed registration and authentication, after depositing 100 dollars by referring to their client panel select the open an account option, and after that in the live trading accounts list, select the Aron Contest account and request to open an account. '),
						subtitle: __(''),
						type: 'bold'
					}
				]
			};
			return <div className={styles.modalContent}>
				<Container className={styles.modalContainer}>
					{
						data.content.map((item, index) => {
							if (item.type === 'bold' && item.title.length > 1 && item.subtitle.length > 1) {
								return <div key={index}>
									<h4>{item.title}</h4>
									<p>{item.subtitle}</p>
								</div>
							} else if (item.type === 'bold' && item.title.length > 1 && item.subtitle.length === 0) {
								return <div key={index}>
									<h4>{item.title}</h4>
								</div>
							} else if (item.type === 'bold' && item.title.length === 0 && item.subtitle.length > 1) {
								return <div key={index}>
									<p>{item.subtitle}</p>
								</div>
							} else if (item.type === 'normal' && item.title.length > 1 && item.subtitle.length > 1) {
								return <div key={index}>
									<h4>{item.title}</h4>
									<p>{item.subtitle}</p>
								</div>
							} else if (item.type === 'normal' && item.title.length === 0 && item.subtitle.length > 1) {
								return <div key={index}>
									<p>{item.subtitle}</p>
								</div>
							} else if (item.type === 'table') {
								return <div className={styles.table}>
									<table>
										<thead>
										<tr>
											<th>Rank of winners</th>
											<th>Prize</th>
											<th>Become Aron Fund Manager*</th>
										</tr>
										</thead>
										<tbody>
										{
											item.subtitle.map((item, index) => {
												return <tr key={index}>
													<td>{item[0]}</td>
													<td>{item[1]}</td>
													<td>{item[2]}</td>
												</tr>
											})
										}
										</tbody>
									</table>
								</div>
							}
						})
					}
				</Container>
			</div>
		};
		const {__, language, commafy} = this.i18;
		const competitionData = [
			{
				id: 0,
				src_en: require('./image/poetry-des-en.jpg').default,
				src_fa: require('./image/poetry-des-fa.jpg').default,
				title: __('Poetry Day Festival'),
				description: [
					{
						status: 'regular',
						value: __('Dear friends and companions on the occasion of Master Shahriar; Persian Poetry and Literature Day The first virtual poetry and poetry writing festival will be held in Aron Groups Holding. At this festival, any poet and writer can send us a collection of poems or a promotional slogan about the brand of Aron Groups as well as the business of this collection of poems without any restrictions to win dollar prizes.'),
					},
					{
						status: 'bold',
						value: __('Festival sections:'),
					},
					{
						status: 'tab',
						value: __('1- Poetry'),
					},
					{
						status: 'tab',
						value: __('2- Slogan'),
					},
					{
						status: 'bold',
						value: __('Festival Awards:'),
					},
					{
						status: 'regular',
						value: __('The 2 users whose works have the most votes (likes, comments, tags) will be awarded a prize of $ 100 each.'),
					},
					{
						status: 'regular',
						value: __('The 2 users who have voted the most for the submitted works, mention the festival post, mention Aron Groups Instagram page and hashtag the name of the festival in the comments, will be awarded a prize of $ 50 each.'),
					},
					{
						status: 'regular',
						value: __('The 2 users who have voted the most for the submitted works, mention the festival post, mention Aron Groups Instagram page and hashtag the name of the festival in the comments, will be awarded a prize of $ 50 each.'),
					},
					{
						status: 'bold',
						value: __('Terms and conditions of the festival:'),
					},
					{
						status: 'regular',
						value: __('Those interested in participating in this festival should definitely comment on their works under the festival post on Aron Groups Instagram page.'),
					},
					{
						status: 'regular',
						value: __('In this festival, in each section (poetry and slogan) 2 are selected and a total of 4 people are selected by the jury.'),
					},
					{
						status: 'regular',
						value: __('From the collection of works, 4 works will be selected and will be posted again on Aron Groups page where users can vote for the selected works with likes, comments and tags.'),
					},
					{
						status: 'regular',
						value: __('You only have 2 days to vote for the submitted works through likes, comments and tags, and after the voting is over, the selected individuals will be announced through the Aron Groups page.'),
					},
					{
						status: 'regular',
						value: __('Among the 4 selected works of art, the 2 works that have the most likes, comments and tags in total will be awarded our special dollar prize.'),
					},
					{
						status: 'regular',
						value: __('Works must be copied with new ideas and far from any.'),
					},
					{
						status: 'regular',
						value: __('Any innovation and innovation in the field of literature that makes poetry and slogans more beautiful and strong, will be given priority.'),
					},
					{
						status: 'regular',
						value: __('Each person is allowed to submit more than one poem and slogan in the form of a text as a comment below the post, but only one of the works will be selected as the selected works.'),
					},
					{
						status: 'regular',
						value: __('According to the rules of the Poetry Day Festival, if a user copies poems or advertising slogans from another user, the criterion for us is the first comment.'),
					},
					{
						status: 'regular',
						value: __('All users who are festival participants or voters must like the contest post and tag 2 of their friends under the festival post.'),
					},
					{
						status: 'regular',
						value: __('Among the submitted works, only one work will be selected as the "best" from each person. (Poem or slogan)'),
					},
					{
						status: 'regular',
						value: __('Please be polite and polite in posting comments.'),
					},
					{
						status: 'bold',
						value: __('Festival Calendar:'),
					},
					{
						status: 'regular',
						value: __('Start sending works: 20 to 29 September 1400'),
					},
					{
						status: 'regular',
						value: __('Deadline for submitting works: September 20, 1400 until 24:00'),
					},
					{
						status: 'regular',
						value: __('Festival page address: http://insatagram.com/Arongroups'),
					}
				]

			},
			{
				id: 1,
				src_en: require('./image/gold-comment-en.jpg').default,
				src_fa: require('./image/gold-comment-fa.jpg').default,
				title: __('Gold Commented Competition'),
				description: [
					{
						status: 'bold',
						value: __('Terms and Conditions of Aron Groups Telegram Groups Golden Comment Contest'),
					},
					{
						status: 'regular',
						value: __('All members of the group can participate in the competition.'),
					},
					{
						status: 'regular',
						value: __('The quantity and quality of the messages sent increases the chances of each member winning.'),
					},
					{
						status: 'regular',
						value: __('Inviting new members to the group will increase your chances of success in the competition.'),
					},
					{
						status: 'regular',
						value: __('Sending emojis, short, irrelevant messages, as well as not following the rules of the collection, will cause you to be removed from all sections of the contest.'),
					},
					{
						status: 'regular',
						value: __('Continuous activity in different groups of Aron collection, especially Harat group, multiplies your chances of winning.'),
					},
					{
						status: 'regular',
						value: __('Sending irrelevant, redundant, spam, and duplicate messages will cause you to be removed from the competition group as well as other groups in the collection.'),
					},
					{
						status: 'regular',
						value: __('Each member is required to be a member of all three groups.'),
					},
					{
						status: 'regular',
						value: __('Prizes will be drawn after the competition and will be awarded to the winners within 4 working days.'),
					},
					{
						status: 'regular',
						value: __('2 active members will be paid a cash prize of 50 thousand Tomans per lottery.'),
					},
				]

			}
		];
		const {data} = this.gradeTrader;
		return <div className={styles.competition}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title={__('Grand Trader Award')}>
				{
					modalData()
				}
			</Modal>
			<div className={styles.rankingTrader}>
				<Container className={styles.container}>
					<div className={styles.titleCom}>
						<h1>
							Top Trader
						</h1>
						<p>
							last update: {(data.length > 0) ? moment(data[0].timestamp*1000).format('LLL') : ''}
						</p>
					</div>
					<div className={styles.rankingTraderWrapper}>
						<div className={styles.rankingContent}>
							{(data.length > 0) ?
								data.map( (item, index) => {
									return <div key={index} className={styles.item}>
										<div className={styles.imgItem}>
											<p>
												{item.rank}
											</p>
										</div>
										<div className={styles.itemContent}>
											{/*<h3>{__('Rank')} {item.rank}</h3>*/}
											<div className={styles.itemDetail}>
												<div className={styles.itemWrapper}>
													<p>{__('User:')} </p>
													<p> <b>{item['Login']}</b> </p>
												</div>

												<div className={styles.itemWrapper}>
													<p>{__('Ratio:')}</p>
													<p><b>{Number.parseFloat(`${(item['Profit']/item['Deposit'])*100}`).toFixed(2)}</b></p>
												</div>
											</div>
										</div>
									</div>
								} ) : ''}
						</div>
					</div>
					<div className={styles.btn}>
						<p>{__('See the Rules')}</p>
						<button onClick={() => this.setState({modalSet: 1})} className={styles.btnClick}>{__('Rules')}</button>
					</div>
				</Container>
			</div>
		</div>;
	}
}