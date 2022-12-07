import Axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProjectInfo from '../../components/ProjectInfo';
import { server } from '../../config/index';

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [projectInfo, setProjectInfo] = useState({});
  const API_URL = `${server}/api/projects/${id}`;

  const getProjectData = async () => {
    let res = await Axios.get(API_URL);
    setProjectInfo(res.data);
  };

  useEffect(() => {
    if (id) {
      getProjectData();
    }
  }, [id]);

  return (
    <div className="container mx-auto">
      <ProjectInfo projectInfo={projectInfo} />
    </div>
  );
};

export default ProjectPage;
