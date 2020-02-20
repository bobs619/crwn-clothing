import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import Preview from '../preview/preview';

import { CollectionsOverviewContainer } from './collectionStyle';

const Collection = ({collections}) => (
    <CollectionsOverviewContainer>
        {collections.map(x=>(<Preview key={x.id} {...x} />))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });

export default connect(mapStateToProps)(Collection);