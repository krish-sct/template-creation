import React, { useContext } from 'react'
import { Context } from '../../Provider'
const getSize = (size) => {
    return (size === 'lg' ? 12 : size === 'md' ? 6 : 3) || 3
}
const DateField = (props) => {
    let { i, size, icon, placeholder, value, label } = props
    const { handleUpdateValue } = useContext(Context)
    const handleChange = (value, i, component, componentIndex) => {
        handleUpdateValue(value, i, component, componentIndex)
    }
    return (
        <div className={`custom-form-group g-s-md-${getSize(size)}`}>
            <label htmlFor="" className="custom-label">Date</label>
            <div className="custom-form-left-icon">
                <span className="material-symbols-rounded"> calendar_today </span>
                <input type="date" className="custom-form-control" placeholder="Select the Date" value={value || ''} onChange={(e) => handleChange(e?.target?.value, i, '')}/>
            </div>
        </div>
    )
}

export default DateField