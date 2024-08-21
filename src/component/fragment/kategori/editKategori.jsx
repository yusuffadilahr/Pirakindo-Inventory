import React, { useEffect, useState } from 'react'
import { addKategoriData, singleKategori, updateKategori } from '../../../service/kategori.service'
import ButtonCustom from '../../element/button/button'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditKategori = () => {
    const { id } = useParams()
    const [isSingleKategori, setIsSingleKategori] = useState([])
    const navigate=useNavigate()

    useEffect(() => {
        singleKategori(id, (res) => {
            setIsSingleKategori(res.data)
        })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()

        const data = {
            nama_barang: e.target.nama_barang.value,
            description: e.target.description.value
        }

        updateKategori(id, data, (status, res) => {
            if (status) {
                alert(res.data.message)
                navigate('/kategori')
            }
            else {
                console.error(res.data.message)
            }
        })
    }
    return (
        <div className='flex'>
            <div className='w-1/6 h-screen flex bg-black'>
            </div>
            <div className='w-5/6 bg-gray-50 h-screen flex justify-center'>
                <div className='mt-28 w-full h-fit'>
                    <div className='w-[1000px] bg-white border h-fit ml-20 p-10 rounded-xl'>
                        <form onSubmit={handleUpdate}>
                            <label htmlFor="nama_barang" className='font-semibold mb-2 text-sm'>Ubah Nama Barang</label>
                            <input type="text" className='pl-2 py-1 px-1 text-sm w-full border mb-2' placeholder={isSingleKategori.nama_barang} name='nama_barang' required autoComplete='current-kategori' />
                            <label htmlFor="description" className='font-semibold mb-2 text-sm'>Ubah Description</label>
                            <input type="text" className='pl-2 py-1 px-1 text-sm w-full border' placeholder={isSingleKategori.description} name='description' required autoComplete='current-description' />
                            <div className='flex justify-end mt-3'>
                                <ButtonCustom type='submit' lingkar='mr-2 rounded-md border'>Ubah</ButtonCustom>
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

export default EditKategori
