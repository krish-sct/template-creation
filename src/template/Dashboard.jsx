import React, { useContext, useEffect } from 'react'
import { Context } from '../Provider'
import DashboardTab from './microComponents/DashboardTab'
import TemplateHead from './microComponents/TemplateHead'
import { Edit } from '@mui/icons-material'

const Dashboard = () => {
    const { dashboardData, selectedDashboard, handleGenerateLink, templateName } = useContext(Context)
    const handleStageKey = (selectedDashboard) => {
        return selectedDashboard === 0 ? 'previewData' : selectedDashboard === 1 ? 'publishData' : 'seoData'
    }
    const handleStage = (selectedDashboard) => {
        return selectedDashboard === 0 ? 'preview' : selectedDashboard === 1 ? 'publish' : 'seo'
    }
    const handleEdit = () => {

    }
    useEffect(() => {
        console.log({ dashboardData });
    }, [dashboardData])
    return (
        <div className="c-l-body">
            <div className="tab-container">
                <DashboardTab />
                <div className="t-c-body">
                    <TemplateHead />
                    <div className='list-body'>
                        {dashboardData?.[handleStageKey(selectedDashboard)]?.map((e, i) => {
                            let data = e?.staging?.previewComponent?.filter((field, index) => field?.key === 'header')[0]
                            return <div key={i} className='flex'>
                                <div className='list-header pointer' onClick={() => handleGenerateLink(handleStage(selectedDashboard), templateName, e?._id)}>
                                    {data?.value}
                                </div>
                                <button className="btn-edit pointer" onClick={() => handleEdit()}>
                                    <span>Edit</span>
                                </button>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard