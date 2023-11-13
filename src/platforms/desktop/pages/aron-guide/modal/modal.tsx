import React, {PureComponent} from "react";
import styles from './modal.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";
import ReactPlayer from "react-player";


export interface ModalProp {
	active: number,
	modal_reset: any
}

@Observer([])
export class Modal extends PureComponent<ModalProp>{
	@wired i18 = pick(I18nService);
	setClose = () => {
		this.props.modal_reset();
	};
	render() {
		const {__, language} = this.i18;
		const {active} = this.props;
		return <div className={{[styles.modal] : 1, [styles.active] : (active) ? 1 : 0}.toCss}>
			<Container className={styles.container}>
				<div className={styles.modalContent}>
					<h3 className={styles.title}>{__("How to Registration in Aron Groups")}</h3>
					<div className={styles.modalContentWrapper}>
						<ReactPlayer
							url="https://dl.arongroups.co/academy/arongroups_int/reg_in_AGB.mp4"
							width='100%'
							height='100%'
							controls={true}
							config={{
								file: {
									attributes: {
										preload: 'none'
									}
								}
							}}
						/>
					</div>
				</div>
				<div className={styles.modalFooter}>
					<a onClick={() => this.setClose()} className={styles.closeModal}>{__('Close')}</a>
				</div>
			</Container>
		</div>;
	}
}