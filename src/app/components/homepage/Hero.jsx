export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:px-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[125] w-[125] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mb-6 rounded-full border border-border bg-surface px-4 py-2 text-sm text-secondary">
        Modern Web Experiences with React & Tailwind
      </div>

      <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
        Build Stunning <span className="text-secondary">Frontend</span>
        <br />
        Experiences for the Modern Web
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
        CODEDOTIN helps developers and startups build beautiful responsive web
        interfaces using React and Tailwind CSS.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-2xl bg-secondary px-8 py-4 font-semibold text-primary">
          Explore Projects
        </button>

        <button className="rounded-2xl border border-border bg-surface px-8 py-4 font-semibold text-text hover:border-secondary hover:text-secondary">
          View Services
        </button>
      </div>
    </section>
  );
}