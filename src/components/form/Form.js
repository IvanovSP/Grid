import React from 'react';
import Input from './Input';

export default class Form extends React.Component{
	constructor(props) {
		super(props);
		let state = {};
		for (const value of props.values)
			state[value.field] = '';
	}
	render() {
		return (
			<form class="form-inline">
				<Input/>
				<Input/>
				<button type="submit" class="btn btn-default">Send invitation</button>
			</form>
		);
	}
}
