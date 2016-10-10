import React, {Component} from 'react';
import moment from 'moment';
import classnames from 'classnames';

import styles from './style.scss';

const url = `http://${window.location.hostname}/goodbits.json`;

export default class Newsletter extends Component {
  componentWillMount() {
    this.setState({data: null});
    setInterval(this.updateData.bind(this), 30000);
    this.updateData();
  }

  async updateData() {
    const res = await fetch(url);
    const data = await res.json();
    this.setState({data});
  }

  render() {
    const {className} = this.props;
    const innerHeight = window.innerHeight;
    const innerWidth = window.innerWidth;

    const {data} = this.state;

    return (
      <div className={classnames(className, styles.main)}>
        <div className={styles.content}>
          {
            data ? (
              <div>
                <div className={styles.popular}>
                  <div className={styles.infoTitle}>Most popular link:</div>
                  <div className={styles.popularTitle}>{data.popular.title}</div>
                  <div className={styles.popularUrl}>{data.popular.url}</div>
                </div>
                <div className={styles.info}>
                  <div className={styles.infoTitle}>Subscribers:</div>
                  <div className={styles.infoValue}>{data.subscribers}</div>
                </div>
                <div className={styles.info}>
                  <div className={styles.infoTitle}>Next issue in:</div>
                  <div className={styles.infoValue}>{moment(data.nextIssue).fromNow(true)}</div>
                </div>
              </div>
            ) : (
              <div className={styles.loading}>Loading data...</div>
            )
          }
        </div>
        <div className={styles.footer}>
          <div>#FrontendCookies</div>
        </div>
      </div>
    );
  }
}
