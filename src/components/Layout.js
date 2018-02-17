import React from 'react';
import Header from './Header';
import Table from './table/Table';
import Form from './form/Form';

export default class Layout extends React.Component{
	constructor() {
		super();
		this.state = {
			title: 'Grid',
			collection: {
				columns: [
					{header: 'User Name', field: 'user'},
					{header: 'Phone', field: 'phone'},
					{header: 'E-mail', field: 'email'},
				],
				rows: [
					{user: 'Sergey', phone: 1112143, email: 'test@test.com'}
				]
			},
		};
	}

	addToCollection(row) {
		let collection = {...this.state.collection};
		collection.rows.push(row);
		this.setState({collection});
	}

	removeFromCollection(i) {
		let collection = {...this.state.collection};
		collection.rows.splice(i, 1);
		this.setState({collection});
	}

	render() {
		const {title = '', collection = []} = this.state;

		const valuesFormat = {phone: {expression: /(\d{3})(\d{3})(\d{1})/, substring: '$1-$2-$3'}}

		return (
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1">
						<Header text={title}/>
						<Table
							collection={collection}
							valuesFormat={valuesFormat}
							removeRow={this.removeFromCollection.bind(this)}
						/>
						<Form
							values={collection.columns}
							submit={this.addToCollection.bind(this)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
