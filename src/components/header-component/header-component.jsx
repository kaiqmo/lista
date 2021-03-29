import React from 'react';
import { Link  } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.styles.scss';

import Logo from '../../assets/Logo.png';
import {auth} from '../../firebase/firebase.utils';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';


const Header = ({currentUser,hidden}) =>{

    
    function signOut() {
        auth.signOut();
    }

    return(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div className='options'>
        <Link className='option'  to='/'><h3>HOME</h3></Link>
            {
                currentUser?
                
                <div className='option' onClick={() => signOut()
                }><h3>
                    SIGN OUT
                </h3>
                </div>
                :
                <Link className='option' to='/signin'><h3>SIGN IN</h3> </Link>
            }
        </div>
    </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
});

export default  connect(mapStateToProps)(Header);