import AnimatedButton from "../components/button/AnimatedButton";
import Button from "../components/button/Buttons";
import FloatingButton from "../components/button/FloatingButton";
import GhostButton from "../components/button/GhostButton";
import GlassButton from "../components/button/GlassButton";
import GlowButton from "../components/button/GlowButton";
import GradientButton from "../components/button/GradientButton";
import IconButton from "../components/button/IconButton";
import LoadingButton from "../components/button/LoadingButton";
import NeonButton from "../components/button/NeonButton";
import OutlineButton from "../components/button/OutlineButton";
import PremiumButton from "../components/button/PremiumButton";
import PrimaryButton from "../components/button/PrimaryButton";
import SecondaryButton from "../components/button/SecondaryButton";
import SlideButton from "../components/button/SlideButton";
import TestButton from "../components/button/TestButton";


export default function ButtonPage() {
  return (
    <>
      <Button />
      <PrimaryButton />
      <SecondaryButton />
      <GradientButton />
      <GlowButton />
      <GlassButton />
      <IconButton />
      <LoadingButton />
      <OutlineButton />
      <GhostButton />
      <NeonButton />
      <AnimatedButton />
      <SlideButton />
      <FloatingButton />
      <PremiumButton />
      <TestButton/>
    </>
  );
}
