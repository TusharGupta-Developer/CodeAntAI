import React from 'react'
import "./Header.css"
import { useEffect } from 'react';
function Header() {

    useEffect(() => {
        const navMenu = document.getElementById("nav--menu");
        const navToggle = document.getElementById("nav--toggle");
        const navClose = document.getElementById("nav--close");
        const navLinks = document.querySelectorAll(".nav__link");
        const header = document.getElementById("header");

        /*=============== SHOW MENU ===============*/
        if (navToggle) {
            navToggle.addEventListener("click", () => {
                navMenu.classList.add("show-menu");
            });
        }

        /*=============== HIDE MENU ===============*/
        if (navClose) {
            navClose.addEventListener("click", () => {
                navMenu.classList.remove("show-menu");
            });
        }

        /*=============== REMOVE MENU MOBILE ===============*/
        const linkAction = () => {
            navMenu.classList.remove("show-menu");
        };

        navLinks.forEach((n) => n.addEventListener("click", linkAction));

        /*=============== ADD BLUR HEADER ===============*/
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add("blur__header");
            } else {
                header.classList.remove("blur__header");
            }
        };

        document.addEventListener("scroll", handleScroll);

        // Cleanup event listeners on unmount
        return () => {
            if (navToggle) navToggle.removeEventListener("click", () => { });
            if (navClose) navClose.removeEventListener("click", () => { });
            navLinks.forEach((n) => n.removeEventListener("click", linkAction));
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav container">
                {/* When href="#" is used: It creates a link that, when clicked, will jump to the top of the current page */}
                <a href="#" className="nav__logo">CodeAntAI</a>


                <div className="nav__menu" id="nav--menu">
                    <div className="name-bar">
                        <div className="name-dropdown">
                            <span className="name">TusharGupta</span>
                            <span className="dropdown-icon">▼</span>
                        </div>
                    </div>

                    <ul className="nav__list">
                        <li>
                            <a href="#repositories" className="nav__link button repo-button">
                                <i className="ri-folder-line"></i> Repositories
                            </a>
                        </li>

                        <li>
                            <a href="#ai-code-review" className="nav__link">
                                <i className="ri-code-line"></i> AI Code Review
                            </a>
                        </li>

                        <li>
                            <a href="#cloud-security" className="nav__link">
                                <i className="ri-cloud-line"></i> Cloud Security
                            </a>
                        </li>

                        <li>
                            <a href="#how-to-use" className="nav__link">
                                <i className="ri-book-line"></i> How to Use
                            </a>
                        </li>

                        <li>
                            <a href="#settings" className="nav__link">
                                <i className="ri-settings-3-line"></i> Settings
                            </a>
                        </li>

                        <li>
                            <a href="#support" className="nav__link">
                                <i className="ri-phone-line"></i> Support
                            </a>
                        </li>

                        <li>
                            <a href="#logout" className="nav__link">
                                <i className="ri-logout-box-line"></i> Logout
                            </a>
                        </li>
                    </ul>


                    <a href="#" className="menu__logo">CodeAnt AI</a>
                    {/* Close Button  */}
                    <div className="nav__close" id="nav--close">
                        <i className="ri-close-large-line"></i>
                    </div>
                </div>

                {/* Toggle Button  */}
                <div className="nav__toggle" id="nav--toggle">
                    <i className="ri-menu-line"></i>
                </div>
            </nav>
        </header>

    )
}

export default Header