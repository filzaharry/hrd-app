import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './toggle.scss'

const Toggle = () => {
    const [visible , setVisibility] = useState(false)

    const Icon = (
        <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} 
        onClick={()=> setVisibility(visiblity => !visiblity)}
        />
    )

    const InputType = visible ? "text" : "password";
    return [InputType, Icon]
}

export default Toggle
