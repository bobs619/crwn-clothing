import React from 'react';
import './cartItem.scss';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

const CartItem = ({item}) => (
    <div className='cart-item'>
        <img src={item.imageUrl} alt='item'/>

        <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.quantity} x {item.price}</span>
        </div>
        
            
    </div>
);



const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
});



export default connect(null,mapDispatchToProps)(CartItem);