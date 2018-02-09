import { Store } from 'plume2';
import RegionPickerActor from './acter/regionPicker-actor';

class AppStore extends Store {
	bindActor() {
		return [ new RegionPickerActor() ];
	}

	changeRegion = (value: Array<number>) => {
		this.dispatch('changeRegion', value);
	};
}

export default AppStore;
