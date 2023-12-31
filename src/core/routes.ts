export const Routes = {
	desktop: {
		desktop: () => '/',
		symbols: () => '/instant-price/',
		metaTrader: () => '/meta-trader5/',
		metaTraderMobile: () => '/mobile-meta-trader5/',
		accounts: () => '/accounts/',
		introMetaTrader: () => '/intro-meta-trader/',
		faq: () => '/faq/',
		jobPosition: () => '/job-position/',
		jobPositionDetail: () => '/job-position-detail/',
		about: () => '/about-us/',
		aronBank: () => '/aron-bank/',
		prize: () => '/prize/',
		webinar: () => '/webinar/',
		webinarInside: () => '/webinar-inside/:id',
		contactUs: () => '/contact-us/',
		jobPositionList: () => '/job-position-list/',
		introducingBroker: () => '/introducing-broker/',
		ib: () => '/ib/',
		cryptoLoan: () => '/crypto-loan/',
		aronBonus: () => '/aron-bonus/',
		aronGuide: () => '/aron-guide/',
		depositWithdrawal: () => '/deposit-withdrawal/',
		contractSpecification: () => '/trading-symbols/',
		// economicCalendar: () => '/economic-calendar/',
		forexTools: () => '/forex-tools/',
		investmentFund: () => '/investment-fund/',
		whyAronGroups: () => '/why-aron-groups/',
		competition: () => '/competition/',
		aronAnniversary: () => '/aron-anniversary/',
		zuluTrading: () => '/social-trading/',
		pamm: () => '/pamm/',
		prop: () => '/prop/',
		signup: () => '/signup/',
		login: () => '/login/',
		notFound: () => '/not-found/',
		customerSatisfaction: () => '/customers-satisfaction/',
		vip: () => '/vip/',
		// football: () => '/football/',
		aronVipOffer: () => '/aron-vip-offer/:id',
		siteMap: () => '/sitemap/'
	},
	dashboard: {
		dashboard: () => '/dashboard/',
		account: () => '/dashboard/account',
		depositWithdrawal: () => '/dashboard/deposit-withdrawal',
		bounce: () => '/dashboard/bounce',
		tradingSymbol: () => '/dashboard/trading-symbol',
		setting: () => '/dashboard/setting',
		faq: () => '/dashboard/faq',
		yalda: () => '/dashboard/yalda',
		admin: () => '/dashboard/admin',
		comment: () => '/dashboard/comment/',
		login: () => '/dashboard/login/',
	},
	library: {
		library: () => '/library/',
		login: () => '/library/login/',
	},
	shop: {
		shop: () => '/shop/',
		login: () => '/shop/login/',
	},
};