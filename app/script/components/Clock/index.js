import React, {Component} from 'react';
import moment from 'moment-timezone';
import classnames from 'classnames';

import styles from './style.scss';

export default class Dashboard extends Component {
  render() {
    const {className, timezone} = this.props;

    console.log(timezone);

    const now = timezone ? moment.tz(timezone) : moment();
    const currentTimezone = timezone || moment.tz.guess();

    return (
      <div className={classnames(className, styles.main)}>
        <div>{now.format('HH:mm')}</div>
        <div>{now.format('DD/MM/YYYY')}</div>
        <div>{currentTimezone.split('/')[1]}</div>
      </div>
    );
  }
}
