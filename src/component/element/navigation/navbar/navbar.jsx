import React, { useState } from 'react'
import logo from '../../../../assets/Logo.png'
import { Link } from 'react-router-dom'
import Aicons from '../../icons/AIcons'
import Eicons from '../../icons/Eicons'
import DashboardIcons from '../../icons/dashboardIcons'
import ButtonCustom from '../../button/button'
import UpIcons from '../../icons/upIcons'
import DownIcons from '../../icons/downIcons'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='w-full fixed lg:h-16 h-14 top-0 z-10 bg-gradient-to-tr from-blue-200 to-blue-400'>
            <div className='w-full h-full flex items-center'>
                <div className='grid grid-cols-2 p-5 lg:p-10 w-full'>
                    <div className='flex justify-start items-center'>
                        <img src={logo} alt="" className='lg:w-32 w-28' />
                    </div>
                    <div className='flex justify-end items-center'>
                        <button onClick={handleClick} className='font-semibold text-sm flex items-center'>
                            <h1>Admin</h1>
                            {isOpen ?
                                <UpIcons/>
                                : <DownIcons />
                            }
                        </button>
                        {isOpen ?
                            <div className='right-0 top-0 absolute z-20 flex justify-start w-72 h-56 mt-16 bg-white rounded-bl-xl shadow'>
                                <div className='text-sm w-full'>
                                    <ul>
                                        <Link to='/'>
                                            <li className='mb-3 py-2 mt-5 border-b ml-5 mr-5 flex items-center hover:bg-slate-400'>
                                                <Aicons size='w-4 mr-2' />
                                                Dashboard</li>
                                        </Link>
                                        <Link to='/kategori'>
                                            <li className='mb-3 py-2 flex border-b ml-5 mr-5 items-center hover:bg-slate-400'>
                                                <Eicons style='w-4 mr-2' />
                                                Kategori Alat</li>
                                        </Link>
                                        <Link to='/in'>
                                            <li className='mb-3 py-2 flex border-b ml-5 mr-5 items-center hover:bg-slate-400'>
                                                <DashboardIcons size='w-4 mr-2' />
                                                Equipment In</li>
                                        </Link>
                                        <Link to='/out'>
                                            <li className='mb-3 py-2 flex border-b ml-5 mr-5 items-center hover:bg-slate-400'>
                                                <DashboardIcons size='w-4 mr-2' />
                                                Equipment Out</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
