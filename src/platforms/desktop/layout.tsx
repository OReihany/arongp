import React, {useEffect} from 'react'
import { initGA, logPageView } from '../../analytics'
import ReactGA from 'react-ga';
import {withRouter} from "react-router-dom";

ReactGA.initialize('UA-184416137-1');

export const Layout = (props) => {
	useEffect(()=> {
		//@ts-ignore
		if (!window.GA_INITIALIZED) {
			// initGA()
			//@ts-ignore
			window.GA_INITIALIZED = true
		}
		logPageView();
	})
	return (
		<div>
			{props.children}
		</div>
	)
}

export default withRouter(Layout);