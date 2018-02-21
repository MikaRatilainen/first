import React from 'react';

class PigLatin extends React.Component {
	constructor(props) {
		super(props);

		this.state = { text: '', pigText: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		});
	}

	handleClick() {
		let text = this.state.text;
		let arr = text.split(' ');
		arr = arr.map(word => {
			return word.replace(/([qwrtpsdfghjklzxcvbnm]*)([aeyuio])([a-z]*)/i, "$2$3$1ay");
		});
		text = arr.join(' ');
		this.setState({
			pigText: text
		});
	}

	render() {
		return (
			<div class="lesson">
				<h3>Pig Latin</h3>
				<input type="text" onChange={this.handleChange} />
				<input type="button" onClick={this.handleClick} value="Pig it!" />
				<p>{this.state.pigText}</p>
			</div>
		);
	}
}

export default PigLatin;