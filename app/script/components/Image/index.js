import React, {Component} from 'react';
import classnames from 'classnames';

import styles from './style.scss';

export default class Dashboard extends Component {
  render() {
    const {className, children, src} = this.props;
    const style = {
      backgroundImage: `url(${src})`
    };

    return (
      <div
        className={classnames(className, styles.main)}
        style={style} />
    );
  }
}
