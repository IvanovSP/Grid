import React from 'react';

export default class Trow extends React.Component{
	prepareCellsData(cells, columns, valuesFormat) {
		let cellsData = [];
		for (const column of columns) {
			let cellValue = cells[column.field].toString();
			const format = valuesFormat && valuesFormat[column.field];
			if (format) cellValue = cellValue.replace(format.expression, format.substring);
			cellsData.push(cellValue);
		}
		return cellsData;
	}

	render() {
		const {cells = {}, columns = [], valuesFormat = {}} = this.props;

		const tdMap=(cell,i)=>{
			return 	<td class="media-body" key={i}>{cell}</td>;
		};
		const tdMapped = this.prepareCellsData(cells, columns, valuesFormat).map(tdMap);

		return (
			<tr>
				{this.props.children}
				{tdMapped}
			</tr>
		);
	}
}
