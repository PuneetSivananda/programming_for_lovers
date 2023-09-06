import React from "react";
import SideNavigation, {
  SideNavigationProps
} from "@cloudscape-design/components/side-navigation";

const items: SideNavigationProps["items"] = [
  { type: "link", text: "Dashboard", href: "/home/index.html" }
];

export default function Navigation() {
  return (
    <>
      <SideNavigation
        activeHref={location.pathname}
        header={{ href: "/home/index.html", text: "Service" }}
        items={items}
      />
    </>
  );
}
