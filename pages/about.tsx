import Head from 'next/head';
import Layout from '../components/Layout';
import styles from "../styles/Home.module.css";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - Omar Elfiki</title>
                <meta name="description" content="About Omar Elfiki" />
            </Head>

            <div>
                <h1 className={styles.headerText}>About</h1>
                <p>This is the about page.</p>
            </div>
        </Layout>
    );
}