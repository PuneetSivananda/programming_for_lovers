import "./styles.css";
import TopNavigation from "@cloudscape-design/components/top-navigation";
export default function App() {
  return (
    <TopNavigation
      identity={{
        logo: { src: "./logo.svg", alt: "Chocolate Factory" },
        title: "Chocolate Factory",
        href: "/home/index.html"
      }}
      i18nStrings={{
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All"
      }}
    />
  );
}
