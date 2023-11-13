import React, {PureComponent} from "react";
import styles from './modal.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import ReactPlayer from "react-player";
import {SettingService} from "services/setting";
const media_server = 'https://media.arongroups.co';

export interface ModalProp {
	active: number,
	modal_reset: any
}

@Observer([SettingService])
export class Modal extends PureComponent<ModalProp> {
	@wired i18 = pick(I18nService);
	@wired settingService = pick(SettingService);
	setClose = () => {
		this.props.modal_reset();
	};

	render() {
		const {__, language} = this.i18;
		const {active} = this.props;
		const settings = this.settingService.data;
		return <div className={{[styles.modal]: 1, [styles.active]: (active) ? 1 : 0}.toCss}>
			<Container className={styles.container}>
				<div className={styles.modalContent}>
					<div className={styles.modalContent}>
						<h3 className={styles.title}>{__("Month Forex Holiday")}</h3>
						<div className={styles.modalContentWrapper}>
							<img src={(language === 'fa') ? `${media_server}/${settings['files']['file4'][0]['filename']}` : `${media_server}/${settings['files']['file5'][0]['filename']}`} alt=""/>
						</div>
					</div>
				</div>
				<div className={styles.modalFooter}>
					<a onClick={() => this.setClose()} className={styles.closeModal}>{__('Close')}</a>
				</div>
			</Container>
		</div>;
	}
}