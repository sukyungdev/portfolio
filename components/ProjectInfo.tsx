/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { IprojectData } from './ProjectList';

export default function ProjectInfo({
  projectInfo,
}: {
  projectInfo: IprojectData | Record<string, never>;
}) {
  console.log('projectInfo', projectInfo);

  const { id, projectName, skill, period, demo, repo, description, point, img } = projectInfo;
  const css = { width: '100%', height: 'auto' };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Image
          src={img}
          alt="project-img"
          width={500}
          height={400}
          style={css}
          quality={100}
          priority={true}
          className="rounded-lg border border-neutral-400 drop-shadow-md"
        />
        <div>
          <h2 className="text-xl mb-2">{projectName}</h2>
          <Link href={demo} className="cardDemoRepo Neo-Bold ">
            Demo
          </Link>
          <Link href={repo} className="cardDemoRepo Neo-Bold">
            Github repo
          </Link>
          {/* <br /> */}
          <p className="mt-2">{description}</p>
          <p className="text-sm mt-1 mb-5 text-neutral-500">{period}</p>
          <div className="">
            <p>{point}</p>

            <div className="flex gap-2">
              {skill.map((skillItem, index) => (
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
    </>
  );
}
