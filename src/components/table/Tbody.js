import React from 'react';
import Trow from  './Trow'

export default class Tbody extends React.Component{
	render() {
		const {collection} = this.props;

		const mappedGrid = collection.rows.map((gridRow, i)=>{
			return <Trow
				key={i}
				cells={gridRow}
				columns={collection.columns}
			/>;
		});

		return (
			<tbody>
				{mappedGrid}
			</tbody>
		);
	}
}
