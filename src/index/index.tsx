import React from 'react';
import { StoreProvider } from 'plume2';
import Home from './component/home';
import AppStore from './appStore';

@StoreProvider(AppStore)
class Index extends React.Component<any, any> {
	render() {
		return (
				<Home />
		);
	}
}

export default Index;
