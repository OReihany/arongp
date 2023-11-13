import React, {PureComponent} from "react";
import styles from './aron-game.module.scss';
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Container} from "components/container/container";
import {Modal} from "../../../../dashboard/pages/common/modal/modal";


@Observer([])
export class AronGame extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		modalSet: 0
	}
	resetModal = () => this.setState({modalSet: 0});

	render() {
		const {__, language} = this.i18;
		const modalData = () => {
			const data = [
				{
					title: __('Aron Game competition'),
					subtitle: __('Predict and win 500 U.S Dollars.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('Aron Groups Broker presents the weekly Close competition; in this competition, a trading symbol is determined by Aron Groups each week and participants must predict the closing price of that symbol.'),
					type: 'normal'
				},
				{
					title: __('Competition Rules'),
					subtitle: __('This competition is held weekly.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('Only one symbol is determined each week.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('The determined symbol will be announced on Aron Groups Instagram page.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('Participants must predict the closing price of the determined symbol.'),
					type: 'normal'
				},
				{
					title: __('Rules'),
					subtitle: __('1. Answers must be in accordance with bid price provided by Aron Groups.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('2. The last bid price in Aron Group Broker is the correct answer.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('3. If there are no bid prices at that time, the latest price is applied.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('4. Participants must have a real account in Aron Groups Broker to be able to win the prize.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('5. Participants can submit their final prediction from Sunday, when the competition post is published, to Thursday at 24:00 in Iran’s time.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('6. Participants who comment more than once are eliminated from the competition, even if their prediction is correct.'),
					type: 'normal'
				},
				{
					title: __('Note: The correct answer is the last bid price in MetaTrader5 in Aron Groups at 24:00 on Friday in server time'),
					subtitle: __(''),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('7. Participants must comment their answer below the competition post in Aron Groups page, while sharing this post on their personal page and also writing their answer in caption (commenting on Aron Groups post and sharing the post on personal page must be carried out simultaneously).'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('8. If any contradictions are found between the comment and the personal page, the winner is not rewarded.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('9. Participants must keep the post on their personal page until the end of the competition.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('10. The following hashtags must be shared along with Aron Groups competition post:'),
					type: 'normal'
				},
				{
					title: __('آرون گروپس #بروکر آرون #'),
					subtitle: __(''),
					type: 'normal'
				},
				{
					title: __('#arongroups #arongroupsbroker #forex #broker'),
					subtitle: __(''),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('11. Participants must write their answer with a Hashtag sign (#) below Aron Groups competition post.'),
					type: 'normal'
				},
				{
					title: __('For example:'),
					subtitle: __(''),
					type: 'normal'
				},
				{
					title: __('#35932.1'),
					subtitle: __(''),
					type: 'normal'
				},
				{
					title: __('#35932/1'),
					subtitle: __(''),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('12. Answers must be provided with decimal points in accordance with Aron Groups MetaTrader format.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('13. Answers must be provided exactly as quoted in Aron Groups Standard account in MetaTrader5. If the price is quoted up to 5 decimal points, the answer must be submitted up to 5 decimal points, and if the price is quoted up to 10 decimal points, the answer must be submitted up to 10 decimal points.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('14. The answer must be compatible with the price format of the determined symbol.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('15. Answers which specify a range are not acceptable.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('16. Each participant is allowed to submit only one answer.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('17. The post and caption must not be edited.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('18. Those who have predicted the price correctly, shall contact Aron Groups support to obtain their reward.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('19. Winners must send a screenshot from the competition post on their personal page to Aron Groups support.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('20. Aron Groups reserves the right to require marketing assistance from the participants, such as requiring videos, comments and etc. In case of not cooperating, the company reserves the right to deprive the winner from acquiring the prize.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('21. Participants who have correctly predicted the first 5 digits will be rewarded 100 U.S Dollars (If the number of winners exceeds one, the prize will be divided between them)'),
					type: 'normal'
				},
				{
					title: __('Note'),
					subtitle: __('The results will be announced on each Sunday and participants must share the competition post on their personal page on the same day.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('500 U.S Dollars will be rewarded for (predicting 6 main digits correctly)'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('100 U.S Dollars will be rewarded for (predicting 5 first digits correctly)'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('If there are more than one winners, the prize will be equally shared between them.'),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('If any misuse is observed by Aron Groups, this company reserves the right to award the prize to the next person. '),
					type: 'normal'
				},
				{
					title: __(''),
					subtitle: __('Aron Groups Broker, as its sole discretion, reserves the right to eliminate any suspicious participant from the competition. (Even if their prediction is correct)'),
					type: 'normal'
				}
			];
			return <div className={styles.modalContent}>
				<Container className={styles.modalContainer}>
					{
						data.map((item, index) => {
							return <div key={index}>
								<h4>{item.title}</h4>
								<p>{item.subtitle}</p>
							</div>
						})
					}
				</Container>
			</div>
		};
		return <div className={styles.aronGame}>
			<Modal modal_reset={this.resetModal} active={this.state.modalSet} title={__('Aron Game Competition')}>
				{
					modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<h2>{__('Aron Game Competition')}</h2>
				<div className={styles.aronGameImg}>
					<img className={styles.landscape} src={(language === 'fa') ? require('./aron-game.jpg').default : require('./aron-game-en.jpg').default} alt=""/>
					<img className={styles.portrait} src={(language === 'fa') ? require('./aron-game-mob.jpg').default : require('./aron-game-mob-en.jpg').default} alt=""/>
				</div>
				<div className={styles.btn}>
					<p>{__('See the Rules')}</p>
					<button onClick={() => this.setState({modalSet: 1})} className={styles.btnClick}>{__('Rules')}</button>
				</div>
			</Container>
		</div>;
	}
}