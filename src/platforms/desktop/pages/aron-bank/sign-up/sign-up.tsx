import React, {PureComponent} from "react";
import styles from './sign-up.module.scss';
import {Container} from "components/container/container";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Observer([])
export class SignUp extends PureComponent {
	@wired i18 = pick(I18nService)
	componentDidMount() {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}

	render() {
		const {__} = this.i18
		return <div className={styles.signUp}>
			<Container className={styles.container}>
				<h3 data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">{__('With all these explanations, ask yourself which way is more suitable for investing!')}</h3>
				<p data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
					{__('Those interested in opening an account and depositing in Aron Bank to use the unique profits of Aron Groups broker can apply by clicking on the link below  and after registering, contact support for more information on deposit, withdrawal and more consultation methods.')}
				</p>
				<a data-aos="fade-up" data-aos-offset="100" data-aos-delay="5" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" onClick={()=> window.open('https://my.arongroups.co/register', "_blank")} className={styles.btn}>{__('Sign up')}</a>
			</Container>
		</div>;
	}
}