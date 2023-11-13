import React, {PureComponent} from "react";
import styles from './modal.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import ReactPlayer from "react-player";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


export interface ModalProp {
	active: number,
	modal_reset: any,
	title: string,
}


@Observer([])
export class Modal extends PureComponent<ModalProp> {
	@wired i18 = pick(I18nService);
	setClose = () => {
		this.props.modal_reset();
	};

	render() {
		const {__} = this.i18;
		const {active, title} = this.props;
		return <div className={{[styles.modal]: 1, [styles.active]: (active) ? 1 : 0}.toCss}>
			<Container className={styles.container}>
				<div className={styles.modalContent}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.modalContentWrapper}>
						{
							this.props.children
						}
					</div>
				</div>
				<div className={styles.modalFooter}>
					<a onClick={() => this.setClose()} className={styles.closeModal}>{__('Close')}</a>
				</div>
			</Container>
		</div>;
	}
}