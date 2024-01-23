import React from 'react'

const AdditionalSettings = () => {
    return (
        <div className="t-c-b-item grid-system">
            <div className="custom-form-group g-s-md-12">
                <div className="t-c-b-i-title">Additional Settings</div>
            </div>
            <div className="custom-form-group g-s-md-2">
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
            <div className="custom-form-group g-s-md-2">
                <label className="toggle-text-list-card">
                    <div className="t-t-l-c-title">
                        Footer
                    </div>
                    <div className="toggle-list-group">
                        <div className="toggle-switch">
                            <input type="checkbox" checked="" id="chhheckbox1" />
                            <span className="toggle-slider"></span>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default AdditionalSettings