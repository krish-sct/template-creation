import React from 'react'
import Tab from './microComponents/Tab'
import TemplateHead from './microComponents/TemplateHead'
import InputField from './microComponents/InputField'
import DateField from './microComponents/DateField'
import Toggle from './microComponents/Toggle'
import DropDown from './microComponents/DropDown'
import Editor from './Editor'

const GenerateTemplateForm = () => {
    return (
        <div className="c-l-body">
            <div className="tab-container">
                <Tab />
                <div className="t-c-body">
                    <TemplateHead />
                    <div className="t-c-b-body">
                        <div className="t-c-b-item grid-system">
                            <InputField size={'lg'} />
                            <InputField size={'sm'} icon={'person'} />
                            <DateField size={'sm'} />
                            <InputField size={'md'} />
                            <DropDown size={'sm'} />
                        </div>
                        <div className="t-c-b-item">
                            <Editor handleValue={() => { }} i={0} data={''} />
                        </div>
                        <div className="t-c-b-item grid-system">
                            <div className="custom-form-group g-s-md-12">
                                <div className="t-c-b-i-title">Additional Settings</div>
                            </div>
                            <div className="custom-form-group g-s-md-2">
                                <label className="toggle-text-list-card">
                                    <div className="t-t-l-c-title">
                                        Header
                                    </div>
                                    <div className="toggle-list-group">
                                        <div className="toggle-switch">
                                            <input type="checkbox" checked="" id="chhheckbox1" />
                                            <span className="toggle-slider"></span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="custom-form-group g-s-md-2">
                                <label className="toggle-text-list-card">
                                    <div className="t-t-l-c-title">
                                        Footer
                                    </div>
                                    <div className="toggle-list-group">
                                        <div className="toggle-switch">
                                            <input type="checkbox" checked="" id="chhheckbox1" />
                                            <span className="toggle-slider"></span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
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