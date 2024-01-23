import React, { useContext, useEffect, useState } from 'react'
import { template } from '../template-json'
import ComponentCreation from './ComponentCreation'
import TemplatePreview from './TemplatePreview'
import { swapElements } from './common'
import { Context } from '../Provider'


const Home = () => {
    const { templateData, templateName, handleGetTemplateData, role } = useContext(Context)
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
                        <ComponentCreation /> 
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