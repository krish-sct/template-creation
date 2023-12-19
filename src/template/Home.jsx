import React, { useEffect, useState } from 'react'
import { template } from '../template-json'
import { IconButton } from '@mui/material'
import { Add } from '@mui/icons-material'
import ComponentCreation from './ComponentCreation'
import TemplatePreview from './TemplatePreview'
// let data = [
//     {
//         tag: "input",
//         type: "text",
//         key: "header",
//         value: "",
//         description: "",
//         placeholder: "Enter the Header data",
//         min: 5,
//         max: 100,
//         isRequired: true,
//         isActive: true,
//     },
//     {
//         tag: "input",
//         type: "text",
//         key: "title",
//         value: "",
//         description: "",
//         placeholder: "Enter the Title data",
//         min: 5,
//         max: 100,
//         isRequired: true,
//         isActive: true,
//     },
//     {
//         tag: "input",
//         type: "text",
//         key: "subTitle",
//         value: "",
//         description: "",
//         placeholder: "Enter the Sub-Title data",
//         min: 5,
//         max: 100,
//         isRequired: true,
//         isActive: true,
//     },
//     {
//         tag: "input",
//         type: "text",
//         key: "description",
//         value: "",
//         description: "",
//         placeholder: "Enter the Description data",
//         min: 5,
//         max: 100,
//         isRequired: true,
//         isActive: true,
//     },
//     {
//         tag: "input",
//         type: "text",
//         key: "title",
//         value: "",
//         description: "",
//         placeholder: "Enter the Title data",
//         min: 5,
//         max: 100,
//         isRequired: true,
//         isActive: true,
//     }, {
//         tag: "input",
//         type: "text",
//         key: "description",
//         value: "",
//         description: "",
//         placeholder: "Enter the Description data",
//         min: 5,
//         max: 100,
//         isRequired: true,
//         isActive: true,
//     }

// ]
let data = []
const Home = () => {
    const [templateData, setTemplateData] = useState(data)
    const handleAddComponent = (component) => {
        setTemplateData((prev) => {
            return [...prev, template?.components?.[component]]
        })
    }
    const handleRemoveComponent = (index) => {
        setTemplateData((prev) => {
            return prev?.filter((e, i) => i !== index)
        })
    }
    const handleUpdateValue = (value, index) => {
        setTemplateData((prev) => {
            let newData = prev?.map((e, i) => {
                return i === index ? { ...e, value } : e
            })
            return newData
        })
    }
    useEffect(() => {
        console.log({ templateData });
    }, [templateData])
    return (
        <div className='home'>
            <div className='sidebar'>
                <h4>Components</h4>
                <div>
                    {
                        Object.keys(template?.components)?.map((e, i) => {
                            return (
                                <div key={i} className='component-list'>
                                    <h5 className='component-name'>{e} </h5>
                                    <IconButton size='small' onClick={() => handleAddComponent(e)}><Add /></IconButton>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className='template'>
                <ComponentCreation templateData={templateData} handleRemoveComponent={handleRemoveComponent} handleUpdateValue={handleUpdateValue} />
            </div>
            <div className='preview'>
                <TemplatePreview templateData={templateData} />
            </div>
        </div>
    )
}

export default Home