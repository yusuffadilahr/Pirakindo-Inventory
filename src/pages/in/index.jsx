import React, { Fragment } from 'react'
import In from '../../component/fragment/in/in'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import Navbar from '../../component/element/navigation/navbar/navbar'

const MasukPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <In />
            <Navbar />
        </Fragment>
    )
}

export default MasukPage
