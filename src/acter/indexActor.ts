import { Actor } from 'plume2';

class IndexActor extends Actor {
	defaultState() {
		return {
			text: 'welcome to my webSite',
		};
	}
}

export default IndexActor;
