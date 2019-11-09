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

        // Request image from DB
        query(`SELECT data FROM IMAGES WHERE country='Brazil'`).then((data) => {
            this.setState({
                countryImage: data.rows[0].data,
            })
        });
    
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
        let countryImageData = "data:image/jpeg;base64," + this.state.countryImage;
        return (
            loading ? 
            <span>loading</span>
            :
            <div className='background'>

                {/* IMAGEM BAIXADA DO DB */}
                <img src={countryImageData} />

                <SiderMenu color={color}/>
            </div> 
        );
    }
}

export default SearchCountry;