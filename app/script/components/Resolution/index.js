import React, {Component} from 'react';
import moment from 'moment';
import classnames from 'classnames';
import ChartistGraph from 'react-chartist';

import styles from './style.scss';

export default class ProductiveTime extends Component {
  render() {
    const {className} = this.props;
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;

    return (
      <div className={classnames(className, styles.main)}>
        <div className={styles.content}>
          <div className={styles.item}>Inner height: {innerHeight}</div>
          <div className={styles.item}>Inner width: {innerWidth}</div>
        </div>
        <div className={styles.footer}>
          <div>WIP: Resolution</div>
        </div>
      </div>
    );
  }
}
