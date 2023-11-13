import React, {PureComponent} from "react";
import styles from './economic-awards.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Modal} from "../modal/modal";


@Observer([])
export class EconomicAwards extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		modalSet: 0,
		data: []
	}

	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	resetModal = () => this.setState({modalSet: 0});
	modalSetData = (content) => {
		this.setState({data: content, modalSet: 1});
	}

	render() {
		const modalData = () => {
			const data = this.state.data;
			return <div className={styles.modalContent}>
				<Container className={styles.modalContainer}>
					{
						data.map((item, index) => {
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
								let link = ''
								if (item.type === 'link') {
									link = item.subtitle.substring(item.subtitle.indexOf('http'));
									return <div key={index}>
										<a style={{cursor: 'pointer'}} onClick={() => window.open(link, "_blank")}>{item.subtitle}</a>
									</div>
								}
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
		}
		const {__, language} = this.i18;
		const {modalSet} = this.state;
		const anniversaryData = [
			{
				id: 0,
				title: __('Twitter Challenge'),
				date: __('4th Oct 2021'),
				dateTime: '10/08/2021',
				src: require('./image/01 twitter challange.jpg').default,
				content: [
					{
						title: __('Twitter challenge in occasion of Aron Groups Holding third anniversary'),
						subtitle: __('Aron Groups Holding has started a festival in occasion of its third anniversary. The Twitter challenge as a part of this festival is presented from October 4th to October 8th of 2021.'),
						type: 'bold'
					},
					{
						title: __('Rules:'),
						subtitle: __('1- Follow Aron Groups on Twitter'),
						type: 'normal'
					},
					{
						title: __(' '),
						subtitle: __('2- Like the announcement post regarding Aron Groups’ anniversary.'),
						type: 'normal'
					},
					{
						title: __(' '),
						subtitle: __('3- Write a comment below this post and mention three of your friends, with the hashtag of the challenge.'),
						type: 'normal'
					},
					{
						title: __(' '),
						subtitle: __('4- Retweet or quote the announcement post.'),
						type: 'normal'
					},
					{
						title: __(' '),
						subtitle: __('You could also increase your odds of winning by liking, commenting on, retweeting or quoting other posts in Aron Groups Twitter in the challenge’s time span. At the end of the challenge, 10 participants are rewarded by lot. Any violation regarding Twitter’s terms and conditions, will eliminate the participant.'),
						type: 'normal'
					},
					{
						title: __('Prizes:'),
						subtitle: __('At the end of the challenge, final winners will be announced on Aron Groups social media by October 10th. Winners shall contact support to collect their reward.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('First place reward: 300 U.S Dollar Cash'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Second place reward: One year TradingView account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Third place to tenth place reward: 100 U.S Dollar Bonus'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('1- Winners from third to tenth place shall send a ticket to the support team within 3 days after the date of announcement.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- This bonus is added as a withdrawable credit to one of traders’ live accounts.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- To withdraw the credit, traders must trade at least 5 standard lots on Forex, Energy, Metal and Index symbols in their live account within 10 days. (Close only)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- The positions must be kept open for at least 5 minutes.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5- During the offer, if any transfers are made to wallets or other accounts, the credit will be deducted from traders’ account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('6- If the balance is zeroed for any reason, the credit will be deducted from traders’ account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('7- Participants can contact support in case of having any problems in the trading procedure.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('8- In case of any violation, Aron Groups Broker reserves the right to suspend the violators and treat them according to the regulations.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('9- The bonus will be credited only to Standard accounts.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('To win a prize in Aron Groups events and challenges, you must have successfully registered, passed authentication and created a live account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Participants of events, competitions, challenges and prize winners agree that Aron Groups reserves the right to publish their pictures and videos in any social media. Aron Groups also requires all prize winners to express their joy and gratitude towards Aron Groups Broker in a 15 second video clip to be published in any social media. Aron Groups reserves the right to award thr prize to the next candidate in case of not cooperating.'),
						type: 'normal'
					},
					{
						title: __('Traders who participate in Aron Groups social media challenges will also be considered for the Great reward of the Great festival.'),
						subtitle: __(''),
						type: 'normal'
					}
				]
			},
			{
				id: 1,
				title: __('Deposit Lottery'),
				date: __('11th Oct 2021'),
				dateTime: '10/15/2021',
				src: require('./image/02 diposite.jpg').default,
				content: [
					{
						title: __('Deposit Lottery'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('Introduction:'),
						subtitle: __('Aron Groups Holding has started the “Deposit Lottery” competition in occasion of its third anniversary. All clients are able to take part in this competition from 12:00 AM on Monday the 11th of October to 11:59 PM on October 21th by depositing at least 50 U.S Dollars to their trading account. Winners of the “Deposit Lottery” competition are rewarded 300 U.S Dollars.'),
						type: 'normal'
					},
					{
						title: __('Terms and Conditions'),
						subtitle: __('1- Each time you deposit 50 U.S Dollars you will obtain 1 point'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- Clients can increase their odds by sharing Aron Groups posts in social media with the #aronanniversary Hashtag.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- At the end of competition, those participants who have deposited at least 50 U.S Dollars will be considered in the lottery.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- Each time you deposit 50 U.S Dollars you will obtain 1 point (E.g. If a trader deposits 100 U.S Dollars, he/she will be given 2 points)'),
						type: 'normal'
					},
					{
						title: __('Top Participants are rewarded by lot:'),
						subtitle: __('1- First place: 300 U.S Dollars cash'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- Second place: Annual TradingView subscription (155 U.S Dollars)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- Third place to tenth place: 100 U.S Dollar withdrawable bonus for 10 days'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- Winners from third to tenth place shall send a ticket to the support team within 3 days after the date of announcement.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5- This credit is added as a withdrawable bonus to one of participant’s live accounts (Standard)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('6- The account shall have at least 50 U.S Dollars balance.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('7- To withdraw the credit, traders must trade at least 5 standard lots on Forex, Energy, Metal and Index symbols in their live account within 10 days. (Close only)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('8- The positions must be kept open for at least 5 minutes.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('9- During the offer, if any transfers are made to wallets or other accounts, the credit will be deducted from traders’ account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('10- The credit is not considered in loss, and if the balance is zeroed for any reason, it will be deducted from traders’ account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('11- Aron Groups has no responsibilities regarding margin call, stop out or loss. Please trade according to your money management criteria.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('12- Participants can contact support in case of having any problems in the trading procedure.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('13- Aron Groups requires all prize winners to express their joy and gratitude toward Aron Groups Broker in a 15 second video clip to be published in any social media. The winner’s face shall be exposed in this video and shall not be covered with mask.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('In case of any violation regarding the company’s terms and conditions or expiration of the offer, Aron Groups Broker reserves the right to deduct the credit or the profit from the client’s account and treat him/her according to the regulations.'),
						type: 'normal'
					},
					{
						title: __('Traders who participate in Aron Groups social media challenges will also be considered for the Great reward of the Great festival.'),
						subtitle: __(''),
						type: 'normal'
					}
				]
			},
			{
				id: 2,
				title: __('Back to School'),
				date: __('18th Oct 2021'),
				dateTime: '10/22/2021',
				src: require('./image/03 back to school.jpg').default,
				content: [
					{
						title: __('Back to School'),
						subtitle: __('Aron Groups Holding has started the “Back to School” competition in occasion of its third anniversary. Financial market enthusiasts could find more detail about this competition from October 18th. '),
						type: 'bold'
					},
					{
						title: __('Time:'),
						subtitle: __('The competition will start from Monday the 18th of October and will last to Friday the 22st of October.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('This competition is held in 3 different sections and three different times:'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('1- Monday the 18th of October at 10:00 AM'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Contest participation link: https://b2n.ir/y75366'),
						type: 'link'
					},
					{
						title: __(''),
						subtitle: __('2- Wednesday the 20th of October at 10:00 AM'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Contest participation link: https://b2n.ir/t48849'),
						type: 'link'
					},
					{
						title: __(''),
						subtitle: __('3- Friday the 22st of October at 10:00 AM'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Contest participation link: https://b2n.ir/u54002'),
						type: 'link'
					},
					{
						title: __(''),
						subtitle: __('During the competition, questions will be accessible through Aron Groups social media and website. Participants who obtain more than 85 points, answering the questions, are considered in the lottery.'),
						type: 'normal'
					},
					{
						title: __('Terms and conditions and prizes'),
						subtitle: __('1- All participants shall be registered and authenticated in Aron Groups Broker (No deposits required)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- All participants shall be in Aron Groups Academy group'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- Participants must earn at least 85 points from each competition to participate in the lottery.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- All qualified traders are free to take part in this competition'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5- Participants who have obtained more than 85 points are rewarded a 200 U.S Dollar Bonus by lot'),
						type: 'normal'
					},
					{
						title: __('Conditions of using the 200 U.S Dollar Bonus'),
						subtitle: __('1- Having at least 50 U.S Dollars balance to activate the 200 U.S Dollar Bonus'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- Trading 6 Standard lots within 10 days (The Bonus will be automatically added to your account after trading)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- Trades shall be carried out in Forex, Metal, Index and Energy markets'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- Positions must remain opened for at least 5 minutes'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5- This offer only includes the Standard account'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('6- Traders are allowed to use this Bonus for 10 days. After that the credited amount will be deducted from their account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('7- During the offer, if any transfers are made to wallets or other accounts, the credit will be deducted from traders’ account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('8- If the balance is zeroed for any reason, the credit will be deducted from traders’ account. (The Bonus is not considered in loss)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('9- The amount of this Bonus is 200 U.S Dollars and is not considered in loss'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('10- The 5 minute rule applies to all symbols'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('11- In case of any violation, Aron Groups Broker reserves the right to suspend the violators and treat them according to the regulations.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('12- All general rules of Aron Groups Holding also applies to this offer '),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('To win a prize in Aron Groups events and challenges, you must have successfully registered, passed authentication and created a live account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Participants of events, competitions, challenges and prize winners agree that Aron Groups reserves the right to publish their pictures and videos in any social media. Aron Groups also requires all prize winners to express their joy and gratitude towards Aron Groups Broker in a 15 second video clip to be published in any social media. Aron Groups reserves the right to award thr prize to the next candidate in case of not cooperating.'),
						type: 'normal'
					},
					{
						title: __('Traders who participate in Aron Groups social media challenges will also be considered for the Great reward of the Great festival.'),
						subtitle: __(''),
						type: 'normal'
					}
				]
			},
			{
				id: 3,
				title: __('Instagram Challenge'),
				date: __('25th Oct 2021'),
				dateTime: '10/29/2021',
				src: require('./image/04 instagram challange.jpg').default,
				content: [
					{
						title: __('Instagram challenge in occasion of Aron Groups Holding third anniversary'),
						subtitle: __('Aron Groups Holding has started a festival in occasion of its third anniversary. The Instagram challenge as a part of this festival is presented from October 25th to October 29th of 2021.'),
						type: 'bold'
					},
					{
						title: __('Rules:'),
						subtitle: __('1- Follow Aron Groups on Instagram and Telegram'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- Like the challenge’s post and last 3 posts, and comment on them.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- Tag at least 3 of your friends below the post.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- Story the post in your own personal page with the Hashtag regarding the Aron Groups anniversary and send the screenshot.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('At the end of the challenge, 10 participants are rewarded by lot.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Any violation regarding Instagram’s terms and conditions, will eliminate the participant.'),
						type: 'normal'
					},
					{
						title: __('Prizes:'),
						subtitle: __('At the end of the challenge, final winners will be announced on Aron Groups social media by October 31th. Winners shall contact support to collect their reward.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('First place to fifth place reward: 50 U.S Dollar Cash'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Sixth place to tenth place reward: 100 U.S Dollar Bonus'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('1- Winners from sixth to tenth place shall send a ticket to the support team within 3 days after the date of announcement.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- This bonus is added as a withdrawable credit to one of traders’ live accounts. The balance of the account, to which the bonus will be deposited, shall be at least 50 U.S Dollars.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- To withdraw the credit, traders must trade at least 5 standard lots on Forex, Energy, Metal and Index symbols in their live account within 10 days. (Close only)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- The positions must be kept open for at least 5 minutes.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5- During the offer, if any transfers are made to wallets or other accounts, the credit will be deducted from traders’ account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('6- If the balance is zeroed for any reason, the credit will be deducted from traders’ account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('7- Participants can contact support in case of having any problems in the trading procedure.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('8- In case of any violation, Aron Groups Broker reserves the right to suspend the violators and treat them according to the regulations.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('9- The bonus will be credited only to Standard accounts.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('To win a prize in Aron Groups events and challenges, you must have successfully registered, passed authentication and created a live account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Participants of events, competitions, challenges and prize winners agree that Aron Groups reserves the right to publish their pictures and videos in any social media. Aron Groups also requires all prize winners to express their joy and gratitude towards Aron Groups Broker in a 15 second video clip to be published in any social media. Aron Groups reserves the right to award thr prize to the next candidate in case of not cooperating.'),
						type: 'normal'
					},
					{
						title: __('Traders who participate in Aron Groups social media challenges will also be considered for the Great reward of the Great festival.'),
						subtitle: __(''),
						type: 'normal'
					}
				]
			},
			{
				id: 4,
				title: __('Golden Trade'),
				date: __('1th Nov 2021'),
				dateTime: '11/05/2021',
				src: require('./image/05 golden trade.jpg').default,
				content: [
					{
						title: __('Golden Trade'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('Introduction'),
						subtitle: __('Aron Groups Holding would like to express its deep gratitude toward its loyal customers by awarding them a prize named “Golden Trade”. In this offer clients are able to trade on XAU/USD pair and receive 3 U.S Dollars cashback from 12:00 AM on Monday the 1st of November to 11:59 PM on Friday the 5th of November.'),
						type: 'normal'
					},
					{
						title: __('Terms and Conditions'),
						subtitle: __('1- All clients are allowed to take part in this offer.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- Traders will receive 3 U.S Dollars cashback by trading 1 Standard lot (100 Nano lots – Close only) on XAU/USD pair.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- Traders shall trade 100 Nano lots on Nano accounts to receive 3 U.S Dollars cashback.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- To be considered, positions shall remain opened for at least 9 minutes.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5- There are no limitations regarding the number of trades and the amount of cashback.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('6- Aron Groups requires all prize winners to express their joy and gratitude toward Aron Groups Broker in a 15 second video clip to be published in any social media. The winner’s face shall be exposed in this video and shall not be covered with mask.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('7- Aron Groups has no responsibilities regarding margin call, stop out or loss. Please trade according to your money management criteria.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('In case of any violation regarding the company’s terms and conditions or expiration of the offer, Aron Groups Broker reserves the right to deduct the credit or the profit from the client’s account and treat him/her according to the regulations.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Traders who participate in Aron Groups social media challenges will also be considered for the Great reward of the Great festival.'),
						type: 'normal'
					}
				]
			},
			{
				id: 5,
				title: __('Euro Star'),
				date: __('8th Nov 2021'),
				dateTime: '11/12/2021',
				src: require('./image/06 Euro star.jpg').default,
				content: [
					{
						title: __('Euro Star'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('Introduction'),
						subtitle: __('Aron Groups Holding intends to gratitude its loyal customers by awarding them a prize named “Euro Star”. In this offer clients are able to trade on EUR/USD pair and receive 3 U.S Dollars cashback from 12:00 AM on Monday the 8st of November to 11:59 PM on Friday the 12th of November.'),
						type: 'normal'
					},
					{
						title: __('Terms and Conditions'),
						subtitle: __('1- All clients are allowed to take part in this offer.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2- Traders will receive 3 U.S Dollars cashback by trading 1 Standard lot (100 Nano lots – Close only) on EUR/USD pair.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3- Traders shall trade 100 Nano lots on Nano accounts to receive 3 U.S Dollars cashback.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4- To be considered, positions shall remain opened for at least 9 minutes.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5- There are no limitations regarding the number of trades and the amount of cashback.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('6- In case of any violation, Aron Groups Broker reserves the right to suspend the violators and treat them according to the regulations.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('To win a prize in Aron Groups events and challenges, you must have successfully registered, passed authentication and created a live account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Participants of events, competitions, challenges and prize winners agree that Aron Groups reserves the right to publish their pictures and videos in any social media. Aron Groups also requires all prize winners to express their joy and gratitude towards Aron Groups Broker in a 15 second video clip to be published in any social media. Aron Groups reserves the right to award thr prize to the next candidate in case of not cooperating.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Traders who participate in Aron Groups social media challenges will also be considered for the Great reward of the Great festival.'),
						type: 'normal'
					}
				]
			},
			{
				id: 6,
				title: __('Invitation challenge'),
				date: __('15th Nov 2021'),
				dateTime: '11/15/2021',
				src: require('./image/07 IB.jpg').default,
				content: [
					{
						title: __('Invitation challenge'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('Introduction'),
						subtitle: __('Aron Groups Holding intends to offer “Invitation challenge” incentive in occasion of its third anniversary. During this offer, clients can invite their friends to Aron Groups, from 00:00 on November 15th to 23:59 on December 14th, and receive 25 U.S Dollars for each successful invitation.'),
						type: 'normal'
					},
					{
						title: __('Terms and conditions'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __(''),
						subtitle: __('1. The invited clients must be new traders.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('2. In case of satisfying every condition, participants will receive 25 U.S Dollars for each successful invitation.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('3. This offer has no limits regarding the number of invited traders, and the reward is limitless.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('4. Participants will be able to invite their friends to Aron Groups by obtaining their IB code. To obtain your IB code, click on IB in your user panel.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('5. The invited trader must register in Broker’s website using the invitation code. After that he/she must pass the verification process and create a standard account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('6. The invited trader must trade 5 standard lots within 10 days after the first deposit. Trades must be carried out on Energy, Indices, Metal and Forex symbols. (Close only)'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('7. Trades must remain opened for at least 5 minutes.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('8. In case the invited trader is able to trade 5 standard lots within the specified period, he/she can submit a ticket to the support team to begin account investigation.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('9. In case the trader was able to trade 5 standard lots successfully, the prize would be deposited to the inviter’s account.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('10. In case the trader isn’t able to trade 5 standard lots within the specified period (10 days), no prize would be rewarded to the inviter.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('11. Each invited trader is able to invite his/her friends to Aron Groups.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('12. Traders have 3 days to request their reward after the specified period.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('13. In case of any violation regarding the company’s terms and conditions or expiration of the offer, Aron Groups Broker reserves the right to deduct the credit or the profit from the client’s account and treat him/her according to the regulations.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('14. Aron Groups has no responsibilities regarding margin call, stop out or loss. Please trade according to your money management criteria.'),
						type: 'normal'
					}
				]
			},
			{
				id: 7,
				title: __('Anniversary Party'),
				date: __('30th Nov 2021'),
				dateTime: '11/30/2021',
				src: require('./image/08 cash back.jpg').default,
				content: [
					{
						title: __('Lottery of the Great festival'),
						subtitle: __(''),
						type: 'bold'
					},
					{
						title: __('Introduction'),
						subtitle: __('Aron Groups Holding intends to throw a great festival in occasion of its third anniversary and award exquisite rewards to those who took part in competitions, challenges and events of the anniversary.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Clients who participated in Aron Groups social media challenges from October 4th to the day of the Great festival will be considered in this lottery.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('To take part in this lottery you need to comment #aronanniversary below festival related posts in Aron Groups Twitter or Instagram page to help us publish the anniversary events.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('You can increase your odds of winning by writing more comments.'),
						type: 'normal'
					},
					{
						title: __('Prizes'),
						subtitle: __('First place: 10 Bahar Azadi Coins'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Second place: Apple iPhone Pro 13'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Third place: Apple iPad Pro 2021'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('If delivering the prize is not possible physically, the award will be rewarded in cash.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('In case of any violation, Aron Groups Broker reserves the right to suspend the violators and treat them according to the regulations.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Winners shall be successfully registered, passed authentication process and created a live account in order to collect their reward.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Participants of events, competitions, challenges and prize winners agree that Aron Groups reserves the right to publish their pictures and videos in any social media. Aron Groups also requires all prize winners to express their joy and gratitude toward Aron Groups Broker in a 15 second video clip to be published in any social media. Aron Groups reserves the right to award the prize to the next candidate in case of not cooperating.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Participation in this event means accepting terms and conditions issued in Aron Groups terms of agreement.'),
						type: 'normal'
					},
					{
						title: __(''),
						subtitle: __('Visit for further information: https://aron-anniversary.com'),
						type: 'link'
					}
				]
			},
			{
				id: 8,
				title: __('Grand Trader Award'),
				date: __('18th Mar 2022'),
				dateTime: '03/18/2022',
				src: require('./image/Grand-Prize-500-400.jpg').default,
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
			},
		]
		return <div className={styles.economicAwards}>
			<Modal modal_reset={this.resetModal} active={modalSet} title="Aron Anniversary">
				{
					modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>{__('Calendar of Events ')}</h2>
				<div className={styles.timeline}>
					<div className={styles.cardWrapper}>
						{anniversaryData.map((item, index) => {
							let dateNow = new Date().getTime();
							let datum = Date.parse(item.dateTime);
							return <div key={index} className={styles.card}>
								<img src={item.src} alt=""/>
								<div className={{[styles.btn]: 1, [styles.active]: (datum > dateNow) ? 1 : 0}.toCss}>
									<a onClick={() => this.modalSetData(item.content)}>
										<span className="material-icons" style={(language === 'fa') ? {transform: 'scaleX(1)'} : {}}>check_circle</span>
										{(datum > dateNow) ? __('Detail') : __('Expired')}
									</a>
								</div>
								<h3>{item.title}</h3>
								<p>{item.date}</p>
							</div>
						})}
					</div>
				</div>

			</Container>
		</div>
	}
}