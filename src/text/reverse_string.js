import React, { Component } from 'react';

class ReverseString extends Component {
	constructor(props) {
    	super(props);

    	this.state = { userInput: '' };

    	this.handleChange = this.handleChange.bind(this);
  	}

  	handleChange(e) {
    	this.setState({
      		userInput: e.target.value
    	});
    }

    reverseString(str) {
    	let reversedStr = [];
    	let j = 0;
    	for (var i = str.length - 1; i >= 0; i--) {
    		reversedStr[j] = str[i];
    		j++;
    	};
    	return reversedStr;
    }

	render() {
		return (
			<div class="lesson">
			  <h3>Обратная строка</h3>
			  <input type="text" onChange={this.handleChange} />
			  <p>{this.reverseString(this.state.userInput)}</p>
			</div>
			);
	}
}

export default ReverseString;