import React from 'react';

import Thead from './Thead';
import Tbody from './Tbody';
import Trow from  './Trow';

export default class Table extends React.Component{
	handleClick(e) {
		const tdStyle = e.target.style;
		tdStyle.backgroundColor = '#bcdeff';
		setTimeout(() => tdStyle.backgroundColor = '', 100);
	}

	render() {
		const {collection, valuesFormat} = this.props;

		const mappedRows = collection.rows.map((gridRow, i)=>{
			return <Trow
				key={i}
				cells={gridRow}
				columns={collection.columns}
				valuesFormat={valuesFormat}
			/>;
		});

		return (
			<table class="table table-bordered" onClick={this.handleClick}>
				<Thead headers={collection.columns}/>
				<Tbody>
					{mappedRows}
				</Tbody>
			</table>
		);
	}
}
