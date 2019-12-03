import React from 'react';

import SiderMenu from '../../components/SiderMenu';
import './styles.css';

import analyze from 'rgbaster';
import { AutoComplete, Layout, Input, Icon, Typography, Col, Spin, Menu, Card, Row, Divider, Table } from 'antd';

import { query } from "../../utils/database/query";

const { Content, Header } = Layout;
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
            infoMenu: '1'
        };
    }

    getCountryData(countryName) {
        let population, hdi, lifeExpectancy, expectedYearsSchooling, gniPerCapita, infantMortality;
        let wars;
        let soocer_matches;
        let gols_por_ano;
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

        sql = `SELECT * FROM soocer_matches WHERE soocer_matches.hometeam='` + countryName + `' OR soocer_matches.awayteam='` + countryName + `' ORDER BY soocer_matches.date DESC`;
        query(sql).then((data)=> {
            if(data.rows.length > 0){
                soocer_matches = data.rows;
            }

        });
        sql = `SELECT * FROM soocer_matches WHERE soocer_matches.hometeam='` + countryName + `' OR soocer_matches.awayteam='` + countryName + `'`;
        query(sql).then((data)=> {
            console.log(data.rows);
        });

        sql = `SELECT * FROM countries WHERE countryname='` + countryName + `'`;
        query(sql).then((data)=> {
            if(data.rows[0]){
                console.log(data);
                hdi = data.rows[0].hdi;
                lifeExpectancy = data.rows[0].lifeexpectancy;
                expectedYearsSchooling = data.rows[0].expectedyearsschooling;
                gniPerCapita = data.rows[0].gnipercapita;
            }
        }).then(() => {
            this.setState({countryData:
                {   
                    population,
                    hdi,
                    lifeExpectancy,
                    expectedYearsSchooling,
                    gniPerCapita,
                    wars,
                    soocer_matches,
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

    handleClickInfoMenu = e => {
        console.log('click ', e);
        this.setState({
          infoMenu: e.key,
        });
    };

    displayCountryData(text, value, iconType, type) {
        if (type == 'indicators') {
        return(
            <>
            <Row key={text+value}>
                <Icon type={iconType}></Icon>
                <Text style={{ color: 'grey', fontSize: 22, marginLeft: 15 }}>{text}</Text>
                <Text style={{ color: 'grey', fontSize: 22, float: 'right' }}>{value}</Text>
            </Row>
            <Divider />
            </>
        );
        }
        if (type == 'wars') {
            return(
                <>
                <Row key={text+value}>
                    <Icon type={iconType}></Icon>
                    <Text style={{ color: 'grey', fontSize: 22, marginLeft: 15 }}>{text}</Text>
                    <Text style={{ color: 'grey', fontSize: 22, float: 'right' }}>{value}</Text>
                </Row>
                <Divider />
                </>
            );
        }
    }

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
        let countryData = this.state.countryData;
        const columns = [
            {
              title: 'War Name',
              dataIndex: 'warname',
              width: 150,
            },
            {
              title: 'Fatalities',
              dataIndex: 'combatfatalities',
              width: 150,
            },
          ];

          const soocerMatches = [
            {
              title: 'Date',
              dataIndex: 'date',
              width: 150,
            },
            {
                title: 'Home Team',
                dataIndex: 'hometeam',
                width: 150,
            },
            {
                title: 'Away Team',
                dataIndex: 'awayteam',
                width: 150,
            },
            {
                title: 'Home Score',
                dataIndex: 'homescore',
                width: 150,
            },
            {
                title: 'Away Score',
                dataIndex: 'awayscore',
                width: 150,
            },
          ];
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
                        <Col>
                            { this.state.current === 'search' ?
                            <>
                            <Col className='container'>
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
                            </Col>
                            </> :
                            <div style={{ width: '70%', marginTop: '24vh', marginLeft: '16vw' }}>
                                
                                <Header style={{ zIndex: 1, width:'100%' }}>
                                <div className="logo" />
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    selectedKeys={this.state.infoMenu}
                                    style={{ lineHeight: '64px' }}
                                    onClick={this.handleClickInfoMenu}
                                >
                                    <Menu.Item key="1">Country Index</Menu.Item>
                                    <Menu.Item key="2">Wars</Menu.Item>
                                    <Menu.Item key="3">Soocer Matches</Menu.Item>
                                </Menu>
                                </Header>
                                { countryData.gniPerCapita &&
                                <Content>
                                <Card style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                                   { this.state.infoMenu === '1' ?
                                   <Col>
                                    {this.displayCountryData('Population', (Number(countryData.population)*1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "), 'team', 'indicators')}
                                    {this.displayCountryData('IDH', countryData.hdi, 'trophy', 'indicators')}
                                    {this.displayCountryData('Life Expectancy', countryData.lifeExpectancy, 'heart', 'indicators')}
                                    {this.displayCountryData('Expected Years in School', countryData.expectedYearsSchooling, 'book', 'indicators')}
                                    {this.displayCountryData('GNI per capita', countryData.gniPerCapita.replace(/\B(?=(\d{3})+(?!\d))/g, " "), 'dollar', 'indicators')}
                                   </Col> :this.state.infoMenu === '2' ?
                                    <Table columns={columns} dataSource={countryData.wars} scroll={{ y: 340 }} pagination={true} /> :
                                    <Table columns={soocerMatches} dataSource={countryData.soocer_matches} scroll={{ y: 300 }} pagination={true} />
                                   }

                                </Card>
                                </Content>
                                }
                            </div>
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