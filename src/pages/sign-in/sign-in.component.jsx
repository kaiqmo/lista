import React, { Component } from "react";

import './sign-in.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

import CustomButton from "../../components/custom-button/custom-button.component";


class SignInAndSignUpPage extends Component{
    constructor() {
        super();
        this.state = { checked: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () =>{
        let e = !this.state.checked;
        console.log(e);
        this.setState(
            {
                checked: e
            }
        )
    }

    render() {
        return (
            <div className="sign-in-and-sign-up">
                <div className="sign-selector">
                    {
                        this.state.checked === false?
                        <CustomButton inverted type='submit' onClick={this.handleClick}>Cadastre-se agora</CustomButton> :
                        <CustomButton inverted type='submit' onClick={this.handleClick}>Entrar</CustomButton>
                        //onClick={(param) => this.toggle(param)}
                    }
                </div>
                    {
                        this.state.checked === false?
                        <SignIn/>:
                        <SignUp/>

                    }
            </div>
        )
    }
}


export default SignInAndSignUpPage;