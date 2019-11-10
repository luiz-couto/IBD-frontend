import React from 'react';

import SiderMenu from '../../components/SiderMenu';
import './styles.css';

import analyze from 'rgbaster';
import { AutoComplete, Layout } from 'antd';

import { query } from "../../utils/database/query";

const { Header, Sider, Content } = Layout;

class SearchCountry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(0,0,0)',
            loading: true,
            countryImage: "",
        };
    }


    componentDidMount(){
        // Request image from DB
        query(`SELECT data FROM IMAGES WHERE country='brazil'`).then((data) => {
            if (data) {
                this.setState({
                    countryImage: data.rows[0].data,
                })
            }
        });
    }

    async getColor() {
        let countryImageData = "data:image/jpeg;base64," + this.state.countryImage;
        const result = await analyze(countryImageData, { ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] });
        this.setState({ color: result[0].color, loading: false });
    }

    render() {
        let { loading, color } = this.state;
        let countryImageData = "data:image/jpeg;base64," + this.state.countryImage;
        if (this.state.countryImage != '' && loading == true) {
            try {
                this.getColor();
            } catch(e){
                console.log(e);
            }
        }
        return (
            loading ? 
            <span>loading</span>
            :
            <div>
                <img src={countryImageData} style={{ width: '100vw', position:'absolute',
                height: 'auto', maxHeight: '100vh', backgroundSize: 'cover' }} />
                <Layout>
                    <SiderMenu color={color}/>
                    <Layout>
                        <Content>
                        <AutoComplete
                            style={{ width: 200 }}
                            onSelect={()=>{}}
                            onSearch={() => {}}
                            placeholder="input here"
                        />
                    </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default SearchCountry;