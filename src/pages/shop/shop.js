import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Collection from '../../components/collection/collection'
import CollectionPage from '../collection/collection'



import './shop.scss';
import { fireStore, convertCollectionToSnapShop } from '../../firebase/firebaseUtils';
import { setCollections } from '../../redux/shop/shopActions';
import  WithSpinner  from '../../components/withSpinner/withSpinner';

const CollectionOverviewWithSpinner = WithSpinner(Collection);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component  
{

    state = {
        loading: true
    }

    unsubFromSnapShot = null;

    componentDidMount() {
       
        const collectionRef = fireStore.collection('collections');

        /*collectionRef.onSnapshot(async d =>  {
            this.props.setCollections(convertCollectionToSnapShop(d));

            this.setState({loading:false});
        });*/

        collectionRef.get().then(async d =>  {
            this.props.setCollections(convertCollectionToSnapShop(d));

            this.setState({loading:false});
        });

    }

    render(){

        const {match} = this.props;
        const {loading} = this.state;

        return (
            <div className='shop-page'>
            
                <Route 
                    exact path={`${match.path}`} 
                    render={(props)=>(<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
                <Route  
                    path={`${match.path}/:categoryId`} 
                    render={(props)=>(<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    setCollections: collections => dispatch(setCollections(collections))
    
  });

export default connect(null, mapDispatchToProps)(Shop);