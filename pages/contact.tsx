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
                <h1>Contact me</h1>
                <div id="contact" className="font-light inline-block w-[700px] h-[46px]">
                    <p className="mb-4">You can reach me at <strong><a href="mailto:me@omarelfiki.com"
                                                                       className="hover-blue">me@omarelfiki.com</a></strong> or
                        through the contact box below</p>
                </div>
                <div className={styles.contactContainer}>
                    <form action="https://formspree.io/f/xwkgzlrd" method="POST" className={styles.contactForm}>
                        <input type="text" name="name" placeholder="Name" className={styles.inputField}/>
                        <br/>
                        <input type="email" name="email" placeholder="Email" className={styles.inputField}/>
                        <br/>
                        <textarea name="message" placeholder="Message" className={styles.textareaField}></textarea>
                        <br/>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}