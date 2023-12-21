import { Add, Close } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React, { Fragment } from 'react'

const ComponentCreation = ({ templateData, handleRemoveComponent, handleUpdateValue, handleAddImg, handleAddList }) => {
    const handleChange = (e, i, component, componentIndex) => {
        handleUpdateValue(e, i, component, componentIndex)
    }
    return (
        <div>
            <h4>Template Creation</h4>
            <div className='template-wrapper'>
                {templateData?.map((e, i) => {
                    return (
                        (e?.key === 'images') ?
                            <div className='template-component img-component' key={i}>
                                {e?.imgs?.map((img, index) => {
                                    return <div className='flex' key={index}>
                                        <TextField fullWidth value={img?.src} size='small' placeholder={"Enter the image url"} onChange={(e) => handleChange(e?.target?.value, i, 'img', index)} />
                                        <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, e?.imgs?.length === 1 ? '' : 'img', index)} />
                                    </div>
                                })}
                                <Add className='add-icon' onClick={() => handleAddImg(i)} />
                            </div> :
                            (e?.key === 'list') ?
                                <div className='template-component list-component' key={i}>
                                    {e?.lists?.map((list, index) => {
                                        return <div className='flex' key={index}>
                                            <TextField fullWidth value={list?.value} size='small' placeholder={"Enter the list details"} onChange={(e) => handleChange(e?.target?.value, i, 'list', index)} />
                                            <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, e?.lists?.length === 1 ? '' : 'list', index)} />
                                        </div>
                                    })}
                                    <Add className='add-icon' onClick={() => handleAddList(i)} />
                                </div> :
                                (e?.key === 'htmlEditor') ? <div className='template-component' key={i}>
                                    <TextField fullWidth value={e?.value} size='small' multiline rows={20} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} />
                                    <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                </div>
                                    : <div className='template-component' key={i}>
                                        <TextField fullWidth value={e?.value} size='small' multiline rows={e?.key === "description" ? 3 : 1} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} />
                                        <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ComponentCreation