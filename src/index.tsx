import React from 'react';
import ReactDOM from 'react-dom';
import { Actor, Store, Relax, StoreProvider } from 'plume2';
import Text from './text';
import AppStore from './appStore';
// import s from './app'

@StoreProvider(AppStore)
class HelloApp extends React.Component {
	render() {
		return <Text />;
	}
}

ReactDOM.render(<HelloApp />, document.getElementById('app'));
