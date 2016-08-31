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
    const {timezone, displayName} = this.props;
    let timezoneName;

    if (displayName) {
      timezoneName = displayName;
    } else {
      const timezone = timezone || moment.tz.guess();
      timezoneName = timezone.split('/')[1];
    }

    this.setState({
      timezoneName,
      now: timezone ? moment.tz(timezone) : moment()
    });
  }

  render() {
    const {className} = this.props;
    const {now, timezoneName} = this.state;

    return (
      <div className={classnames(className, styles.main)}>
        <div>{now.format('HH:mm')}</div>
        <div>{now.format('DD/MM/YYYY')}</div>
        <div>{timezoneName}</div>
      </div>
    );
  }
}
