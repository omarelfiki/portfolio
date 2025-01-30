import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects - Omar Elfiki</title>
                <meta name="description" content="Projects" />
            </Head>

            <div>
                <h1 className={styles.headerText}>Projects</h1>
                <p>This is the Projects page.</p>
            </div>
        </Layout>
    );
}