import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import Preview from '../preview/preview';

import './collection.scss';

const collection = ({collections}) => 
{
    

    return (
        <div className='collection-overview'>
            {collections.map(x=>(<Preview key={x.id} {...x} />))}
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });

export default connect(mapStateToProps)(collection);