import { BiSolidSchool } from 'react-icons/bi';

import { EDUCATION } from '@/app/data';

export default function Education() {
  return (
    <section className="text-center pb-4 border-b border-neutral-900">
      <h2 className="inline-block my-14 text-4xl">
        <span className="flex items-center">
          <BiSolidSchool className="mr-2 text-5xl text-fuchsia-300" />
          <span className="text-4xl">Education</span>
        </span>
      </h2>

      {EDUCATION.map((institution, index) => (
        <div
          key={index}
          className="flex flex-col items-center max-w-xl mb-8 mx-auto"
        >
          <div className="text-center">
            <h6 className="mb-2 text-xl font-semibold lg:text-2xl">
              {institution.title}
            </h6>

            <a href={institution.link} target="_blank">
              <h6 className="mb-2 text-lg font-semibold text-fuchsia-300 lg:text-xl">
                {institution.institution}
              </h6>
            </a>

            <p className="mb-4 text-neutral-400">
              {institution.year} | {institution.location}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
