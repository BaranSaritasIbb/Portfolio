import React, { useEffect, useState } from 'react'
import HeaderWrapper from '../layout/header/HeaderWrapper'
import FooterWrapper from '../layout/footer/FooterWrapper'
import AppRoutes from '../routing/AppRoutes'

export default function Layout() {
    const [showFooterD, setShowFooterD] = useState(false);
    const [showFooterL, setShowFooterL] = useState(false);
    const [showFooter, setShowFooter] = useState(false);
    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isAtTop = scrollTop === 0;
            const isAtBottom = window.innerHeight + scrollTop >= document.body.offsetHeight;

            if (isAtTop || isAtBottom) {
                if (isAtBottom) {

                    setShowFooter(true);
                    setShowFooterL(true);
                }
                else if (isAtTop) {
                    setShowFooterD(true);
                    setShowFooter(true);
                }
            } else {
                setShowFooterD(false);
                setShowFooterL(false);
                setShowFooter(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <HeaderWrapper />
            <AppRoutes />
            <FooterWrapper showFooter={showFooter} showFooterD={showFooterD} showFooterL={showFooterL} />
        </div>
    )
}
