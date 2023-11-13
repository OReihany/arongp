import React, {PureComponent} from "react";
import styles from './annotation-manager.module.scss';
import {Container} from "components/container/container";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {I18nService} from "services/i18n-service";


@Observer([])
export class AnnotationManager extends PureComponent {
	@wired i18 = pick(I18nService);

	render() {
		const {__} = this.i18;
		const jobInformation = {
			description: __('Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd Bim. Sylvia wagt quick den Jux bei Pforzheim. Polyfon zwitschernd aßen Mäxchens Vögel Rüben, Joghurt und Quark. "Fix, Schwyz!" quäkt Jürgen blöd vom Paß. Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich. Falsches Üben von Xylophonmusik quält jeden größeren Zwerg. Heizölrückstoßabdämpfung. Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd Bim. Sylvia wagt quick den Jux bei Pforzheim. Polyfon zwitschernd aßen Mäxchens Vögel Rüben, Joghurt und Quark. "Fix, Schwyz!" quäkt Jürgen blöd vom Paß. Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich. Falsches Üben von Xylophonmusik quält jeden größeren Zwerg. Heizölrückstoßabdämpfung.Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd Bim. Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd Bim. Sylvia wagt quick den Jux bei Pforzheim. Polyfon zwitschernd aßen Mäxchens Vögel Rüben, Joghurt und Quark. "Fix, Schwyz!" quäkt Jürgen blöd vom Paß. Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich. Falsches Üben von Xylophonmusik quält jeden größeren Zwerg. Heizölrückstoßabdämpfung. Zwei flinke Boxer'),
			responsibilities: [
				{
					title: __('responsibility1'),
					item: [__('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und')]
				},
				{
					title: __('responsibility2'),
					item: [__('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und')]
				},
				{
					title: __('responsibility3'),
					item: [__('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und')]
				},
			],
			requirement: [
				{
					title: __('skills'),
					item: [__('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und')]
				},
				{
					title: __('skills'),
					item: [__('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und')]
				},
				{
					title: __('skills'),
					item: [__('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und'), __('Zwei flinke Boxer jagen die quirlige Eva und')]
				},
			]
		}
		return <div className={styles.annotationManager}>
			<SocialMedia/>
			<Container className={styles.container}>
				<h4>Annotation Manager</h4>
				<p>
					Koln | Product | Full Time
				</p>
				<div className={styles.information}>
					<p>{jobInformation.description}</p>
					<div className={styles.responsibilities}>
						<p>Responsibilities</p>
						{jobInformation.responsibilities.map( (value, index) =>{
							return <div key={index} className={styles.responsibilitie}>
								<h4>{value.title}</h4>
								{value.item.map( (item, index) => {
									return <p key={index}>{item}</p>
								})}
							</div>
						} )}
					</div>
					<div className={styles.responsibilities}>
						<p>Requirements</p>
						{jobInformation.requirement.map( (value, index) =>{
							return <div key={index} className={styles.responsibilitie}>
								<h4>{value.title}</h4>
								{value.item.map( (item, index) => {
									return <p key={index}>{item}</p>
								})}
							</div>
						} )}
					</div>
				</div>
			</Container>
		</div>;
	}
}