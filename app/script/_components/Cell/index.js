import React, {Component} from 'react';
import classnames from 'classnames';

import styles from './style.scss';

export default class Cell extends Component {
  render() {
    const {className, childClassName, children, rowSpan = 1, colSpan = 1} = this.props;

    return (
      <td rowSpan={rowSpan} colSpan={colSpan} className={classnames(styles.cell, className)}>
        <div className={classnames(styles.content, childClassName)}>
          {children}
        </div>
      </td>
    );
  }
}
