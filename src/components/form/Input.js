import React from 'react';

export default class Input extends React.Component{
	render() {
		const {label, name, inputNumber, handler, val} = this.props;
		return (
			<div class="form-group">
				<label for={`exampleInputName${inputNumber}`} >{label}</label>
				<input
					type="text"
					name={name}
					onChange={handler}
					value={val}
					class="form-control"
					id={`exampleInputName${inputNumber}`}
				/>
			</div>
		);
	}
}
