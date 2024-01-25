import React, { useContext } from 'react'
import { Context } from '../Provider'

const Header = () => {
    const { handleLogout, isAddNew, handleAddPreview, templateName, role } = useContext(Context)

    return (
        <header>
            <div className="h-left">
                <div className="h-l-item">
                    <button className="btn btn-icon-left btn-danger" onClick={handleLogout}>
                        <span className="material-symbols-rounded"> arrow_back </span>
                        <span>Close</span>
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
                    <button className="btn btn-primary">
                        <span>{role}</span>
                    </button>
                    {
                        (templateName === "Template Name" || role === 'previewer') ? '' :

                            <button className="btn btn-icon-left btn-success" onClick={handleAddPreview}>
                                {isAddNew ? '+ ' : <span className="material-symbols-rounded"> visibility </span>}
                                <span>{isAddNew ? 'Add New' : 'Preview'}</span>
                            </button>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header