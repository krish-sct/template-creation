import React, { useContext } from 'react'
import Tab from './microComponents/Tab'
import TemplateHead from './microComponents/TemplateHead'
import InputField from './microComponents/InputField'
import DateField from './microComponents/DateField'
import DropDown from './microComponents/DropDown'
import Editor from './Editor'
import { Context } from '../Provider'
import TextAreaField from './microComponents/TextAreaField'
import { TextField } from '@mui/material'

const GenerateTemplateForm = () => {
    const { templateData, handleSubmit, selectedTab, isEdit, handleLogout, setToEmail } = useContext(Context)
    console.log({ selectedTab });
    console.log({ templateData });
    return (
        <div className="c-l-body">
            <div className="tab-container">
                <Tab />
                <div className="t-c-body">
                    <TemplateHead />
                    {selectedTab === 1 ? <>
                        <div className="t-c-b-body">
                            <div className="t-c-b-item grid-system">
                                {templateData?.map((e, i) => {
                                    return (
                                        (e.key === 'seo') ? <InputField key={i} i={i} size={'lg'} icon={null} placeholder={'Enter SEO keywords'} value={e.value} label={e.label} /> : ''
                                    )
                                })}
                            </div>
                        </div>
                    </> : <>
                            <div className="t-c-b-body">
                                <div className="t-c-b-item grid-system">
                                    {templateData?.map((e, i) => {
                                        return (
                                            (e.key === 'textarea') ?
                                                <TextAreaField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label} /> :
                                                (e.key === 'date') ? <DateField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label} /> :
                                                    (e.key === 'textarea') ? <TextAreaField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label} /> :
                                                        (e.key === 'dropdown') ? <DropDown key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label} options={e.options} /> :
                                                            (e.key !== 'htmlEditor' && e.key !== 'images' && e.key !== 'seo') ? <InputField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label} /> : ''
                                        )
                                    })}
                                </div>
                                {templateData?.map((e, i) => {
                                    return (
                                        (e.key === 'htmlEditor') ? <div key={i} className="t-c-b-item">
                                            <Editor key={i} i={i} data={e?.value} />
                                        </div> : ''
                                    )
                                })}

                            </div>

                    </>} 
                    <div className="t-c-b-footer">
                        <TextField size='small' className='email-input' placeholder='Kindly enter E-mail id to send notification' onChange={(e) => setToEmail(e?.target?.value)} />
                        <button className="btn btn-primary" onClick={() => handleLogout()}>
                            <span>Cancel</span>
                        </button>
                        <button className="btn btn-icon-left btn-success" onClick={() => handleSubmit(templateData)}>
                            <span>{!isEdit ? 'Submit' : 'Update'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateTemplateForm