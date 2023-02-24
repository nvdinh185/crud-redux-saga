import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import * as pages from "../src/pages/index"

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<pages.HomePage />} />
                <Route path='/User' element={<pages.User />} />
            </Routes>
        </BrowserRouter>
    )
}
