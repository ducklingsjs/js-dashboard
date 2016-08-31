import React from 'react';
import ReactDOM from 'react-dom';

import 'application.scss';

import Dashboard from 'dashboard';

import Cell from '_components/Cell';
import Dummy from '_components/Dummy';

ReactDOM.render(
  (
    <Dashboard columns={4} rows={3}>
      <Cell>
        <Dummy />
      </Cell>
      <Cell>
        <Dummy />
      </Cell>
      <Cell>
        <Dummy />
      </Cell>
      <Cell rowSpan={2}>
        <Dummy />
      </Cell>

      <Cell>
        <Dummy />
      </Cell>
      <Cell rowSpan={2}>
        <Dummy />
      </Cell>
      <Cell>
        <Dummy />
      </Cell>

      <Cell>
        <Dummy />
      </Cell>
      <Cell colSpan={2}>
        <Dummy />
      </Cell>
    </Dashboard>
  ), document.querySelector('.js-app')
);
