import React from 'react';
import { Chart } from "react-google-charts";

class Dashboard extends React.Component {
  
         render(){
             return(
                 <div>
                     <div className="d-flex align-items-center justify-content-center h-100">
            <div className="charts-css">
                <Chart
                    width={'600px'}
                    height={'600px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Work', 11],
                        ['Eat', 2],
                        ['Commute', 2],
                        ['Watch TV', 2],
                        ['Sleep', 7],
                    ]}
                    options={{
                        title: 'My Daily Activities',
                        // Just add this option
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />

            </div>
            <div className="charts-css">
                <Chart
                    width={'600px'}
                    height={'600px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Work', 11],
                        ['Eat', 2],
                        ['Commute', 2],
                        ['Watch TV', 2],
                        ['Sleep', 7],
                    ]}
                    options={{
                        title: 'My Daily Activities',
                        // Just add this option
                        pieHole: 0.4,
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
            </div>
                 </div>
                 </div>
             );
         } 
}  
        



export default Dashboard;