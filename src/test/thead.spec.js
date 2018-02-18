import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Thead from '../components/table/Thead';

describe('<Thead />', () => {
  it('should have headers props', () => {
    const wrapper = shallow(<Thead/>);
    expect(wrapper.props().headers).to.be.defined;
  });

  it('should render th tags if headers array not empty', () => {
    const wrapper = shallow(<Thead headers={[{ header: 'some header' }]} />);
    expect(wrapper.text()).to.equal('some header');
  });
});
