import React, {Component} from 'react';
import moment from 'moment-timezone';
import classnames from 'classnames';

import styles from './style.scss';
import themeStyles from 'themes.scss';

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
      <div className={classnames(className, styles.main, themeStyles.purpleMain)}>
        <div className={styles.content}>
          <div className={styles.weekDay}>{now.format('dddd')}</div>
          <div className={styles.time}>{now.format('HH:mm')}</div>
          <div className={styles.date}>{now.format('DD-MM-YYYY')}</div>
        </div>
        <div className={classnames(styles.footer, themeStyles.purpleFooter)}>
          <div>{timezoneName}</div>
        </div>
      </div>
    );
  }
}
