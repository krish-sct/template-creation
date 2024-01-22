import React, { useEffect, useState } from 'react'
import { template } from '../template-json'
import ComponentCreation from './ComponentCreation'
import TemplatePreview from './TemplatePreview'
import { swapElements } from './common'
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
const Home = ({ isLoged, role }) => {
    const [templateData, setTemplateData] = useState(data)
    const [templateName, setTemplateName] = useState('Template Name')
    const handleAddComponent = (component) => {
        setTemplateData((prev) => {
            return [...prev, template?.components?.[component]]
        })
    }
    const handleRemoveComponent = (index, component, componentIndex) => {
        setTemplateData((prev) => {
            let newArr;
            if (component === '') {
                newArr = prev?.filter((_e, i) => i !== index)
            }
            if (component === 'img') {
                newArr = prev?.map((e, i) => {
                    return index === i ? { ...e, imgs: e?.imgs?.filter((_img, imgI) => componentIndex !== imgI) } : e
                })
            }
            if (component === 'list') {
                newArr = prev?.map((e, i) => {
                    return index === i ? { ...e, lists: e?.lists?.filter((_list, listI) => componentIndex !== listI) } : e
                })
            }
            return newArr
        })
    }
    const handleAddImg = (index) => {
        setTemplateData((prev) => {
            return prev?.map((e, i) => {
                return i === index ? {
                    ...e, imgs: [...e?.imgs, { src: '', alt: '' }]
                } : e
            })
        })
    }
    const handleAddList = (index) => {
        setTemplateData((prev) => {
            return prev?.map((e, i) => {
                return i === index ? {
                    ...e, lists: [...e?.lists, {
                        key: "listText",
                        value: ""
                    }]
                } : e
            })
        })
    }
    const handleUpdateValue = (value, index, component, componentIndex) => {
        setTemplateData((prev) => {
            let newData;
            if (component === '') {
                newData = prev?.map((e, i) => {
                    return i === index ? { ...e, value } : e
                })
            }
            if (component === 'img') {
                value = { src: value, alt: value }
                newData = prev?.map((e, i) => {
                    return i === index ? {
                        ...e, imgs: e?.imgs?.map((img, imgI) => {
                            return imgI === componentIndex ? value : img
                        })
                    } : e
                })
            }
            if (component === 'list') {
                let data = { value, key: "listText" }
                newData = prev?.map((e, i) => {
                    return i === index ? {
                        ...e, lists: e?.lists?.map((list, listI) => {
                            return listI === componentIndex ? data : list
                        })
                    } : e
                })
            }
            return newData
        })
    }
    const handleSwap = async (index1, index2) => {
        setTemplateData((prev) => {
            let data = swapElements([...prev], index1, index2)
            return data
        })
    }
    const fetchTemplateData = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            //body: raw,
            redirect: 'follow'
        };
        let data = await fetch(`http://localhost:7234/getAllDetails/${templateName}?page=1&limit=20`, requestOptions)
            .then(response => response.text())
            .then(result => {
                return result;
            })
            .catch(error => console.log('error', error));
        return data;
    }
    const handleGetTemplateData = async () => {
        const res = await fetchTemplateData()
        console.log({ res });
    }
    useEffect(() => {
        console.log({ role });
        if (role !== 'creator') {
            handleGetTemplateData()
        }
    }, [role])
    return (
        <div className='home'>
            <div className='sidebar'>
                {/* <h4>Components</h4> */}
                {/* <div>
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
                </div> */}
            </div>
            <div className='template'>
                {
                    role === "creator" ? 
                        <ComponentCreation templateData={templateData} setTemplateData={setTemplateData} handleRemoveComponent={handleRemoveComponent} handleUpdateValue={handleUpdateValue} handleAddImg={handleAddImg} handleAddList={handleAddList} handleSwap={handleSwap} templateName={templateName} setTemplateName={setTemplateName} /> 
                        :
                        'header list'

                }
            </div>
            <div className='preview'>
                <TemplatePreview templateData={templateData} templateName={templateName} />
            </div>
        </div>
    )
}

export default Home