import {
  SiExpress,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
} from 'react-icons/si';

export default function Hero() {
  return (
    <section className="flex items-center justify-center flex-grow min-h-[calc(100vh-12rem)] pb-16 border-b border-zinc-900">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center lg:justify-center lg:flex-grow lg:mt-0">
          <h1 className="pb-16 text-4xl tracking-tight md:text-5xl md:pb-12 lg:text-6xl">
            Joan Skënderi
          </h1>

          <span className="text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-violet-400 to-blue-400">
            Software Developer
          </span>

          <p className="text-center max-w-xl my-2 py-6 font-light tracking-tighter lg:text-lg lg:py-6">
            Software developer with a Bachelor&apos;s degree in Applied
            Informatics focused mainly on React and Node.js. I am interested in
            learning more about JavaScript related technologies and expanding my
            knowledge in software development.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 m-12 lg:gap-4 lg:m-14">
          <div className="p-4 rounded-2xl border-2 border-cyan-300 lg:p-5">
            <SiReact className="text-6xl text-cyan-500" />
          </div>

          <div className="p-4 rounded-2xl border-2 border-slate-300 lg:p-5">
            <SiNextdotjs className="text-6xl text-slate-100" />
          </div>

          <div className="p-4 rounded-2xl border-2 border-purple-300 lg:p-5">
            <SiRedux className="text-6xl text-purple-500" />
          </div>

          <div className="p-4 rounded-2xl border-2 border-green-300 lg:p-5">
            <SiNodedotjs className="text-6xl text-green-500" />
          </div>

          <div className="p-4 rounded-2xl border-2 border-slate-300 lg:p-5">
            <SiExpress className="text-6xl text-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
