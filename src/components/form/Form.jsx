import React from 'react';
import PropTypes from 'prop-types';
import Shortid from 'shortid';
import Input from './Input';
import Button from './Button';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    const { values } = props;
    const defaultState = {};
    values.forEach((value) => { defaultState[value.field] = ''; });
    this.state = { ...defaultState };
    this.defaultState = defaultState;
    this.validate = this.validate.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  validate(event) {
    event.preventDefault();
    const keys = Object.keys(this.state);
    const formIsValid = keys.some(i => this.state[i].trim() === '');
    if (formIsValid) {
      /* eslint-disable no-alert */
      alert('Fill all inputs');
      /* eslint-enable no-alert */
      return;
    }

    const { submit } = this.props;
    submit(this.state);
    this.setState(this.defaultState);
  }

  render() {
    const { values = [] } = this.props;

    const inputMap = (value, i) => (<Input
      key={i}
      id={Shortid.generate()}
      handler={this.handleInputs}
      label={value.header}
      name={value.field}
      val={this.state[value.field]}
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
};

Form.propTypes = {
  submit: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.object),
};
