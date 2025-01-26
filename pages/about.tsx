import Head from 'next/head';
import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - Omar Elfiki</title>
                <meta name="description" content="About Omar Elfiki" />
            </Head>

            <div>
                <h1>About</h1>
                <p>This is the about page.</p>
            </div>
        </Layout>
    );
}