import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Omar Elfiki</title>
                <meta name="description" content="Personal Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>Home</h1>
                <p className="font-light">I'm a software developer based in Maastricht, Netherlands. I specialize in building web
                    applications using modern technologies like React, Next.js, and Node.js. I'm passionate about
                    creating clean, maintainable, and scalable code.</p>
                <p className="font-light">I'm currently looking for new opportunities. If you're interested in working
                    together, feel free to <a href="/contact" className="hover-blue">contact me</a>.</p>
            </div>
        </Layout>
    );
}