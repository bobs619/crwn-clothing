import React from 'react';
//import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon  from '../cartIcon/cartIcon';
import CartDropDown from '../cartDropDown/cartDropDown';
import { selectCartToggle } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { HeaderContainer, OptionLink, LogoContainer, OptionsContainer} from './headerStyles'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/shop">Contact</OptionLink>
            {currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink> 
                : 
                <OptionLink to="/signIn">Sign In</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown />}
    </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartToggle
});

export default connect(mapStateToProps)(Header);