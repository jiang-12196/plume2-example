import React from 'react';
import { StoreProvider } from 'plume2';
import RegionPicker from './component/regionPicker';
import AppStore from './appStore';

@StoreProvider(AppStore)
class Addr extends React.Component<any, any> {
	render() {
		return (
			<div>
				<RegionPicker />
			</div>
		);
	}
}

export default Addr;
