import { Link, Outlet } from "react-router-dom";

const sidebarItems = [
  "Buttons",
  "Cards",
  "Inputs",
  "Dropdowns",
  "Tables",
  "Loaders",
  "Navbar",
  "Backgrounds",
  "Typography",
  "Modals",
];

export default function ComponentsLayout() {
  return (
    <div className="flex min-h-screen bg-background text-text">
      
      {/* Sidebar */}
      <aside className="hidden w-[70] border-r border-border bg-surface lg:block">
        
        {/* Logo */}
        <div className="border-b border-border px-8 py-6">
          <h1 className="text-2xl font-black">
            CODEDOTIN UI
          </h1>
        </div>

        {/* Sidebar Items */}
        <div className="p-6">
          
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
            Components
          </p>

          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item}
                to={`/components/${item.toLowerCase()}`}
                className="
                  block
                  rounded-2xl
                  px-4
                  py-3
                  text-text-muted
                  transition-all
                  duration-300
                  hover:bg-primary/20
                  hover:text-secondary
                "
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-5">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span>Components</span>
              <span>/</span>
              <span className="text-secondary">
                Buttons
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              
              <button className="rounded-xl border border-border bg-surface px-4 py-2 text-sm hover:border-secondary">
                Preview
              </button>

              <button className="rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-primary">
                Code
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}