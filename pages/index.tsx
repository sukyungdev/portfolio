import Head from 'next/head';
import Intro from '../components/indexComponent/Intro';
import ProjectList from '../components/ProjectList';

export default function Home({ projectData }: { projectData: [] }) {
  console.log('data', projectData);
  return (
    <div>
      <Head>
        <title>Sukyungdev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Intro />
        </div>
        <ProjectList projectData={projectData} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = 'http://localhost:3000/api/projects';
  const res = await fetch(API_URL);
  const projectData = await res.json();

  return {
    props: { projectData },
  };
}
