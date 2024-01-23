import React, { useContext } from 'react'
import Tab from './microComponents/Tab'
import TemplateHead from './microComponents/TemplateHead'
import InputField from './microComponents/InputField'
import DateField from './microComponents/DateField'
import DropDown from './microComponents/DropDown'
import Editor from './Editor'
import { Context } from '../Provider'
import TextAreaField from './microComponents/TextAreaField'

const GenerateTemplateForm = () => {
    const { templateData } = useContext(Context)
    console.log({ templateData });
    return (
        <div className="c-l-body">
            <div className="tab-container">
                <Tab />
                <div className="t-c-body">
                    <TemplateHead />
                    <div className="t-c-b-body">
                        <div className="t-c-b-item grid-system">
                            {templateData?.map((e, i) => {
                                return (
                                    (e.key === 'textarea') ?
                                        <TextAreaField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label} /> :
                                        (e.key === 'date') ? <DateField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label} /> :
                                        (e.key === 'textarea') ? <TextAreaField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label}/> :
                                        (e.key !== 'htmlEditor' || e.key !=='images' || e.key !=='seo') ? <InputField key={i} i={i} size={e.size} icon={null} placeholder={e.placeholder} value={e.value} label={e.label}/> : ''
                                )
                            })}

                            {/* <InputField size={'sm'} icon={'person'} />
                            <DateField size={'sm'} />
                            <InputField size={'md'} />
                            <DropDown size={'sm'} /> */}
                        </div>
                        {templateData?.map((e, i) => {
                            return (
                                (e.key === 'htmlEditor') ? <div className="t-c-b-item">
                                    <Editor key={i} handleValue={() => { }} i={i} data={''} />
                                </div> : ''
                            )
                        })}

                    </div>
                    <div className="t-c-b-footer">
                        <button className="btn btn-primary">
                            <span>Cancel</span>
                        </button>
                        <button className="btn btn-icon-left btn-success">
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateTemplateForm