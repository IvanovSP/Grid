import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Form from '../components/form/Form';
import Button from '../components/form/Button';
import Input from '../components/form/Input';

let valuesArr;

describe('<Form />', () => {
  it('contains an <Button/> component', () => {
    const wrapper = mount(<Form/>);
    expect(wrapper.find(Button)).to.have.length(1);
  });

  it('should contains mapped <Input/> components if values array passed not empty', () => {
    const wrapper = mount(<Form />);
    expect(wrapper.find(Input)).to.have.length(0);
    wrapper.setProps({ values: [{}] });
    expect(wrapper.find(Input)).to.have.length(1);
  });

  it('should have inital state with keys passed on value prop', () => {
    valuesArr = [{ field: 'testField' }];
    const wrapper = mount(<Form values={valuesArr}/>);
    expect(wrapper.state().testField).to.be.defined;
  });

  it('should submit form only if all state fields have value and', () => {
    valuesArr = [{ field: 'testField' }];
    const wrapper = mount(<Form values={valuesArr} submit={sinon.spy()} />);
    wrapper.find('form').simulate('submit');
    expect(wrapper.props().submit.calledOnce).to.be.false;

    wrapper.instance().setState({ testField: 'some value' });
    wrapper.find('form').simulate('submit');
    expect(wrapper.props().submit.calledOnce).to.be.true;
  });

  it('should set default state on submit', () => {
    valuesArr = [{ field: 'testField' }];
    const wrapper = mount(<Form values={valuesArr} />);
    wrapper.instance().setState({ testField: 'some value' });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state()).to.deep.include(wrapper.instance().defaultState);
  });

  it('should have props for values and submit', () => {
    const wrapper = mount(<Form values={valuesArr} />);
    expect(wrapper.props().values).to.be.defined;
    expect(wrapper.props().submit).to.be.defined;
  });


  it('should set state from handleInputs method', () => {
    valuesArr = [{ field: 'testField' }];
    const wrapper = mount(<Form values={valuesArr} />);
    const event = {
      target: {
        name: valuesArr[0].field,
        value: 'new value',
      },
    };
    wrapper.instance().handleInputs(event);

    expect(wrapper.state().testField).to.equal(event.target.value);
  });
});
