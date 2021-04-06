import React, { Component } from "react";
import * as echarts from "echarts";

class LineGraph extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount () {
    fetch(
        "https://iot-bluedoc.herokuapp.com/getGraphs",
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(res => {
          console.log(res, "------>Line");
          this.setState({
            res: res.services
          });
          this.LineGraph();
          
        });
  
  }
  LineGraph = () => {
    var myGraph = document.getElementById("Line");
    var myChart = echarts.init(myGraph);
    var option;
    var xData = [];
    var yData = [];
    this.state.res.map(obj => {
        xData.push(obj.date);
        yData.push(obj.count);
    });
    option = {
        title: {
            text: "Line Chart"
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: true },
                // magicType: { show: true, type: ["line", "bar"] },
                // restore: { show: true },
                saveAsImage: { show: true }
            }
            
        },
        xAxis: {
            type: "category",
            data: xData
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: yData,
                type: "line",
                // smooth: true,

            }
        ]
    };
    
    option && myChart.setOption(option);
    };

  render() {
    return (
      <div>
        <div>
          <div id="Line" style={{ width: 700, height: 400 }} />
        </div>
      </div>
    );
  }
}

export default LineGraph;
