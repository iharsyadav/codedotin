import BounceAnimation from "../components/animation/BounceAnimation";
import FadeAnimation from "../components/animation/FadeAnimation";
import FloatAnimation from "../components/animation/FloatAnimation";
import GlowAnimation from "../components/animation/GlowAnimation";
import RotateAnimation from "../components/animation/RotateAnimation";
import ScaleAnimation from "../components/animation/ScaleAnimation";
import SlideAnimation from "../components/animation/SlideAnimation";


export default function AnimationPage() {
  return (
    <>
      <FadeAnimation
       />

      <ScaleAnimation />

      <RotateAnimation />

      <BounceAnimation />

      <GlowAnimation />

      <FloatAnimation />

      <SlideAnimation />
    </>
  );
}
