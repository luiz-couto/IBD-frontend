import React from 'react';

import SiderMenu from '../../components/SiderMenu';

class SearchCountry extends React.Component{
    componentDidMount(){

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
            <SiderMenu />
        );
    }
}

export default SearchCountry;