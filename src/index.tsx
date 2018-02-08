import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'plume2';
import AppStore from './appStore';
import RegionPicker from './component/regionPicker';
import './app';

@StoreProvider(AppStore)
class HelloApp extends React.Component {
	render() {
		return <RegionPicker />;
	}
}

ReactDOM.render(<HelloApp />, document.getElementById('app'));
