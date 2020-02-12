import React from 'react';

import './shop.scss';
//import DirectoryMenu from '../../components/directoryMenu/directoryMenu';
import ShopData from './shop.data';
import Preview from '../../components/preview/preview';


class Shop extends React.Component 
{
    constructor(props){

        super(props);

        this.state = {
            collections: ShopData
        }

    }

    render(){
        return (
            <div className='shop-page'>
                <h1>shop page</h1>
                {this.state.collections.map(x=>(<Preview key={x.id} {...x} />))}
            </div>
        );
    }
}

export default Shop;