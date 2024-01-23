import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="h-left">
                <div className="h-l-item">
                    <button className="btn btn-icon-left btn-danger">
                        <span className="material-symbols-rounded"> arrow_back </span>
                        <span>Exit</span>
                    </button>
                </div>
            </div>
            <div className="btn-group-rounded">
                <button className="btn btn-primary btn-outlined active">English</button>
                <button className="btn btn-primary btn-outlined">Arabic</button>
                <button className="btn btn-primary btn-outlined">Hindi</button>
            </div>
            <div className="h-rigth">
                <div className="h-l-item">
                    <button className="btn btn-icon-left btn-success">
                        <span className="material-symbols-rounded"> visibility </span>
                        <span>Preview</span>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Header