import "./styles.css";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import AppLayout from "@cloudscape-design/components/app-layout";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Navigation from "./components/navigation";
import BreadCrumbs from "./components/breadcrumbs";
import PreparedDashboardContent from "./components/prepared-dashboard-content";
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
            navigationToggle: "Open Navigation drawer",
            tools: "Help panel",
            toolsClose: "Close Help panel",
            toolsToggle: "Open Help panel"
          }}
          navigation={<Navigation />}
          breadcrumbs={<BreadCrumbs />}
          content={
            <ContentLayout header={<Header variant="h1" />}>
              <PreparedDashboardContent />
            </ContentLayout>
          }
        />
      </div>
    </>
  );
}
