import React from 'react';

class MdnCopyWithin extends React.Component {
	constructor(props) {
		super(props);

		this.state = { copyOutput: [], target: '', start: '', end: undefined };
		this.handleChangeTarget = this.handleChangeTarget.bind(this);
		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let arr = this.props.value;
		this.setState ({
			copyOutput: arr.copyWithin(this.state.target, this.state.start, this.state.end)
		});
	}

	selectorTarget() {
		let arr = [];
		for (var i =  0; i < this.props.value.length; i++) {
					arr.push(<option key={i} value={i}>{i}</option>)
		}; 
		return arr;
	}

	handleChangeTarget(e) {
		this.setState({
			target: e.target.value
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
			start: e.target.value
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
			end: e.target.value
		});
	}

	render() {
		return (
			<div>
				<h3>Array.prototype.copyWithin()</h3>
				<div className='copy-within 1'>
					<p>Target</p>
					<select onChange={this.handleChangeTarget}>
						{this.selectorTarget()}
					</select>
				</div>
				<div className='copy-within 2'>
					<p>Start</p>
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
				<input className='little-button' type='button' onClick={this.handleClick} value='Copy'></ input>
				<p>[{this.state.copyOutput.join(', ')}]</p>
			</div>
		);
	}
}

export default MdnCopyWithin;