import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <main>  
                  <MainNavigation />
            </main>
            <Outlet/>



        </>
    )
}

export default Root