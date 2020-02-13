import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import { connect } from 'react-redux';


const Header = (props) => {
    
    const {currentUser} = props;

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


            </div>

        </div>
  
    );
}

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);