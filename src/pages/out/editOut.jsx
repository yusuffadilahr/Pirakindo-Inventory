import React, { Fragment } from 'react'
import Navbar from '../../component/element/navigation/navbar/navbar'
import EditOut from '../../component/fragment/out/editOut'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'

const EditOutPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <EditOut />
            <Navbar />
        </Fragment>
    )
}

export default EditOutPage
