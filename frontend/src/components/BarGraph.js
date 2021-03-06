import React, {useState, useEffect} from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
  } from 'react-vis';

import { Slider } from 'antd';
import 'react-vis/dist/style.css';

const PointGraph = ({countrys, fetchedData, loadingData}) => {
    const [selectedCountryValue, setSelectedCountryValue] = useState(undefined);
    const [selectedCountry, setSelectedCountry] = useState(undefined);

    const [Ydomain, setYdomain] = useState([0,1]);
    const [Xdomain, setXdomain] = useState([0,1]);

    const [valuesCountrys, setValuesCountrys] = useState([]);

    const [limitsY, setLimitsY] = useState([0,0]);
    const [limitsX, setLimitsX] = useState([2004,0]);

    const [tickValues, setTickValues] = useState([]);
    
    const MODE = 'noWobble';

    useEffect(() => {
        if(!fetchedData || fetchedData.length === 0) {
            return;
        }

        let _valuesCountrys = [];

        setLimitsY([Number(fetchedData[0].value),0]);
        setLimitsX([Number(fetchedData[0].time),0]);
    
        let u=0;
        let _limitsX = [0,0];
        let _limitsY = [0,0];
        let _tickValues = [];

        countrys.map((_country) => {
            const {country} = _country;
            let dataContry = fetchedData.filter((data) => data.country === country);
            
            dataContry.map((data) => {
                let x = Number(data.time);
                let y = Number(data.value);

                _valuesCountrys.push({x, y, label: country});

                _tickValues.push(x);

                if(x < _limitsX[0]){
                    _limitsX[0] = x; 
                }
                if(x > _limitsX[1]){
                    _limitsX[1] = x; 
                }
                if(y < _limitsY[0]){
                    _limitsY[0] = y; 
                }
                if(y > _limitsY[1]){
                    _limitsY[1] = y; 
                }
                if(u === 0){
                    _limitsX[0] = x; 
                    _limitsY[0] = y; 
                    _limitsX[1] = x; 
                    _limitsY[1] = y; 
                }
                u++;
                return;
            });
            return;
        });

        setValuesCountrys(_valuesCountrys);

        setXdomain(_limitsX);
        setLimitsX(_limitsX);

        setYdomain(_limitsY);
        setLimitsY(_limitsY);

        setTickValues(new Array(...new Set(_tickValues)));


    },[fetchedData]);

    if(loadingData || !fetchedData || !fetchedData.length || !countrys.length) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>
            Country: {selectedCountry? selectedCountry : "No Country selected"}
            </h3>
            <h4>
            Value: {selectedCountryValue? selectedCountryValue : "No Country selected"}
            </h4>

            <div style={{
                width: "1200px",
                margin: "5px",
                marginLeft: "40px",
                }}>
                <Slider step={0.001} range defaultValue={[0,1]} min={0} max={1} onChange={(range) => {
                    let delta = limitsX[1] - limitsX[0];
                    setXdomain([(range[0]*delta) + limitsX[0], limitsX[1] - ((1 - range[1])*delta)]);
                }}/>
            </div>

            <div>

            <div style={{
                height: "600px",
                float: "left",
                margin: "5px",
            }}>
                <Slider step={0.001} range defaultValue={[0,1]} min={0} max={1} vertical onChange={(range) => {
                     let delta = limitsY[1] - limitsY[0];
                     setYdomain([(range[0]*delta) + limitsY[0], limitsY[1] - ( (1 - range[1])*delta)]);
                }} />
            </div>

            <div
            style={{
                float: "left",
            }}>
          <XYPlot
          className="clustered-stacked-bar-chart-example"
          xType="ordinal"
          stackBy="y"
          width={1200}
          height={600}
        >
          <DiscreteColorLegend
            style={{position: 'absolute', left: '50px', top: '10px'}}
            orientation="horizontal"
            items={countrys.map((country) => {
                return  (
                    {
                        title: country.country,
                        color: '#12939A'
                    })
            })}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {
              countrys.map((country) => {
                  return  (
                  <VerticalBarSeries
                    yDomain={Ydomain}
                    xDomain={Xdomain}
                    cluster={country}
                    data={valuesCountrys.filter((c,i) => c.label === country.country)}
                />)
              })
          }
        </XYPlot>
            </div>
            </div>
        </div>
      );
}

export default PointGraph;