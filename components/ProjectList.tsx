/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export interface IprojectData {
  id: number;
  projectName: string;
  skill: [];
  period: string;
  demo: string;
  repo: string;
  description: string;
  feature: [];
  point: string;
  img: string;
}

export default function ProjectList({ projectData }: { projectData: IprojectData[] }) {
  // console.log('projectData', projectData);
  return (
    <>
      {projectData.map((item) => (
        <div key={item.id} className="mx-auto">
          <Link href={`/projectPage/${item.id}`}>
            <img src={item.img} alt="projectImg" />
          </Link>
          <div>
            <h2>{item.projectName}</h2>
            <span>{item.period}</span>
            <Link href="#">demo</Link>
            <Link href="#">Github repo</Link>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
