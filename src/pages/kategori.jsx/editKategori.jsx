import React, { Fragment } from 'react'
import EditKategori from '../../component/fragment/kategori/editKategori'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import Navbar from '../../component/element/navigation/navbar/navbar'

const EditKategoriPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <EditKategori />
            <Navbar />
        </Fragment>
    )
}

export default EditKategoriPage
