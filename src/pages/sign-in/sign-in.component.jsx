import React from 'react';

import './sign-in.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <h3 className="sign-flag">Sign In
        </h3> 
        <SignIn />
        <SignUp />
    </div>
)
export default SignInAndSignUpPage;