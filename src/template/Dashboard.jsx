import React, { useContext, useEffect } from 'react'
import { Context } from '../Provider'
import DashboardTab from './microComponents/DashboardTab'
import TemplateHead from './microComponents/TemplateHead'

const Dashboard = () => {
    const { dashboardData, selectedDashboard } = useContext(Context)
    const handleStageKey = (selectedDashboard) => {
        return selectedDashboard === 0 ? 'previewData' : selectedDashboard === 1 ? 'publishData' : 'seoData'
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
                            return <div key={i} className='list-header pointer'>
                                {e?.staging?.previewComponent?.filter((field, index) => field?.key === 'header')[0]?.value}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard