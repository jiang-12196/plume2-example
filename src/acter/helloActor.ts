import { Actor, Action, IMap } from 'plume2';

class HelloActor extends Actor {
	defaultState() {
		return {
			text: '请选择',
			counter: 0
		};
	}

	@Action('add')
	increment(state: IMap) {
		return state.update('counter', (counter) => counter + 1).set('text', '加');
	}

	@Action('minus')
	decrement(state: IMap) {
		const a = state.update('counter', (counter) => counter - 1).set('text', '减');
		return a;
	}
}

export default HelloActor;
