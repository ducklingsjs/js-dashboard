import React, {Component} from 'react';
import moment from 'moment';
import classnames from 'classnames';
import ChartistGraph from 'react-chartist';

import styles from './style.scss';

export default class ProductiveTime extends Component {
  componentWillMount() {
    this.setState({
      dayEntries: [{
        date: moment(),
        time: 24
      }, {
        date: moment().subtract(1, 'days'),
        time: 30
      }, {
        date: moment().subtract(2, 'days'),
        time: 26
      }, {
        date: moment().subtract(3, 'days'),
        time: 32
      }, {
        date: moment().subtract(4, 'days'),
        time: 42
      }, {
        date: moment().subtract(5, 'days'),
        time: 35
      }]
    });
  }

  getGraphData(entries = []) {
    return {
      labels: entries.map((entry) => entry.date.format('ddd')),
      series: [entries.map((entry) => entry.time)]
    }
  }

  render() {
    const {className} = this.props;
    const graphData = this.getGraphData(this.state.dayEntries);
    const graphOptions = {
      axisY: {
        labelOffset: {
          x: 0,
          y: 13
        },
        scaleMinSpace: 20,
      },
      height: '200px'
    }

    return (
      <div className={classnames(className, styles.main)}>
        <div className={styles.content}>
          <ChartistGraph type="Bar" data={graphData} options={graphOptions} height="200px" width="600px"/>
        </div>
        <div className={styles.footer}>
          <div>WIP: JS Productive Time</div>
        </div>
      </div>
    );
  }
}
