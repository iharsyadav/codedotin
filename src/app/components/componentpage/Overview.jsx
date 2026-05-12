export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-secondary">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        {/* Hero */}
        <section className="space-y-8">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/60">
              CODEDOTIN UI
            </p>

            <h1 className="mt-6 text-7xl font-black tracking-tight text-primary">
              Modern React <br />
              UI Components
            </h1>

            <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-primary/70">
              Beautiful reusable frontend components built with React,
              Tailwind CSS and modern design principles.
            </p>
          </div>

          {/* Hero Card */}
          <div className="rounded-[40px] bg-primary p-10 shadow-2xl lg:p-14">

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-[32px] bg-secondary p-8 text-primary">
                <h2 className="text-4xl font-black">
                  100+
                </h2>

                <p className="mt-4 text-lg text-primary/70">
                  Reusable Components
                </p>
              </div>

              <div className="rounded-[32px] border border-secondary/10 p-8">
                <h2 className="text-4xl font-black text-secondary">
                  React
                </h2>

                <p className="mt-4 text-lg text-secondary/70">
                  Modern frontend architecture
                </p>
              </div>

              <div className="rounded-[32px] border border-secondary/10 p-8">
                <h2 className="text-4xl font-black text-secondary">
                  Tailwind
                </h2>

                <p className="mt-4 text-lg text-secondary/70">
                  Utility first styling system
                </p>
              </div>

              <div className="rounded-[32px] border border-secondary/10 p-8">
                <h2 className="text-4xl font-black text-secondary">
                  Fast
                </h2>

                <p className="mt-4 text-lg text-secondary/70">
                  Built for scalable UI systems
                </p>
              </div>

            </div>
          </div>

        </section>
      </div>
    </div>
  );
}