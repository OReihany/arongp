import React, {PureComponent} from "react";
import styles from './main-banner.module.scss';
import {Observer} from "react-soa/dist/class";
import {I18nService} from "services/i18n-service";
import {pick, wired} from "react-soa";
import {PaginationView} from "components/pagination-view";
import {SocialMedia} from "../common/social-media-wrapper/social-media";
import {HomepageService} from "services/homepage-service";


@Observer([HomepageService])
export class MainBanner extends PureComponent {
	@wired i18 = pick(I18nService);
	@wired homepageService = pick(HomepageService);
	state = {
		page: 0
	}

	render() {
		const media_server = 'https://media.arongroups.co';
		const {language} = this.i18;
		const banners = !!this.homepageService.data ? this.homepageService.data.filter(item => item.showStatus === 0) : [];
		const {page} = this.state;
		return <PaginationView className={styles.pages} onChange={(page) => this.setState({page})} count={banners.length || 1} value={page} renderItem={i => {
			if (!!banners){
				switch (i) {
					case 0:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={0}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 1:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={1}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 2:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={2}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 3:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={3}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 4:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={4}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 5:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={5}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 6:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={6}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 7:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={7}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 8:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={8}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
					case 9:
						return <a href={(language === 'fa' ? banners[i].src_fa : banners[i].src_en)} key={9}>
							<img className={styles.banner} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file2'][0]['filename']}` : `${media_server}/${banners[i]['files']['file1'][0]['filename']}`} alt="banner"/>
							<img className={styles.bannerMobile} src={(language === 'fa') ? `${media_server}/${banners[i]['files']['file4'][0]['filename']}` : `${media_server}/${banners[i]['files']['file3'][0]['filename']}`} alt="banner"/>
						</a>;
				}
			}else {
				return <a href="#" key={100}>
					<img className={styles.banner} src="" alt="banner"/>
					<img className={styles.bannerMobile} src="" alt="banner"/>
				</a>;
			}
		}}>
			<div className={styles.socialMediaContainer}>
				<SocialMedia/>
			</div>
		</PaginationView>
	}

}
