import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted,update, danger, success, ...OtherProps}) =>(
    <button className={` ${inverted ? 'inverted':''} ${update? 'update':''} ${danger ? 'danger':''} ${success ? 'success':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...OtherProps}>
        {children}
    </button>
)
export default CustomButton;