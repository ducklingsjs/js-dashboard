import React, {Component} from 'react';
import moment from 'moment';
import classnames from 'classnames';
import ChartistGraph from 'react-chartist';

import styles from './style.scss';

function format(time) {
  const t = typeof time === 'string' ? new Date(time) : time;
  const now = Date.now();
  const diff = now - t.getTime();
  let s = Math.floor(diff / 1000);
  const m = Math.floor(s / 60);
  s -= m * 60;
  if (s < 10) {
    s = '0' + s;
  }
  return `${m}:${s}`;
}

class Item extends Component {
  render() {
    const {item} = this.props;

    return (
      <div className={classnames(styles.item, styles[item.type])}>
        <div className={styles.project}>{item.project}</div>
        <div className={styles.environment}>{item.environment}</div>
        <div className={styles.message}>{item.message}</div>
        <div className={styles.author}>{item.author}</div>
        <div className={styles.waitingTime}>
          {
            item.waitingTime ? format(item.waitingTime) : null
          }
        </div>
      </div>
    );
  }
}

export default class Semaphore extends Component {
  componentWillMount() {
    this.setState({
      lastUpdate: new Date(),
      current: [
        {
          type: 'build',
          project: 'There Be Tigers',
          environment: 'master',
          message: 'Some minor fix',
          author: 'Šafo',
          id: '1242343'
        }, {
          type: 'build',
          project: 'There Be Tigers',
          environment: 'develop',
          message: 'Some minor fix',
          author: 'Šafo',
          id: '3fa34rq'
        }
      ],
      blocked: [
        {
          type: 'deploy',
          project: 'There Be Tigers',
          environment: 'production',
          message: 'Some minor fix',
          author: 'Šafo',
          id: 'weferh4w5'
        }, {
          type: 'deploy',
          project: 'There Be Tigers',
          environment: 'staging',
          message: 'Some minor fix',
          author: 'Šafo',
          id: 'fwefq34twrfe'
        }, {
          type: 'build',
          project: 'Productive App',
          environment: 'master',
          message: 'Some minor fix',
          author: 'Lučin',
          id: 't43wrgdh'
        }, {
          type: 'build',
          project: 'Awesome Photos',
          environment: 'develop',
          message: 'Some minor fix',
          author: 'Kuki',
          id: 'ewfersfgaer',
          waitingTime: '2016-10-17T17:11:00.000Z'
        }
      ],
      waiting: [
        {
          type: 'deploy',
          project: 'Awesome Photos',
          environment: 'staging',
          message: 'Some minor fix with a long commit message',
          author: 'Kuki',
          startedAt: '',
          id: 'rgsrths'
        }
      ]
    });

    setInterval(() => {
      this.setState({
        now: Date.now()
      })
    }, 1000);
  }

  render() {
    const {className} = this.props;

    return (
      <div className={classnames(className, styles.main)}>
        <div className={styles.timeline}>
          <div className={styles.waiting}>
            {
              this.state.waiting.map((item) => <Item item={item} key={item.id} />)
            }
          </div>
          <div className={styles.blocked}>
            {
              this.state.blocked.map((item) => <Item item={item} key={item.id} />)
            }
          </div>
          <div className={styles.current}>
            {
              this.state.current.map((item) => <Item item={item} key={item.id} />)
            }
          </div>
        </div>
        <div className={styles.updateTime}>{format(this.state.lastUpdate)}</div>
        <div className={styles.footer}>
          <div>Semaphore</div>
        </div>
      </div>
    );
  }
}
