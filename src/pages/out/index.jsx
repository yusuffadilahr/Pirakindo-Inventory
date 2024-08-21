import React, { Fragment } from 'react'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import OutData from '../../component/fragment/out/out'
import Navbar from '../../component/element/navigation/navbar/navbar'

const OutPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <OutData />
            <Navbar />
        </Fragment>
    )
}

export default OutPage
