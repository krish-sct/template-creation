import React from 'react'
const getSize = (size) => {
    return (size === 'lg' ? 12 : size === 'md' ? 6 : 3) || 3
}
const DateField = ({ size }) => {
    return (
        <div className={`custom-form-group g-s-md-${getSize(size)}`}>
            <label htmlFor="" className="custom-label">Date</label>
            <div className="custom-form-left-icon">
                <span className="material-symbols-rounded"> calendar_today </span>
                <input type="date" className="custom-form-control" placeholder="Enter Here" />
            </div>
        </div>
    )
}

export default DateField