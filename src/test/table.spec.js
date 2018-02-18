import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Table from '../components/table/Table';
import Thead from '../components/table/Thead';
import Tbody from '../components/table/Tbody';
import Trow from '../components/table/Trow';

describe('<Table />', () => {
  it('contains an <Tbody/> component', () => {
    const wrapper = mount(<Table/>);
    expect(wrapper.find(Tbody)).to.have.length(1);
  });

  it('contains an <Thead/> component', () => {
    const wrapper = mount(<Table/>);
    expect(wrapper.find(Thead)).to.have.length(1);
  });

  it('contains an <Trow/> component if rows array from collection state not empty', () => {
    const wrapper = mount(<Table collection={{ rows : [{}] }} />);
    expect(wrapper.find(Trow)).to.have.length(1);
  });

  it('should have props for collection, valuesFormat, removeRow', () => {
    const wrapper = mount(<Table />);
    expect(wrapper.props().collection).to.be.defined;
    expect(wrapper.props().valuesFormat).to.be.defined;
    expect(wrapper.props().removeRow).to.be.defined;
  });
});
