import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

export default class Table extends React.Component{
	handleClick(e) {
		const tdStyle = e.target.style;
		tdStyle.backgroundColor = '#bcdeff';
		setTimeout(() => tdStyle.backgroundColor = '', 100);
	}

	render() {
		const {collection} = this.props;
		return (
			<table class="table table-bordered" onClick={this.handleClick}>
				<Thead
					headers={collection.columns}
				/>
				<Tbody
					collection={collection}
				/>
			</table>
		);
	}
}
