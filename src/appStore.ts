import { Store } from 'plume2';
import HelloActor from './acter/helloActor';

class AppStore extends Store {
	bindActor() {
		return [ new HelloActor() ];
	}

	// action
	add = () => {
		this.dispatch('add');
	};

	minus = () => {
		this.dispatch('minus');
	};
}

export default AppStore;
