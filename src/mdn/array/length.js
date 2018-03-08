import React from 'react';

class MdnLength extends React.Component {
	render() {
		return (
			<div>
				<h3>Array.length</h3>
				<p>Длина массива: {this.props.value.length}</p>
			</div>
		);
	}
}

export default MdnLength;