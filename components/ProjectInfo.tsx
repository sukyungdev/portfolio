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

  const { projectName, skill, period, demo, repo, description, point, img, link } = projectInfo;
  const css = { width: '100%', height: 'auto' };
  return (
    <>
      <section className="">
        <h2 className="text-3xl text-center mb-5">{projectName}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-5 mb-5">
          <div className="bg-neutral-200 p-5 rounded-md shadow  dark:bg-neutral-700 dark:text-neutral-800">
            <Link href={demo} className="cardDemoRepo Neo-Bold bg-neutral-50">
              Demo
            </Link>
            <Link href={repo} className="cardDemoRepo Neo-Bold bg-neutral-50">
              Github repo
            </Link>
            <p className="text-sm text-neutral-500 py-2">{period}</p>
            <p className="pb-2">{description}</p>
            <div>
              <div className="flex gap-2">
                {skill.map((skillItem, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-md text-sm bg-neutral-100 text-sky-600 dark:bg-slate-600 dark:text-blue-200"
                  >
                    {skillItem}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-neutral-200 p-5 rounded-md shadow  dark:bg-neutral-700 dark:text-neutral-800">
            <div className="leading-7">
              {point.map((item, index) => (
                <p key={index}>- {item}</p>
              ))}
            </div>
            {link && (
              <Link href={link} className="">
                - {link}
              </Link>
            )}
          </div>
        </div>
        <div className="w-full mb-10">
          <Image
            src={img}
            alt="project-img"
            width={960}
            height={540}
            style={css}
            quality={100}
            priority={true}
            className="rounded-lg border border-neutral-400 drop-shadow-md"
          />
        </div>
      </section>
    </>
  );
}
