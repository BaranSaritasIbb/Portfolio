import React, { useEffect, useState } from 'react'
import HeaderWrapper from '../layout/header/HeaderWrapper'
import FooterWrapper from '../layout/footer/FooterWrapper'
import AppRoutes from '../routing/AppRoutes'

export default function Layout() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isAtTop = scrollTop === 0;
            const isAtBottom = window.innerHeight + scrollTop >= document.body.offsetHeight;

            if (isAtTop || isAtBottom) {
                setShowFooter(true);
            } else {
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
            <AppRoutes showFooter={showFooter} setShowFooter />
            <FooterWrapper showFooter={showFooter} />
        </div>
    )
}
