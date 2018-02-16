import React from 'react';
import Header from './Header';
import Table from './table/Table';

export default class Layout extends React.Component{
	constructor() {
		super();
		this.state={
			title: 'Grid',
			collection: {
				columns: [
					{header: 'User Name', field: 'user'},
					{header: 'Phone', field: 'phone'},
					{header: 'E-mail', field: 'email'},
				],
				rows: [
					{user: 'Sergey', phone: 111213123, email: 'test@test.com'}
				]
			},
		};
	}

	removeRow() {

	}

	render() {
		const {title, collection} = this.state;
		const action = {
			method: this.removeRow.bind(this),
			icon: 'glyphicon-remove',
			label: 'Remove'
		};

		return (
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1">

						<Header
							text={title}
						/>

						<Table
							action={action}
							collection={collection}
						/>

						<form class="form-inline">
							<div class="form-group">
								<label for="exampleInputName2">Name</label>
								<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail2">Email</label>
								<input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
							</div>
							<button type="submit" class="btn btn-default">Send invitation</button>
						</form>

					</div>
				</div>
			</div>
		);
	}
}
