import { Add, ArrowDownward, ArrowUpward, Close } from '@mui/icons-material'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import Editor from './Editor'
import { useEffect, useRef, useState } from 'react'
import { preDefinedTemplate } from './common'
let template = ['Template Name',
    'Careers', 'Articles', 'Events & Tradeshows', 'FAQ', 'News', 'Newsletters', 'Press Release', 'Podcasts', 'Testimonials', 'Videos'
]
const ComponentCreation = ({ templateData, setTemplateData, handleRemoveComponent, handleUpdateValue, handleAddImg, handleAddList, handleSwap, templateName, setTemplateName }) => {
    const [newTemplate, setNewTemplate] = useState([])
    const lastDivRef = useRef(null);
    const handleChange = (value, i, component, componentIndex) => {
        handleUpdateValue(value, i, component, componentIndex)
    }
    const handleSwapUpDown = (index, isUp) => {
        handleSwap(index, isUp ? (index - 1) : (index + 1))
    }
    const handleSubmit = () => {
        const object = {};
        templateData?.forEach((element, index) => {
            object[element.key] = element;
        });
        let data = {
            "components": object
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:7234/createArticles/" + templateName, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                setTemplateName("Template Name")
                setTemplateData([])
            })
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        if (lastDivRef.current) {
            lastDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [templateData]);
    useEffect(() => {
        if (templateName !== template[0]) {
            setTemplateData(preDefinedTemplate.filter((e) => e.template === templateName)[0]?.components)
        }
    }, [templateName])

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
                                    <Editor handleValue={handleChange} i={i} />
                                    <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                </div> :
                                    (e?.key === 'date') ? <div className='template-component' key={i}>
                                        {/* <TextField type='date' ref={templateData?.length === i + 1 ? lastDivRef : null} focused={templateData?.length === i + 1} value={e?.value} size='small' multiline rows={e?.key === "description" ? 3 : 1} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} /> */}
                                        <input type="date" name="" id="" onChange={(e) => handleChange(e?.target?.value, i, '')} value={e?.value} />
                                        <Close fontSize='12' className='close-icon' onClick={() => handleRemoveComponent(i, '')} />
                                    </div> :
                                        <div className='template-component' key={i}>
                                        <TextField ref={templateData?.length === i + 1 ? lastDivRef : null} focused={templateData?.length === i + 1} fullWidth value={e?.value} size='small' multiline rows={e?.key === "description" ? 3 : 1} placeholder={e?.placeholder} onChange={(e) => handleChange(e?.target?.value, i, '')} />
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