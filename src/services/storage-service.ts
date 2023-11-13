import {IService, Service} from "react-soa";
import {getSnapshot, restoreSnapshot} from "react-soa/dist/snapshot";
import {optional} from "react-soa/dist/optional";

@Service
export class StorageService extends IService {
	storageKey = 'app-data';
	validateLocal = options => {
		const piped = options.metadata.piped || [];
		if (piped.indexOf((options.key)) > -1)
			return false;
	};

	applicationStarted = async () => {
		const el = document.getElementById('app-key') as HTMLInputElement;
		this.storageKey = el.value + '-app-data';
		const context = this.context;
		const elm = document.getElementById("app-data") as HTMLInputElement;
		if (elm && elm.value) {
			const data = elm.value;
			optional(() => restoreSnapshot(context, JSON.parse(data), {
				type: 'piped',
			}));
		}
		const data = this.getSavedData();
		if (!!data) {
			optional(() => restoreSnapshot(context, JSON.parse(data), {
				validate: this.validateLocal,
			}));
		}
		['visibilitychange', 'pagehide', 'freeze'].forEach((type) => {
			window.addEventListener(type, this.eventTrigger, {capture: true});
		});
	};
	eventTrigger = (e) => {
		const type = e.type;
		if (type === 'visibilitychange' && document.visibilityState === 'visible') return;
		this.ensureDataIsSaved();
	};
	applicationDestroyed = async () => {

		['visibilitychange', 'pagehide', 'freeze'].forEach((type) => {
			window.removeEventListener(type, this.eventTrigger);
		});
	};
	ensureDataIsSaved = () => {
		const data = getSnapshot(this.context, {
			validate: this.validateLocal,
		});
		window.localStorage.setItem(this.storageKey, JSON.stringify(data))
	};
	getSavedData = () => {
		return window.localStorage.getItem(this.storageKey);
	}
}
