import React from 'react';
import Text from './text.js';
//import Numbers from './numbers.js';
import Arrays from './arrays.js';
import MdnArray from './mdn/array.js'

class NavSwitcher extends React.Component {
	constructor(props) {
		super(props);

		this.state = { flag: <MdnArray /> };

		this.handleSwitchToText = this.handleSwitchToText.bind(this);
		this.handleSwitchToArrays = this.handleSwitchToArrays.bind(this);
		this.handleMdnArray = this.handleMdnArray.bind(this);
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

	handleMdnArray() {
		this.setState({
			flag: <MdnArray />
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
	      			<button className="navbutton2" onClick={this.handleSwitchToText} value="Text">Text</button>
	      			<button className="navbutton2" onClick={this.handleSwitchToArrays} value="Arrays">Arrays</button>
	    		</nav>

	    		<h1>MDN web docs</h1>
	    		<nav>
	    			<button className="navbutton" onClick={this.handleMdnArray} value="Array">Array</button>
	    		</nav>
	    		<div>{this.state.flag}</div>
    		</div>
		);
	}
};

export default NavSwitcher;