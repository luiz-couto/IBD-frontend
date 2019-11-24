import React from 'react';

import SiderMenu from '../../components/SiderMenu';
import './styles.css';

import analyze from 'rgbaster';
import { AutoComplete, Layout, Input, Icon, Typography, Col, Spin, Menu } from 'antd';

import { query } from "../../utils/database/query";

const { Content } = Layout;
const { Text } = Typography;

class SearchCountry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(0,0,0)',
            loading: true,
            countryImage: "",
            countryList: [],
            selectedCountry: 'Brazil',
            current: 'search',
            countryData: {},
        };
    }

    getCountryData(countryName) {
        let population, hdi, lifeExpectancy, expectedYearsSchooling, gniPerCapita, infantMortality;
        let wars;
        let sql = `SELECT * FROM demographic_and_socio_economic WHERE country='` + countryName + `'` + `AND indicator='` + 'Total population ' + `'`;
        query(sql).then((data)=> {
            if(data.rows[0]){
                let index = data.rowCount - 1
                population = data.rows[index].value;
            }
        });

        sql = `SELECT warname, combatfatalities FROM interstate_wars WHERE statename='` + countryName + `'`;
        query(sql).then((data)=>{
            if(data.rows){
                wars = data.rows;
            }
        })

        sql = `SELECT * FROM countries_of_the_world WHERE countryname='` + countryName + `'`;
        query(sql).then((data)=> {
            if(data.rows[0]){
                hdi = data.rows[0].hdi;
                lifeExpectancy = data.rows[0].lifeexpectancy;
                expectedYearsSchooling = data.rows[0].expectedyearsschooling;
                gniPerCapita = data.rows[0].gnipercapita;
            }
        }).then(() => {
            this.setState({countryData:
                {   
                    population: population,
                    hdi: hdi,
                    lifeExpectancy: lifeExpectancy,
                    expectedYearsSchooling: expectedYearsSchooling,
                    gniPerCapita: gniPerCapita,
                    wars: wars
                }
            });
        })
        
    }

    searchCountry(countryName) {
        this.getCountryData(countryName);
        let sql = `SELECT data FROM IMAGES WHERE country='` + countryName + `'`;
        query(sql).then((data) => {
            if (data) {
                this.setState({
                    loading: true,
                    selectedCountry: countryName,
                    countryImage: data.rows[0].data,
                })
            }
        });
    }

    componentDidMount(){
        // Request image from DB
        let sql = `SELECT data FROM IMAGES WHERE country='` + this.state.selectedCountry + `'`;
        query(sql).then((data) => {
            if (data) {
                this.setState({
                    countryImage: data.rows[0].data,
                })
            }
        });

        let countryList = [];
        
        query(`SELECT country FROM IMAGES`).then((data) => {
            if (data) {
                data.rows.map((row) => {
                    countryList.push(row.country);
                })
                this.setState({ countryList: countryList })
            }
        });

        this.getCountryData(this.state.selectedCountry);
    }

    async getColor() {
        let countryImageData = "data:image/jpeg;base64," + this.state.countryImage;
        const result = await analyze(countryImageData, { ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] });
        this.setState({ color: result[0].color, loading: false });
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    };

    render() {

        // let sql = `SELECT warname, combatfatalities FROM interstate_wars WHERE statename='` + this.state.selectedCountry + `'`;
        // query(sql).then((data) => {
        //     console.log(data);
        // })

        let { loading, color } = this.state;


        let countryImageData = "data:image/jpeg;base64," + this.state.countryImage;
        if (this.state.countryImage !== '' && this.state.countryList !== [] && loading === true) {
            try {
                this.getColor();
            } catch(e){
                console.log(e);
            }
        }
        console.log(this.state.countryData);
        return (
            loading ? 
            <Spin size='large' style={{ marginLeft: '50%', marginTop: '10%' }}/>
            :

            

            <div>
                <img src={countryImageData} alt="background" style={{ width: '100vw', position:'absolute',
                height: 'auto', maxHeight: '100vh', backgroundSize: 'cover' }} />
                <Layout>
                    <SiderMenu color={color} selectedItem={["1"]}/>
                    <Layout>
                        <Content>
                            <div style={{ width: '10vw', float: 'right', marginTop: '4vh', height: '10vh' }}>
                            <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode='vertical-right' theme='dark' >
                                <Menu.Item key='search' style={{  }} >
                                    <Icon type='search' />
                                    Search
                                </Menu.Item>
                           
                            <Menu.Item key='info'  style={{ }}>
                                <Icon type="appstore" />
                                    About It
                                </Menu.Item>
                            </Menu>
                            </div>
                        <Col className='container'>
                            { this.state.current === 'search' ?
                            <>
                                <Text className='title'>{this.state.selectedCountry}</Text>
                                <AutoComplete
                                    dataSource={this.state.countryList}
                                    className='autoComplete'
                                    dropdownClassName="certain-category-search-dropdown"
                                    onSelect={(countryName) => {
                                        this.searchCountry(countryName)}}
                                    onSearch={() => {}}
                                    size='large'
                                    filterOption={(inputValue, option) =>
                                        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                >
                                <Input suffix={<Icon type="search" style={{ marginRight: 20, fontSize: 20 }}/>} />
                                </AutoComplete>
                            </> :
                            <span>BLA</span>
                            }
                        </Col>
                    </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default SearchCountry;