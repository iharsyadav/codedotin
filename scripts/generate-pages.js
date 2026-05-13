const fs = require("fs");
const path = require("path");

const components = [
  "Accordion",
  "Alert",
  "Badge",
  "Breadcrumb",
  "Button",
  "Card",
  "Checkbox",
  "Dialog",
  "Divider",
  "Drawer",
  "Dropdown",
  "Input",
  "Modal",
  "Pagination",
  "Popover",
  "Progress",
  "Radio",
  "Select",
  "Skeleton",
  "Spinner",
  "Switch",
  "Tabs",
  "Tags",
  "Textarea",
  "Toast",
  "Toggle",
  "Tooltip",
  "Container",
  "Grid",
  "Layout",
  "Section",
  "Sidebar",
  "Wrapper",
  "Menu",
  "Navbar",
  "Navigation",
  "Scroll",
  "Search",
  "Animation",
  "Background",
  "Glow",
  "Hover",
  "Icon",
  "Image",
  "Logo",
  "Theme",
  "Timeline",
  "Typography",
  "Video",
  "Calendar",
  "Carousel",
  "Chart",
  "Code",
  "Copy",
  "Counter",
  "Datepicker",
  "List",
  "Stats",
  "Stepper",
  "Table",
  "Empty",
  "Error",
  "Feedback",
  "Loader",
  "Notification",
  "Auth",
  "Avatar",
  "Onboarding",
  "Otp",
  "Profile",
  "Settings",
  "User",
  "Banner",
  "Blog",
  "Faq",
  "Feature",
  "Footer",
  "Gallery",
  "Header",
  "Hero",
  "Home",
  "Message",
  "Review",
  "Team",
  "Testimonial",
  "Chat",
  "Dashboard",
  "Editor",
  "Form",
  "Map",
  "Payment",
  "Pricing",
  "Project",
  "Rating",
  "Upload"
];

const pagesDir = path.join(__dirname, "../src/pages");

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

components.forEach((name) => {
  const content = \`
import \${name} from "../components/all component/\${name}";

export default function \${name}Page() {
  return <\${name} />;
}
\`;

  fs.writeFileSync(
    path.join(pagesDir, \`\${name}Page.jsx\`),
    content.trim()
  );

  console.log(\`Created: \${name}Page.jsx\`);
});
