import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Addr from './addr/index';
import Index from './index/index';
import WebTabBar from './tabBar/index';
import Good from './goods/index';
import './app';

// @StoreProvider(AppStore)
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
						component={Addr}
          />
					<Route
						path="good"
						component={Good}
          />
				</Route>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
