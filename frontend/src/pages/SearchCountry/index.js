import React from 'react';

import SiderMenu from '../../components/SiderMenu';
import './styles.css';

import analyze from 'rgbaster';

async function getColor() {
    const result = await analyze(require("../../imgs/italy.jpg"), { ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] });
    console.log(result[0].color);
}

class SearchCountry extends React.Component{
    componentDidMount(){

        try {
            getColor();
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
    render() {
        return (
            <div className='background'>
            <SiderMenu />
            </div>
        );
    }
}

export default SearchCountry;