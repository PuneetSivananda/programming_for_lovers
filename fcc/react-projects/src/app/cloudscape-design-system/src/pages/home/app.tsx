import "./styles.css";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import AppLayout from "@cloudscape-design/components/app-layout";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import Navigation from "./components/navigation";
import Breadcrumbs from "./components/breadcrumbs";
import PreparedDashboardContent from "./components/prepared-dashboard-content";

export default function App() {
  return (
    <>
      <div id="top-nav">
        <TopNavigation
          identity={{
            logo: { src: "/logo.svg", alt: "Chocolate Factory Logo" },
            title: "Chocolate Factory",
            href: "/home/index.html"
          }}
          i18nStrings={{
            overflowMenuTriggerText: "More",
            overflowMenuTitleText: "All"
          }}
        />
      </div>
      <AppLayout
        headerSelector="#top-nav"
        ariaLabels={{
          navigation: "Navigation drawer",
          navigationClose: "Close navigation drawer",
          navigationToggle: "Open navigation drawer",
          notifications: "Notifications",
          tools: "Help panel",
          toolsClose: "Close help panel",
          toolsToggle: "Open help panel"
        }}
        breadcrumbs={<Breadcrumbs />}
        navigation={<Navigation />}
        content={
          <ContentLayout header={<Header variant="h1">Dashboard</Header>}>
            <PreparedDashboardContent />
          </ContentLayout>
        }
      />
    </>
  );
}
