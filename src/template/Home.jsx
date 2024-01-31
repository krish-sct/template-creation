import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Provider'
import Header from './Header'
import GenerateTemplateForm from './GenerateTemplateForm'
import Dashboard from './Dashboard'


const Home = () => {
    const { setTemplateName, role, templateName, templateNames, isAddNew, isEdit } = useContext(Context)

    return (
        <div className='flex' style={{ width: "100%" }}>
            <div className='sidebar'>
                {/* <h4>Components</h4> */}
                <div>
                    {
                        (templateNames)?.map((e, i) => {
                            return (
                                <div key={i} className={`${i != 0 ? 'component-list-hover' : ''} ${templateName === e ? 'active' : ''} component-list`} onClick={() => i != 0 ? setTemplateName(e) : null}>
                                    <h5 className='component-name'>{e}</h5>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>
            <div className='main'>
                <div className="custom-layout-page">
                    <Header />
                    {(isAddNew === false || isEdit) ? <GenerateTemplateForm />
                        : <div><Dashboard /> </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default Home