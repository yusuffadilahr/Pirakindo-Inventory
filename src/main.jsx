import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardPage from './pages/dashboard'
import KategoriPage from './pages/kategori.jsx'
import AddKategoriPage from './pages/kategori.jsx/addKategori.jsx'
import EditKategoriPage from './pages/kategori.jsx/editKategori.jsx'
import MasukPage from './pages/in/index.jsx'
import AddInPage from './pages/in/addIn.jsx'
import EditInPage from './pages/in/editIn.jsx'
import OutPage from './pages/out/index.jsx'
import EditOutPage from './pages/out/editOut.jsx'
import AddOutPage from './pages/out/addOut.jsx'

const router = createBrowserRouter([
  {    path: '/',    element: <DashboardPage />  },
  {    path: '/kategori',    element: <KategoriPage />  },
  {    path: '/kategori/:id',    element: <EditKategoriPage />  },
  {    path: '/add-kategori',    element: <AddKategoriPage />  },
  {    path: '/in',    element: <MasukPage />  },
  {    path: '/in/:id',    element: <EditInPage />  },
  {    path: '/add-in',    element: <AddInPage />  },
  {    path: '/out',    element: <OutPage />  },
  {    path: '/addout',    element: <AddOutPage />  },
  {    path: '/out/:id',    element: <EditOutPage />  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
