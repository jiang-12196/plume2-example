import React from 'react';
import 'whatwg-fetch';
import { StoreProvider } from 'plume2';
import GoodsList from './component/goodsList';
import AppStore from './store';

@StoreProvider(AppStore)
class Good extends React.Component<any, any> {
	store: AppStore;
	componentDidMount() {
		this.store.getGoodList();
	}
	render() {
		return (
				<GoodsList />
		);
	}
}

export default Good;
