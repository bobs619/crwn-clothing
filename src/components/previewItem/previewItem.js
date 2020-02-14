import React from 'react';
import './previewItem.scss';
import CustomButton from '../customButton/customButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

const PreviewItem = ({addItem, item}) => (
    <div className='collection-item'>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${item.imageUrl})`
            }}
        />

        <div className='collection-footer'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.price}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)}>Add to cart</CustomButton>
            
    </div>
);



const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
});



export default connect(null,mapDispatchToProps)(PreviewItem);