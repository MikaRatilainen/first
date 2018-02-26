import React from 'react';
import Text from './text.js';
//import Numbers from './numbers.js';
import Arrays from './arrays.js';

class NavSwitcher extends React.Component {
	constructor(props) {
		super(props);

		this.state = { flag: <Text /> };

		this.handleSwitchToText = this.handleSwitchToText.bind(this);
		this.handleSwitchToArrays = this.handleSwitchToArrays.bind(this);
		//this.handleSwitch = this.handleSwitch.bind(this);
	}

	handleSwitchToText() {
		this.setState({
			flag: <Text />
		});
	}

	handleSwitchToArrays() {
		this.setState({
			flag: <Arrays />
		});
	}

/*	handleSwitch(e) {
		this.setState({
			flag: <e.target.value />
		});
	}*/

	render() {
		return (
			<div>
				<nav>
	      			<button className="navbutton" onClick={this.handleSwitchToText} value="Text">Text</button>
	      			<button className="navbutton" onClick={this.handleSwitchToArrays} value="Arrays">Arrays</button>
	    		</nav>
	    		<div>{this.state.flag}</div>
    		</div>
		);
	}
};

export default NavSwitcher;