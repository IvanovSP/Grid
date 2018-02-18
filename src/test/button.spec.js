import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Button from '../components/form/Button';

describe('<Button />', () => {
  it('should have handler, classNames, children props', () => {
    const wrapper = shallow(<Button/>);
    expect(wrapper.props().handler).to.be.defined;
    expect(wrapper.props().classNames).to.be.defined;
    expect(wrapper.props().children).to.be.defined;
  });
});
