import React, {Component} from 'react';
import moment from 'moment-timezone';
import classnames from 'classnames';

import styles from './style.scss';
import themeStyles from 'themes.scss';

export default class Dashboard extends Component {
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
  }

  render() {
    const {className} = this.props;
    var projects = this.state.projects.map((project) => {
      return (
        <div className={styles.item}>
          <div className={styles.name}>{project.name}</div>
          <div className={styles.score}>{project.score}/{project.coverage}</div>
        </div>
      );
    });

    return (
      <div className={classnames(className, styles.main, themeStyles.greyMain)}>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.name}>Project</div>
            <div className={styles.score}>GPA/Cov</div>
          </div>
          {projects}
        </div>
        <div className={styles.footer}>
          <div>Code Climate</div>
        </div>
      </div>
    );
  }
}
