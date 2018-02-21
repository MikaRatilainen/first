import React from 'react';
import Text from './text.js';
import Numbers from './numbers.js';

class NavSwitcher extends React.Component {
	constructor(props) {
		super(props);

		this.state = { flag: <Text /> };

		this.handleSwitchToText = this.handleSwitchToText.bind(this);
		this.handleSwitchToNumber = this.handleSwitchToNumber.bind(this);
	}

	handleSwitchToText() {
		this.setState({
			flag: <Text />
		});
	}

	handleSwitchToNumber() {
		this.setState({
			flag: <Numbers />
		});
	}

	render() {
		return (
			<div>
				<nav>
	      			<button class="navbutton" onClick={this.handleSwitchToText}>Text</button>
	      			<button class="navbutton" onClick={this.handleSwitchToNumber}>Numbers</button>
	    		</nav>
	    		<div>{this.state.flag}</div>
    		</div>
		);
	}
};

export default NavSwitcher;