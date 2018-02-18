import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../components/Header';

describe('<Header />', () => {
  it('should have text prop', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.props().text).to.be.defined;
  });
});
