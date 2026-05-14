import AnimatedBackground from "../components/background/AnimatedBackground";
import AuroraBackground from "../components/background/AuroraBackground";
import DotBackground from "../components/background/DotBackground";
import GlassBackground from "../components/background/GlassBackground";
import GlowBackground from "../components/background/GlowBackground";
import GradientBackground from "../components/background/GradientBackground";
import GridBackground from "../components/background/GridBackground";
import MeshBackground from "../components/background/MeshBackground";
import NoiseBackground from "../components/background/NoiseBackground";

export default function BackgroundPage() {
  return (
    <>
      <GradientBackground />
      <GridBackground />
      <GlowBackground />
      <DotBackground />
      <MeshBackground />
      <NoiseBackground />
      <AnimatedBackground />
      <GlassBackground />
      <AuroraBackground />
    </>
  );
}
