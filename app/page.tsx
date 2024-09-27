import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Experience from '@/app/components/Experience';

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-slate-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(40,40,60,0.4),rgba(10,10,20,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Header />
        <Hero />

        <main>
          <Experience />
        </main>
      </div>
    </div>
  );
}
