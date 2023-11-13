import React, {PureComponent} from "react";
import styles from './modal.module.scss';
import {Observer} from "react-soa/dist/class";
import {Container} from "components/container/container";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


export interface ModalProp {
	modal_data: any,
	title: string,
	active: number,
	close: number,
	modal_reset: any
}

@Observer([])
export class Modal extends PureComponent<ModalProp> {
	@wired i18 = pick(I18nService);
	setClose = () => {
		this.props.modal_reset();
	};

	render() {
		const {__, language} = this.i18;
		const {modal_data, title, active} = this.props;
		return <div className={{[styles.modal]: 1, [styles.active]: (active) ? 1 : 0}.toCss}>
			<Container className={styles.container}>
				<div className={styles.modalContent}>
					<h4 className={styles.title}>{title}</h4>
					<div className={styles.modalContentWrapper}>
						{
							modal_data.map((item, index) => {
								if (item.title_en === 'image') {
									return <div key={index} className={{[styles.content]: 1, [styles.contentImage]: 1}.toCss}>
										<img src={item[`description_${language}`]} alt=""/>
									</div>
								} else {
									return <div key={index} className={styles.content}>
										{(item.title_en || item.title_fa) ? <h5>{(language === 'fa') ? item.title_fa : item.title_en}</h5> : ''}
										{(item.description_en || item.description_fa) ? <p>{(language === 'fa') ? item.description_fa : item.description_en}</p> : ''}
									</div>
								}
							})
						}
					</div>
				</div>
				<div className={styles.modalFooter}>
					<a onClick={() => this.setClose()} className={styles.closeModal}>{__('Close')}</a>
					{
						(title === 'Valentine Contest' || title === '2*50% - Welcome and Infinity Bonus') ? <a onClick={() => window.open('https://client.arongroups.co/login', "_blank")} className={styles.registerModal}>{__('Register')}</a> : ''
					}
				</div>
			</Container>
		</div>;
	}
}
