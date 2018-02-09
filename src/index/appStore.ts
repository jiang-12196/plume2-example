import { Store } from 'plume2';
import IndexActor from './acter/indexActor';

class AppStore extends Store {
	bindActor() {
		return [ new IndexActor() ];
	}

	changeRegion = (value: Array<number>) => {
		this.dispatch('changeRegion', value)
	}
}

export default AppStore;
