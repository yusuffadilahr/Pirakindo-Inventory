import React, { useEffect, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import { Link, useNavigate } from 'react-router-dom'
import LabelCustom from '../../element/form/label'
import { createDataMasuk } from '../../../service/in.service'
import InputCustom from '../../element/form/input'
import { getKategori } from '../../../service/kategori.service'

const AddIn = () => {
    const [isStatus, setIsStatus] = useState('Dikembalikan')
    const [isKategori, setIsKategori] = useState([])
    const [isKategoriNew, setIsKategoriNew] = useState('')

    const handleStatus = (e) => {
        setIsStatus(e.target.value)
    }

    useEffect(() => {
        getKategori((res) => {
            setIsKategori(res)
            console.log(res)
        })
    }, [])

    const handleKategori = (e) => {
        setIsKategoriNew(e.target.value)
    }

    const navigate = useNavigate()
    const handleAddData = (e) => {
        e.preventDefault()

        const data = {
            nama_alat: isKategoriNew,
            tanggalMasuk: e.target.tanggalMasuk.value,
            namaPeminjam: e.target.namaPeminjam.value,
            statusBarang: isStatus,
            jumlah: e.target.jumlah.value
        }

        createDataMasuk(data, (status, res) => {
            if (status) {
                alert(res.data.message)
                navigate('/in')
            }
            else {
                console.error(res);
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
                        <form onSubmit={handleAddData}>
                            <LabelCustom htmlFor='namaPeminjam' classname='font-semibold text-sm'>Nama Peminjam</LabelCustom>
                            <InputCustom
                                type='text'
                                name='namaPeminjam'
                                required
                                placeholder='Masukan Data'
                                autoComplete='current-nama_peminjam'
                                className='pl-2 py-1 mb-3 px-1 text-sm w-full border mt-1'
                            />
                            <LabelCustom htmlFor='nama_barang' classname='font-semibold text-sm mt'>Nama Barang</LabelCustom>
                            <select name="nama_barang" id="" className='w-full mt-1 mb-2 border pl-2 text-sm py-1' onChange={handleKategori}>
                                <option value="">-- Select Option --</option>
                                {isKategori.map((kat) => (
                                    <option value={kat.nama_barang}>{kat.nama_barang}</option>
                                ))}
                            </select>
                            {/* <InputCustom
                                type='text'
                                name='nama_alat'
                                required
                                placeholder='Masukan Data'
                                autoComplete='current-nama_alat'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            /> */}
                            <LabelCustom htmlFor='tanggalMasuk' classname='font-semibold text-sm'>Tanggal Pengembalian</LabelCustom>
                            <InputCustom
                                type='date'
                                name='tanggalMasuk'
                                required
                                autoComplete='current-tanggalMasuk'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <LabelCustom htmlFor='statusBarang' classname='font-semibold text-sm'>Status</LabelCustom>
                            <select name="statusBarang" id="" className='w-full mt-1 mb-2 border pl-2 text-sm py-1' onChange={handleStatus}>
                                <option value="">-- Select Option --</option>
                                <option value="Dikembalikan">Dikembalikan</option>
                            </select>
                            {/* <InputCustom
                                type='text'
                                name='statusBarang'
                                required
                                placeholder='Masukan Data'
                                autoComplete='current-statusBarang'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            /> */}
                            <LabelCustom htmlFor='jumlah' classname='font-semibold text-sm'>Jumlah</LabelCustom>
                            <InputCustom
                                type='number'
                                name='jumlah'
                                required
                                placeholder='Masukan Data'
                                autoComplete='current-jumlah'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <div className='flex justify-end mt-2'>
                                <ButtonCustom type='submit' lingkar='mr-2 rounded-md border'>Tambah</ButtonCustom>
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

export default AddIn
