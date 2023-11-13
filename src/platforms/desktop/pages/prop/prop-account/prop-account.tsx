import React, {PureComponent} from "react";
import styles from './prop-account.module.scss';
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import {Observer} from "react-soa/dist/class";
import {Plans} from "../../zulu-trading/plans/plans";


@Observer([])
export class PropAccount extends PureComponent {
	@wired i18 = pick(I18nService);
	state = {
		faqQueId: 0
	}

	render() {
		const {__, language} = this.i18;
		const trading_feature = [
			{"name": __("Minimum and maximum days of trading"), "value": __("Unlimited")},
			{"name": __("Minimum Profit target"), "value": "1%"},
			{"name": __("Maximum stop-loss for each position"), "value": "3%"},
			{"name": __("Daily Drawdown"), "value": "3%"},
			{"name": __("Maximum Overall Drawdown"), "value": "10%"},
			{"name": __("The amount of profit to receive more capital"), "value": "10%"},
			{"name": __("Account Expiry date"), "value": __("Not Applicable if conditions are met")},
			{"name": __("Spread"), "value": __("Floating")},
			{"name": __("Leverage"), "value": __("Up to 1:200 (Except Crypto Currency up to 1:5)")},
			{"name": __("Trading Symbols"), "value": "+100"},
			{"name": __("Markets"), "value": __("FX, Commodities, Metals, Indices, Crypto")},
			{"name": __("Commission"), "value": __("Crypto 0.085% / FX, Metals, Indices 0.0012%")},
		]
		const faqs = [
			{
				id: 0,
				q: __('1. What is prop?'),
				a: __('Using this service, traders are allowed to trade with large capitals by just depositing a small amount.')
			},
			{
				id: 1,
				q: __('2. How can we use prop trading service?'),
				a: __('First, you must register in Aron Groups and verify your identity in your user panel. After that, you must deposit at least 300 U.S Dollars. Finally, submit your request for creating a prop account via the ticket system.')
			},
			{
				id: 2,
				q: __('3. How much money do we need to start?'),
				a: __('The amount you must deposit, and the amount you will be able to trade with are mentioned in the following table:')
			},
			{
				id: 3,
				q: __('4. Is there a qualification process to test client’s eligibility?'),
				a: __('No, the firm that provided this service has no intentions to qualify applicants.')
			},
			{
				id: 4,
				q: __('5. Is there a specific time for using Aron Prop service?'),
				a: __('No, traders are allowed to use this service anytime they desire.')
			},
			{
				id: 5,
				q: __('6. Which trading symbols are we allowed to trade in Aron Prop?'),
				a: __('In Aron Prop, traders are allowed to trade more than 400 trading symbols including precious metals, energy, stocks, currency pairs and cryptocurrency markets.')
			},
			{
				id: 6,
				q: __('7. Can I use trading robots (Expert) in Prop trading?'),
				a: __('Yes, but only if the approval is granted from the providing firm. But, you can’t use them for: copying someone else’s trades, scalp tick, hedge strategy, stacking, Martingale method, latency arbitrage, reverse arbitrage, hedge arbitrage or using simulators.')
			},
			{
				id: 7,
				q: __('8. Are there any rules when trading?'),
				a: __('The only thing you have to do is to keep your drawdown below 10%. Please have in mind that reaching 6% drawdown causes some limitations to apply.')
			},
			{
				id: 8,
				q: __('9. What is drawdown?'),
				a: __('Drawdown is the difference between the lowest value of your assets and its highest amount during a time span. ')
			},
			{
				id: 9,
				q: __('10. Can I use any amount of leverage I want?'),
				a: __('No, the maximum leverage offered is equal to 1:200 which is granted after the providing firm approves.')
			},
			{
				id: 10,
				q: __('11. Is it possible for my account to get suspended?'),
				a: __('If you don’t follow your management risk plan properly and reach 10% drawdown, your account may get suspended if the providing firm approves.')
			},
			{
				id: 11,
				q: __('12. What is the trader’s share from the gained profit?'),
				a: __('If the gained profit reaches 1%, traders are allowed to withdraw up to 80% of it.')
			},
			{
				id: 12,
				q: __('13. Are traders responsible for loss?'),
				a: __('Traders have no responsibilities for loss.')
			},
		]
		return <div className={styles.moneyManager}>
			<div className={styles.guidePlatform}>
				<Container className={styles.container}>
					<div className={styles.guideWrapper}>
						<div className={styles.animate}>
							<h1>{__('Aron Prop Registration Guide')}</h1>
							<img src={require('./trading.gif').default} alt=""/>
						</div>
						<div className={styles.content}>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('../../zulu-trading/zulu-platform/credit-relation-icon.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Verification')}</h2>
									<p>{__('At the first step, after registering in Aron Groups website, you must verify your identity, using identity documents.')}</p>
								</div>
							</div>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('../../zulu-trading/zulu-platform/decrease-icon.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Deposit')}</h2>
									<p>{__('After that, you must deposit at least 300 U.S Dollars, using one of the payment methods suggested.')}</p>
								</div>
							</div>
							<div className={styles.contentWrapper}>
								<div className={styles.contentImg}>
									<img src={require('../../zulu-trading/zulu-platform/flow-icon-blue.png').default} alt=""/>
								</div>
								<div className={styles.contentText}>
									<h2>{__('Prop Account Request')}</h2>
									<p>{__('At the final step, From the profile section, click on the prop account request section and fill out the registration form.')}</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
			<div className={styles.feature}>
				<div className={styles.featureWrapper}>
					<Container className={styles.container}>
						<h1>{__('Aron Prop Advantages')}</h1>
						<div className={styles.featureList}>
							<div className={styles.featureItem}>
								<div className={styles.featureImg}>
									<svg id="Capa_1" enable-background="new 0 0 511.998 511.998"
										 height="512" viewBox="0 0 511.998 511.998" width="512"
										 xmlns="http://www.w3.org/2000/svg">
										<g>
											<path
												d="m492.928 398.051-70.556-70.553c-3.905-3.904-10.235-3.904-14.141-.001l-3.448 3.447-24.266-24.278c-1.875-1.876-4.419-2.93-7.071-2.931 0 0-.001 0-.002 0-2.651 0-5.194 1.053-7.069 2.927l-5.522 5.519-47.433-47.412c23.636-35.286 32.792-77.942 26.618-119.047h32.427c4.332 14.678 17.938 25.426 34.018 25.426 19.54 0 35.438-15.892 35.438-35.426s-15.897-35.426-35.438-35.426c-16.079 0-29.685 10.748-34.018 25.426h-36.687c-4.76-17.136-12.304-33.731-22.709-49.096-3.097-4.573-9.315-5.769-13.888-2.672s-5.77 9.314-2.673 13.887c8.076 11.925 14.2 24.689 18.411 37.881h-21.729c-3.503 0-6.751 1.833-8.562 4.833l-19.176 31.77-28.812-62.158c-1.621-3.497-5.218-5.794-9.073-5.794s-7.452 2.297-9.073 5.794l-28.816 62.167-19.202-31.782c-1.811-2.997-5.057-4.829-8.559-4.829h-26.754c-4.329-14.678-17.924-25.426-33.991-25.426-19.556 0-35.466 15.892-35.466 35.426s15.91 35.426 35.466 35.426c16.067 0 29.662-10.748 33.991-25.426h21.112l26.008 43.048c4.064 6.728 14.329 6.159 17.632-.966l27.651-59.654 27.651 59.654c3.304 7.128 13.571 7.694 17.634.962l25.98-43.044h20.954c6.723 39.272-3.453 79.943-26.801 113.346-16.294 23.311-42.16 38.762-46.179 41.047-3.229-5.927-9.524-9.958-16.744-9.958h-1.748c-2.029-6.66-4.703-13.103-7.997-19.269l1.246-1.245c3.59-3.589 5.568-8.371 5.568-13.465s-1.978-9.876-5.574-13.47l-17.888-17.853c-7.424-7.421-19.505-7.421-26.929 0l-1.225 1.224c-6.144-3.273-12.59-5.943-19.281-7.986v-1.728c0-10.5-8.544-19.042-19.046-19.042h-25.295c-10.487 0-19.018 8.542-19.018 19.042v1.725c-6.693 2.042-13.143 4.715-19.297 7.996l-1.237-1.231c-7.425-7.421-19.505-7.421-26.929 0l-7.411 7.408c-25.24-55.7-13.605-122.388 30.311-166.284 43.663-43.618 108.38-55.774 164.877-30.97 4.99 2.19 10.986-.146 13.176-5.136 2.191-4.99-.146-10.985-5.136-13.176-30.744-13.498-64.532-17.492-97.71-11.554-33.958 6.079-64.853 22.223-89.344 46.689-51.928 51.904-64.078 131.898-30.549 196.604-1.069 2.405-1.647 5.025-1.647 7.741 0 5.094 1.977 9.875 5.553 13.45l1.25 1.254c-3.287 6.168-5.961 12.613-8 19.274h-1.762c-10.488.001-19.019 8.531-19.019 19.015v25.285c0 10.5 8.531 19.042 19.018 19.042h1.765c2.04 6.661 4.71 13.1 7.99 19.259l-1.228 1.227c-3.59 3.589-5.567 8.371-5.567 13.465s1.977 9.875 5.562 13.459l17.872 17.892c7.425 7.42 19.505 7.42 26.929 0l1.246-1.245c6.158 3.291 12.607 5.963 19.289 7.994v1.74c0 10.5 8.531 19.042 19.018 19.042h25.295c10.502 0 19.046-8.542 19.046-19.042v-1.744c6.666-2.03 13.106-4.7 19.269-7.987l1.237 1.242c7.425 7.42 19.505 7.419 26.929 0l17.895-17.886c3.59-3.589 5.568-8.371 5.568-13.465s-1.978-9.875-5.583-13.479l-1.223-1.217c3.287-6.157 5.957-12.594 7.987-19.253h1.75c10.502 0 19.046-8.542 19.046-19.042v-12.905c6.26-3.148 12.297-6.671 18.091-10.556l47.419 47.399-5.501 5.499c-1.877 1.875-2.931 4.42-2.931 7.073s1.054 5.197 2.931 7.073l24.275 24.264-3.431 3.429c-1.876 1.875-2.931 4.419-2.931 7.072 0 2.652 1.054 5.196 2.929 7.072l70.558 70.555c12.738 12.733 29.472 19.099 46.204 19.099 16.733 0 33.466-6.366 46.204-19.099 9.434-9.43 15.82-21.663 18.099-34.811 2.288-13.194.529-27.03-5.157-39.166-3.201-6.832-7.608-13.074-12.941-18.405zm-86.447-277.755c8.513 0 15.438 6.92 15.438 15.426s-6.925 15.426-15.438 15.426c-8.528 0-15.466-6.92-15.466-15.426s6.938-15.426 15.466-15.426zm-305.308 30.853c-8.528 0-15.466-6.92-15.466-15.426s6.938-15.426 15.466-15.426c8.512 0 15.438 6.92 15.438 15.426s-6.926 15.426-15.438 15.426zm127.936 182.349h-8.49c-4.679 0-8.731 3.244-9.757 7.809-2.21 9.841-6.082 19.172-11.508 27.736-2.509 3.96-1.93 9.132 1.393 12.439l5.995 5.967-16.536 16.529-5.976-5.999c-3.308-3.319-8.476-3.898-12.433-1.392-8.569 5.424-17.906 9.295-27.751 11.504-4.566 1.024-7.811 5.078-7.811 9.757v8.482h-23.36v-8.482c0-4.681-3.248-8.736-7.816-9.759-9.869-2.208-19.2-6.076-27.735-11.495-3.953-2.51-9.118-1.94-12.43 1.369l-6.018 6.015-16.511-16.53 5.983-5.981c3.305-3.303 3.881-8.455 1.389-12.407-5.409-8.578-9.286-17.924-11.525-27.778-1.034-4.554-5.082-7.785-9.751-7.785h-8.461v-23.341h8.461c4.671 0 8.721-3.234 9.753-7.791 2.229-9.836 6.106-19.181 11.523-27.772 2.488-3.946 1.918-9.087-1.374-12.392l-6-6.022 16.513-16.506 6.031 6.003c3.31 3.293 8.458 3.859 12.403 1.362 8.521-5.394 17.864-9.266 27.77-11.508 4.557-1.031 7.792-5.081 7.792-9.753v-8.454h23.36v8.454c0 4.67 3.233 8.719 7.787 9.752 9.923 2.252 19.269 6.124 27.775 11.509 3.951 2.502 9.11 1.93 12.418-1.376l5.99-5.988 16.538 16.504-6.011 6.008c-3.311 3.309-3.883 8.471-1.378 12.425 5.435 8.578 9.306 17.908 11.507 27.731 1.023 4.567 5.078 7.814 9.758 7.814h8.49v23.342zm54.149-34.73c6.419-5.525 12.415-11.518 17.938-17.939l45.511 45.491-17.943 17.935zm47.075 72.197 5.23-5.228c.095-.088.195-.167.287-.26.091-.091.169-.189.255-.282l37.335-37.318 17.197 17.206-43.099 43.08zm148.454 105.319c-17.683 17.673-46.45 17.672-64.129.001l-63.483-63.48 64.125-64.095 63.487 63.485c13.363 13.356 16.967 34.352 8.913 51.442-2.211 4.692-5.245 8.982-8.913 12.647z"></path>
											<path d="m124.54 258.75c-34.786 0-63.087 28.29-63.087 63.063s28.301 63.064 63.087 63.064c34.787 0 63.087-28.291 63.087-63.064s-28.3-63.063-63.087-63.063zm0 106.127c-23.758 0-43.087-19.318-43.087-43.064 0-23.745 19.329-43.063 43.087-43.063s43.087 19.318 43.087 43.063c0 23.746-19.329 43.064-43.087 43.064z"></path>
											<path d="m268.053 56.48c1.949 1.949 4.499 2.922 7.051 2.922 2.56 0 5.121-.98 7.077-2.936 3.905-3.905 3.892-10.251-.014-14.157-3.906-3.905-10.236-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143z"></path>
										</g>
									</svg>
								</div>
								<div className={styles.featureContent}>
									<h2>{__('No Qualification')}</h2>
									<p>{__('Despite most brokers, in Aron Groups, no qualification processes are carried out to test clients’ eligibility.')}</p>
									{/*<ul>*/}
									{/*	<li>{__('We know what you need.')}</li>*/}
									{/*	<li>{__('Trade with a reliable broker.')}</li>*/}
									{/*</ul>*/}
								</div>
							</div>
							<div className={styles.featureItem}>
								<div className={styles.featureImg}>
									<svg id="_x31_" enable-background="new 0 0 24 24" height="512"
										 viewBox="0 0 24 24" width="512"
										 xmlns="http://www.w3.org/2000/svg">
										<g>
											<g>
												<path d="m16.929 24h-14.239c-1.483 0-2.69-1.207-2.69-2.69v-18.62c0-1.483 1.207-2.69 2.69-2.69h18.62c1.483 0 2.69 1.207 2.69 2.69v14.238c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-14.238c0-.932-.758-1.69-1.69-1.69h-18.62c-.932 0-1.69.758-1.69 1.69v18.62c0 .931.758 1.69 1.69 1.69h14.238c.276 0 .5.224.5.5s-.223.5-.499.5z"></path>
											</g>
										</g>
										<g>
											<g>
												<path d="m16.929 24c-.064 0-.129-.013-.191-.038-.187-.077-.309-.26-.309-.462v-4.381c0-1.483 1.207-2.69 2.69-2.69h4.381c.202 0 .385.122.462.309.078.187.035.402-.108.545l-6.571 6.571c-.096.095-.224.146-.354.146zm2.19-6.571c-.932 0-1.69.759-1.69 1.69v3.174l4.864-4.864z"></path>
											</g>
										</g>
										<g>
											<g>
												<path d="m9.955 17.954c-.132 0-.26-.053-.354-.146l-5.455-5.454c-.195-.195-.195-.512 0-.707s.512-.195.707 0l5.077 5.076 9.193-10.506c.182-.209.498-.229.706-.047s.229.498.047.706l-9.545 10.909c-.091.104-.222.166-.36.171-.005-.002-.011-.002-.016-.002z"></path>
											</g>
										</g>
									</svg>
								</div>
								<div className={styles.featureContent}>
									<h2>{__('Access to Funding')}</h2>
									<p>{__('In Aron Prop, you can trade with more than what you own. You can start trading with a large capital by just depositing a small amount. For example, you can start trading with 5,000 U.S Dollars by depositing 300 U.S Dollars.')}</p>
									{/*<ul>*/}
									{/*	<li>{__('Be a geniuses in trading groups.')}</li>*/}
									{/*	<li>{__('Be sure about your trading decisions.')}</li>*/}
									{/*</ul>*/}
								</div>
							</div>
							<div className={styles.featureItem}>
								<div className={styles.featureImg}>
									<svg id="Capa_1" enable-background="new 0 0 512 512"
										 height="512" viewBox="0 0 512 512" width="512"
										 xmlns="http://www.w3.org/2000/svg">
										<g>
											<path d="m211 166h-30v30h-30v120h30v30h30v-30h30v-120h-30zm0 120h-30v-60h30z"></path>
											<path d="m361 136h-30v-30h-30v30h-30v180h30v30h30v-30h30zm-30 150h-30v-120h30z"></path>
											<path d="m75 466h362c41.355 0 75-33.645 75-75v-15h-30v-330h-452v330h-30v15c0 41.355 33.645 75 75 75zm362-30h-362c-19.557 0-36.239-12.539-42.43-30.01h446.86c-6.191 17.471-22.873 30.01-42.43 30.01zm-377-360h392v300h-392z"></path>
										</g>
									</svg>
								</div>
								<div className={styles.featureContent}>
									<h2>{__('Unlimited Trading Opportunity')}</h2>
									<p>{__('In Aron Prop, you have no time limits.')}</p>
									{/*<ul>*/}
									{/*	<li>{__('Trade how you desire.')}</li>*/}
									{/*	<li>{__('Trade calmly.')}</li>*/}
									{/*</ul>*/}
								</div>
							</div>
							<div className={styles.featureItem}>
								<div className={styles.featureImg}>
									<svg id="Capa_1" enable-background="new 0 0 512 512"
										 height="512" viewBox="0 0 512 512" width="512"
										 xmlns="http://www.w3.org/2000/svg">
										<g>
											<path
												d="m305.409 125.647 35.082 25.954c3.949 2.921 1.953 9.385-3.04 9.416l-11.009.067c-.011 0-.021 0-.032 0-2.832 0-5.144-2.292-5.162-5.124-.051-8.284-6.803-14.975-15.091-14.907-8.284.051-14.958 6.808-14.908 15.092.099 16.005 10.937 29.469 25.623 33.615v.726c0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15v-.757c5.844-1.62 11.194-4.736 15.57-9.168 6.602-6.686 10.204-15.542 10.139-24.961v-.094c-.075-11.002-5.401-21.478-14.247-28.022l-35.081-25.953c-3.984-2.948-1.891-9.3 3.072-9.3h11.026c2.847 0 5.163 2.313 5.163 5.156 0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15c0-16.085-10.866-29.673-25.641-33.835v-.722c0-8.284-6.716-15-14.999-15s-14.999 6.716-14.999 15v.702c-14.81 4.139-25.71 17.744-25.71 33.855.001 11.095 5.327 21.659 14.248 28.26z"></path>
											<path d="m331.871 253.315c69.858 0 126.69-56.818 126.69-126.658s-56.833-126.657-126.69-126.657-126.69 56.818-126.69 126.658 56.833 126.657 126.69 126.657zm0-223.315c53.316 0 96.691 43.361 96.691 96.658s-43.375 96.658-96.691 96.658c-53.315 0-96.691-43.361-96.691-96.658s43.376-96.658 96.691-96.658z"></path>
											<path
												d="m501.685 287.186c-16.223-20.886-45.511-24.815-66.593-10.189l-57.071 38.181c-7.931-14.767-23.525-24.833-41.43-24.833h-40.711c-20.55-19.274-47.985-30.217-76.283-30.217-21.239 0-41.9 6-59.747 17.352-16.081 10.229-29.235 24.359-38.274 41.041l-7.642 4.673-1.98-5.791c-2.68-7.837-11.204-12.02-19.042-9.342l-82.759 28.279c-7.835 2.677-12.023 11.208-9.343 19.047l50.073 146.462c2.681 7.842 11.208 12.018 19.042 9.342l82.759-28.277c7.391-2.526 12.233-10.593 9.177-19.532l131.321-4.065c35.763-.048 70.059-11.031 99.191-31.766l99.032-70.442c22.704-16.161 27.391-47.909 10.28-69.923zm-427.268 190.767-40.368-118.075 54.371-18.578c5.857 17.132 34.323 100.393 40.368 118.076zm399.597-145.289-99.032 70.442c-24.091 17.147-52.46 26.21-82.038 26.21-.154 0-.31.002-.464.007l-140.773 4.357-27.83-81.403 16.915-10.344c.004-.002.007-.005.011-.008 2.49-1.524 4.437-3.761 5.625-6.182 13.805-28.137 41.842-45.617 73.169-45.617 22.638 0 43.664 9.063 59.205 25.519 2.862 3.032 6.974 4.697 10.905 4.697h46.884c9.372 0 16.996 7.62 16.996 16.987 0 9.269-7.497 16.987-16.996 16.987h-84.629c-8.284 0-14.999 6.716-14.999 15s6.716 15 14.999 15h84.629c12.563 0 24.366-4.892 33.225-13.764 6.198-6.196 10.445-13.818 12.449-22.122l69.621-46.577c.084-.056.167-.113.25-.171 8.21-5.735 19.582-4.174 25.861 3.909 6.621 8.52 4.811 20.814-3.983 27.073z"></path>
										</g>
									</svg>
								</div>
								<div className={styles.featureContent}>
									<h2>{__('Profit Withdrawal')}</h2>
									<p>{__('In Aron Prop, you are allowed to withdraw 90% of the gained profit, if you stick to a proper risk management plan.')}</p>
									{/*<ul>*/}
									{/*	<li>{__('Make clever decisions when trading.')}</li>*/}
									{/*	<li>{__('Don’t feel lost when trading.')}</li>*/}
									{/*</ul>*/}
								</div>
							</div>
							<div className={styles.featureItem}>
								<div className={styles.featureImg}>
									<svg id="Capa_1" enable-background="new 0 0 512 512"
										 height="512" viewBox="0 0 512 512" width="512"
										 xmlns="http://www.w3.org/2000/svg">
										<g>
											<path
												d="m305.409 125.647 35.082 25.954c3.949 2.921 1.953 9.385-3.04 9.416l-11.009.067c-.011 0-.021 0-.032 0-2.832 0-5.144-2.292-5.162-5.124-.051-8.284-6.803-14.975-15.091-14.907-8.284.051-14.958 6.808-14.908 15.092.099 16.005 10.937 29.469 25.623 33.615v.726c0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15v-.757c5.844-1.62 11.194-4.736 15.57-9.168 6.602-6.686 10.204-15.542 10.139-24.961v-.094c-.075-11.002-5.401-21.478-14.247-28.022l-35.081-25.953c-3.984-2.948-1.891-9.3 3.072-9.3h11.026c2.847 0 5.163 2.313 5.163 5.156 0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15c0-16.085-10.866-29.673-25.641-33.835v-.722c0-8.284-6.716-15-14.999-15s-14.999 6.716-14.999 15v.702c-14.81 4.139-25.71 17.744-25.71 33.855.001 11.095 5.327 21.659 14.248 28.26z"></path>
											<path d="m331.871 253.315c69.858 0 126.69-56.818 126.69-126.658s-56.833-126.657-126.69-126.657-126.69 56.818-126.69 126.658 56.833 126.657 126.69 126.657zm0-223.315c53.316 0 96.691 43.361 96.691 96.658s-43.375 96.658-96.691 96.658c-53.315 0-96.691-43.361-96.691-96.658s43.376-96.658 96.691-96.658z"></path>
											<path
												d="m501.685 287.186c-16.223-20.886-45.511-24.815-66.593-10.189l-57.071 38.181c-7.931-14.767-23.525-24.833-41.43-24.833h-40.711c-20.55-19.274-47.985-30.217-76.283-30.217-21.239 0-41.9 6-59.747 17.352-16.081 10.229-29.235 24.359-38.274 41.041l-7.642 4.673-1.98-5.791c-2.68-7.837-11.204-12.02-19.042-9.342l-82.759 28.279c-7.835 2.677-12.023 11.208-9.343 19.047l50.073 146.462c2.681 7.842 11.208 12.018 19.042 9.342l82.759-28.277c7.391-2.526 12.233-10.593 9.177-19.532l131.321-4.065c35.763-.048 70.059-11.031 99.191-31.766l99.032-70.442c22.704-16.161 27.391-47.909 10.28-69.923zm-427.268 190.767-40.368-118.075 54.371-18.578c5.857 17.132 34.323 100.393 40.368 118.076zm399.597-145.289-99.032 70.442c-24.091 17.147-52.46 26.21-82.038 26.21-.154 0-.31.002-.464.007l-140.773 4.357-27.83-81.403 16.915-10.344c.004-.002.007-.005.011-.008 2.49-1.524 4.437-3.761 5.625-6.182 13.805-28.137 41.842-45.617 73.169-45.617 22.638 0 43.664 9.063 59.205 25.519 2.862 3.032 6.974 4.697 10.905 4.697h46.884c9.372 0 16.996 7.62 16.996 16.987 0 9.269-7.497 16.987-16.996 16.987h-84.629c-8.284 0-14.999 6.716-14.999 15s6.716 15 14.999 15h84.629c12.563 0 24.366-4.892 33.225-13.764 6.198-6.196 10.445-13.818 12.449-22.122l69.621-46.577c.084-.056.167-.113.25-.171 8.21-5.735 19.582-4.174 25.861 3.909 6.621 8.52 4.811 20.814-3.983 27.073z"></path>
										</g>
									</svg>
								</div>
								<div className={styles.featureContent}>
									<h2>{__('Money Management')}</h2>
									<p>{__('The only thing you have to do is to keep your drawdown below 10%.')}</p>
									{/*<ul>*/}
									{/*	<li>{__('Learn to trade stress-free.')}</li>*/}
									{/*	<li>{__('Manage your own trading.')}</li>*/}
									{/*</ul>*/}
								</div>
							</div>
							<div className={styles.featureItem}>
								<div className={styles.featureImg}>
									<svg id="Capa_1" enable-background="new 0 0 512 512"
										 height="512" viewBox="0 0 512 512" width="512"
										 xmlns="http://www.w3.org/2000/svg">
										<g>
											<path
												d="m305.409 125.647 35.082 25.954c3.949 2.921 1.953 9.385-3.04 9.416l-11.009.067c-.011 0-.021 0-.032 0-2.832 0-5.144-2.292-5.162-5.124-.051-8.284-6.803-14.975-15.091-14.907-8.284.051-14.958 6.808-14.908 15.092.099 16.005 10.937 29.469 25.623 33.615v.726c0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15v-.757c5.844-1.62 11.194-4.736 15.57-9.168 6.602-6.686 10.204-15.542 10.139-24.961v-.094c-.075-11.002-5.401-21.478-14.247-28.022l-35.081-25.953c-3.984-2.948-1.891-9.3 3.072-9.3h11.026c2.847 0 5.163 2.313 5.163 5.156 0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15c0-16.085-10.866-29.673-25.641-33.835v-.722c0-8.284-6.716-15-14.999-15s-14.999 6.716-14.999 15v.702c-14.81 4.139-25.71 17.744-25.71 33.855.001 11.095 5.327 21.659 14.248 28.26z"></path>
											<path d="m331.871 253.315c69.858 0 126.69-56.818 126.69-126.658s-56.833-126.657-126.69-126.657-126.69 56.818-126.69 126.658 56.833 126.657 126.69 126.657zm0-223.315c53.316 0 96.691 43.361 96.691 96.658s-43.375 96.658-96.691 96.658c-53.315 0-96.691-43.361-96.691-96.658s43.376-96.658 96.691-96.658z"></path>
											<path
												d="m501.685 287.186c-16.223-20.886-45.511-24.815-66.593-10.189l-57.071 38.181c-7.931-14.767-23.525-24.833-41.43-24.833h-40.711c-20.55-19.274-47.985-30.217-76.283-30.217-21.239 0-41.9 6-59.747 17.352-16.081 10.229-29.235 24.359-38.274 41.041l-7.642 4.673-1.98-5.791c-2.68-7.837-11.204-12.02-19.042-9.342l-82.759 28.279c-7.835 2.677-12.023 11.208-9.343 19.047l50.073 146.462c2.681 7.842 11.208 12.018 19.042 9.342l82.759-28.277c7.391-2.526 12.233-10.593 9.177-19.532l131.321-4.065c35.763-.048 70.059-11.031 99.191-31.766l99.032-70.442c22.704-16.161 27.391-47.909 10.28-69.923zm-427.268 190.767-40.368-118.075 54.371-18.578c5.857 17.132 34.323 100.393 40.368 118.076zm399.597-145.289-99.032 70.442c-24.091 17.147-52.46 26.21-82.038 26.21-.154 0-.31.002-.464.007l-140.773 4.357-27.83-81.403 16.915-10.344c.004-.002.007-.005.011-.008 2.49-1.524 4.437-3.761 5.625-6.182 13.805-28.137 41.842-45.617 73.169-45.617 22.638 0 43.664 9.063 59.205 25.519 2.862 3.032 6.974 4.697 10.905 4.697h46.884c9.372 0 16.996 7.62 16.996 16.987 0 9.269-7.497 16.987-16.996 16.987h-84.629c-8.284 0-14.999 6.716-14.999 15s6.716 15 14.999 15h84.629c12.563 0 24.366-4.892 33.225-13.764 6.198-6.196 10.445-13.818 12.449-22.122l69.621-46.577c.084-.056.167-.113.25-.171 8.21-5.735 19.582-4.174 25.861 3.909 6.621 8.52 4.811 20.814-3.983 27.073z"></path>
										</g>
									</svg>
								</div>
								<div className={styles.featureContent}>
									<h2>{__('Low Risk')}</h2>
									<p>{__('No trader is responsible for loss, but drawdown level must be kept below 10%.')}</p>
									{/*<ul>*/}
									{/*	<li>{__('Trade with the best prices in the market.')}</li>*/}
									{/*	<li>{__('Earn anything you desire anytime.')}</li>*/}
									{/*</ul>*/}
								</div>
							</div>
							<div className={styles.featureItem}>
								<div className={styles.featureImg}>
									<svg id="Capa_1" enable-background="new 0 0 512 512"
										 height="512" viewBox="0 0 512 512" width="512"
										 xmlns="http://www.w3.org/2000/svg">
										<g>
											<path
												d="m305.409 125.647 35.082 25.954c3.949 2.921 1.953 9.385-3.04 9.416l-11.009.067c-.011 0-.021 0-.032 0-2.832 0-5.144-2.292-5.162-5.124-.051-8.284-6.803-14.975-15.091-14.907-8.284.051-14.958 6.808-14.908 15.092.099 16.005 10.937 29.469 25.623 33.615v.726c0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15v-.757c5.844-1.62 11.194-4.736 15.57-9.168 6.602-6.686 10.204-15.542 10.139-24.961v-.094c-.075-11.002-5.401-21.478-14.247-28.022l-35.081-25.953c-3.984-2.948-1.891-9.3 3.072-9.3h11.026c2.847 0 5.163 2.313 5.163 5.156 0 8.284 6.716 15 14.999 15s14.999-6.716 14.999-15c0-16.085-10.866-29.673-25.641-33.835v-.722c0-8.284-6.716-15-14.999-15s-14.999 6.716-14.999 15v.702c-14.81 4.139-25.71 17.744-25.71 33.855.001 11.095 5.327 21.659 14.248 28.26z"></path>
											<path d="m331.871 253.315c69.858 0 126.69-56.818 126.69-126.658s-56.833-126.657-126.69-126.657-126.69 56.818-126.69 126.658 56.833 126.657 126.69 126.657zm0-223.315c53.316 0 96.691 43.361 96.691 96.658s-43.375 96.658-96.691 96.658c-53.315 0-96.691-43.361-96.691-96.658s43.376-96.658 96.691-96.658z"></path>
											<path
												d="m501.685 287.186c-16.223-20.886-45.511-24.815-66.593-10.189l-57.071 38.181c-7.931-14.767-23.525-24.833-41.43-24.833h-40.711c-20.55-19.274-47.985-30.217-76.283-30.217-21.239 0-41.9 6-59.747 17.352-16.081 10.229-29.235 24.359-38.274 41.041l-7.642 4.673-1.98-5.791c-2.68-7.837-11.204-12.02-19.042-9.342l-82.759 28.279c-7.835 2.677-12.023 11.208-9.343 19.047l50.073 146.462c2.681 7.842 11.208 12.018 19.042 9.342l82.759-28.277c7.391-2.526 12.233-10.593 9.177-19.532l131.321-4.065c35.763-.048 70.059-11.031 99.191-31.766l99.032-70.442c22.704-16.161 27.391-47.909 10.28-69.923zm-427.268 190.767-40.368-118.075 54.371-18.578c5.857 17.132 34.323 100.393 40.368 118.076zm399.597-145.289-99.032 70.442c-24.091 17.147-52.46 26.21-82.038 26.21-.154 0-.31.002-.464.007l-140.773 4.357-27.83-81.403 16.915-10.344c.004-.002.007-.005.011-.008 2.49-1.524 4.437-3.761 5.625-6.182 13.805-28.137 41.842-45.617 73.169-45.617 22.638 0 43.664 9.063 59.205 25.519 2.862 3.032 6.974 4.697 10.905 4.697h46.884c9.372 0 16.996 7.62 16.996 16.987 0 9.269-7.497 16.987-16.996 16.987h-84.629c-8.284 0-14.999 6.716-14.999 15s6.716 15 14.999 15h84.629c12.563 0 24.366-4.892 33.225-13.764 6.198-6.196 10.445-13.818 12.449-22.122l69.621-46.577c.084-.056.167-.113.25-.171 8.21-5.735 19.582-4.174 25.861 3.909 6.621 8.52 4.811 20.814-3.983 27.073z"></path>
										</g>
									</svg>
								</div>
								<div className={styles.featureContent}>
									<h2>{__('Lower Commission')}</h2>
									<p>{__('In prop trading accounts, since the broker is your partner, you will pay less commission for trading.')}</p>
									{/*<ul>*/}
									{/*	<li>{__('Trade with the best prices in the market.')}</li>*/}
									{/*	<li>{__('Earn anything you desire anytime.')}</li>*/}
									{/*</ul>*/}
								</div>
							</div>
						</div>
					</Container>
				</div>
			</div>
			<div className={styles.moneyManagerLatest}>
				<Container className={styles.container}>
					<div className={styles.left}>
						<div className={styles.title}>
							<h1>
								<b className={styles.bold}>
									{__('Trading Features')}
								</b>
							</h1>
						</div>
						<div className={styles.content}>
							<table>
								<thead>
								<tr>
									<th>{__('Name of Service')}</th>
									<th>{__('Nitro')}</th>
								</tr>
								</thead>
								<tbody>
								{trading_feature.map((item, index) => {
									return <tr>
										<td>{item["name"]}</td>
										<td>{item["value"]}</td>
									</tr>
								})}
								</tbody>
							</table>
						</div>
					</div>
					<div className={styles.right}>
						<img src={require('./quick-deposit.png').default} alt=""/>
					</div>
				</Container>
			</div>
			<div className={{[styles.bePart]: 1, [styles.bePartFa]: (language === 'fa') ? 1 : 0}.toCss} style={(language === 'fa') ? {padding: '12px 0px'} : {}}>
				<Container className={styles.container}>
					<div className={styles.left}>
						<div className={styles.title}>
							<h2>
								<b className={styles.bold}>
									{__('Withdrawal Conditions')}
								</b>
							</h2>
						</div>
						<div className={styles.content}>
							<div className={styles.item}>
								<p>{__('If the drawdown rule is observed, traders are allowed to withdraw up to 90% of the gained profit.')}</p>
							</div>
						</div>
						<div className={styles.title}>
							<h2>
								<b className={styles.bold}>
									{__('Trading Platform')}
								</b>
							</h2>
						</div>
						<div className={styles.content}>
							<div className={styles.item}>
								<p>{__('MetaTrader 5 is offered as the trading platform in Aron Prop. Aron Groups broker tries to offer the lowest spread and commission available.')}</p>
							</div>
						</div>
					</div>
					<div className={styles.right}>
					</div>
				</Container>
			</div>
			<div className={styles.faq}>
				<Container className={styles.container}>
					<div className={styles.title}>
						<h2 style={{cursor: "pointer"}} onClick={()=> window.open(language === "fa" ? "https://dl.arongroups.co/privacy/NITRO-fa.pdf" : "https://dl.arongroups.co/privacy/NITRO-en.pdf", "_blank")}>
							{__('Prop Nitro Rules')}
						</h2>
						<h2 style={{cursor: "pointer"}} onClick={()=> window.open(language === "fa" ? "https://dl.arongroups.co/privacy/Prop-Pro(fa).pdf" : "https://dl.arongroups.co/privacy/Prop-Pro(en).pdf", "_blank")}>
							{__('Aron 100 Challenge')}
						</h2>
						{/*<h2>*/}
						{/*	<b>{__('Frequently Asked Questions:')}</b>*/}
						{/*</h2>*/}
					</div>
					{/*<div className={styles.faqContentWrapper}>*/}
					{/*	{faqs.map((value, index) => {*/}
					{/*		return <div key={value.id} className={{[styles.faqItem]: 1, [styles.active]: (this.state.faqQueId === index) ? 1 : 0}.toCss}>*/}
					{/*			<div className={styles.faqQuestion} onClick={() => {*/}
					{/*				this.setState({faqQueId: index})*/}
					{/*			}*/}
					{/*			}>*/}
					{/*				<p className={styles.faqItemQuestion}>{value.q}</p>*/}
					{/*				<span className={styles.faqItemIcon}> {(this.state.faqQueId === index) ? '-' : '+'} </span>*/}
					{/*			</div>*/}
					{/*			<div className={styles.faqAnswer}>*/}
					{/*				<p> {value.a} </p>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	})}*/}
					{/*</div>*/}
				</Container>
			</div>
		</div>;
	}
}