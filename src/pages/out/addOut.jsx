import React, { Fragment } from 'react'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import AddOut from '../../component/fragment/out/addOut'
import Navbar from '../../component/element/navigation/navbar/navbar'

const AddOutPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <AddOut />
            <Navbar />
        </Fragment>
    )
}

export default AddOutPage
