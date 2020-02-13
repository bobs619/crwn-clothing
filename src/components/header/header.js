import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';
import CartIcon  from '../cartIcon/cartIcon';
import CartDropDown from '../cartDropDown/cartDropDown';

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

const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) =>({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);