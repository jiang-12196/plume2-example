import React from 'react';
import { Relax } from 'plume2';
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

@Relax
class RegionPicker extends React.Component<any, any> {
  static relaxProps = {
    regionValue: 'regionValue',
    changeRegion: () => {}
  }
	render() {
		const { changeRegion, regionValue } = this.props.relaxProps
		return (
			<Picker
				title="选择地区"
				extra="请选择(可选)"
				data={region}
				value={regionValue}
        onOk={(value) => changeRegion(value)}
			>
				<CustomChildren>省市区</CustomChildren>
			</Picker>
		);
	}
}

export default RegionPicker;
