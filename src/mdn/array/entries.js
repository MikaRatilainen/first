import React from 'react';

class MdnEntries extends React.Component {
	output() {
		let arr = [];
		let arr2 = this.props.value.entries();
		Array.prototype.forEach.call(this.props.value, function(i){ arr.push(arr2.next().value) });
		return '[' + arr.join('], [') + ']';
	}

	render() {
		return (
			<div>
				<h3>Array.prototype.entries()</h3>
				<p>{this.output()}</p>
			</div>
		);
	}
}

export default MdnEntries;