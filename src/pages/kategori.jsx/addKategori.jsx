import React, { Fragment } from 'react'
import Sidebar from '../../component/element/navigation/sidebar/sidebar'
import AddKategori from '../../component/fragment/kategori/addKategori'
import Navbar from '../../component/element/navigation/navbar/navbar'

const AddKategoriPage = () => {
  return (
    <Fragment>
        <Sidebar/>
        <AddKategori />
        <Navbar />
    </Fragment>
  )
}

export default AddKategoriPage
