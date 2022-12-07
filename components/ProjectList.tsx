/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

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
        <div key={item.id} className="flex flex-col rounded-xl">
          <Link href={`/projectPage/${item.id}`}>
            <Image
              className="rounded-t-xl"
              src={item.img}
              alt={`${item.projectName}-img`}
              width="300"
              height="200"
              layout="responsive"
              objectFit="none"
              quality={100}
            />
          </Link>
          <div className="p-3">
            <div className="flex justify-between">
              <h2 className="text-xl">{item.projectName}</h2>
              <div>
                <Link href="#">Demo </Link>
                <Link href="#">Repository</Link>
              </div>
            </div>
            <span className="text-sm">{item.period}</span>
            <p className="mt-3">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
