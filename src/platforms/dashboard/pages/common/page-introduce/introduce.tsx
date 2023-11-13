import React, {PureComponent} from "react";
import styles from './introduce.module.scss';
import {Container} from "components/container/container";


export interface introProps {
	title: string,
}

export class Introduce extends PureComponent<introProps>{

	render() {
		const {title} = this.props;
		return <div className={styles.introduce}>
			<Container className={styles.container}>
				<h1>
					{
						title
					}
				</h1>
			</Container>
		</div>;
	}
}