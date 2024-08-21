import React, { Fragment, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Aicons from '../../icons/AIcons'
import Eicons from '../../icons/Eicons'
import DownIcons from '../../icons/downIcons'
import UpIcons from '../../icons/upIcons'
import Bicons from '../../icons/Bicons'
import ProfileIcons from '../../icons/profileIcons'
import Cicons from '../../icons/Cicons'
import DashboardIcons from '../../icons/dashboardIcons'

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const location = useLocation()
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleSideBar = () => {
        setSideBarOpen(!sideBarOpen)
    }

    const isActive = (url) => location.pathname === url
    return (
        <Fragment>
            <div className='flex'>
                <button className='flex fixed justify-start z-30 pt-5 pl-2' onClick={handleSideBar}>
                    {sideBarOpen ? <p>-</p> : <p>+</p>}
                </button>
                {sideBarOpen ?
                    ''
                    : <div className='w-1/6 fixed h-screen left-0 top-0 z-0 bg-blue-50 border'>
                        <div className='w-full h-full pt-20'>
                            <div className='pt-5'>
                                <h1 className='text-[10px] text-gray-300 ml-2 mb-5'>Navigation</h1>
                            </div>
                            <ul className='text-sm font-semibolds'>
                                <Link to='/'>
                                    <li className={isActive('/') ? 'bg-blue-200 w-full pl-5 py-2 flex font-semibold mb-5 shadow' : 'mb-4 pb-2 pt-2 border-b pl-5 w-full hover:text-slate-500 flex items-center'}>
                                        <Aicons size='w-4 mr-2' />
                                        Dashboard
                                    </li>
                                </Link>
                                <Link to='/kategori'>
                                    <li className={isActive('/kategori') ? 'bg-blue-200 w-full pl-5 py-2 mt-6 flex font-semibold mb-8 shadow' : 'pb-2 mb-8 pt-3 border-b pl-5 w-full hover:text-slate-500 flex items-center'}>
                                        <Eicons style='w-4 mr-2' />
                                        Kategori Alat
                                    </li>
                                </Link>
                                <button onClick={handleClick} className='w-full pl-5 border-b'>
                                    {isOpen ?
                                        <li className='pb-2 hover:text-slate-500 flex items-center'>
                                            <Bicons size='w-4 mr-2' />
                                            Alat Konstruksi
                                            <UpIcons />
                                        </li>
                                        : <li className='pb-2 hover:text-slate-500 flex items-center'>
                                            <Bicons size='w-4 mr-2' />
                                            Alat Konstruksi
                                            <DownIcons />
                                        </li>}
                                </button>
                                {isOpen ?
                                    <Fragment>
                                        <div className='bg-blue-100'>
                                            <Link to='/in'>
                                                <li className={isActive('/in') ? 'pt-3 bg-blue-200 items-center w-full pl-5 py-2 flex font-semibold mb-1 shadow' : 'pb-3 pt-3 py-2 border-b pl-5 w-full hover:text-slate-500 flex items-center'}>
                                                    <DashboardIcons size='ml-3 w-4 mr-2' />
                                                    Equipment In
                                                </li>
                                            </Link>
                                            <Link to='/out'>
                                                <li className={isActive('/out') ? 'bg-blue-200 w-full pt-3 pl-5 py-2 flex font-semibold mb-6 shadow' : 'pb-2 mb-6 py-2 border-b pl-5 w-full hover:text-slate-500 flex pt-3 items-center'}>
                                                    <DashboardIcons size='ml-3 w-4 mr-2' />
                                                    Equipment Out
                                                </li>
                                            </Link>
                                        </div>
                                    </Fragment>
                                    :
                                    ''}
                                <div className='pb-2'>
                                    <h1 className='text-[10px] pt-5 text-gray-300 ml-2'>About Company</h1>
                                </div>
                                <Link to='https://sondirboring.com'>
                                    <li className='pb-2 pl-2 mb-5 border-b hover:text-slate-500 flex items-center'>
                                        <ProfileIcons />
                                        Profil Perusahaan
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>}
            </div>
        </Fragment>
    )
}

export default Sidebar
