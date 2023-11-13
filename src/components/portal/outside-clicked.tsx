import React from 'react';
import * as ReactDOM from 'react-dom';

export class OutsideClicked extends React.Component<{
	disabled?: boolean;
	onClick?: (e: MouseEvent) => any;
	bindings?: React.ReactInstance[];
}, any> {
	componentDidMount() {
		if (this.props.onClick) {
			document.addEventListener('mousedown', this.handleClick, false);
		}
	}

	componentWillUnmount() {
		if (this.props.onClick) {
			document.removeEventListener('mousedown', this.handleClick, false);
		}
	}

	handleClick = (e: any) => {
		if (this.props.disabled) {
			return;
		}
		const base = ReactDOM.findDOMNode(this);
		if (base) {
			let go = false;
			if (this.props.bindings) {
				for (const bind of this.props.bindings) {
					if (!bind) continue;
					const other = ReactDOM.findDOMNode(bind);
					if (other && other.contains(e.target)) {
						go = true;
						break;
					}
				}
			}
			if (base.contains(e.target) || go) {
				return;
			}
			if (this.props.onClick) {
				this.props.onClick(e);
			}
		}
	};

	render(): React.ReactNode {
		return this.props.children;
	}
}