import React, { Component } from "react";
import * as echarts from "echarts";

class ScatterChart extends Component {
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
          console.log(res, "------>Scatter");
          this.setState({
            res: res.services
          });
          this.ScatterGraph();
          
        });
  
  }
  ScatterGraph = () => {
    var myGraph = document.getElementById("Scatter");
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
            text: "Scatter Chart"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: true },
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
                type: "scatter",
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
          <div id="Scatter" className="graphInfo" />
        </div>
      </div>
    );
  }
}

export default ScatterChart;
