import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getKategori } from '../../../service/kategori.service'
import { getDataOut } from '../../../service/out.service'
import { getIn } from '../../../service/in.service'

const Dashboard = () => {
    const [isKategori, setIsKategori] = useState([])
    const [isOut, setIsOut] = useState([])
    const [isIn, setIsIn] = useState([])

    useEffect(() => {
        getKategori((res) => {
            setIsKategori(res)
        })
        getDataOut((res) => {
            setIsOut(res.data)
            console.log(res.data);
        })
        getIn((res) => {
            setIsIn(res.data)
        })
    }, [])

    const dashboard = [
        { id: 1, name: 'Dashboard', url: '/', konten: 4},
        { id: 2, name: 'Kategori', url: '/kategori', konten: isKategori.length || 0},
        { id: 3, name: 'Equipment In', url: '/in', konten: isIn.length || 0},
        { id: 4, name: 'Equipment Out', url: '/out', konten: isOut.length || 0}
    ]


    return (
        <div className='w-full h-screen bg-gray-50 flex'>
            <div className='w-1/6 h-screen'>
            </div>
            <div className='w-5/6 h-screen'>
                <div className='w-full h-fit flex justify-center mt-28'>
                    {dashboard.map((das, i) => (
                        <Link to={das.url} key={i}>
                            <div className='mr-2 w-64 h-20 bg-white rounded shadow'>
                                <div className='border-b pb-3 flex justify-center pt-2 rounded'>
                                    <h1 className='font-semibold text-sm'>{das.name}</h1>
                                </div>
                                <div className='flex w-full justify-start items-center p-2 pl-5'>
                                    <h1>{das.konten}</h1>
                                </div>
                            </div>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
