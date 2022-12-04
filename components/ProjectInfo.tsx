/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { IprojectData } from './ProjectList';

export default function ProjectInfo({
  projectInfo,
}: {
  projectInfo: IprojectData | Record<string, never>;
}) {
  console.log('projectInfo', projectInfo);

  const { id, projectName, skill, period, demo, repo, description, point, img } = projectInfo;

  return (
    <div>
      <h2>
        {projectName}, {id}
      </h2>
      <img src={img} alt="img" />
      <strong>{skill && skill.join(', ')}</strong>
      <span>{period}</span>
      <Link href="#">{demo}</Link>
      <Link href="#">{repo}</Link>
      <p>{point}</p>
      <p>{description}</p>
    </div>
  );
}
