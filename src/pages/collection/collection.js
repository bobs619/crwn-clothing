import React from 'react';

import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';

import PreviewItem from '../../components/previewItem/previewItem';

import { selectCollection } from '../../redux/shop/shopSelectors';


import './collection.scss';


const CollectionPage = ({match:{params:{categoryId}}, collection}) => (
    <div className='collection-page'>
        <h2 className='title'>{collection.title}</h2>
        <div className='items'>
        {
            collection.items.map(x=>(<PreviewItem key={x.id} item={x} />))
        }
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CollectionPage);