import { Close } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'

const ComponentCreation = ({ templateData, handleRemoveComponent, handleUpdateValue }) => {
    const handleChange = (e, i) => {
        handleUpdateValue(e, i)
    }
    return (
        <div>
            <h4>Template Creation</h4>
            <div className='template-wrapper'>
                {templateData?.map((e, i) => {
                    return (
                        <div className='template-component' key={i}>
                            <TextField fullWidth value={e?.value} size='small' multiline rows={e?.key === "description" ? 3 : 1} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i)} />
                            <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ComponentCreation