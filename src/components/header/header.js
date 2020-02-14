import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon  from '../cartIcon/cartIcon';
import CartDropDown from '../cartDropDown/cartDropDown';
import { selectCartToggle } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';

import './header.scss';


const Header = (props) => {
    
    const {currentUser} = props;

    //console.log(currentUser);

    return (
        <div className='header'>

            <Link to="/">
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to="/shop">Shop</Link>
                <Link className='option' to="/shop">Contact</Link>
                {currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
                    : 
                    <Link className='option' to="/signIn">Sign In</Link>
                }
                <CartIcon />
            </div>

            {props.hidden ? null : <CartDropDown />}
            

        </div>
  
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartToggle
});

export default connect(mapStateToProps)(Header);