import React, { Fragment } from 'react'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import AddIn from '../../component/fragment/in/addIn'
import Navbar from '../../component/element/navigation/navbar/navbar'

const AddInPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <AddIn />
            <Navbar />
        </Fragment>
    )
}

export default AddInPage
