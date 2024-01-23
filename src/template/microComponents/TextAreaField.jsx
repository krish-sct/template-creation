import React, { useContext } from 'react'
import { Context } from '../../Provider'
const getSize = (size) => {
    return (size === 'lg' ? 12 : size === 'md' ? 6 : 3) || 3
}
const TextAreaField = (props) => {
    let { i, size, icon, placeholder, value, label } = props
    console.log({ i, size, icon, placeholder, value });
    const { handleUpdateValue } = useContext(Context)
    const handleChange = (value, i, component, componentIndex) => {
        handleUpdateValue(value, i, component, componentIndex)
    }
    return (
        <div className={`custom-form-group g-s-md-${getSize(size)}`}>
            <label htmlFor="" className="custom-label">{label}</label>
            {icon ?
                <div className="custom-form-left-icon">
                    <span className="material-symbols-rounded"> {icon} </span>
                    <textarea name="" class="custom-form-control" id="" cols="30" rows="10"></textarea>
                </div> :

                <textarea name="" class="custom-form-control" id="" cols="30" rows="10"></textarea>
            }
        </div>
    )
}

export default TextAreaField