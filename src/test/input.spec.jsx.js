import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Input from '../components/form/Input';

describe('<Input />', () => {
  it('should have text prop', () => {
    const wrapper = shallow(<Input/>);
    expect(wrapper.props().handler).to.be.defined;
    expect(wrapper.props().label).to.be.defined;
    expect(wrapper.props().name).to.be.defined;
    expect(wrapper.props().val).to.be.defined;
    expect(wrapper.props().id).to.be.defined;
  });
});
