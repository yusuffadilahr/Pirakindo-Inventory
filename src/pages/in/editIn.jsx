import React, { Fragment } from 'react'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import EditIn from '../../component/fragment/in/editIn'
import Navbar from '../../component/element/navigation/navbar/navbar'

const EditInPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <EditIn />
            <Navbar />
        </Fragment>
    )
}

export default EditInPage
