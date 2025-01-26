import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const redirectToHome = () => {
        router.push("/").then(() => window.scrollTo(0, 0));
    }

    return (
        <div>
            <div className={styles.topBar}>
                <img src="/icon.png" alt="Logo" className={styles.topLeftImage} onClick={redirectToHome}/>
                <FontAwesomeIcon icon={faBars} className={styles.topRightImage} onClick={toggleDropdown} />
                {isDropdownOpen && (
                    <div className={`${styles.dropdownMenu} ${styles.dropdownMenuOpen}`}>
                        <a href="/" className={styles.dropdownItem}>Home</a>
                        <a href="/about" className={styles.dropdownItem}>About</a>
                        <a href="/projects" className={styles.dropdownItem}>Projects</a>
                        <a href="/contact" className={styles.dropdownItem}>Contact</a>
                    </div>
                )}
            </div>

            <main className={styles.main}>{children}</main>

            <div className={styles.footerText}>
                <p>Designed with <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="links">Figma</a> and coded in <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer" className="links">JetBrains WebStorm</a>. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-white">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-white">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="text-white">Vercel</a>. Form hosted by <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="text-white">Formspree.io</a>. All text is in <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="text-white">Inter</a> typeface.</p>
                <p>© 2025 Omar Elfiki. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Layout;