import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    const location = useLocation();

    // Pages where header and footer should not appear
    const excludedRoutes = ["/signin", "/login"]; 

    const shouldHideHeaderFooter = excludedRoutes.includes(location.pathname);

    return (
        <>
            {!shouldHideHeaderFooter && <Header />}
            <main className="section deskSection container">
                <Outlet /> {/* Renders the matched route's component */}
            </main>
            {!shouldHideHeaderFooter && <Footer />}
        </>
    );
};

export default Layout;
