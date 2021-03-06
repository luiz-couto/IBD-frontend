import React, {useState, useEffect} from 'react';
import {XYPlot, MarkSeries, LabelSeries, YAxis, XAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';
import { Slider } from 'antd';
import 'react-vis/dist/style.css';

const MarkSeriesGraph = ({countrys, fetchedData, loadingData}) => {
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
                let x = Math.abs(Number((data.country[0]).charCodeAt(0) - 50)) + Math.abs(Number((data.country[data.country.length-1]).charCodeAt(0) - 50));
                let y = Math.abs(Number((data.country[1]).charCodeAt(0) - 50)) + Math.abs(Number((data.country[data.country.length-2]).charCodeAt(0) - 50));

                let size = Math.abs(Number(data.value));
                let label = data.country + '(' + data.time + ')';
                _valuesCountrys.map((countryData) => {
                    let distance = Math.sqrt(Math.pow(Math.abs(countryData.x - x),2) + Math.pow(Math.abs(countryData.y - y),2));
                    let colisionAmmount = (countryData.size + size) - distance;
                    if(colisionAmmount < 0) {
                        x += Math.abs(countryData.x - x)/50;
                        y += Math.abs(countryData.y - y)/50;
                    }
                    console.log("AAAAAA");
                    
                    console.log((countryData.size + size) - distance);
                });

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
                _valuesCountrys.push({x, y, size, label, style: {fontSize: 8, yOffset: -10, xOffset: 100}});
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
        <div style={{
            backgroundColor: "white",
            height: "600px",
            width: "1100px",

            }}>
            <h3>
            Country: {selectedCountry? selectedCountry : "No Country selected"}
            </h3>
            <h4>
            Value: {selectedCountryValue? selectedCountryValue : "No Country selected"}
            </h4>

            <div style={{
                width: "1000px",
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
                height: "500px",
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
            {/* YDomain = [94,126] & XDomain = [62,98] for good range - slider not working yet */}
            <XYPlot width={1000} height={500}>
                {/* <VerticalGridLines
                    yDomain={Ydomain}
                    xDomain={Xdomain}
                />
                <HorizontalGridLines  
                    yDomain={Ydomain}
                    xDomain={Xdomain}
                /> */}

                <MarkSeries 
                    yDomain={Ydomain}
                    xDomain={Xdomain}
                    animation={MODE}
                    strokeWidth={2}
                    sizeRange={[0, 50]}
                    data={valuesCountrys}
                    onValueMouseOver={(d) => {
                        setSelectedCountry(d.label);
                        setSelectedCountryValue(d.size/100);
                    }
                    
                } 
                />

                <LabelSeries 
                    yDomain={Ydomain}
                    xDomain={Xdomain}
                    onValueMouseOver={(d) => {
                            setSelectedCountry(d.label);
                            setSelectedCountryValue(d.size/100);
                        }
                    } 
                    animation={true}
                    data={valuesCountrys} 
                />
    
                {/* <YAxis yDomain={Ydomain}/>
                <XAxis tickLabelAngle={-45} height={400} tickValues={tickValues} tickFormat={(v) => v} xDomain={Xdomain}/> */}

                {/* <XAxis xDomain={Xdomain}/> */}
            </XYPlot>
            </div>
            </div>
        </div>
      );
}

export default MarkSeriesGraph;