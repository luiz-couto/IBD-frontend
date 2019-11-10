import React from 'react';
import {Button} from 'antd';

class Innovation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aux : 'Revelacoes',
        };
    }

    render() {
        return(
            <div>
                <Button type="primary" onClick={()=>{this.setState({aux:'Luiz top 2 rosto de BH'})}}>{this.state.aux}</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
                <span> Hello World </span>
            </div>
        );
    }
}

export default Innovation;