import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-3xl font-black tracking-tight"
            >
              CODE<span className="text-secondary">DOT</span>IN
            </Link>

            <p className="mt-6 text-text-muted leading-relaxed">
              Modern React + Tailwind UI library with reusable frontend
              components and interactive design systems.
            </p>
          </div>

          {/* Components */}
          <div>
            <h3 className="text-lg font-bold">
              Components
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/components/button"
                className="text-text-muted transition hover:text-secondary"
              >
                Buttons
              </Link>

              <Link
                to="/components/card"
                className="text-text-muted transition hover:text-secondary"
              >
                Cards
              </Link>

              <Link
                to="/components/modal"
                className="text-text-muted transition hover:text-secondary"
              >
                Modals
              </Link>

              <Link
                to="/components/navbar"
                className="text-text-muted transition hover:text-secondary"
              >
                Navbar
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold">
              Resources
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <Link
                to="/docs"
                className="text-text-muted transition hover:text-secondary"
              >
                Documentation
              </Link>

              <Link
                to="/components"
                className="text-text-muted transition hover:text-secondary"
              >
                UI Library
              </Link>

              <a
                href="#"
                className="text-text-muted transition hover:text-secondary"
              >
                Changelog
              </a>

              <a
                href="#"
                className="text-text-muted transition hover:text-secondary"
              >
                Roadmap
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold">
              Connect
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              
              <a
                href="https://github.com/iharsyadav"
                target="_blank"
                rel="noreferrer"
                className="text-text-muted transition hover:text-secondary"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-text-muted transition hover:text-secondary"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="text-text-muted transition hover:text-secondary"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-text-muted transition hover:text-secondary"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-text-muted md:flex-row">
          
          <p>
            © 2026 CODEDOTIN UI. All rights reserved.
          </p>

          <p>
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}