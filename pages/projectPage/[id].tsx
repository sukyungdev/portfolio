import Head from 'next/head';
import ProjectInfo from '../../components/ProjectInfo';
import { IprojectData } from '../../components/ProjectList';
import { server } from '../../config/index';

const ProjectPage = ({ projectInfo }: { projectInfo: IprojectData }) => {
  return (
    <>
      {projectInfo && (
        <>
          <Head>
            <title>{projectInfo.projectName}</title>
            <meta name="description" content={projectInfo.description}></meta>
          </Head>
          <div className="container mx-auto p-5">
            <ProjectInfo projectInfo={projectInfo} />
          </div>
        </>
      )}
    </>
  );
};

export default ProjectPage;

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const API_URL = `${server}/${id}`;
  const res = await fetch(API_URL);
  const projectInfo = await res.json();
  return {
    props: { projectInfo }, // will be passed to the page component as props
  };
}
