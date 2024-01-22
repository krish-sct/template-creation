import React from 'react'

const Header = () => {
    return (
        <header>
            <div class="h-left">
                <div class="h-l-item">
                    <button class="btn btn-icon-left btn-danger">
                        <span class="material-symbols-rounded"> arrow_back </span>
                        <span>Exit</span>
                    </button>
                </div>
            </div>
            <div class="btn-group-rounded">
                <button class="btn btn-primary btn-outlined active">English</button>
                <button class="btn btn-primary btn-outlined">Arabic</button>
                <button class="btn btn-primary btn-outlined">Hindi</button>
            </div>
            <div class="h-rigth">
                <div class="h-l-item">
                    <button class="btn btn-icon-left btn-success">
                        <span class="material-symbols-rounded"> visibility </span>
                        <span>Preview</span>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Header