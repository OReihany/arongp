import React, {useEffect, useState} from "react";
import styles from './features.module.scss';
import {Container} from "components/container/container";
import {toast} from "react-toastify";
import {useService} from "react-soa/dist/hook";
import {SettingService} from "services/setting";
const media_server = 'https://media.arongroups.co';

export const Features = () => {
	const [telegram, setTelegram] = useState('');
	const [telegramFa, setTelegramFa] = useState('');
	const [telegramAdmin, setTelegramAdmin] = useState('');
	const [telegramAcademy, setTelegramAcademy] = useState('');
	const [aparat, setAparat] = useState('');
	const [aparatFa, setAparatFa] = useState('');
	const [youtube, setYoutube] = useState('');
	const [youtubeFa, setYoutubeFa] = useState('');
	const [facebook, setFacebook] = useState('');
	const [facebookFa, setFacebookFa] = useState('');
	const [phone, setPhone] = useState('');
	const [whatsApp, setWhatsApp] = useState('');
	const [whatsAppAdmin, setWhatsAppAdmin] = useState('');
	const [instagram, setInstagram] = useState('');
	const [instagramFa, setInstagramFa] = useState('');
	const [linkedIn, setLinkedIn] = useState('');
	const [linkedInFa, setLinkedInFa] = useState('');
	const [twitter, setTwitter] = useState('');
	const [twitterFa, setTwitterFa] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [file1, setFile1] = useState(null);
	const [fileName1, setFileName1] = useState('');
	const [file2, setFile2] = useState(null);
	const [fileName2, setFileName2] = useState('');
	const [file3, setFile3] = useState(null);
	const [fileName3, setFileName3] = useState('');
	const [file4, setFile4] = useState(null);
	const [fileName4, setFileName4] = useState('');
	const [file5, setFile5] = useState(null);
	const [fileName5, setFileName5] = useState('');
	const [files, setFiles] = useState([]);
	const changePic = (e, name) => {
		const file = e.target.files[0];
		if (file.type.startsWith('image')) {
			if (file.size / (1024 * 1024) < 1) {
				e.target.parentElement.setAttribute('data-text', e.target.value.replace(/.*(\/|\\)/, ''));
				(name === 1) ? setFile1(file) : (name === 2) ? setFile2(file) : (name === 3) ? setFile3(file): (name === 4) ? setFile4(file) : setFile5(file);
				(name === 1) ? setFileName1(file.name) : (name === 2) ? setFileName2(file.name) : (name === 3) ? setFileName3(file.name) :
					(name === 4) ? setFileName4(file.name) : setFileName5(file.name) ;
			} else {
				toast.warning('سایز عکس نمی تواند از یک مگا بایت بیشتر باشد.', {
					position: "top-right",
					closeOnClick: true
				})
			}
		} else {
			toast.error('تنها مجاز به ارسال عکس می باشید.', {
				position: "top-right",
				closeOnClick: true
			})
		}

	}
	const settingService = useService(SettingService);
	const formSubmit = async () => {
		const formData: FormData = new FormData();
		if (file1)
			formData.append("file1", file1, `${Date.now()}-${fileName1}`);
		if (file2)
			formData.append("file2", file2, `${Date.now()}-${fileName2}`);
		if (file3)
			formData.append("file3", file3, `${Date.now()}-${fileName3}`);
		if (file4)
			formData.append("file4", file4, `${Date.now()}-${fileName4}`);
		if (file5)
			formData.append("file5", file5, `${Date.now()}-${fileName5}`);
		formData.append("telegram", JSON.stringify({en:telegram, fa: telegramFa}));
		formData.append("telegramAdmin", telegramAdmin);
		formData.append("telegramAcademy", telegramAcademy);
		formData.append("facebook", JSON.stringify({en:facebook, fa: facebookFa}));
		formData.append("aparat", JSON.stringify({en:aparat, fa: aparatFa}));
		formData.append("youtube", JSON.stringify({en: youtube, fa: youtubeFa}));
		formData.append("phone", phone);
		formData.append("whatsApp", whatsApp);
		formData.append("whatsAppAdmin", whatsAppAdmin);
		formData.append("instagram", JSON.stringify({en:instagram, fa: instagramFa}));
		formData.append("linkedIn", JSON.stringify({en:linkedIn, fa: linkedInFa}));
		formData.append("twitter", JSON.stringify({en: twitter, fa: twitterFa}));
		formData.append("email", email);
		formData.append("address", address);
		try {
			let res = await settingService.editSetting(formData);
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
			toast.error('مشکل سرور رخ داده است.', {
				position: "top-right",
				closeOnClick: true
			});
		}

	}
	useEffect(() => {
			settingService.setting().then((data: {}) => {
				setTelegram(JSON.parse(data['data']['telegram'])['en'] || '');
				setTelegramFa(JSON.parse(data['data']['telegram'])['fa'] || '');
				setTelegramAcademy(data['data']['telegramAcademy'] || '');
				setFacebook(JSON.parse(data['data']['facebook'])['en'] || '');
				setFacebookFa(JSON.parse(data['data']['facebook'])['fa'] || '');
				setPhone(data['data']['phone'] || '');
				setYoutube(JSON.parse(data['data']['youtube'])['en'] || '');
				setYoutubeFa(JSON.parse(data['data']['youtube'])['fa'] || '');
				setAparat(JSON.parse(data['data']['aparat'])['en'] || '');
				setAparatFa(JSON.parse(data['data']['aparat'])['fa'] || '');
				setTelegramAdmin(data['data']['telegramAdmin'] || '');
				setWhatsApp(data['data']['whatsApp'] || '');
				setWhatsAppAdmin(data['data']['whatsAppAdmin'] || '');
				setInstagram(JSON.parse(data['data']['instagram'])['en'] || '');
				setInstagramFa(JSON.parse(data['data']['instagram'])['fa'] || '');
				setLinkedIn(JSON.parse(data['data']['linkedIn'])['en'] || '');
				setLinkedInFa(JSON.parse(data['data']['linkedIn'])['fa'] || '');
				setTwitter(JSON.parse(data['data']['twitter'])['en'] || '');
				setTwitterFa(JSON.parse(data['data']['twitter'])['fa'] || '');
				setEmail(data['data']['email'] || '');
				setAddress(data['data']['address'] || '');
				setFiles(data['data']['files'] || '');
			})
		}
		, [])
	return <div className={styles.feature}>
		<Container className={styles.container}>
			<div className={styles.featureWrapper}>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک تلگرام مجموعه (en):</span>
					<input type="text" value={telegram} onChange={(e) => setTelegram(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک تلگرام مجموعه (fa):</span>
					<input type="text" value={telegramFa} onChange={(e) => setTelegramFa(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک تلگرام ادمین:</span>
					<input type="text" value={telegramAdmin} onChange={(e) => setTelegramAdmin(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>تلگرام آکادمی:</span>
					<input type="text" value={telegramAcademy} onChange={(e) => setTelegramAcademy(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>یوتوب (en): </span>
					<input type="text" value={youtube} onChange={(e) => setYoutube(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>یوتوب (fa): </span>
					<input type="text" value={youtubeFa} onChange={(e) => setYoutubeFa(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>فیس بوک (en): </span>
					<input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>فیس بوک (fa): </span>
					<input type="text" value={facebookFa} onChange={(e) => setFacebookFa(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>آپارات (en): </span>
					<input type="text" value={aparat} onChange={(e) => setAparat(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>آپارات (fa): </span>
					<input type="text" value={aparatFa} onChange={(e) => setAparatFa(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>تلفن مجموعه: </span>
					<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک واتساپ مجموعه:</span>
					<input type="text" value={whatsApp} onChange={(e) => setWhatsApp(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک واتساپ ادمین:</span>
					<input type="text" value={whatsAppAdmin} onChange={(e) => setWhatsAppAdmin(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک اینستاگرام مجموعه (en):</span>
					<input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک اینستاگرام مجموعه (fa):</span>
					<input type="text" value={instagramFa} onChange={(e) => setInstagramFa(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک LinkedIn مجموعه (en):</span>
					<input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک LinkedIn مجموعه (fa):</span>
					<input type="text" value={linkedInFa} onChange={(e) => setLinkedInFa(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک Twitter مجموعه (en):</span>
					<input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>لینک Twitter مجموعه (fa):</span>
					<input type="text" value={twitterFa} onChange={(e) => setTwitterFa(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>Email مجموعه:</span>
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<span className={styles.title}>آدرس مجموعه: </span>
					<input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
				</div>
				<div className={styles.filedGroupInput}>
					<div className={styles.inputFiled}>
						<div className={styles.fileUploadWrapper} data-text="بارگذاری logo صفحه اصلی">
							<input onChange={(e) => changePic(e, 1)} name="file-logo" type="file" className={styles.fileUploadField} value=""/>
						</div>
					</div>
					<div className={styles.image}>
						<img src={`${media_server}/${('file1' in files ) ? files['file1'][0]['filename'] : 'test.png'} `} alt=""/>
					</div>
				</div>
				<div className={styles.filedGroupInput}>
					<div className={styles.inputFiled}>
						<div className={styles.fileUploadWrapper} data-text="بارگذاری logo مجموعه موبایل">
							<input onChange={(e) => changePic(e, 2)} name="file-logo-min" type="file" className={styles.fileUploadField} value=""/>
						</div>
					</div>
					<div className={styles.image}>
						<img src={`${media_server}/${('file2' in files ) ? files['file2'][0]['filename'] : 'test.png'} `} alt=""/>
					</div>
				</div>
				<div className={styles.filedGroupInput}>
					<div className={styles.inputFiled}>
						<div className={styles.fileUploadWrapper} data-text="بارگذاری فایل loading">
							<input onChange={(e) => changePic(e, 3)} name="file-loading" type="file" className={styles.fileUploadField} value=""/>
						</div>
					</div>
					<div className={styles.image}>
						<img src={`${media_server}/${('file3' in files ) ? files['file3'][0]['filename'] : 'test.png'} `} alt=""/>
					</div>
				</div>
				<div className={styles.filedGroupInput}>
					<div className={styles.inputFiled}>
						<div className={styles.fileUploadWrapper} data-text="بارگذاری تعطیلات (fa)">
							<input onChange={(e) => changePic(e, 4)} name="file-loading" type="file" className={styles.fileUploadField} value=""/>
						</div>
					</div>
					<div className={styles.image}>
						<img src={`${media_server}/${('file3' in files ) ? files['file4'][0]['filename'] : 'test.png'} `} alt=""/>
					</div>
				</div>
				<div className={styles.filedGroupInput}>
					<div className={styles.inputFiled}>
						<div className={styles.fileUploadWrapper} data-text="بارگذاری تعطیلات (en)">
							<input onChange={(e) => changePic(e, 5)} name="file-loading" type="file" className={styles.fileUploadField} value=""/>
						</div>
					</div>
					<div className={styles.image}>
						<img src={`${media_server}/${('file3' in files ) ? files['file5'][0]['filename'] : 'test.png'} `} alt=""/>
					</div>
				</div>
			</div>
			<div className={styles.submit}>
				<button onClick={() => formSubmit()}>اعمال ویرایش</button>
			</div>
		</Container>
	</div>
}