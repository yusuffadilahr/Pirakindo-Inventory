import React, { useEffect, useRef, useState } from 'react'
import ButtonCustom from '../../element/button/button'
import { Link } from 'react-router-dom'
import { deleteDataIn, getIn } from '../../../service/in.service'
import AddIcons from '../../element/icons/addIcons'
import { useReactToPrint } from 'react-to-print'

const In = () => {
    const [isIn, setIsIn] = useState([])
    const [entriesPerPage, setEntriesPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)
    const componentPDF = useRef()

    useEffect(() => {
        getIn((res) => {
            setIsIn(res.data)
        })
    }, [])

    const totalPages = Math.ceil(isIn.length / entriesPerPage)
    const paginatedData = isIn.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleEntriesChange = (e) => {
        setEntriesPerPage(parseInt(e.target.value))
        setCurrentPage(1)
    }

    const generatePDF = useReactToPrint({
        content: () => componentPDF.current,
        documentTitle: 'Alat Keluar',
        onAfterPrint: () => alert('Berhasil Mengekspor ke PDF')
    })

    const handleDeleteData = (id) => {
        if (window.confirm('Apakah anda yakin ingin menghapus ini?')) {
            deleteDataIn(id, (res) => {
                try {
                    console.log(res.data.message)
                    alert(res.data.message)
                    window.location.reload()
                } catch (error) {
                    console.error(error)
                }
            })
        }
    }

    return (
        <div className='flex'>
            <div className='w-1/6 h-screen flex'>
            </div>
            <div className='w-5/6 h-screen bg-gray-50 flex justify-center'>
                <div className='mt-20 p-10 w-full'>
                    <div className='w-[1000px] h-fit p-5 ml-5 bg-white shadow'>
                        <div className='flex w-full'>
                            <Link to='/add-in'>
                                <ButtonCustom
                                    lingkar='border mb-2 flex items-center' color='bg-white hover:bg-black' text='text-black hover:text-white text-xs font-semibold mr-2'
                                >
                                    <AddIcons />
                                    Tambah Data
                                </ButtonCustom>
                            </Link>
                            <ButtonCustom
                                onClick={generatePDF}
                                lingkar='border mb-2 flex items-center' color='bg-white hover:bg-black' text='text-black hover:text-white text-xs font-semibold mr-2'
                            >
                                <AddIcons />
                                Export to PDF
                            </ButtonCustom>
                        </div>
                        <div className='mb-2 font-semibold text-sm'>
                            <label htmlFor="entries-per-page">Show
                                <select className='border m-1' name="entries-per-page" id="entries-per-page" value={entriesPerPage} onChange={handleEntriesChange}>
                                    <option value={5}>5</option>
                                </select>
                                <span>entries</span>
                            </label>
                        </div>
                        <div ref={componentPDF}>
                            <table className='w-full text-center bg-white '>
                                <thead>
                                    <tr className='bg-gray-50'>
                                        <th className='p-1 border'>No</th>
                                        <th className='p-1 border'>Nama Peminjam</th>
                                        <th className='p-1 border'>Nama Barang</th>
                                        <th className='p-1 border'>Tanggal Pengembalian</th>
                                        <th className='p-1 border'>Status Barang</th>
                                        <th className='p-1 border'>Jumlah</th>
                                        <th className='p-1 border'>Action</th>
                                    </tr>
                                </thead>
                                {paginatedData.map((kat, i) => (
                                    <tbody key={i}>
                                        <tr>
                                            <td className='p-2 border text-sm'>{(currentPage - 1) * entriesPerPage + i + 1}</td>
                                            <td className='p-2 border text-sm'>{kat.namaPeminjam}</td>
                                            <td className='p-2 border text-sm'>{kat.nama_alat}</td>
                                            <td className='p-2 border text-sm'>{kat.tanggalMasuk}</td>
                                            <td className='p-2 border text-sm'>{kat.statusBarang}</td>
                                            <td className='p-2 border text-sm'>{kat.jumlah}</td>
                                            <td className='border p-2'>
                                                <Link to={`/in/${kat.id}`}>
                                                    <ButtonCustom lingkar='border-none rounded-md' color='bg-blue-600 hover:bg-blue-800' text='text-white text-sm font-semibold mr-1'>Ubah</ButtonCustom>
                                                </Link>
                                                <ButtonCustom onClick={() => handleDeleteData(kat.id)} lingkar='border-none rounded-md' color='bg-red-600 hover:bg-red-800' text='text-white text-sm font-semibold'>Hapus</ButtonCustom>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='justify-start flex pt-3 items-center'>
                                <h1 className='text-sm font-semibold'>Pages {currentPage} of {totalPages}</h1>
                            </div>
                            <div className='flex justify-end pt-3'>
                                <ButtonCustom
                                    disabled={currentPage === 1}
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    text='text-sm font-semibold text-black hover:text-white disabled:text-black disabled:bg-gray-300'
                                    lingkar='rounded-xl mr-1 border disabled:bg-gray-300'>
                                    Previous
                                </ButtonCustom>
                                <ButtonCustom lingkar='rounded-xl mr-0 border'
                                    text='text-sm font-semibold text-black hover:text-white disabled:text-black disabled:bg-gray-300'
                                    disabled={currentPage === totalPages}
                                    onClick={() => handlePageChange(currentPage + 1)}
                                >
                                    Next
                                </ButtonCustom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default In
