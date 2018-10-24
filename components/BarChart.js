import React from 'react';
import { StyleSheet, View, ART, Dimensions, TouchableWithoutFeedback, Text as TextReact } from 'react-native';
import { connect } from 'react-redux'
import moment from 'moment'

const {
  Surface,
  Group,
  Rectangle,
  ClippingRectangle,
  LinearGradient,
  Shape,
  Text,
  Path,
  Transform
} = ART;

import {
    max,
    ticks
} from 'd3-array'

import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as format from 'd3-format';
import * as axis from 'd3-axis';
import * as path from 'd3-path';
const d3 = {
  scale,
  shape,
  format,
  axis,
  path,
};

import {
  scaleLinear,
  scaleBand,
  scaleTime
}  from 'd3-scale';

const colours = {
  black: 'black',
  blue: 'steelblue',
  brown: 'brown'
}



class Bar extends React.Component {

  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
    this.drawLine = this.drawLine.bind(this);            
    this.getRandomColor = this.getRandomColor.bind(this);
  };

  getRandomColor() {
    return '#' + Math.random().toString(16).substr(-6);
  }               

  drawLine(startPoint, endPoint) {
    var path = d3.path.path();
    path.lineTo(startPoint, endPoint);
    return path;
  }

  createBarChart(x, y, w, h) {
    var path = d3.path.path();
    path.rect(x, y, w, h);
    return path;
  }

  render() {
    let days = ['Mon', 'Tue', 'Wed', 'Thu',  'Fri', 'Sat', 'Sun']
    let data = [
      {frequency: 0, letter: 'Mon'},
      {frequency: 0, letter: 'Tue'},
      {frequency: 0, letter: 'Wed'},
      {frequency: 0, letter: 'Thu'},
      {frequency: 0, letter: 'Fri'},
      {frequency: 0, letter: 'Sat'},
      {frequency: 0, letter: 'Sun'}
    ];

    this.props.dataPerWeek.forEach(vehicle => {
      for(let i = 0; i < data.length ; i++) {
        if(moment(vehicle.createdAt).day()-1 === i) {
          data[i].frequency+=1
        }
      }
    })

    // alert(JSON.stringify(data[2].frequency))


    const screen = Dimensions.get('window');
    const margin = {top: 10, right: 25, bottom: 200, left: 25}
    const width = 270
    const height = 270

    const x = d3.scale.scaleBand()
        .rangeRound([0, width])
        .padding(0.1)
        .domain(data.map(d => d.letter))

    const maxFrequency = max(data, d => d.frequency)

    const y = d3.scale.scaleLinear()
        .rangeRound([height, 0])
        .domain([0, maxFrequency])

    const firstLetterX = x(data[0].letter)
    const secondLetterX = x(data[1].letter)
    const lastLetterX = x(data[data.length - 1].letter)
    const labelDx = (secondLetterX - firstLetterX) / 2

    const bottomAxis = [firstLetterX - labelDx, lastLetterX + labelDx]

    const bottomAxisD = d3.shape.line()
                            .x(d => d + labelDx)
                            .y(() => 0)
                            (bottomAxis)

    const leftAxis = ticks(0, maxFrequency, 5)

    const leftAxisD = d3.shape.line()
                        .x(() => bottomAxis[0] + labelDx)
                        .y(d => y(d) - height)
                        (leftAxis)
    const notch = 5
    const labelDistance = 9
    const emptySpace = "";
    return(
        <View style={{maxHeight: 320}}>
          <Surface width={screen.width} height={screen.height}>
            <Group x={margin.left} y={margin.top}>
              <Group x={0} y={height}>
                <Group key={-1}>
                  <Shape d={bottomAxisD} stroke={colours.black} key="-1"/>
                  {
                    data.map((d, i) =>(
                      <Group
                          x={x(d.letter) + labelDx}
                          y={0}
                          key={i + 1}
                      >
                        <Shape d={this.drawLine(0, notch)} y2={notch} stroke={colours.black}/>
                        <Text
                          y={labelDistance}
                          x={-12}
                          fill={colours.black}
                          font="14px helvetica"
                        >
                          {d.letter}
                        </Text>
                      </Group>
                    ))
                  }
                </Group>
                <Group key={-2} >
                  <Shape stroke={colours.black} d={leftAxisD} key="-1"/>
                  {
                    leftAxis.map((d, i) => (
                      <Group x={0} y={y(d)-height} key={i + 1}>
                        <Shape d={this.drawLine(notch, 0)} stroke={colours.black}/>
                          <Text
                            fill={colours.black}
                            x={-20}
                            y={-labelDistance}
                            font="14px helvetica"
                          >
                            {d + emptySpace}
                          </Text>
                      </Group>
                    ))
                  }
                </Group>
                {
                  data.map((d, i) => (
                    <TouchableWithoutFeedback key={i} >
                      <Shape
                        d={this.createBarChart(x(d.letter), y(d.frequency) - height, x.bandwidth(), height - y(d.frequency))}
                        fill={this.getRandomColor()}
                      >
                      </Shape>
                    </TouchableWithoutFeedback>
                  ))
                }
              </Group>
            </Group>
          </Surface>
        </View>
    )
  }
}

const styles = {
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(Bar);