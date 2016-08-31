import React from 'react';
import ReactDOM from 'react-dom';

import 'application.scss';

import Dashboard from 'dashboard';

import refresher from 'services/refresher';

import Cell from 'components/Cell';
import Empty from 'components/Empty';
import Image from 'components/Image';
import Clock from 'components/Clock';

import logo from 'images/logo.svg';

refresher(5000 /* ms */);

ReactDOM.render(
  (
    <Dashboard columns={4} rows={3}>
      <Cell>
        <Image src={logo} />
      </Cell>
      <Cell>
        <Clock timezone="Europe/Zagreb" />
      </Cell>
      <Cell>
        <Clock timezone="America/Havana" />
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
