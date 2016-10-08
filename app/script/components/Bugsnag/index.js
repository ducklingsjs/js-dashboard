import React, {Component} from 'react';
import classnames from 'classnames';
import {sortBy} from 'lodash';

import styles from './style.scss';

const url = process.env.APP_ENV !== 'development'
  ? '/bugsnag.json'
  : 'http://localhost:1423/bugsnag/';

export default class Bugsnag extends Component {
  componentWillMount() {
    this.setState({
      projects: [{
        name: 'HPB CMS',
        score: '4.0',
        coverage: 99
      }, {
        name: 'HPB CMS',
        score: '4.0',
        coverage: 99
      }, {
        name: 'HPB CMS',
        score: '4.0',
        coverage: 99
      }, {
        name: 'HPB CMS',
        score: '4.0',
        coverage: 99
      }, {
        name: 'HPB CMS',
        score: '4.0',
        coverage: 99
      }, {
        name: 'HPB CMS',
        score: '4.0',
        coverage: 99
      }]
    });

    setInterval(this.updateData.bind(this), 30000);
    this.updateData();
  }

  async updateData() {
    const res = await fetch(url);
    const data = await res.json();
    const projects = sortBy(data.data, (item) => -item.errors.opened);
    this.setState({
      projects: projects.map((item) => ({
        name: item.name,
        opened: item.errors.opened,
        total: item.errors.total
      }))
    });
  }

  render() {
    const {className} = this.props;
    var projects = this.state.projects.map((project) => {
      return (
        <div className={styles.item}>
          <div className={styles.name}>{project.name}</div>
          <div className={styles.score}>{project.opened}/{project.total}</div>
        </div>
      );
    });

    return (
      <div className={classnames(className, styles.main)}>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.name}>Project</div>
            <div className={styles.score}>Opened/Total</div>
          </div>
          {
            projects.length
              ? projects
              : <div className={styles.loading}>Loading data...</div>
          }
        </div>
        <div className={styles.footer}>
          <div>Bugsnag</div>
        </div>
      </div>
    );
  }
}
