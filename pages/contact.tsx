import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact - Omar Elfiki</title>
                <meta name="description" content="Contact Omar Elfiki"/>
            </Head>

            <div>
                <h1 className={styles.headerText}>Contact me</h1>
                <div id="contact" className="font-light inline-block w-[700px] h-[46px]">
                    <p className="mb-4">Email: <strong><a href="mailto:me@omarelfiki.com" className="hover-blue">me@omarelfiki.com</a></strong></p>
                    <p className="mb-4">Phone: +31616280464</p>
                    <p className="mb-4">LinkedIn: <strong><a href="https://www.linkedin.com/in/omarelfiki/" className="hover-blue">omarelfiki</a></strong></p>
                    <p className="mb-4">GitHub: <strong><a href="https://www.github.com/omarelfiki" className="hover-blue">omarelfiki</a></strong></p>
                </div>

                <div className={styles['contact-container']}>
                    <form action="https://formspree.io/f/xwkgzlrd" method="POST" className={styles['contact-form']}>
                        <input type="text" name="name" placeholder="Name" className={styles['input-field']}/>
                        <br/>
                        <input type="email" name="email" placeholder="Email" className={styles['input-field']}/>
                        <br/>
                        <textarea name="message" placeholder="Message" className={styles['textarea-field']}></textarea>
                        <br/>
                        <button type="submit" className={styles['submit-button']}>Submit</button>
                    </form>
                </div>

            </div>
        </Layout>
    );
}