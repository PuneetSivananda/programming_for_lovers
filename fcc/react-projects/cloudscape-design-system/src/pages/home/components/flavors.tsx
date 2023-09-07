import React from "react";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Table, { TableProps } from "@cloudscape-design/components/table";
import PieChart, {
  PieChartProps
} from "@cloudscape-design/components/pie-chart";
import { SpaceBetween } from "@cloudscape-design/components";
import StatusIndicator from "@cloudscape-design/components/status-indicator";

const columnDefinitions: TableProps["columnDefinitions"] = [
  { header: "Name", cell: ({ name }) => name },
  {
    header: "Status",
    cell: ({ status }) => (
      <StatusIndicator type={status.type}>{status.message}</StatusIndicator>
    )
  },
  { header: "Mixing (kg/h)", cell: ({ mixing }) => mixing },
  { header: "Molding (kg/h)", cell: ({ molding }) => molding }
];

export interface VariationProps {
  data: PieChartProps["data"];
  items: TableProps["items"];
}

export default function Flavors({ data, items }: VariationProps) {
  return (
    <SpaceBetween size="l">
      {" "}
      <Container header={<Header variant="h2">Flavors (last 24h)</Header>}>
        <PieChart
          data={data}
          hideFilter={true}
          i18nStrings={{
            chartAriaRoleDescription: "Pie chart",
            detailPopoverDismissAriaLabel: "Dismiss",
            legendAriaLabel: "Legend",
            filterSelectedAriaLabel: "filterSelectedAriaLabel",
            segmentAriaRoleDescription: "segment"
          }}
        />
      </Container>
      <Table
        sortingColumn={columnDefinitions[0]}
        header={<Header variant="h2">Details</Header>}
        items={items}
        columnDefinitions={columnDefinitions}
        ariaLabels={{
          tableLabel: "Details table"
        }}
      />
    </SpaceBetween>
  );
}
