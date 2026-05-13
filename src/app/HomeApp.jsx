
import Hero from "./components/homepage/Hero";
import CTA from "./components/homepage/CTA";
import Features from "./components/homepage/Features";


export default function HomeApp() {
  return (
    <main className="bg-background text-text overflow-hidden">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}