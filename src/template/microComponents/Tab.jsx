import React, { useContext } from 'react'
import { Context } from '../../Provider';

const Tab = () => {
    const { selectedTab, setSelectedTab } = useContext(Context);

    return (
        <div className="t-c-head">
            <button className={`t-c-h-item ${selectedTab === 0 ? 'active' : ''} `} onClick={() => setSelectedTab(0)} > Layout <div className="inner-shadow"></div></button>
            <button className={`t-c-h-item ${selectedTab === 1 ? 'active' : ''} `} onClick={() => setSelectedTab(1)} > SEO Settings <div className="inner-shadow"></div></button>
        </div>
    )
}

export default Tab