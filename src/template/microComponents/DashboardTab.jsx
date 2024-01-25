import React, { useContext } from "react";
import { Context } from "../../Provider";

const DashboardTab = () => {
    const { dashboardData, selectedDashboard, setSelectedDashboard, role } = useContext(Context);
    // useEffect(() => {
    //     console.log({ dashboardData });
    // }, [dashboardData])
    const handleChange = (tab) => {

    }
    return (
        <div className="t-c-head">
            <button className={`t-c-h-item ${selectedDashboard === 0 ? 'active' : ''} `} onClick={() => setSelectedDashboard(0)}>
                {" "}
                Pending for Preview{" "}
                {dashboardData?.previewData?.length ? (
                    <div className="count-badge">
                        {dashboardData?.previewData?.length}
                    </div>
                ) : (
                    ""
                )}{" "}
                <div className="inner-shadow"> </div>
            </button>
            <button className={`t-c-h-item ${selectedDashboard === 1 ? 'active' : ''}`} onClick={() => role == 'publisher' ? setSelectedDashboard(1) : true}>
                {" "}
                Pending for Publish{" "}
                {dashboardData?.publishData?.length ?
                    <div className="count-badge">{dashboardData?.publishData?.length}</div>
                    : ''}
                <div className="inner-shadow"></div>
            </button>
            <button className={`t-c-h-item ${selectedDashboard === 2 ? 'active' : ''}`} onClick={() => role == 'seo' ? setSelectedDashboard(2) : true}>
                {" "}
                Pending for SEO{" "}
                {dashboardData?.seoData?.length ?
                    <div className="count-badge">{dashboardData?.seoData?.length}</div>

                    : ''}
                <div className="inner-shadow"></div>
            </button>
        </div>
    );
};

export default DashboardTab;
