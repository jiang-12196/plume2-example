import React from "react";
import { Relax } from "plume2";
import { withRouter } from "react-router";
import { Radio, message } from "antd";
import question from "./title";

const RadioGroup = Radio.Group;

@withRouter
@Relax
class Home extends React.Component<any, any> {
	static relaxProps = {
		text: "text"
	};

	onChange = (e, answer) => {
		console.log("radio checked", e.target.value);
		if (e.target.value == answer) {
			message.success("选择正确");
			return;
		}
		message.error("选择错误");
	};

	getRadioGroup = () => {
		return question.singleChoiceQuestion.map(item => {
			return (
				<div>
					<span>题目：{item.title}</span>
					<RadioGroup onChange={e => this.onChange(e, item.answer)}>
						{this.getRaido(item.select)}
					</RadioGroup>
				</div>
			);
		});
	};

	getRaido = select => {
		return Object.keys(select).map(key => (
			<Radio key={key} value={key}>
				{select[key]}
			</Radio>
		));
	};

	render() {
		return <div className="text">{this.getRadioGroup()}</div>;
	}
}

export default Home;
