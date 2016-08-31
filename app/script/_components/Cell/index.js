import React, {Component} from 'react';
import classnames from 'classnames';

import styles from './style.scss';

export default class Cell extends Component {
  render() {
    const {className, children, rowSpan = 1, colSpan = 1} = this.props;

    return (
      <td rowSpan={rowSpan} colSpan={colSpan} className={classnames(styles.cell)}>
        <div className={styles.content}>
          {children}
        </div>
      </td>
    );
  }
}
