import React from 'react';

export default class Input extends React.Component{
	render() {
		return (
			<div class="form-group">
				<label for="exampleInputName2">Name</label>
				<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
			</div>
		);
	}
}
