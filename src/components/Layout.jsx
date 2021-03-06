import React from 'react';

import Header from './Header';
import Table from './table/Table';
import Form from './form/Form';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Grid',
      collection: {
        columns: [
          { header: 'User Name', field: 'user' },
          { header: 'Phone', field: 'phone' },
          { header: 'E-mail', field: 'email' },
        ],
        rows: [
          { user: 'Sergey', phone: '1112143', email: 'test@test.com' },
        ],
      },
    };

    this.removeFromCollection = this.removeFromCollection.bind(this);
    this.addToCollection = this.addToCollection.bind(this);
  }

  addToCollection(row) {
    const collection = { ...this.state.collection };
    collection.rows.push(row);
    this.setState({ collection });
  }

  removeFromCollection(i) {
    const collection = { ...this.state.collection };
    collection.rows.splice(i, 1);
    this.setState({ collection });
  }

  render() {
    const { title = '', collection = [] } = this.state;

    const valuesFormat = { phone: { expression: /(\d{3})(\d{3})(\d{1})/, substring: '$1-$2-$3' } };

    const valuesValidators = [{
      field: 'email',
      validate: (((value) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
      })),
      message: 'E-mail is invalid',
    }, {
      field: 'phone',
      validate: (((value) => {
        const re = /^\d+$/;
        return re.test(String(value).toLowerCase());
      })),
      message: 'Use only numbers',
    }];

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <Header text={title} />
            <Table
              collection={collection}
              valuesFormat={valuesFormat}
              removeRow={this.removeFromCollection}
            />
            <Form
              values={collection.columns}
              valuesValidators={valuesValidators}
              submit={this.addToCollection}
            />
          </div>
        </div>
      </div>
    );
  }
}
