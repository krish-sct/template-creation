import { Add, ArrowDownward, ArrowUpward, Close } from '@mui/icons-material'
import { MenuItem, Select, TextField } from '@mui/material'
import Editor from './Editor'
import { useEffect, useRef, useState } from 'react'
let template = ['Template Name',
    'Careers', 'Articles', 'Events & Tradeshows', 'FAQ', 'News', 'Newsletters', 'Press Release', 'Podcasts', 'Testimonials'
]
const ComponentCreation = ({ templateData, handleRemoveComponent, handleUpdateValue, handleAddImg, handleAddList, handleSwap }) => {
    const [templateName, setTemplateName] = useState('Template Name')
    const lastDivRef = useRef(null);
    const handleChange = (value, i, component, componentIndex) => {
        handleUpdateValue(value, i, component, componentIndex)
    }
    const handleSwapUpDown = (index, isUp) => {
        handleSwap(index, isUp ? (index - 1) : (index + 1))
    }
    useEffect(() => {
        if (lastDivRef.current) {
            lastDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [templateData]);
    return (
        <div>
            <h4><Select label='Template Name' size='small' value={templateName} onChange={(e) => setTemplateName(e?.target?.value)}>
                {template?.map((e, i) => {
                    return <MenuItem key={i} disabled={i === 0} value={e}>{e}</MenuItem>
                })}
            </Select> </h4>
            <div className='template-wrapper'>
                {templateData?.map((e, i) => {
                    return (
                        (e?.key === 'images') ?
                            <div className='template-component img-component' key={i}>
                                {e?.imgs?.map((img, index) => {
                                    return <div className='flex' key={index}>
                                        <TextField ref={templateData?.length === i + 1 ? lastDivRef : null} focused={templateData?.length === i + 1} fullWidth value={img?.src} size='small' placeholder={"Enter the image url"} onChange={(e) => handleChange(e?.target?.value, i, 'img', index)} />
                                        <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, e?.imgs?.length === 1 ? '' : 'img', index)} />
                                        <ArrowUpward fontSize='12' className='add-icon' onClick={() => handleSwapUpDown(i, true)} />
                                        <ArrowDownward fontSize='12' className='add-icon' onClick={() => handleSwapUpDown(i)} />
                                    </div>
                                })}
                                <Add className='add-icon' onClick={() => handleAddImg(i)} />
                            </div> :
                            (e?.key === 'list') ?
                                <div className='template-component list-component' key={i}>
                                    {e?.lists?.map((list, index) => {
                                        return <div className='flex' key={index}>
                                            <TextField ref={templateData?.length === i + 1 ? lastDivRef : null} focused={templateData?.length === i + 1} fullWidth value={list?.value} size='small' placeholder={"Enter the list details"} onChange={(e) => handleChange(e?.target?.value, i, 'list', index)} />
                                            <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, e?.lists?.length === 1 ? '' : 'list', index)} />
                                        </div>
                                    })}
                                    <Add className='add-icon' onClick={() => handleAddList(i)} />
                                </div> :
                                (e?.key === 'htmlEditor') ? <div className='template-component' key={i}>
                                    {/* <TextField fullWidth value={e?.value} size='small' multiline rows={20} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} />
                                    <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} /> */}
                                    <Editor handleValue={handleChange} i={i} />
                                    <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                </div>
                                    : <div className='template-component' key={i}>
                                        <TextField ref={templateData?.length === i + 1 ? lastDivRef : null} focused={templateData?.length === i + 1} fullWidth value={e?.value} size='small' multiline rows={e?.key === "description" ? 3 : 1} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} />
                                        <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                        <ArrowUpward fontSize='12' className='add-icon' onClick={() => handleSwapUpDown(i, true)} />
                                        <ArrowDownward fontSize='12' className='add-icon' onClick={() => handleSwapUpDown(i)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ComponentCreation