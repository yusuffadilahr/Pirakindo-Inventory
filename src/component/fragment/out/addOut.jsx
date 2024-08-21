import React, { useEffect, useState } from 'react'
import InputCustom from '../../element/form/input'
import LabelCustom from '../../element/form/label'
import ButtonCustom from '../../element/button/button'
import { Link, useNavigate } from 'react-router-dom'
import { createDataOut } from '../../../service/out.service'
import { getKategori } from '../../../service/kategori.service'

const AddOut = () => {
    const [isKategori, setIsKategori] = useState([])
    const [isNewData, setIsNewData] = useState([])
    const [isStatus, setIsStatus] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getKategori((res) => {
            setIsKategori(res)
        })
    }, [])

    const handleStatusChange = (e) => {
        setIsStatus(e.target.value)
    }

    const handleKategoriChange = (e) => {
        setIsNewData(e.target.value)
    }

    const handleAddDataOut = (e) => {
        e.preventDefault()

        const data = {
            namaPeminjam: e.target.namaPeminjam.value,
            nama_alat: isNewData,
            keperluan: e.target.keperluan.value,
            tanggalKeluar: e.target.tanggalKeluar.value,
            status: isStatus,
            jumlah: e.target.jumlah.value
        }

        createDataOut(data, (res) => {
            if (res.status === 201) {
                console.log('ini sukses', res)
                alert('Berhasil Menambah Data')
                navigate('/out')
            } else {
                alert('Gagal menambah data')
                console.log('ini gagal', res.data)
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
                        <form onSubmit={handleAddDataOut}>
                            <div className='grid grid-cols-2 w-full'>
                                <div className='mr-1'>
                                    <LabelCustom htmlFor='namaPeminjam' classname='font-semibold text-sm'>Nama Peminjam</LabelCustom>
                                    <InputCustom
                                        type='text'
                                        name='namaPeminjam'
                                        required
                                        placeholder='Nama Peminjam'
                                        autoComplete='current-nama_peminjam'
                                        className='pl-2 py-1 mb-3 px-1 text-sm w-full border mt-1'
                                    />
                                </div>
                                <div className='ml-1'>
                                    <LabelCustom htmlFor='nama_alat' classname='font-semibold text-sm mt'>Nama Barang</LabelCustom>
                                    {/* <InputCustom
                                type='text'
                                name='nama_alat'
                                required
                                placeholder={singleOut.nama_alat}
                                autoComplete='current-nama_alat'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            /> */}
                                    <div className='w-full mt-1'>
                                        <select name="nama_barang" id="nama_barang" onChange={handleKategoriChange} className='py-1 pl-2 text-sm w-full border'>
                                            <option value="">-- Select Option --</option>
                                            {isKategori.map((kat) => (
                                                <option value={kat.nama_barang}>{kat.nama_barang}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <LabelCustom htmlFor='keperluan' classname='font-semibold text-sm'>Keperluan</LabelCustom>
                            <InputCustom
                                type='text'
                                name='keperluan'
                                required
                                placeholder='Keperluan'
                                autoComplete='current-statusBarang'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <div className='grid grid-cols-2 w-full'>
                                <div className=''>
                                    <LabelCustom htmlFor='tanggalMasuk' classname='font-semibold text-sm'>Tanggal Peminjaman</LabelCustom>
                                    <InputCustom
                                        type='date'
                                        name='tanggalKeluar'
                                        required
                                        placeholder='Tanggal Keluar'
                                        autoComplete='current-tanggalMasuk'
                                        className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                                    />
                                </div>
                                <div className='ml-1'>
                                    <LabelCustom htmlFor='statusBarang' classname='font-semibold text-sm'>Status</LabelCustom>
                                    <div className='w-full'>
                                        <select name="status" id="status" onChange={handleStatusChange} className='py-1 mt-1 pl-2 mb-2 text-sm w-full border'>
                                            <option value="">-- Select Option --</option>
                                            <option value='Dipinjam'>Dipinjam</option>
                                            <option value='Dicolong'>Dicolong</option>
                                        </select>
                                    </div>
                                    {/* <InputCustom
                                type='text'
                                name='status'
                                required
                                placeholder='Status'
                                autoComplete='current-statusBarang'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            /> */}
                                </div>
                            </div>


                            <LabelCustom htmlFor='jumlah' classname='font-semibold text-sm'>Jumlah</LabelCustom>
                            <InputCustom
                                type='number'
                                name='jumlah'
                                required
                                placeholder='Jumlah'
                                autoComplete='current-jumlah'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <div className='flex justify-end mt-2'>
                                <ButtonCustom type='submit' lingkar='mr-2 rounded-md border'>Tambah</ButtonCustom>
                                <Link to='/out'>
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

export default AddOut
