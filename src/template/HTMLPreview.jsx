import React from 'react'

const HTMLPreview = ({ data }) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
    )
}

export default HTMLPreview