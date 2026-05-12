
import Hero from "../app/components/homepage/Hero";
import Features from "../app/components/homepage/Features";
import CTA from "../app/components/homepage/CTA";

export default function Home() {
  return (
    <main className="bg-background text-text overflow-hidden">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}