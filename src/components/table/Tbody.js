import React from 'react';

export default class Tbody extends React.Component{
	render() {
		return (
			<tbody>
				{this.props.children}
			</tbody>
		);
	}
}
