import React, { useEffect, useState } from 'react'
import InputCustom from '../../element/form/input'
import LabelCustom from '../../element/form/label'
import ButtonCustom from '../../element/button/button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { singleInData, updateDataIn } from '../../../service/in.service'

const EditIn = () => {
    const { id } = useParams()
    const [singleIn, setSingleIn] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        singleInData(id, (res) => {
            setSingleIn(res.data)
        })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()

        const data = {
            nama_alat: e.target.nama_alat.value,
            tanggalMasuk: e.target.tanggalMasuk.value,
            namaPeminjam: e.target.namaPeminjam.value,
            statusBarang: e.target.statusBarang.value,
            jumlah: e.target.jumlah.value
        }

        updateDataIn(id, data, (status, res) => {
            if (status) {
                alert(res.message)
                navigate('/in')
            }
            else {
                console.error(res.message)
            }
        })
    }
    return (
        <div className='flex'>
            <div className='w-1/6 h-screen flex'>
            </div>
            <div className='w-5/6 bg-gray-50 h-screen flex justify-center'>
                <div className='mt-28 w-full h-fit'>
                    <div className='w-[1000px] bg-white border h-fit ml-20 p-10 rounded-xl'>
                        <form onSubmit={handleUpdate}>
                            <LabelCustom htmlFor='namaPeminjam' classname='font-semibold text-sm'>Nama Peminjam</LabelCustom>
                            <InputCustom
                                type='text'
                                name='namaPeminjam'
                                required
                                placeholder={singleIn.namaPeminjam}
                                autoComplete='current-nama_peminjam'
                                className='pl-2 py-1 mb-3 px-1 text-sm w-full border mt-1'
                            />
                            <LabelCustom htmlFor='nama_alat' classname='font-semibold text-sm mt'>Nama Barang</LabelCustom>
                            <InputCustom
                                type='text'
                                name='nama_alat'
                                required
                                placeholder={singleIn.nama_alat}
                                autoComplete='current-nama_alat'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <LabelCustom htmlFor='tanggalMasuk' classname='font-semibold text-sm'>Tanggal Pengembalian</LabelCustom>
                            <InputCustom
                                type='date'
                                name='tanggalMasuk'
                                required
                                placeholder={singleIn.tanggalMasuk}
                                autoComplete='current-tanggalMasuk'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <LabelCustom htmlFor='statusBarang' classname='font-semibold text-sm'>Status</LabelCustom>
                            <InputCustom
                                type='text'
                                name='statusBarang'
                                required
                                placeholder={singleIn.statusBarang}
                                autoComplete='current-statusBarang'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <LabelCustom htmlFor='jumlah' classname='font-semibold text-sm'>Jumlah</LabelCustom>
                            <InputCustom
                                type='number'
                                name='jumlah'
                                required
                                placeholder={singleIn.jumlah}
                                autoComplete='current-jumlah'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <div className='flex justify-end mt-2'>
                                <ButtonCustom type='submit' lingkar='mr-2 rounded-md border'>Ubah</ButtonCustom>
                                <Link to='/in'>
                                    <ButtonCustom lingkar='mr-2 rounded-md border'>Batal</ButtonCustom>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditIn
