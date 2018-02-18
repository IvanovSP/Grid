import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Trow from '../components/table/Trow';

const cells = { cellKey: 'cellValue' };
const columns = [{ header: 'cell key', field: 'cellKey' }];

describe('<Trow />', () => {
  it('should have cells, columns, valuesFormat props', () => {
    const wrapper = shallow(<Trow/>);
    expect(wrapper.props().cells).to.be.defined;
    expect(wrapper.props().columns).to.be.defined;
    expect(wrapper.props().valuesFormat).to.be.valuesFormat;
  });

  it('should have tr element if collection passed as props', () => {
    const wrapper = shallow(<Trow cells={cells} columns={columns} />);
    expect(wrapper.find('tr')).to.have.length(1);
  });

  it('should render cellData to cell when renders', () => {
    const wrapper = shallow(<Trow cells={cells} columns={columns} />);
    const td = wrapper.find('tr');
    expect(td.text()).to.equal('cellValue');
  });

  it('should render empty cell if columns objects array has empty object', () => {
    const wrapper = shallow(<Trow columns={[{}]} />);
    const td = wrapper.find('tr');
    expect(td.text()).to.equal('');
  });
});
