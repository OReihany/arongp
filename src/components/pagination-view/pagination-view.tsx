import './pagination-view.scss';
import React, {createRef, PureComponent} from 'react';



const range = (size: number) => Array.apply(null, Array(size)).map((a, i) => i);

export interface IPaginationViewProps {
	count: number;
	renderItem: (index: number, max: number) => any;
	className?: string;
	value: number;
	offset?: number;
	onChange: (value: number) => any;
	onMove?: (value: number) => any;
	noBullets?: boolean;
	lock?: boolean;
}

interface IPaginationViewState {
	scrollDiff: number;
	lazyOffset: number;
	offsetFromRight: number;
	offset: number;
}

export class PaginationView extends PureComponent<IPaginationViewProps, IPaginationViewState> {
	static defaultProps = {
		offset: 4,
	};
	state: IPaginationViewState = {
		scrollDiff: 0,
		lazyOffset: 0,
		offsetFromRight: 0,
		offset: 0,
	};
	private wrapper = createRef<HTMLDivElement>();
	private lastTouch: number = 0;
	private posInitial: number = 0;
	private pressed: boolean = false;
	private itemWidth: number = 0;
	private diff: number = 0;
	private base = createRef<HTMLDivElement>();

	private rtl = typeof window !== 'undefined' &&
		window.document.documentElement.getAttribute('dir') === 'rtl';

	private getX = (e: any) => (e.touches && e.touches[0] && e.touches[0].clientX) || e.clientX;

	private init = () => {
		const element = this.base.current as HTMLElement;
		const bnd = element.getBoundingClientRect();
		this.itemWidth = bnd.width;
		element.querySelectorAll('.view-content').forEach((a: any) => {
			a.style.width = (this.itemWidth * this.props.count) + 'px';
		});
		element.querySelectorAll('.view-item').forEach((a: any) => {
			a.style.width = this.itemWidth + 'px';
			if (this.rtl) {
				// a.style.right = (this.itemWidth * +a.getAttribute('data-index')) + 'px';
			} else {
				// a.style.left = (this.itemWidth * +a.getAttribute('data-index')) + 'px';
			}
		})
	};
	private mouseDown = (e: any) => {
		if (!this.base.current?.contains(e.target) || this.props.lock) {
			return;
		}
		this.lastTouch = this.getX(e);
		this.posInitial = -this.props.value;
		this.pressed = true;
		this.diff = 0;
		this.wrapper.current?.classList.remove('shifting');
	};
	private mouseDrag = (e: any) => {
		if (this.pressed) {
			const element = this.wrapper.current;
			if (element) {
				const x = this.getX(e);
				this.diff = this.lastTouch - x;
				const vary = this.diff / this.itemWidth;
				if (this.props.onMove) {
					this.props.onMove(this.props.value + vary);
				}
				if (this.rtl) {
					element.style.marginRight = `${(-this.props.value + vary) * this.itemWidth}px`;
				} else {
					element.style.marginLeft = `${(-this.props.value - vary) * this.itemWidth}px`;
				}
			}
		}
	};
	private mouseUp = () => {
		if (this.props.lock || !this.pressed) {
			return;
		}
		this.init();
		const {count} = this.props;
		let value = -this.props.value;
		this.pressed = false;
		const element = this.wrapper.current;
		if (element) {
			const vary = this.diff / this.itemWidth;
			const dist = Math.abs(vary);
			if (dist > .2) {
				value += (this.rtl ? 1 : -1) * Math.sign(vary) * Math.ceil(dist);
				if (value > 0) {
					value = 0;
				}
				if (value < 1 - count) {
					value = 1 - count;
				}
			}
			element.classList.add('shifting');
			if (this.rtl) {
				element.style.marginRight = `${value * this.itemWidth}px`;
			} else {
				element.style.marginLeft = `${value * this.itemWidth}px`;
			}
			if (this.props.onMove) {
				this.props.onMove(-value);
			}
			this.props.onChange(-value);
		}
	};

	componentDidUpdate() {
		this.init();
	}

	componentDidMount(): void {
		window.addEventListener('touchstart', this.mouseDown);
		window.addEventListener('touchmove', this.mouseDrag);
		window.addEventListener('touchcancel', this.mouseUp);
		window.addEventListener('touchend', this.mouseUp);
		window.addEventListener('mousedown', this.mouseDown);
		window.addEventListener('mousemove', this.mouseDrag);
		window.addEventListener('mouseup', this.mouseUp);
		window.addEventListener('mouseleave', this.mouseUp);
		this.init();
		const elm = this.wrapper.current;
		if (elm) {
			if (this.rtl) {
				elm.style.marginRight = `${-this.props.value * this.itemWidth}px`;
			} else {
				elm.style.marginLeft = `${-this.props.value * this.itemWidth}px`;
			}
		}
	}

	componentWillUnmount(): void {
		window.removeEventListener('touchstart', this.mouseDown);
		window.removeEventListener('touchmove', this.mouseDrag);
		window.removeEventListener('touchcancel', this.mouseUp);
		window.removeEventListener('touchend', this.mouseUp);
		window.removeEventListener('mousedown', this.mouseDown);
		window.removeEventListener('mousemove', this.mouseDrag);
		window.removeEventListener('mouseup', this.mouseUp);
		window.removeEventListener('mouseleave', this.mouseUp);
	}

	UNSAFE_componentWillReceiveProps(nextProps: Readonly<IPaginationViewProps>, nextContext: any): void {
		if (typeof nextProps.value !== 'undefined') {
			if (this.props.value !== nextProps.value) {
				const element = this.wrapper.current;
				if (element) {
					element.classList.add('shifting');
					if (this.rtl) {
						element.style.marginRight = `${-nextProps.value * this.itemWidth}px`;
					} else {
						element.style.marginLeft = `${-nextProps.value * this.itemWidth}px`;
					}
				}
			}
		}
	}

	render() {
		const {count, className, noBullets, renderItem, offset = 4} = this.props;
		const off = this.props.value;
		return (
			<div ref={this.base}
				 className={`component--pagination-view ${this.rtl ? 'reverse' : ''} ${className || ''}`}>
				<div
					ref={this.wrapper}
					className="view-content"
					style={{width: this.itemWidth ? (this.itemWidth * count) : 'auto'}}
				>
					{range(count).map(i => {
						return (
							<div
								key={i}
								data-index={i}
								className={`view-item ${off === i - 1 ? 'next' : ''} ${off === i ? 'active' : ''} ${off === i + 1 ? 'previous' : ''}`}
								style={{
									width: this.itemWidth,
									left: 0,
									right: 0,
								}}
							>
								{range(offset * 2 + 1).map(j => j + off - offset).indexOf(i) > -1 && renderItem(i, count)}
							</div>
						);
					})}
				</div>
				{!noBullets && (
					<div className="bullet-wrapper">
						{range(count).map((i) => (
							<div
								key={i}
								className={`bullet-item ${i === off ? 'active' : ''}`}
								onClick={() => this.props.onChange(i)}
							/>
						))}
					</div>
				)}
				{this.props.children}
			</div>
		);
	}
}
