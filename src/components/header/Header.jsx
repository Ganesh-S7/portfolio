import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ activeLink, setActiveLink, theme, toggleTheme }) => {
    const [activeSection, setActiveSection] = useState('');
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.getAttribute('id'));
                    }
                });
            },
            { threshold: 0.4 }
        );

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header-section");
            if (window.scrollY >= 80) {
                header.classList.add("show-header");
            } else {
                header.classList.remove("show-header");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        if (activeSection) {
            setActiveLink(`#${activeSection}`);
        }
    }, [activeSection, setActiveLink]);

    // useEffect(() => { 
    //     const handleResize = () => { 
    //         const headerSection = document.querySelector('header'); 
    //         if (window.innerWidth < 760) { 
    //             headerSection.removeAttribute('data-aos'); 
    //         } else { 
    //             headerSection.setAttribute('data-aos', 'fade-down'); 
    //         } 
    //     }; 
    //     window.addEventListener('resize', handleResize); 
    //         handleResize(); 
    //     return () => { 
    //         window.removeEventListener('resize', handleResize); 
    //     }; 
    // }, []);

    return (
        <header className={`header-section ${theme}`} >
            <nav className="nav-container">
                <a href='index.html' className="nav-logo">Portfolio</a>
                <div className={toggle ? `nav-menu show-menu` : `nav-menu`}>
                    <ul className="nav-list">
                        {['home', 'about', 'skills', 'education', 'projects', 'contact'].map(section => (
                            <li key={section} className="nav-item">
                                <a
                                    href={`#${section}`}
                                    className={
                                        activeLink === `#${section}` && activeSection === section
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                    onClick={() => setActiveLink(`#${section}`)}
                                >
                                    <i className={`uil uil-${section === 'home' ? 'estate' : section === 'about' ? 'user' : section === 'skills' ? 'file-alt' : section === 'education' ? 'graduation-cap' : section === 'projects' ? 'scenery' : 'message'} nav-icon`}></i>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav-close" onClick={() => setToggle(!toggle)}></i>
                </div>
                   <div className="theme-toggle-container">
                   <label class="switch">
                        <input type="checkbox" id="theme-toggle" className="theme-toggle" checked={theme === 'dark'} onChange={toggleTheme} />
                    <span class="slider"></span>
                    </label>
                   </div>
                <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
