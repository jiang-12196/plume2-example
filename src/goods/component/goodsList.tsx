import React from 'react';
import { Relax } from 'plume2';

@Relax
class GoodsList extends React.Component<any, any> {
  static relaxProps = {
    regionValue: 'regionValue',
  }
	render() {
    const { regionValue } = this.props.relaxProps;
    console.log('resjklsdjfglkj--->', regionValue);
		return (
      <div>
        jiang
      </div>
		);
	}
}

export default GoodsList;
