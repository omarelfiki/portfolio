import { useState } from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
    <div>
      <Head>
        <title>Omar Elfiki</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <div className={styles.topBar}>
                <img src="/icon.png" alt="Logo" className={styles.topLeftImage}/>
                <img src="/menu.png" alt="Menu" className={styles.topRightImage} onClick={toggleDropdown}/>
                {isDropdownOpen && (
                    <div className={`${styles.dropdownMenu} ${styles.dropdownMenuOpen}`}>
                        <a href="#about" className={styles.dropdownItem}>About</a>
                        <a href="#projects" className={styles.dropdownItem}>Projects</a>
                        <a href="#contact" className={styles.dropdownItem}>Contact</a>
                    </div>
                )}
            </div>



            <div className={styles.centerText}>COMING SOON <br/>
                2025
            </div>


            <div
                className={styles.footerText}>
                <p>Designed with <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer"
                                    className="links">Figma</a> and coded in <a
                    href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer"
                    className="links">JetBrains WebStorm</a>. Built with <a href="https://nextjs.org/"
                                                                                       target="_blank"
                                                                                       rel="noopener noreferrer"
                                                                                       className="text-white">Next.js</a> and <a
                    href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-white">Tailwind
                    CSS</a>, deployed with <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"
                                              className="text-white">Vercel</a>.
                    Form hosted by <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer"
                                      className="text-white">Formspree.io</a>. All text is in <a
                        href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer"
                        className="text-white">Inter</a> typeface.</p><p>© 2025 Omar Elfiki. All rights reserved.</p>
            </div>
        </main>
    </div>
  );
}