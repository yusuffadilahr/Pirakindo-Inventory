import React, { Fragment } from 'react'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import Kategori from '../../component/fragment/kategori/kategori'
import Navbar from '../../component/element/navigation/navbar/navbar'

const KategoriPage = () => {
    return (
        <Fragment>
            <Sidebar />
            <Kategori />
            <Navbar />
        </Fragment>
    )
}

export default KategoriPage
