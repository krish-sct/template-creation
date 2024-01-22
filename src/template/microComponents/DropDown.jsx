import React from 'react'
const getSize = (size) => {
    return (size === 'lg' ? 12 : size === 'md' ? 6 : 3) || 3
}
const DropDown = ({ size }) => {
    return (
        <div className={`custom-form-group g-s-md-${getSize(size)}`}>
            <label for="" className="custom-label">Article Title</label>
            <select className="custom-form-control">
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
            </select>
        </div>
    )
}

export default DropDown