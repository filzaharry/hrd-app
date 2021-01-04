import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './button.scss';

const Button = ({Icon,title, ...rest}) => {
    return <button className="btn button" {...rest} ><FontAwesomeIcon Icon={Icon} />{title}</button>
}

export default Button;