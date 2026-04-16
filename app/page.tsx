import { Hero } from "./sections/hero";
import { StatsBar } from "./sections/stats-bar";
import { Pricing } from "./sections/pricing";
import { Terms } from "./sections/terms";
import { Footer } from "./sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <Hero />
      <StatsBar />
      <Pricing />
      <Terms />
      <Footer />
    </main>
  );
}
