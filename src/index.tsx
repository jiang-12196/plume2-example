import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'plume2';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppStore from './appStore';
import RegionPicker from './component/regionPicker';
import Index from './component/index';
import WebTabBar from './tabBar/index';
import './app';

@StoreProvider(AppStore)
class App extends React.Component<any, any> {
	render() {
		return (
			<Router
				history={hashHistory}
			>
				<Route
					component={WebTabBar}
					path="/"
				>;
					<IndexRoute
						component={Index}
					/>
					<Route
						path="addr"
						component={RegionPicker}
          />
				</Route>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
