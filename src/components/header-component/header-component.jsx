import React from 'react';
import { Link , Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.styles.scss';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector';


const Header = ({currentUser,hidden}) =>{

    
    function signOut() {
        auth.signOut();
    }

    function handleClick(){
        return (<Redirect to ='/signin'/>);
    }

    return(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
        <div className='option' onClick={()=>handleClick()} >Home</div>
        <Link className='option' to='/contact'>Contato</Link>
            {
                currentUser?
                
                <div className='option' onClick={() => signOut()
                }>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'> SIGN IN</Link>
            }
        </div>
    </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser
});

export default  connect(mapStateToProps)(Header);