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
            <div className='background' >
                <SiderMenu color={color}/>
                <img src={countryImageData} style={{ width: '100vw',
                height: 'auto', maxHeight: '100vh', backgroundSize: 'cover' }} />
            </div> 
        );
    }
}

export default SearchCountry;