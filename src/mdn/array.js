import React from 'react';
import MdnLength from './array/length.js';
import MdnIsArray from './array/isarray.js';
import MdnConcat from './array/concat.js'
import MdnCopyWithin from './array/copywithin.js'

class MdnArray extends React.Component {
	constructor(props) {
		super(props);

		this.state = {inputArray: []}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			inputArray: e.target.value.trim().split(' ')
		});
	}

	render() {
		return (
			<div>
				<input type='text' onChange={this.handleChange}></input>
				<h3>Свойства</h3>
				 <table>
	   				 <tbody>
	    				<tr>
	      					<td><MdnLength value={this.state.inputArray} /></td>
	    				</tr>
	    			</tbody>
	  			</table>
	  			<h3>Методы</h3>
				 <table>
	   				 <tbody>
	    				<tr>
	      					<td><MdnIsArray value={this.state.inputArray} /></td>
	      					<td><MdnConcat value={this.state.inputArray} /></td>
	      					<td><MdnCopyWithin value={this.state.inputArray} /></td>
	    				</tr>
	    			</tbody>
	  			</table>
  			</div>
			);
	}
}

export default MdnArray;

