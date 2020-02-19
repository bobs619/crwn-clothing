import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'

import { selectCollectionFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../withSpinner/withSpinner';
import Collection from './collection';



const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
    //isLoaded: selectCollectionIsLoaded
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default CollectionContainer;