import React from 'react';

export default class Trow extends React.Component{
	prepareCellsData(cells, columns) {
		let cellsData = [];
		for (const column of columns) {
			const cellValue = cells[column.field];
			cellsData.push(cellValue);
		}
		return cellsData;
	}

	render() {
		const {cells, columns} = this.props;

		const tdMap=(cell,i)=>{
			return 	<td key={i}>{cell}</td>;
		};

		const tdMapped = this.prepareCellsData(cells, columns).map(tdMap);

		return (
			<tr>
				{tdMapped}
			</tr>
		);
	}
}
