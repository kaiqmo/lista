import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, select,type, ...otherProps}) =>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} type={type} {...otherProps}/>
        {
            label ?//se tiver label faz se n  null
            (<label className={`${otherProps.value.length ? 'shrink' :'' } form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;