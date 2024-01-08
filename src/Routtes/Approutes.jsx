import React from 'react'
import { Navigate } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Edit from '../Components/Edit'
import Home from '../Components/Home'
import Create from '../Components/Create'

const Approutes = [
    {
        path : '/',
        name : 'Home',
        exact:true,
        element : <Home/>
    },
    {
        path : '/dashboard',
        name : 'Dashboard',
        exact:true,
        element :  <Dashboard/>
    },
    {
        path : '/edit/:id',
        name : 'Edit',
        exact:true,
        element : <Edit/>
    },
    {
        path : '/create',
        name : 'Create',
        exact:true,
        element : <Create/>
    },
    {
        path : '*',
        name : 'All',
        exact:false,
        element : <Navigate to= "/"/>
    },
]

export default Approutes