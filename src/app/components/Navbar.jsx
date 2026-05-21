import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/icons/1.2.png"
            alt="CodeDotin"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-text-muted transition hover:text-secondary"
          >
            Home
          </Link>

          <Link
            to="/components"
            className="text-text-muted transition hover:text-secondary"
          >
            Components
          </Link>

          <a
            href="#features"
            className="text-text-muted transition hover:text-secondary"
          >
            Features
          </a>

          <a
            href="#projects"
            className="text-text-muted transition hover:text-secondary"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-text-muted transition hover:text-secondary"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <Link
          to="/components"
          className="
            rounded-full
            bg-secondary
            px-5
            py-2
            text-sm
            font-semibold
            text-primary
            transition
            hover:scale-105
          "
        >
          Explore UI
        </Link>
      </nav>
    </header>
  );
}
