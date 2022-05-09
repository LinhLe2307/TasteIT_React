import React from 'react'
import { Link, Outlet } from "react-router-dom"

import Button from './Button'
import CardInfo from './CardInfo'

const Main = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default Main