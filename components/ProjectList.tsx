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
        <div key={item.id} className="flex flex-col rounded-xl">
          <Link href={`/projectPage/${item.id}`}>
            <Image
              className="rounded-t-xl"
              src={item.img}
              alt={`${item.projectName}-img`}
              width="300"
              height="200"
              sizes="100vw"
              style={css}
              quality={100}
              priority={true}
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
            <p className="my-3">{item.description}</p>
            <div>
              <div className="flex items-start gap-2">
                {item.skill.map((skillItem) => (
                  <span
                    key={item.id}
                    className="px-2 py-1 rounded-md bg-slate-200 text-blue-500 dark:bg-slate-600 dark:text-blue-200"
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
