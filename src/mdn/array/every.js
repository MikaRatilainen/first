import React from 'react';

class MdnEvery extends React.Component {
	output() {
		if (this.props.value.every(elem => /[a-zA-Z]/.test(elem))) {
			return 'В каждом елементе массива есть латинские буквы'
		} else {
			return 'Не в каждом елементе массива есть латинские буквы'
		}
	}

	render() {
		return (
			<div>
				<h3>Array.prototype.every()</h3>
				<p>{this.output()}</p>
			</div>
		);
	}
}

export default MdnEvery;