import { Actor, Action, IMap } from 'plume2';

class RegionPickerActor extends Actor {
	defaultState() {
		return {
			regionValue: []
		};
	}

	@Action('changeRegion')
	changeRegion(state: IMap, value: Array<number>) {
		return state.set('regionValue', value);
	}
}
 
export default RegionPickerActor;
