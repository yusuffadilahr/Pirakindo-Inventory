import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { singleOutData, updateDataOut } from '../../../service/out.service'
import ButtonCustom from '../../element/button/button'
import InputCustom from '../../element/form/input'
import LabelCustom from '../../element/form/label'
import { getKategori } from '../../../service/kategori.service'

const EditOut = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [singleOut, setSingleOut] = useState([])
    const [isKategori, setIsKategori] = useState([])
    const [kategoriChange, setKategoriChange] = useState('')
    const [isStatus, setIsStatus] = useState('')

    useEffect(() => {
        singleOutData(id, (res) => {
            setSingleOut(res.data)
            console.log(res.data)
        })
        getKategori((res) => {
            setIsKategori(res)
            console.log(res)
        })
    }, [])

    const handleKategoriChange = (e) => {
        setKategoriChange(e.target.value)
    }

    const handleStatusChange = (e) => {
        setIsStatus(e.target.value)
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        const data = {
            namaPeminjam: e.target.namaPeminjam.value,
            nama_alat: kategoriChange,
            keperluan: e.target.keperluan.value,
            tanggalKeluar: e.target.tanggalKeluar.value,
            status: isStatus,
            jumlah: e.target.jumlah.value
        }

        updateDataOut(id, data, (res) => {
            if (res.status === 200) {
                alert(res.data.message)
                navigate('/out')
            } else {
                console.log(res)
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
                        <div className='w-full mb-2'>
                            <h1 className='font-bold'>Ubah Data</h1>
                        </div>
                        <form onSubmit={handleUpdate}>
                            <div className='grid grid-cols-2 w-full'>
                                <div className='mr-1'>
                                    <LabelCustom htmlFor='namaPeminjam' classname='font-semibold text-sm'>Nama Peminjam</LabelCustom>
                                    <InputCustom
                                        type='text'
                                        name='namaPeminjam'
                                        required
                                        placeholder={singleOut.namaPeminjam}
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
                                    <div className='w-full'>
                                        <select name="nama_barang" id="nama_barang" onChange={handleKategoriChange} className='w-full mt-1 border py-1 text-sm pl-2'>
                                            <option value="">-- Select Option --</option>
                                            {isKategori.map((kat) => (
                                                <option value={kat.nama_barang}>{kat.nama_barang}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <LabelCustom htmlFor='statusBarang' classname='font-semibold text-sm'>Keperluan</LabelCustom>
                            <InputCustom
                                type='text'
                                name='keperluan'
                                required
                                placeholder={singleOut.keperluan}
                                autoComplete='current-statusBarang'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <div className='grid grid-cols-2 w-full'>
                                <div className='mr-1'>
                                    <LabelCustom htmlFor='tanggalMasuk' classname='font-semibold text-sm'>Tanggal Peminjaman</LabelCustom>
                                    <InputCustom
                                        type='date'
                                        name='tanggalKeluar'
                                        required
                                        placeholder={singleOut.tanggalKeluar}
                                        autoComplete='current-tanggalMasuk'
                                        className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                                    />
                                </div>
                                <div className='ml-1'>
                                    <LabelCustom htmlFor='statusBarang' classname='font-semibold text-sm'>Status</LabelCustom>
                                    <select name="status" id="status" onChange={handleStatusChange} className='w-full mt-1 border py-1 text-sm pl-2'>
                                        <option value="">-- Select Option --</option>
                                        <option value='Dipinjam'>Dipinjam</option>
                                    </select>
                                    {/* <InputCustom
                                type='text'
                                name='status'
                                required
                                placeholder={singleOut.status}
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
                                placeholder={singleOut.jumlah}
                                autoComplete='current-jumlah'
                                className='pl-2 py-1 px-1 mb-3 text-sm w-full border mt-1'
                            />
                            <div className='flex justify-end mt-2'>
                                <ButtonCustom type='submit' lingkar='mr-2 rounded-md border'>Ubah</ButtonCustom>
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

export default EditOut
