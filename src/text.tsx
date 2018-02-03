import React from 'react';
import { Relax } from 'plume2';

@Relax
class Text extends React.Component<any, any> {
	static relaxProps = {
		text: 'text',
		counter: 'counter',
		add: () => {},
		minus: () => {}
	};

	render() {
		const { text, counter, add, minus } = this.props.relaxProps;
		return (
			<div className={'text'}>
				<span>{text}</span>
				<div>
					<button onClick={add}>+</button>
					{counter}
					<button onClick={minus}>-</button>
				</div>
			</div>
		);
	}
}

export default Text;
