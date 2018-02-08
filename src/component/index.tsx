import React from 'react';
import { Relax } from 'plume2';
import { withRouter } from 'react-router';

@withRouter
@Relax
class Index extends React.Component<any, any> {
	static relaxProps = {
		text: 'text',
	};

	render() {
		const { text } = this.props.relaxProps;
		return (
			<div className={'text'}>
				<span>{text}</span>
				<div>
					<button onClick={this._redirect}>添加地址</button>
				</div>
			</div>
		);
	}

	_redirect = () => {
		this.props.router.push({
			pathname: '/addr',
		})
	}
}

export default Index;
