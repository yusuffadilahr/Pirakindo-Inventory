import React, { Fragment } from 'react'
import Dashboard from '../../component/fragment/dashboard/dashboard'
import Navbar from '../../component/element/navigation/navbar/navbar'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'

const DashboardPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <Dashboard />
            <Navbar />
        </Fragment>
    )
}

export default DashboardPage
