import React, { Component } from 'react'
import BarChart from './Charts/BarChart/BarChart';
import LineGraph from './Charts/LineChart/LineGraph';
import ScatterChart from './Charts/ScatterChart/ScatterChart';
import './styles.css';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <>
            <div className="application">
                <div className="navBar">
                    <div className="col-sm-2">
                    <p className="nameHeader">Siemens - Mindsphere</p> 

                    </div>
                </div>
                <br /><br /><br /><br />
                <div className="body">
                    <div className="charts"> 
                        <div className="col-sm-6 graph">
                            <LineGraph />
                        </div>
                        <div className="col-sm-6 graph">
                            <BarChart />
                        </div>
                    </div>
                    <div className="charts"> 
                        <div className="col-sm-6 graph">
                            <ScatterChart />
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
           
            </>
        )
    }
}
