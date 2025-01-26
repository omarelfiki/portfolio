import Head from 'next/head';
import Layout from '../components/Layout';

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects - Omar Elfiki</title>
                <meta name="description" content="Projects" />
            </Head>

            <div>
                <h1>Projects</h1>
                <p>This is the Projects page.</p>
            </div>
        </Layout>
    );
}