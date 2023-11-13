import styles from './container.module.scss'
import React from "react";

export function Container(props: {children?: any, className?: string}) {
	return <div className={{[styles.container]: 1, [props.className]: 1}.toCss}>
		{props.children}
	</div>
}