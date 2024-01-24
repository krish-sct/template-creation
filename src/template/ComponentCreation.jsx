import { Add, ArrowDownward, ArrowUpward, Close } from '@mui/icons-material'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import Editor from './Editor'
import { useContext, useEffect, useRef, useState } from 'react'
import { preDefinedTemplate } from './common'
import Header from './Header'
import GenerateTemplateForm from './GenerateTemplateForm'
import { Context } from '../Provider'

const ComponentCreation = () => {
    const { template, templateData, setTemplateData, handleRemoveComponent, handleUpdateValue, handleAddImg, handleAddList, handleSwap, templateName, setTemplateName,handleSubmit } = useContext(Context)
    const lastDivRef = useRef(null);
    const [isHTML, setIsHTML] = useState(false)
    const handleChange = (value, i, component, componentIndex) => {
        handleUpdateValue(value, i, component, componentIndex)
    }
    // useEffect(() => {
    //     console.log({ templateData });
    //     // if (lastDivRef.current) {
    //     //     lastDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    //     // }
    // }, [templateData]);


    return (
        <div className="custom-layout-page">
            <Header />
            {/* <h4><Select label='Template Name' size='small' value={templateName} onChange={(e) => setTemplateName(e?.target?.value)}>
                {template?.map((e, i) => {
                    return <MenuItem key={i} disabled={i === 0} value={e}>{e}</MenuItem>
                })}
            </Select> </h4> */}
            <GenerateTemplateForm />
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
                                    {!isHTML ? <Editor handleValue={handleChange} i={i} data={e?.value} /> : <div>
                                        {e?.value}
                                    </div>}
                                    <div className='flex flex-column'>
                                        <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                        <div className='htmlCode pointer' onClick={() => setIsHTML((prev) => !prev)} >{isHTML ? 'Editor' : 'HTML'}</div>
                                    </div>
                                </div> :
                                    (e?.key === 'date') ? <div className='template-component' key={i}>
                                        {/* <TextField type='date' ref={templateData?.length === i + 1 ? lastDivRef : null} focused={templateData?.length === i + 1} value={e?.value} size='small' multiline rows={e?.key === "description" ? 3 : 1} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} /> */}
                                        <input type="date" name="" id="" onChange={(e) => handleChange(e?.target?.value, i, '')} value={e?.value} />
                                        <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                    </div> :
                                        (e?.key === 'category') ?
                                            <div className='template-component' key={i}>
                                                <Select label='Category' size='small' value={e?.value} onChange={(e) => handleChange(e?.target?.value, i, '')}>
                                                    {e?.options?.map((category, i) => {
                                                        return <MenuItem key={i} value={category?.value}>{category.label}</MenuItem>
                                                    })}
                                                </Select>
                                                <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                            </div> :
                                            <div className='template-component' key={i}>
                                                <TextField ref={templateData?.length === i + 1 ? lastDivRef : null} focused={templateData?.length === i + 1} fullWidth value={e?.value || ''} size='small' multiline rows={e?.key === "description" ? 3 : 1} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} />
                                                <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                                <ArrowUpward fontSize='12' className='add-icon' onClick={() => handleSwapUpDown(i, true)} />
                                                <ArrowDownward fontSize='12' className='add-icon' onClick={() => handleSwapUpDown(i)} />
                                            </div>
                    )
                })}
            </div>

            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default ComponentCreation