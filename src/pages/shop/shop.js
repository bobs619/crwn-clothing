import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionContainer from '../../components/collection/collectionContainer'
import CollectionPageContainer from '../collection/collectionContainer';
import './shop.scss';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';


class Shop extends React.Component  
{

    componentDidMount() {
        const { selectCollections } = this.props;

        selectCollections();
    }
    
      
    render(){

        const { match } = this.props;

        return (
            <div className='shop-page'>
            
                <Route 
                    exact path={`${match.path}`} 
                    component={CollectionContainer} />
                <Route  
                    path={`${match.path}/:categoryId`} 
                    component={CollectionPageContainer} />
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    selectCollections: () => dispatch(fetchCollectionsStart())
});


export default connect(null, mapDispatchToProps)(Shop);