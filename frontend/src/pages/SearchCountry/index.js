import React from 'react';

import SiderMenu from '../../components/SiderMenu';
import './styles.css';

import analyze from 'rgbaster';

class SearchCountry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'rgb(0,0,0)',
            loading: true
        };
    } 


    componentDidMount(){
        try {
            this.getColor();
        } catch(e){
            console.log(e);
        }

        fetch("http://localhost:3001/consulta", {
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3001',
              }),
            method: "POST",
            body: JSON.stringify({query: "SELECT * FROM comunication_and_information"}),
        }).then((response) => {
            response.json().then((data) => {
                console.log(data); 
            });
        });
    }

    async getColor() {
        const result = await analyze(require("../../imgs/italy.jpg"), { ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] });
        this.setState({ color: result[0].color, loading: false })
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