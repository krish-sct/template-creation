import React, { useContext } from 'react'
import { Context } from '../../Provider'

const TemplateHead = () => {
        const { templateName } = useContext(Context)

    return (
        <div className="t-c-b-head">
            <div className="t-c-b-h-title">{templateName}</div>
            <div className="t-c-b-h-sub-title">The default page SEO settings apply to the default page.</div>
        </div>
    )
}

export default TemplateHead