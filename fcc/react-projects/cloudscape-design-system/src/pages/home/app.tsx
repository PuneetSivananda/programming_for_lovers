import "./styles.css";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Navigation from "./components/navigation";
import { AppLayout } from "@cloudscape-design/components";

export default function App() {
  return (
    <>
      <div id="top-nav">
        <TopNavigation
          identity={{
            logo: { src: "../logo.svg", alt: "Chocolate Factory" },
            title: "Chocolate Factory",
            href: "/home/index.html"
          }}
          i18nStrings={{
            overflowMenuTriggerText: "More",
            overflowMenuTitleText: "All"
          }}
        />
      </div>
      <div>
        <AppLayout
          headerSelector="#top-nav"
          ariaLabels={{
            navigation: "Navigation drawer",
            navigationClose: "Close Navigation drawer",
            navigationToggle: "Open Navigation drawer"
          }}
        />
      </div>
    </>
  );
}
