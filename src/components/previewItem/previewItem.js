import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, AddButton } from './previewItemStyles';

const PreviewItem = ({addItem, item}) => (
    <CollectionItemContainer>
        <BackgroundImage
            className='backgroundImage'
            imageUrl={item.imageUrl}
        />
        <CollectionFooterContainer>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </CollectionFooterContainer>
        <AddButton inverted onClick={()=>addItem(item)}>Add to cart</AddButton>  
    </CollectionItemContainer>
);

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(PreviewItem);