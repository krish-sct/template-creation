import React, { useContext } from 'react'
import { Context } from '../../Provider';
const getSize = (size) => {
    return (size === 'lg' ? 12 : size === 'md' ? 6 : 3) || 3
}
const DropDown = (props) => {
    let { i, size, icon, placeholder, value, label,options } = props;
    const { handleUpdateValue } = useContext(Context)
    const handleChange = (value, i, component, componentIndex) => {
        handleUpdateValue(value, i, component, componentIndex)
    }
    return (
        <div className={`custom-form-group g-s-md-${getSize(size)}`}>
            <label htmlFor="" className="custom-label">{label}</label>
            <select className="custom-form-control" value={value} onChange={(e) => handleChange(e?.target?.value, i, '')}>
                {options?.map((opt,index) => {
                    return <option value={opt?.value}>{opt?.label}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown