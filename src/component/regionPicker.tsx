import React from 'react';
import { Picker } from 'antd-mobile';
import data from './region';
const region = data.CHINA_REGION;

const CustomChildren = (props) => {
	return (
		<div onClick={props.onClick}>
			<div className="regionTip">
				<div>{props.children}</div>
				<div>{props.extra}</div>
			</div>
		</div>
	);
};

class Test extends React.Component {
	state = {
		pickerValue: []
	};
	render() {
		return (
				<Picker
					title="选择地区"
					extra="请选择(可选)"
					data={region}
					value={this.state.pickerValue}
					onChange={(v) => { console.log('onChange--->',v); this.setState({ pickerValue: v })}}
					onOk={(v) => { console.log('onOk--->',v); this.setState({ pickerValue: v })}}
				>
					<CustomChildren>省市区</CustomChildren>
				</Picker>
		);
	}
}

export default Test;
