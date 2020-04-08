import React from 'react';
// import { render } from 'node-sass';
import data from './shop.data'
import {Preview} from '../../components/preview-components/preview-index';








class ShopPage extends React.Component {
    constructor(props){
        super(props)
    
    this.state = {
        collections: data
    }
}

    render() {
        
        return (
                this.state.collections.map(({id, title, items}) => (
                    <Preview key={id} title={title} items={items}></Preview>
                    
                ))
                
        )
    }
}

export default ShopPage;