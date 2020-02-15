import React from 'react';

import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';

import PreviewItem from '../../components/previewItem/previewItem';

import { selectCollection } from '../../redux/shop/shopSelectors';

import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collectionStyles';


const CollectionPage = ({collection}) => (
    <CollectionPageContainer>
        <CollectionTitle>{collection.title}</CollectionTitle>
        <CollectionItemsContainer>
        {
            collection.items.map(x=>(<PreviewItem key={x.id} item={x} />))
        }
        </CollectionItemsContainer>
    </CollectionPageContainer>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);