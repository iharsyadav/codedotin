import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import ComponentsLayout from "./layouts/ComponentsLayout";
import CardPage from "../components/card/Card";
import OverviewPage from "./components/componentpage/Overview";
import ButtonPage from "../pages/ButtonPage";
import AccordionPage from "../pages/AccordionPage";
import AlertPage from "../pages/AlertPage";
import AnimationPage from "../pages/AnimationPage";
import AuthPage from "../pages/AuthPage";
import AvatarPage from "../pages/AvatarPage";
import BackgroundPage from "../pages/BackgroundPage";
import BadgePage from "../pages/BadgePage";
import BannerPage from "../pages/BannerPage";
import BlogPage from "../pages/BlogPage";
import BreadcrumbPage from "../pages/BreadcrumbPage";
import CalendarPage from "../pages/CalendarPage";
import CarouselPage from "../pages/CarouselPage";
import ChartPage from "../pages/ChartPage";
import ChatPage from "../pages/ChatPage";
import CheckboxPage from "../pages/CheckboxPage";
import CodePage from "../pages/CodePage";
import ContainerPage from "../pages/ContainerPage";
import CopyPage from "../pages/CopyPage";
import CounterPage from "../pages/CounterPage";
import DashboardPage from "../pages/DashboardPage";
import DatepickerPage from "../pages/DatepickerPage";
import DialogPage from "../pages/DialogPage";
import DividerPage from "../pages/DividerPage";
import DrawerPage from "../pages/DrawerPage";
import DropdownPage from "../pages/DropdownPage";
import EditorPage from "../pages/EditorPage";
import EmptyPage from "../pages/EmptyPage";
import ErrorPage from "../pages/ErrorPage";
import FaqPage from "../pages/FaqPage";
import FeaturePage from "../pages/FeaturePage";
import FeedbackPage from "../pages/FeedbackPage";
import FooterPage from "../pages/FooterPage";
import FormPage from "../pages/FormPage";
import GalleryPage from "../pages/GalleryPage";
import GlowPage from "../pages/GlowPage";
import GridPage from "../pages/GridPage";
import HeaderPage from "../pages/HeaderPage";
import HeroPage from "../pages/HeroPage";
import HoverPage from "../pages/HoverPage";
import IconPage from "../pages/IconPage";
import ImagePage from "../pages/ImagePage";
import InputPage from "../pages/InputPage";
import LayoutPage from "../pages/LayoutPage";
import ListPage from "../pages/ListPage";
import LoaderPage from "../pages/LoaderPage";
import LogoPage from "../pages/LogoPage";
import MapPage from "../pages/MapPage";
import MenuPage from "../pages/MenuPage";
import MessagePage from "../pages/MessagePage";
import ModalPage from "../pages/ModalPage";
import NavbarPage from "../pages/NavbarPage";
import NavigationPage from "../pages/NavigationPage";
import NotificationPage from "../pages/NotificationPage";
import OnboardingPage from "../pages/OnboardingPage";
import OtpPage from "../pages/OtpPage";
import PaginationPage from "../pages/PaginationPage";
import PaymentPage from "../pages/PaymentPage";
import PopoverPage from "../pages/PopoverPage";
import PricingPage from "../pages/PricingPage";
import ProfilePage from "../pages/ProfilePage";
import ProgressPage from "../pages/ProgressPage";
import ProjectPage from "../pages/ProjectPage";
import RadioPage from "../pages/RadioPage";
import RatingPage from "../pages/RatingPage";
import ReviewPage from "../pages/ReviewPage";
import ScrollPage from "../pages/ScrollPage";
import SearchPage from "../pages/SearchPage";
import SectionPage from "../pages/SectionPage";
import SelectPage from "../pages/SelectPage";
import SettingsPage from "../pages/SettingsPage";
import SidebarPage from "../pages/SidebarPage";
import SkeletonPage from "../pages/SkeletonPage";
import SpinnerPage from "../pages/SpinnerPage";
import StatsPage from "../pages/StatsPage";
import StepperPage from "../pages/StepperPage";
import SwitchPage from "../pages/SwitchPage";
import TablePage from "../pages/TablePage";
import TabsPage from "../pages/TabsPage";
import TagsPage from "../pages/TagsPage";
import TeamPage from "../pages/TeamPage";
import TestimonialPage from "../pages/TestimonialPage";
import TextareaPage from "../pages/TextareaPage";
import ThemePage from "../pages/ThemePage";
import TimelinePage from "../pages/TimelinePage";
import ToastPage from "../pages/ToastPage";
import TogglePage from "../pages/TogglePage";
import TooltipPage from "../pages/TooltipPage";
import TypographyPage from "../pages/TypographyPage";
import UploadPage from "../pages/UploadPage";
import UserPage from "../pages/UserPage";
import VideoPage from "../pages/VideoPage";
import WrapperPage from "../pages/WrapperPage";
import HomeApp from "./HomeApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <HomeApp />,
      },
      {
        path: "components/",
        element: <ComponentsLayout />,
        children: [
          {
            index: true,
            element: <OverviewPage />,
          },
          { path: "accordion", element: <AccordionPage /> },
          { path: "alert", element: <AlertPage /> },
          { path: "animation", element: <AnimationPage /> },
          { path: "auth", element: <AuthPage /> },
          { path: "avatar", element: <AvatarPage /> },
          { path: "background", element: <BackgroundPage /> },
          { path: "badge", element: <BadgePage /> },
          { path: "banner", element: <BannerPage /> },
          { path: "blog", element: <BlogPage /> },
          { path: "breadcrumb", element: <BreadcrumbPage /> },
          { path: "button", element: <ButtonPage /> },
          { path: "calendar", element: <CalendarPage /> },
          { path: "card", element: <CardPage /> },
          { path: "carousel", element: <CarouselPage /> },
          { path: "chart", element: <ChartPage /> },
          { path: "chat", element: <ChatPage /> },
          { path: "checkbox", element: <CheckboxPage /> },
          { path: "code", element: <CodePage /> },
          { path: "container", element: <ContainerPage /> },
          { path: "copy", element: <CopyPage /> },
          { path: "counter", element: <CounterPage /> },
          { path: "dashboard", element: <DashboardPage /> },
          { path: "datepicker", element: <DatepickerPage /> },
          { path: "dialog", element: <DialogPage /> },
          { path: "divider", element: <DividerPage /> },
          { path: "drawer", element: <DrawerPage /> },
          { path: "dropdown", element: <DropdownPage /> },
          { path: "editor", element: <EditorPage /> },
          { path: "empty", element: <EmptyPage /> },
          { path: "error", element: <ErrorPage /> },
          { path: "faq", element: <FaqPage /> },
          { path: "feature", element: <FeaturePage /> },
          { path: "feedback", element: <FeedbackPage /> },
          { path: "footer", element: <FooterPage /> },
          { path: "form", element: <FormPage /> },
          { path: "gallery", element: <GalleryPage /> },
          { path: "glow", element: <GlowPage /> },
          { path: "grid", element: <GridPage /> },
          { path: "header", element: <HeaderPage /> },
          { path: "hero", element: <HeroPage /> },
          { path: "hover", element: <HoverPage /> },
          { path: "icon", element: <IconPage /> },
          { path: "image", element: <ImagePage /> },
          { path: "input", element: <InputPage /> },
          { path: "layout", element: <LayoutPage /> },
          { path: "list", element: <ListPage /> },
          { path: "loader", element: <LoaderPage /> },
          { path: "logo", element: <LogoPage /> },
          { path: "map", element: <MapPage /> },
          { path: "menu", element: <MenuPage /> },
          { path: "message", element: <MessagePage /> },
          { path: "modal", element: <ModalPage /> },
          { path: "navbar", element: <NavbarPage /> },
          { path: "navigation", element: <NavigationPage /> },
          { path: "notification", element: <NotificationPage /> },
          { path: "onboarding", element: <OnboardingPage /> },
          { path: "otp", element: <OtpPage /> },
          { path: "pagination", element: <PaginationPage /> },
          { path: "payment", element: <PaymentPage /> },
          { path: "popover", element: <PopoverPage /> },
          { path: "pricing", element: <PricingPage /> },
          { path: "profile", element: <ProfilePage /> },
          { path: "progress", element: <ProgressPage /> },
          { path: "project", element: <ProjectPage /> },
          { path: "radio", element: <RadioPage /> },
          { path: "rating", element: <RatingPage /> },
          { path: "review", element: <ReviewPage /> },
          { path: "scroll", element: <ScrollPage /> },
          { path: "search", element: <SearchPage /> },
          { path: "section", element: <SectionPage /> },
          { path: "select", element: <SelectPage /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "sidebar", element: <SidebarPage /> },
          { path: "skeleton", element: <SkeletonPage /> },
          { path: "spinner", element: <SpinnerPage /> },
          { path: "stats", element: <StatsPage /> },
          { path: "stepper", element: <StepperPage /> },
          { path: "switch", element: <SwitchPage /> },
          { path: "table", element: <TablePage /> },
          { path: "tabs", element: <TabsPage /> },
          { path: "tags", element: <TagsPage /> },
          { path: "team", element: <TeamPage /> },
          { path: "testimonial", element: <TestimonialPage /> },
          { path: "textarea", element: <TextareaPage /> },
          { path: "theme", element: <ThemePage /> },
          { path: "timeline", element: <TimelinePage /> },
          { path: "toast", element: <ToastPage /> },
          { path: "toggle", element: <TogglePage /> },
          { path: "tooltip", element: <TooltipPage /> },
          { path: "typography", element: <TypographyPage /> },
          { path: "upload", element: <UploadPage /> },
          { path: "user", element: <UserPage /> },
          { path: "video", element: <VideoPage /> },
          { path: "wrapper", element: <WrapperPage /> },
        ],
      },
    ],
  },
]);

export default router;
