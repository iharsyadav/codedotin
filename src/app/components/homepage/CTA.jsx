export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="relative overflow-hidden rounded-[40px] bg-primary p-12 text-secondary md:p-20">
        
        {/* Glow Effect */}
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-secondary/70">
            Start Building
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Transform Your Ideas Into Modern Web Experiences
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-secondary/70">
            Build responsive scalable interfaces using React and Tailwind CSS.
          </p>

          <button className="mt-10 rounded-2xl bg-secondary px-8 py-4 font-semibold text-primary transition hover:scale-105">
            Let's Build Together
          </button>
        </div>
      </div>
    </section>
  );
}