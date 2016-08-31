import React from 'react';
import ReactDOM from 'react-dom';

import 'application.scss';

import Dashboard from 'dashboard';

import Cell from 'components/Cell';
import Empty from 'components/Empty';
import Image from 'components/Image';

import logo from 'images/logo.svg';

ReactDOM.render(
  (
    <Dashboard columns={4} rows={3}>
      <Cell>
        <Image src={logo} />
      </Cell>
      <Cell>
        <Empty />
      </Cell>
      <Cell>
        <Empty />
      </Cell>
      <Cell rowSpan={2}>
        <Empty />
      </Cell>

      <Cell>
        <Empty />
      </Cell>
      <Cell rowSpan={2}>
        <Empty />
      </Cell>
      <Cell>
        <Empty />
      </Cell>

      <Cell>
        <Empty />
      </Cell>
      <Cell colSpan={2}>
        <Empty />
      </Cell>
    </Dashboard>
  ), document.querySelector('.js-app')
);
