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

const css = { width: '100%', height: 'auto' };

export default function ProjectList({ projectData }: { projectData: IprojectData[] }) {
  // console.log('projectData', projectData);
  return (
    <>
      {projectData.map((item) => (
        <div key={item.id} className="projectCard">
          <Link href={`/projectPage/${item.id}`}>
            <Image
              className="rounded-t-xl"
              src={item.img}
              alt={`${item.projectName}-img`}
              width="300"
              height="100"
              style={css}
              quality={100}
              priority={true}
            />
          </Link>
          <div className="p-3">
            <div className="flex justify-between">
              <h2 className="text-xl Neo-Bold mb-2">{item.projectName}</h2>
              <div>
                <Link href={item.demo} className="cardDemoRepo Neo-Bold">
                  Demo
                </Link>
                <Link href={item.repo} className="cardDemoRepo Neo-Bold">
                  Repository
                </Link>
              </div>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">{item.period}</span>
            <p className="mb-3">{item.description}</p>
            <div>
              <div className="flex flex-wrap items-start gap-2">
                {item.skill.map((skillItem, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-md text-sm bg-neutral-200 text-sky-600 dark:bg-slate-600 dark:text-blue-200"
                  >
                    {skillItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
