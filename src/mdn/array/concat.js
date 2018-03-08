import React from 'react';

class MdnConcat extends React.Component {
	constructor(props) {
		super(props);

		this.state = {secondArray: []};
		this.handleChange = this.handleChange.bind(this);
	}

	output() {
		let arr = this.props.value;
		return arr.concat(this.state.secondArray).join(', ');
	}

	handleChange(e) {
		this.setState({
			secondArray: e.target.value.trim().split(' ')
		});
	}

	render() {
		return (
			<div>
				<h3>Array.prototype.concat</h3>
				<input type='text' onChange={this.handleChange}></input>
				<p>[{this.output()}]</p>
			</div>
		);
	}
}

export default MdnConcat;