import React from 'react'
const getSize = (size) => {
    return (size === 'lg' ? 12 : size === 'md' ? 6 : 3) || 3
}
const InputField = ({ size, icon }) => {
    return (
        <div className={`custom-form-group g-s-md-${getSize(size)}`}>
            <label for="" className="custom-label">Article Title</label>
            {icon ?
                <div className="custom-form-left-icon">
                    <span className="material-symbols-rounded"> {icon} </span>
                    <input type="text" className="custom-form-control" placeholder="Enter Here" />
                </div> :

                <input type="text" className="custom-form-control" placeholder="Enter Here" />
            }
        </div>
    )
}

export default InputField