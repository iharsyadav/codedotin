import { Link, Outlet } from "react-router-dom";

import sidebarSections from "@/data/sidebarSections";

export default function ComponentsLayout() {
  return (
    <div className="flex bg-background text-text">

      {/* Sidebar */}
      <aside className="hidden h-[calc(100vh-73px)] flex-col border-r border-border bg-surface lg:sticky lg:top-[73px] lg:flex lg:w-[260px] xl:w-[280px]">

        {/* Sidebar Header */}
        <div className="border-b border-border px-7 py-5">
          <h2 className="text-xl font-black tracking-tight">
            CODEDOTIN UI
          </h2>
        </div>

        {/* Sidebar Scroll */}
        <div className="flex-1 overflow-y-auto px-5 py-6">

          <div className="space-y-8">

            {sidebarSections.map((section) => (
              <div key={section.title}>

                {/* Section Title */}
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-text-muted">
                  {section.title}
                </p>

                {/* Section Items */}
                <div className="space-y-1">

                  {section.items.map((item) => (
                    <Link
                      key={item}
                      to={`/components/${item.toLowerCase()}`}
                      className="flex items-center rounded-xl px-4 py-3 text-sm text-text-muted transition-all duration-300 hover:bg-primary/15 hover:text-secondary"
                    >
                      {item}
                    </Link>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1">

        {/* Sticky Docs Navbar */}
        <header className="sticky top-[73px] z-30 border-b border-border bg-background/80 backdrop-blur-xl">

          <div className="flex items-center justify-between px-6 py-4 lg:px-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs tracking-wide text-text-muted">
              <span>Components</span>

              <span>/</span>

              <span className="text-secondary">
                Buttons
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">

              <button className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs transition hover:border-secondary">
                Preview
              </button>

              <button className="rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-primary">
                Code
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-3 lg:p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}