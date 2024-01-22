import React from 'react'
const getSize = (size) => {
    return (size === 'lg' ? 12 : size === 'md' ? 6 : 3) || 3
}
const Toggle = ({ size }) => {
    return (
        <div className={`custom-form-group g-s-md-${getSize(size)}`}>
            <label for="" className="custom-label" style={{ opacity: 0 }}>{' label'}</label>
            <label className="toggle-text-list-card">
                <div className="t-t-l-c-title">
                    Header
                </div>
                <div className="toggle-list-group">
                    <div className="toggle-switch">
                        <input type="checkbox" checked="" id="chhheckbox1" />
                        <span className="toggle-slider"></span>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Toggle