const features = [
  {
    title: "Reusable Components",
    desc: "Production-ready scalable frontend components.",
  },
  {
    title: "Responsive Layouts",
    desc: "Modern responsive layouts for all devices.",
  },
  {
    title: "Animated Interfaces",
    desc: "Smooth interactive UI experiences.",
  },
  {
    title: "Clean Architecture",
    desc: "Well-structured scalable React projects.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-black md:text-5xl">
          Designed for Modern Frontend Development
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-border bg-surface p-8"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-xl font-bold text-secondary">
              0{index + 1}
            </div>

            <h3 className="text-xl font-bold">{item.title}</h3>

            <p className="mt-4 text-text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}