import React, {PureComponent} from "react";
import styles from './description-crypto.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {Container} from "components/container/container";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class DescriptionCrypto extends PureComponent {
	@wired i18 = pick(I18nService);
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.tradingPlatform}>
			<Container className={styles.container}>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('Cryptocurrencies has enjoyed rising popularity and mainstream adoption around the world. If you aren’t after speculating, pledge your cryptocurrencies in Aron Groups Broker and borrow up to 50% of your portfolio value.')}
				</p>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('One of the most exciting advantages of crypto loan is being free of interest rate and any central authority intervening. As in conventional banks, clients are allowed to acquire loans, it’s also possible to do the same in the crypto world. The main difference between these two kind of loans is that crypto loans are easily accessible and allows crypto holders to use the liquidity of their encrypted assets without selling them')}
				</p>
			</Container>
		</div>
	}

}
