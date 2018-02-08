import { Actor } from 'plume2';

class IndexActor extends Actor {
	defaultState() {
		return {
			text: 'welcom to my webSite',
		};
	}
}

export default IndexActor;
