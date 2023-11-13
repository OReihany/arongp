import React, {PureComponent} from "react";
import styles from './faq-mange.module.scss';
import {Container} from "components/container/container";
import {Modal} from "../../common/modal/modal";
import {toast} from "react-toastify";
import {Observer} from "react-soa/dist/class";
import {pick, wired} from "react-soa";
import {FaqService} from "services/faq";
import {stat} from "fs";


@Observer([FaqService])
export class FaqMange extends PureComponent {

	@wired faqService = pick(FaqService);

	state = {
		modalSet: 0,
		title: {fa: '', en: ''},
		categories: [{title: {fa: '', en: ''}, _id: '', subCategory: [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}]}],
		category: {title: {fa: '', en: ''}, _id: '', subCategory: [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}]},
		subCategory: [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}],
		subCategoryTitle: {fa: '', en: ''},
		qa: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}],
		_id: '',
		submitMode: 0
	}

	editCategory = async (index) => {
		const category = this.state.categories[index] || {title: {fa: '', en: ''}, _id: '', subCategory: [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}]};
		this.setState({submitMode: 1, title: category.title, category, modalSet: 1, _id: category._id, subCategory: category.subCategory});
	}

	deleteCategory = async (index) => {
		const category = this.state.categories[index];
		this.resetModal(1, 2);
		this.setState({_id: category._id});
	}

	componentDidMount() {
		let mont = true;
		if (mont) {
			this.faqService.categories().then((data) => {
				return this.setState({categories: data});
			})
			mont = false;
		}
	}

	removeSubCategory = (subCategoryIndex) => {
		let newSubCategory = this.state.subCategory.filter((item, index) => subCategoryIndex !== index);
		let newCategories = this.state.categories.map((item) => {
				if (item._id === this.state._id) {
					item.subCategory = newSubCategory;
				}
				return item
			}
		);
		let newCategory = {title: this.state.category.title, _id: this.state._id, subCategory: newSubCategory};
		this.setState({subCategory: newSubCategory, categories: newCategories, category: newCategory});
	}

	removeFaq = (subCategoryIndex, faqIndex) => {
		let newSubCategory = this.state.subCategory.map((item, index) => {
			if (subCategoryIndex === index) {
				item.faq = item.faq.filter((item, idx) => idx !== faqIndex);
			}
			return item
		});
		let newCategories = this.state.categories.map((item) => {
				if (item._id === this.state._id) {
					item.subCategory = newSubCategory;
				}
				return item
			}
		);
		let newCategory = {title: this.state.category.title, _id: this.state._id, subCategory: newSubCategory};
		this.setState({subCategory: newSubCategory, categories: newCategories, category: newCategory});
	}

	createNewSubCategory = () => {
		let newSubCategory = [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}, ...this.state.category.subCategory];
		let newCategories = this.state.categories.map((item) => {
				if (item._id === this.state._id) {
					item.subCategory = newSubCategory;
				}
				return item
			}
		);
		let newCategory = {title: this.state.category.title, _id: this.state._id, subCategory: newSubCategory};
		this.setState({subCategory: newSubCategory, categories: newCategories, category: newCategory});
	}

	createNewFaq = (subCategoryIndex) => {
		let newSubCategory = this.state.subCategory.map((item, index) => {
			if (subCategoryIndex === index) {
				item.faq = [{q_fa: '', a_fa: '', q_en: '', a_en: ''}, ...item.faq]
			}
			return item;
		});
		let newCategories = this.state.categories.map((item) => {
				if (item._id === this.state._id) {
					item.subCategory = newSubCategory;
				}
				return item
			}
		);
		let newCategory = {title: this.state.category.title, _id: this.state._id, subCategory: newSubCategory};
		this.setState({subCategory: newSubCategory, categories: newCategories, category: newCategory});
	}

	categoryTitle = (title, state) => {
		let newCategories = this.state.categories.map((item) => {
				if (item._id === this.state._id) {
					item.title[state] = title
				}
				return item
			}
		);
		let newTitle = this.state.title;
		newTitle[state] = title;
		let newCategory = this.state.category;
		newCategory.title = newTitle;
		this.setState({categories: newCategories, category: newCategory});
	}

	subCategoryTitle = (subCategoryIndex, title, state) => {
		let newSubCategory = this.state.subCategory.map((item, index) => {
			if (subCategoryIndex === index) {
				if (state === 0) {
					item.title.fa = title;
				} else {
					item.title.en = title;
				}
			}
			return item
		});
		let newCategories = this.state.categories.map((item) => {
				if (item._id === this.state._id) {
					item.subCategory = newSubCategory;
				}
				return item
			}
		);
		let newCategory = {title: this.state.category.title, _id: this.state._id, subCategory: newSubCategory};
		this.setState({subCategory: newSubCategory, categories: newCategories, category: newCategory});
	}

	faqEdit = (subCategoryIndex, faqIndex, title, state) => {
		let newSubCategory = this.state.subCategory.map((item, index) => {
			if (subCategoryIndex === index) {
				item.faq = item.faq.map((value, idx) => {
					if (faqIndex === idx) {
						if (state === 0) {
							value.q_fa = title;
						} else if (state === 1) {
							value.q_en = title;
						} else if (state === 2) {
							value.a_fa = title;
						} else {
							value.a_en = title;
						}
					}
					return value
				})
			}
			return item
		});
		let newCategories = this.state.categories.map((item) => {
				if (item._id === this.state._id) {
					item.subCategory = newSubCategory;
				}
				return item
			}
		);
		let newCategory = {title: this.state.category.title, _id: this.state._id, subCategory: newSubCategory};
		this.setState({subCategory: newSubCategory, categories: newCategories, category: newCategory});
	}

	resetModal = (modalSet, submitMode) => {
		this.setState({
			modalSet: modalSet,
			title: {fa: '', en: ''},
			categories: [{title: {fa: '', en: ''}, _id: '', subCategory: [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}]}],
			category: {title: {fa: '', en: ''}, _id: '', subCategory: [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}]},
			subCategory: [{title: {fa: '', en: ''}, faq: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}]}],
			subCategoryTitle: {fa: '', en: ''},
			qa: [{q_fa: '', a_fa: '', q_en: '', a_en: ''}],
			_id: '',
			submitMode: submitMode
		});
	}

	resetModalMain = () => {
		this.setState({
			modalSet: 0,
		});
	}

	modalData = () => {
		const {
			title,
			submitMode,
			subCategory
		} = this.state;
		return <div className={styles.modalContent}>
			<Container className={styles.modalContainer}>
				{
					(submitMode !== 2) ?
						<form id="create-faq" onSubmit={(e) => this.formSubmit(e)}>
							<div className={styles.textFiled}>
								<p>عنوان (fa): </p>
								<input type="text" onChange={(e) => this.categoryTitle(e.target.value, 'fa')} value={title.fa}/>
							</div>
							<div className={styles.textFiled}>
								<p>عنوان (en): </p>
								<input type="text" onChange={(e) => this.categoryTitle(e.target.value, 'en')} value={title.en}/>
							</div>
							<div className={styles.createNew}>
								<a onClick={() => this.createNewSubCategory()}>ایجاد زیر دسته جدید</a>
							</div>
							{
								subCategory.map((value, index) => {
									return <div className={styles.subCategory}>
										<div className={styles.subCategoryTitle}>
											<div className={styles.textFiledSub}>
												<p>عنوان زیر دسته (fa): </p>
												<input type="text" onChange={(e) => this.subCategoryTitle(index, e.target.value, 0)} value={value.title.fa}/>
											</div>
											<div className={styles.textFiledSub}>
												<p>عنوان زیر دسته (en): </p>
												<input type="text" onChange={(e) => this.subCategoryTitle(index, e.target.value, 1)} value={value.title.en}/>
											</div>
											<div className={styles.deleteSubCat}>
												<span className="material-icons" onClick={() => this.removeSubCategory(index)}>close</span>
											</div>
										</div>
										<div className={styles.createNewFaq}>
											<a onClick={() => this.createNewFaq(index)}>ایجاد سوال جدید</a>
										</div>
										<div className={styles.subCategoryFaq}>
											{
												value.faq.map((item, i) => {
													return <div className={styles.faq}>
														<div className={styles.faqContent}>
															<div className={styles.textFiledFaq}>
																<p>سوال (fa): </p>
																<input type="text" value={item.q_fa} onChange={(e) => this.faqEdit(index, i, e.target.value, 0)}/>
															</div>
															<div className={styles.textFiledFaq}>
																<p>سوال (en): </p>
																<input type="text" value={item.q_en} onChange={(e) => this.faqEdit(index, i, e.target.value, 1)}/>
															</div>
															<div className={styles.textFiledFaq}>
																<p>پاسخ (fa): </p>
																<input type="text" value={item.a_fa} onChange={(e) => this.faqEdit(index, i, e.target.value, 2)}/>
															</div>
															<div className={styles.textFiledFaq}>
																<p>پاسخ (en): </p>
																<input type="text" value={item.a_en} onChange={(e) => this.faqEdit(index, i, e.target.value, 3)}/>
															</div>
														</div>
														<div className={styles.deleteSubCat}>
															<span className="material-icons" onClick={() => this.removeFaq(index, i)}>close</span>
														</div>
													</div>
												})
											}
										</div>
									</div>
								})
							}
							<div className={styles.btnSubmit}>
								<button className={styles.btn} type="submit">{(submitMode === 0) ? 'بارگذاری' : 'ویرایش'}</button>
							</div>
						</form> :
						<form id="create-faq" onSubmit={(e) => this.formSubmit(e)}>
							<div className={styles.deleteModal}>
								<div className={styles.content}>
									<p>آیا از حذف این ادمین مطمئن هستید؟</p>
								</div>
								<div className={styles.btnSubmit}>
									<button className={styles.btn} onClick={(e) => this.setState({modalSet: 0})}>خیر</button>
									<button className={styles.btn} onClick={(e) => this.setState({modalSet: 0, submitMode: 2})} type="submit"> بلی</button>
								</div>
							</div>
						</form>
				}
			</Container>
		</div>
	}

	formSubmit = async (e) => {
		e.preventDefault();
		const {_id, category, submitMode} = this.state;
		try {
			let res = {};
			if (submitMode === 0) {
				res = await this.faqService.createCategory({title: category.title, subCategory: category.subCategory});
			} else if (submitMode === 1) {
				res = await this.faqService.editCategory(category);
			} else {
				res = await this.faqService.deleteCategory({_id: _id});
				let newCategories = this.state.categories.filter((item) => item._id !== _id);
				this.setState({categories: newCategories});
			}
			this.setState({modalSet: 0})
			if (res['status'] === 201) {
				toast.success(res['message'], {
					position: "top-right",
					closeOnClick: true
				});
			} else {
				toast.error(res['message'], {
					position: "top-right",
					closeOnClick: true
				})
			}
		} catch (e) {
			toast.error('ادمین محترم مشکل رخ داده مجددا تلاش نمایید.', {
				position: "top-right",
				closeOnClick: true
			})
		}

	}

	render() {
		const {categories} = this.state;
		return <div className={styles.mainBanner}>
			<Modal modal_reset={this.resetModalMain} active={this.state.modalSet} title="ایجاد دسته بندی جدید">
				{
					this.modalData()
				}
			</Modal>
			<Container className={styles.container}>
				<div className={styles.createNew}>
					<a onClick={() => this.setState({modalSet: 1, submitMode: 0})}>ایجاد دسته جدید</a>
				</div>
				<div className={styles.tableMainBanner}>
					<table className={styles.table}>
						<thead>
						<tr>
							<th>ردیف</th>
							<th>دسته</th>
							<th>category</th>
							<th>ویرایش</th>
							<th>حذف</th>
						</tr>
						</thead>
						<tbody>
						{
							categories.map((item, index) => {
								return <tr key={index}>
									<td>{index + 1}</td>
									<td>{item.title.fa}</td>
									<td>{item.title.en}</td>
									<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.editCategory(index)}>edit</span></td>
									<td><span style={{cursor: "pointer"}} className='material-icons' onClick={() => this.deleteCategory(index)}>remove_circle</span></td>
								</tr>
							})
						}
						</tbody>
					</table>
				</div>
			</Container>

		</div>
	}
}