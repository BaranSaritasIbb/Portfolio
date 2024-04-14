import React from 'react'
import HeaderWrapper from '../layout/header/HeaderWrapper'
import FooterWrapper from '../layout/footer/FooterWrapper'
import AppRoutes from '../routing/AppRoutes'

export default function Layout() {
    return (
        <div>
            <HeaderWrapper />
            <AppRoutes />
            <FooterWrapper />
        </div>
    )
}
