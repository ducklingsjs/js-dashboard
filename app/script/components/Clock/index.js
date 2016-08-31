import React, {Component} from 'react';
import moment from 'moment-timezone';
import classnames from 'classnames';

import styles from './style.scss';

export default class Dashboard extends Component {
  componentWillMount() {
    this.timeTick();

    setInterval(this.timeTick.bind(this), 1000 /* ms */);
  }

  timeTick() {
    const {timezone} = this.props;

    this.setState({
      now: timezone ? moment.tz(timezone) : moment(),
      currentTimezone: timezone || moment.tz.guess()
    });
  }

  render() {
    const {className} = this.props;
    const {now, currentTimezone} = this.state;

    return (
      <div className={classnames(className, styles.main)}>
        <div>{now.format('HH:mm')}</div>
        <div>{now.format('DD/MM/YYYY')}</div>
        <div>{currentTimezone.split('/')[1]}</div>
      </div>
    );
  }
}
