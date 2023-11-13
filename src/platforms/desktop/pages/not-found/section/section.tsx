import React, {PureComponent} from "react";
import styles from './section.module.scss';
import {Container} from "components/container/container";
import {Link} from "react-router-dom";
import {Routes} from "core/routes";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class Section extends PureComponent{
	@wired i18 = pick(I18nService);
	render() {
		const {__, getRoute} = this.i18;
		return <div>
			<div className={styles.notFoundWrapper}>
				<Container className={styles.container}>
					<div className={styles.not404}>
						<div className={styles.notFound}>
							<h1>404</h1>
							<h2>{__('Sorry Page Was Not Found!')}</h2>
							<p>
								{__('The page you are looking is not available or has been removed. Try going to Home Page by using the button below.')}
							</p>
							<div className={styles.btnGroup}>
								<Link to={getRoute(Routes.desktop.desktop())}>{__('Back To Home')}</Link>
								<Link to={getRoute(Routes.desktop.contactUs())}>{__('Contact Us')}</Link>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</div>
	}
}