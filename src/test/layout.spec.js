import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Table from '../components/table/Table';
import Form from '../components/form/Form';


describe('<Layout />', () => {
  it('contains an <Header/> component', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('contains an <Table/> component', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.find(Table)).to.have.length(1);
  });

  it('contains an <Form/> component', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.find(Form)).to.have.length(1);
  });

  it('should have an initial title state', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.state().title).to.equal('Grid');
  });

  it('should have an props for submit and values', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.props().submit).to.be.defined;
    expect(wrapper.props().values).to.be.defined;
  });

  it('should have an initial collection state', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.state().collection).to.be.an('object');
  });

  it('should have collections columns and rows properties be defined as array', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.state('collection').columns).to.be.an('array');
    expect(wrapper.state('collection').rows).to.be.an('array');
  });

  it('should push row to collections state on addToCollection trigger', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.state('collection').rows).to.have.length(1);
    wrapper.instance().addToCollection({});
    expect(wrapper.state('collection').rows).to.have.length(2);
  });

  it('should remove row from collection state on removeFromCollection trigger', () => {
    const wrapper = mount(<Layout/>);
    expect(wrapper.state('collection').rows).to.have.length(1);
    const index = wrapper.state('collection').rows.length - 1;
    wrapper.instance().removeFromCollection(index);
    expect(wrapper.state('collection').rows).to.have.length(0);
  });
});
