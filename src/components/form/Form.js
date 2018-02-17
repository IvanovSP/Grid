import React from 'react';
import Input from './Input';
import Button from './Button';

export default class Form extends React.Component{
	constructor(props) {
		super(props);
		let defaultState = {};
		for (const value of props.values)
			defaultState[value.field] = '';
		this.state = {...defaultState};
		this.defaultState = defaultState;
	}

	handleInputs(event) {
		const {name, value} = event.target;
		this.setState({[name]: value});
	}

	validate(event) {
		event.preventDefault();

		for (let i in this.state){
			if (this.state[i].trim() === '') {
				alert('Fill all inputs');
				return;
			}
		}

		const {submit} = this.props;
		if(submit) submit(this.state);

		this.setState(this.defaultState);
	}

	render() {
		const {values = []} = this.props;

		const inputMap = (value, i) => {
			return <Input
				key={i}
				inputNumber={i}
				handler={this.handleInputs.bind(this)}
				label={value.header}
				name={value.field}
				val={this.state[value.field]}
			/>;
		}

		const inputMaped = values.map(inputMap);

		return (
			<form class="form-inline" onSubmit={this.validate.bind(this)}>
				{inputMaped}
				<Button
					classNames={['btn', 'btn-default']}
				>
					Save
				</Button>
			</form>
		);
	}
}
