import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Tbody from '../components/table/Tbody';

describe('<Tbody />', () => {
  it('should have children prop', () => {
    const wrapper = shallow(<Tbody />);
    expect(wrapper.props().children).to.be.defined;
  });
});
