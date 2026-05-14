import AnimatedAvatar from "../components/avatar/AnimatedAvatar";
import AssistantAvatar from "../components/avatar/AssistantAvatar";
import GamingAvatar from "../components/avatar/GamingAvatar";
import GlassAvatar from "../components/avatar/GlassAvatar";
import GroupAvatar from "../components/avatar/GroupAvatar";
import NeonAvatar from "../components/avatar/NeonAvatar";
import OnlineAvatar from "../components/avatar/OnlineAvatar";
import SocialAvatar from "../components/avatar/SocialAvatar";
import StoryAvatar from "../components/avatar/StoryAvatar";
import TeamAvatar from "../components/avatar/TeamAvatar";


export default function AvatarPage() {
  return (
    <>
      <SocialAvatar />
      <GamingAvatar />
      <GlassAvatar />
      <GroupAvatar />
      <AnimatedAvatar />
      <NeonAvatar />
      <TeamAvatar />
      <OnlineAvatar />
      <StoryAvatar />
      <AssistantAvatar />
      {/* 
      
      
      <StatusAvatar />
      
      <NFTAvatar />
      <ProfileCardAvatar />
      <GlassAvatar />
      
      <MinimalAvatar />
      <GradientAvatar />
      
      <GroupAvatar />
      <AdminAvatar />
      <AnimatedAvatar />
      <MusicAvatar />
      <DashboardAvatar />
      <ReviewAvatar />
      <DiscordAvatar /> */}
    </>
  );
}
