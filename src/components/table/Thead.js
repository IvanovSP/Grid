import React from 'react';

export default class Thead extends React.Component{
	render() {
		const {headers} = this.props;

		const tdMap = (cell, i) => {
			return 	<th key={i}>
				{cell.header}
			</th>;
		};

		const thMapped = headers.map(tdMap);

		return (
			<thead>
				<tr>{thMapped}</tr>
			</thead>
		);
	}
}
