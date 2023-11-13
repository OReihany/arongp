import React, {PureComponent} from 'react';
import reactDom from 'react-dom';

function checkWindow() {
	return typeof window !== 'undefined';
}

export interface PortalProps {
	selector: () => HTMLElement;
	didMount?: (element?: HTMLElement) => any;
	willUnmount?: () => any;
}

export class Portal extends PureComponent<PortalProps> {
	private target?: HTMLElement = undefined;

	componentDidMount(): void {
		if (!checkWindow()) {
			console.error('popup', 'window not found');
			return;
		}
		const {selector, didMount} = this.props;
		this.target = selector();
		if (this.target) {
			this.forceUpdate(() => {
				if (didMount) {
					didMount(this.target);
				}
			});
		}
	}

	componentWillUnmount(): void {
		if (this.target) {
			const {willUnmount} = this.props;
			if (willUnmount) {
				willUnmount();
			}
			this.target = undefined;
		}
	}

	render(): React.ReactNode {
		const {children} = this.props;
		if (!this.target) return null;
		return reactDom.createPortal(children, this.target);
	}
}
