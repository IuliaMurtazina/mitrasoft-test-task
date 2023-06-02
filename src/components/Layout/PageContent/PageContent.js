import React from "react";
import { Stack } from "react-bootstrap";

const PageContent = ({ title, children }) => {
  return (
    <Stack className="p-3" gap={3}>
      <h1 className="text-center">{title}</h1>
      {children}
    </Stack>
  );
};

export default PageContent;
