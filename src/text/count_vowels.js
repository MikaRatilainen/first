import React from 'react';

class CountVowels extends React.Component {
	constructor(props) {
		super(props);

		this.state = { output: '' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let text = e.target.value;
		const vowelsArray = ['e', 'y', 'u', 'i', 'o', 'a', 'E', 'Y', 'U', 'I', 'O', 'A'];
		let countArray = [0, 0, 0, 0, 0, 0];
		let textForOutput = '';
		let totalCount = 0;
		console.log(text);

		for (var i = text.length - 1; i >= 0; i--) {
			for (var j = vowelsArray.length - 1; j >= 0; j--) {
				if (text[i] === vowelsArray[j]) {
					countArray[j % 6]++;
				};
			};
		};

		for (var k = countArray.length - 1; k >= 0; k--) {
			if (countArray[k] !== 0) {
				textForOutput += vowelsArray[k] + ' - ' + countArray[k] + ', ';
				totalCount += countArray[k];
			};
		};
		textForOutput += 'total number of vowels - ' + totalCount;

		this.setState({
			output: textForOutput
		});
	}

	render() {
		return (
			<div className="lesson">
				<h3>Подсчет гласных</h3>
				<input type="text" onChange={this.handleChange} />
				<p>{this.state.output}</p>
			</div>
		);
	}
}

export default CountVowels;