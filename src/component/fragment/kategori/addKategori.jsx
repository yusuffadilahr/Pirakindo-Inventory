import React, { useState } from 'react'
import { addKategoriData } from '../../../service/kategori.service'
import ButtonCustom from '../../element/button/button'
import { Link, useNavigate } from 'react-router-dom'
import LabelCustom from '../../element/form/label'
import InputCustom from '../../element/form/input'

const AddKategori = () => {
    const navigate = useNavigate()
    const handleAddKategori = (e) => {
        e.preventDefault()

        const data = {
            nama_barang: e.target.nama_barang.value,
            description: e.target.description.value
        }

        addKategoriData(data, (status, res) => {
            if (status) {
                alert('Berhasil Menambahkan Data')
                navigate('/kategori')
            } else {
                console.error(res.data)
                alert('Gagal Menambahkan Data')
            }
        })
    }
    return (
        <div className='flex'>
            <div className='w-1/6 h-screen flex bg-gray-50'>
            </div>
            <div className='w-5/6 bg-gray-50 h-screen flex justify-center'>
                <div className='mt-28 w-full h-fit'>
                    <div className='w-[1000px] bg-white border h-fit ml-20 p-10 rounded-xl'>
                        <form onSubmit={handleAddKategori}>
                            <LabelCustom htmlFor='nama_barang' classname='font-semibold text-sm'>Nama Barang</LabelCustom>
                            <InputCustom
                                type='text'
                                name='nama_barang'
                                required
                                placeholder='Masukan Data Barang'
                                autoComplete='current-nama_barang'
                                className='pl-2 py-1 mb-3 px-1 text-sm w-full border mt-1'
                            />
                            <LabelCustom htmlFor='description' classname='font-semibold text-sm'>Description</LabelCustom>
                            <InputCustom
                                type='text'
                                name='description'
                                required
                                placeholder='Masukan Deskripsi'
                                autoComplete='current-description'
                                className='pl-2 py-1 mb-3 px-1 text-sm w-full border mt-1'
                            />
                            <div className='flex justify-end mt-2'>
                                <ButtonCustom type='submit' lingkar='mr-2 rounded-md border'>Tambah</ButtonCustom>
                                <Link to='/kategori'>
                                    <ButtonCustom lingkar='rounded-md border'>Batal</ButtonCustom>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddKategori
