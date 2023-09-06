import React from "react";
import { useState } from "react";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import Modal from "@cloudscape-design/components/modal";
import Table, { TableProps } from "@cloudscape-design/components/table";

const columnDefinitions: TableProps["columnDefinitions"] = [
  { header: "Name", cell: ({ name }) => name },
  { header: "Strong", cell: ({ strong }) => strong },
  { header: "Mild", cell: ({ mild }) => mild },
  { header: "Unnoticed", cell: ({ unnoticed }) => unnoticed }
];
