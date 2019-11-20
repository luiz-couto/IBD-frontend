import React, {useState, useEffect} from 'react';
import { query } from "../../utils/database/query";
import PointGraph from "../../components/PointGraph";
import LineSeries from "../../components/LineGraph";

import SiderMenu from '../../components/SiderMenu';
import { AutoComplete, Layout, Input, Icon, Typography, Col, Spin, Menu } from 'antd';

import 'react-vis/dist/style.css';

const { Content } = Layout;



const CommunicationAndInformation = () => {
    const [indicators, setIndicators] = useState([]);
    const [countrys, setCountrys] = useState([]);
    const [selectedIndicator, setSelectedIndicator] = useState("");
    const [loadingData, setLoadingData] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        query(`SELECT indicator FROM comunication_and_information GROUP BY indicator`).then((data) => {
            setIndicators(data.rows);
            setSelectedIndicator(data.rows[0].indicator)
        });
        query(`SELECT Country FROM comunication_and_information GROUP BY Country`).then((data) => {
            setCountrys(data.rows);
        });
    },[]);


    useEffect(() => {
        if(selectedIndicator === ""){
            return;
        }
        setLoadingData(true);
        query(`SELECT country, time, value FROM comunication_and_information WHERE Indicator='${selectedIndicator}'`).then((data) => {
            setLoadingData(false);
            setFetchedData(data.rows);
        });

    }, [selectedIndicator]);

    return (
        <div>
                {/* <img src={countryImageData} style={{ width: '100vw', position:'absolute',
                height: 'auto', maxHeight: '100vh', backgroundSize: 'cover' }} /> */}
                <Layout>
                    <SiderMenu color={'rgb(0,0,0)'} selectedItem={["3"]}/>
                    <Layout>
                        <Content>
                        <div style={{ backgroundColor: 'white' }}>
                            <h1>
                                Communication and Information
                            </h1>
                            Indicator: <select onChange={(event) => {setSelectedIndicator(event.target.value)}} name="select">
                                {
                                    indicators.map((indicatorObj) => {
                                        const { indicator } = indicatorObj;
                                        return <option key={indicator} value={indicator}> {indicator} </option> 
                                    })
                                }
                            </select>
                            <div style={{marginBottom: "40px"}}/>
                            <PointGraph fetchedData={fetchedData} countrys={countrys} loadingData={loadingData}/>
                            <LineSeries fetchedData={fetchedData} countrys={countrys} loadingData={loadingData}/>

                            {/* <BarGraph fetchedData={fetchedData} countrys={countrys} loadingData={loadingData}/> */}

                        </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        
    )
};

export default CommunicationAndInformation;