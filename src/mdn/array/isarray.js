import React from 'react';

class MdnIsArray extends React.Component {
	output() {
		if (Array.isArray(this.props.value)) {
			return 'Строка переведена в массив, с пробелом в качестве разделителя';
		};
	}

	render() {
		return (
			<div>
				<h3>Array.isArray()</h3>
				<p>{this.output()}</p>
			</div>
		);
	}
}

export default MdnIsArray;