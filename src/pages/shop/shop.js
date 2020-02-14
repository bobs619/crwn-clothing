import React from 'react';

import { Route } from 'react-router-dom';

import Collection from '../../components/collection/collection'
import CollectionPage from '../collection/collection'

import './shop.scss';

const Shop = ({match}) => 
{
    return (
        <div className='shop-page'>
         
            <Route exact path={`${match.path}`} component={Collection} />
            <Route  path={`${match.path}/:categoryId`} component={CollectionPage} />
        </div>
    );

}

export default Shop;