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
			<div>
				<span>{text}</span>
				<button onClick={add} />
				{counter}
				<button onClick={minus} />
			</div>
		);
	}
}

export default Text;
