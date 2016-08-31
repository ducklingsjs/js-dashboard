import React, {Component} from 'react';
import {forEach, map, times, constant, groupBy} from 'lodash';

import styles from './style.scss';

export default class Dashboard extends Component {
  render() {
    const {children, columns, rows} = this.props;

    const rowCounts = times(rows, constant(0));
    let currentRow = 0;

    const rowGroups = groupBy(children, function(item, index) {
      const {colSpan = 1, rowSpan = 1} = item.props;

      if (rowCounts[currentRow] + colSpan > columns) {
        currentRow++;
      }

      for (let i = 0; i < rowSpan; i++) {
        rowCounts[currentRow + i] += colSpan;
      }

      return currentRow;
    });

    return (
      <table cellSpacing={20} className={styles.main}>
        <tbody>
        {
          map(rowGroups, (colGroups, index) => {
            return (
              <tr key={index}>
                {
                  map(colGroups, (item) => {
                    return item;
                  })
                }
              </tr>
            )
          })
        }
        </tbody>
      </table>
    );
  }
}
