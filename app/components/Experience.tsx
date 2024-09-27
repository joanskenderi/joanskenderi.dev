import { BiCode } from 'react-icons/bi';

import { EXPERIENCES } from '@/app/data';

export default function Experience() {
  return (
    <section className="text-center pb-4 border-b border-zinc-900">
      <h2 className="inline-block my-14 text-4xl">
        <span className="flex items-center">
          <BiCode className="mr-2 text-5xl text-blue-400 lg:text-6xl" />
          <span className="text-4xl">Experience</span>
        </span>
      </h2>

      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="flex flex-wrap mb-16 lg:justify-center">
          <div className="flex flex-col justify-start items-center w-full max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold">
              {experience.title};{'  '}
            </h3>

            <a href={experience.link} target="_blank">
              <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-300">
                {experience.company}
              </span>
            </a>

            <p className="mb-2 text-sm text-neutral-400">
              {experience.year} | {experience.location}
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:w-4/5">
              {experience.skills.map((technology, index) => (
                <span
                  key={index}
                  className="mt-1 px-1 py-1 rounded text-sm text-black bg-gradient-to-br from-blue-400 to-fuchsia-300 lg:mt-2 lg:px-2"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
