import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'

import { selectCollectionIsLoaded } from '../../redux/shop/shopSelectors';
import WithSpinner from '../../components/withSpinner/withSpinner';
import CollectionPage from './collection';



const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionIsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;