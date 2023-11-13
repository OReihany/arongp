import React, {PureComponent} from "react";
import styles from './annotation-manager.module.scss';
import {Container} from "components/container/container";
import {SocialMedia} from "../../common/social-media-wrapper/social-media";

export class AnnotationManager extends PureComponent {
	render() {
		return <div className={styles.annotationManager}>
			<SocialMedia/>
			<Container className={styles.container}>
				<h4>Annotation Manager</h4>
				<p>
					Koln | Product | Full Time
				</p>
				<div className={styles.information}>
					<h5>Personal Information</h5>
					<div className={styles.inputGroup}>
						<div className={styles.inputFiled}>
							<input type="text" name="first-name" placeholder="First Name"/>
						</div>
						<div className={styles.inputFiled}>
							<input type="text" name="last-name" placeholder="Last Name"/>
						</div>
					</div>
					<div className={styles.inputGroup}>
						<div className={styles.inputFiled}>
							<input type="text" name="email" placeholder="Email"/>
						</div>
						<div className={styles.inputFiled}>
							<input type="text" name="phone-number" placeholder="Phone Number"/>
						</div>
					</div>
					<h5>Photo (<span>optional</span>)</h5>
					<div className={styles.inputGroupFile}>
						<label className={styles.file}>
							<input type="file" className={styles.inputFile} aria-label="File browser example" />
								<span className={styles.customFile}>
									Choose File
								</span>
						</label>
					</div>
					<h5>Profile </h5>
					<div className={styles.inputFieldMax}>
						<p>Summary</p>
						<input type="text" name="summary-profile"/>
					</div>
					<div className={styles.inputGroupFile}>
						<p>Summary</p>
						<label className={styles.file}>
							<input type="file" className={styles.inputFile} aria-label="File browser example" />
							<span className={styles.customFile}>
									Choose File
								</span>
						</label>
					</div>
					<div className={styles.inputFieldMax}>
						<p>Cover Letter</p>
						<input type="text" name="cover-letter"/>
					</div>
					<div className={styles.submit}>
						<button className={styles.btn}>SUBMIT</button>
					</div>
				</div>
			</Container>
		</div>;
	}
}