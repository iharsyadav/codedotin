import Button from "@/components/button/Button";

export default function ButtonPage() {
  return (
    <div className="space-y-12">
      
      {/* Heading */}
      <div>
        <h1 className="text-5xl font-black">
          Buttons
        </h1>

        <p className="mt-4 text-lg text-text-muted">
          Below are examples and variations of button components.
        </p>
      </div>

      {/* Preview Section */}
      <section className="space-y-6">
        
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Primary Buttons
          </h2>

          <div className="flex gap-3">
            <button className="rounded-xl border border-border bg-surface px-4 py-2 text-sm">
              Preview
            </button>

            <button className="rounded-xl bg-secondary px-4 py-2 text-sm text-primary">
              Code
            </button>
          </div>
        </div>

        {/* Preview Box */}
        <div className="
          rounded-[4]
          border
          border-border
          bg-surface
          p-20
        ">
          <div className="flex flex-wrap items-center justify-center gap-6">
            
            <Button size="sm">
              Button sm
            </Button>

            <Button size="md">
              Button md
            </Button>

            <Button size="lg">
              Button lg
            </Button>

            <Button size="xl">
              Button xl
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}