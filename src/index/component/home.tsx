import React from 'react';
import { Relax } from 'plume2';
import { withRouter } from 'react-router';

@withRouter
@Relax
class Home extends React.Component<any, any> {
	static relaxProps = {
		text: 'text',
	};

	render() {
		const { text } = this.props.relaxProps;
		return (
			<div className={'text'}>
				<span>{text}</span>
			</div>
		);
	}
}

export default Home;
