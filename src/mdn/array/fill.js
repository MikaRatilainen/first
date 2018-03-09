import React from 'react';

class MdnFill extends React.Component {
	constructor(props) {
		super(props);

		this.state = { fillOutput: [], fillValue: '', fillStart: undefined, fillEnd: undefined };
		this.handleChangeValue = this.handleChangeValue.bind(this);
		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let arr = this.props.value;
		this.setState({
			fillOutput: arr.fill(this.state.fillValue, this.state.fillStart, this.state.fillEnd)
		});
	}

	handleChangeValue(e) {
		this.setState({
			fillValue: e.target.value
		});
	}

	selectorStart() {
		let arr = [];
		for (var j =  0; j < this.props.value.length; j++) {
					arr.push(<option key={j} value={j}>{j}</option>)
		}; 
		return arr;
	}

	handleChangeStart(e) {
		this.setState({
			fillStart: e.target.value
		});
	}

	selectorEnd() {
		let arr = [];
		for (var k =  0; k < this.props.value.length; k++) {
					arr.push(<option key={k} value={k}>{k}</option>)
		}; 
		return arr;
	}

	handleChangeEnd(e) {
		this.setState({
			fillEnd: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h3>Array.prototype.copyWithin()</h3>
				<div className='copy-within 1'>
					<p>Value</p>
					<input className='little-input' onChange={this.handleChangeValue}></input>
				</div>
				<div className='copy-within 2'>
					<p>Start (optional)</p>
					<select onChange={this.handleChangeStart}>
						{this.selectorStart()}
					</select>
				</div>
				<div className='copy-within 3'>
					<p>End (optional)</p>
					<select onChange={this.handleChangeEnd}>
						{this.selectorEnd()}
					</select>
				</div>
				<input className='little-button' type='button' onClick={this.handleClick} value='Fill'></ input>
				<p>[{this.state.fillOutput.join(', ')}]</p>
			</div>
		);
	}
}

export default MdnFill;