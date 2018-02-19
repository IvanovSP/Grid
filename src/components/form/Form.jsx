import React from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid';
import Input from './Input';
import Button from './Button';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    const { values, valuesValidators } = props;
    const defaultState = {};
    values.forEach((value) => { defaultState[value.field] = ''; });
    this.defaultState = defaultState;
    const formValidators = {};
    valuesValidators.forEach((validator) => {
      formValidators[validator.field] = validator;
      formValidators[validator.field].valid = true;
    });
    this.state = { inputs: defaultState, formValidators };
    this.validate = this.validate.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(event) {
    const { name, value } = event.target;
    const { inputs } = this.state;
    this.setState({
      inputs: { ...inputs, [name]: value },
    });
  }

  validate(event) {
    event.preventDefault();
    const keys = Object.keys(this.state.inputs);
    const formIsEpmty = keys.some(i => this.state.inputs[i].trim() === '');
    if (formIsEpmty) {
      /* eslint-disable no-alert */
      alert('Fill all inputs');
      /* eslint-enable no-alert */
      return;
    }
    const { submit } = this.props;
    const { formValidators } = this.state;

    let valid = true;
    keys.forEach((i) => {
      const validator = formValidators[i];
      if (validator) {
        validator.valid = validator.validate(this.state.inputs[i]);
        if (!validator.valid) valid = false;
      }
    });
    this.setState({ formValidators });
    if (!valid) return;
    // const valueValidator = valuesValidators.find(validator => validator.field === )
    submit(this.state.inputs);
    this.setState({ inputs: this.defaultState });
  }

  render() {
    const { values } = this.props;

    const inputMap = (value, i) => (<Input
      key={i}
      id={Shortid.generate()}
      handler={this.handleInputs}
      label={value.header}
      name={value.field}
      val={this.state.inputs[value.field]}
      valid={this.state.formValidators[value.field] && this.state.formValidators[value.field].valid}
      invalidMessage={this.state.formValidators[value.field] && this.state.formValidators[value.field].message}
    />);

    const inputMaped = values.map(inputMap);

    return (
      <form className="form-inline" onSubmit={this.validate}>
        {inputMaped}
        <Button classNames={['btn', 'btn-default']}>Save</Button>
      </form>
    );
  }
}

Form.defaultProps = {
  submit: (() => {}),
  values: [],
  valuesValidators: [],
};

Form.propTypes = {
  submit: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.object),
  valuesValidators: PropTypes.arrayOf(PropTypes.object),
};
