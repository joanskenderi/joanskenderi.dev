import { BiSolidCertification } from 'react-icons/bi';

import { CERTIFICATIONS } from '@/app/data';

export default function Certifications() {
  return (
    <section className="text-center pb-4 border-b border-neutral-900">
      <h2 className="inline-block my-14 text-4xl">
        <span className="flex items-center">
          <BiSolidCertification className="mr-2 text-4xl text-blue-400 lg:text-5xl" />
          <span className="text-4xl">Certifications</span>
        </span>
      </h2>

      {CERTIFICATIONS.map((certification, index) => (
        <div
          key={index}
          className="flex flex-col items-center max-w-xl mb-8 mx-auto"
        >
          <div className="text-center">
            <h6 className="mb-2 text-xl font-semibold lg:text-2xl">
              {certification.title}
            </h6>

            <h6 className="mb-2 text-lg font-semibold lg:text-xl">
              <a
                href={certification.link}
                target="_blank"
                className="text-blue-400"
              >
                {certification.issuer}
              </a>
              <span className="mx-2 text-neutral-400">•</span>
              <span className="text-neutral-400">{certification.year}</span>
            </h6>
          </div>
        </div>
      ))}
    </section>
  );
}
