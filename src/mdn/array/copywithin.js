import React from 'react';

class MdnCopyWithin extends React.Component {
	constructor(props) {
		super(props);

		this.state = { target: '', start: '', end: undefined };
		this.handleChangeTarget = this.handleChangeTarget.bind(this);
		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
	}

	output() {
		let arr = this.props.value;
		return arr.copyWithin(this.state.target, this.state.start, this.state.end).join(', ');
	}

	selectorTarget() {
		let arr = [];
		for (var i =  0; i < this.props.value.length; i++) {
					arr.push(<option value={i}>{i}</option>)
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
		for (var i =  0; i < this.props.value.length; i++) {
					arr.push(<option value={i}>{i}</option>)
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
		for (var i =  0; i < this.props.value.length; i++) {
					arr.push(<option value={i}>{i}</option>)
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
				<h3>Array.prototype.copyWithin</h3>
				<div className='copy-within'>
					<p>Target</p>
					<select onChange={this.handleChangeTarget}>
						{this.selectorTarget()}
					</select>
				</div>
				<div className='copy-within'>
					<p>Start</p>
					<select onChange={this.handleChangeStart}>
						{this.selectorStart()}
					</select>
				</div>
				<div className='copy-within'>
					<p>End (optional)</p>
					<select onChange={this.handleChangeEnd}>
						{this.selectorEnd()}
					</select>
				</div>
				<p>[{this.output()}]</p>
			</div>
		);
	}
}

export default MdnCopyWithin;