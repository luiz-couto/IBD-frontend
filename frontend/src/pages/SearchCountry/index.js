import React from 'react';

import SiderMenu from '../../components/SiderMenu';
import './styles.css';

import analyze from 'rgbaster';

import { query } from "../../utils/database/query";

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
        try {
            this.getColor();
        } catch(e){
            console.log(e);
        }
    }

    async getColor() {
        const result = await analyze(require("../../imgs/italy.jpg"), { ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] });
        this.setState({ color: result[0].color, loading: false });
    }

    render() {
        let { loading, color } = this.state;
        return (
            loading ? 
            <span>loading</span>
            :
            <div className='background'>

                <SiderMenu color={color}/>
            </div> 
        );
    }
}

export default SearchCountry;