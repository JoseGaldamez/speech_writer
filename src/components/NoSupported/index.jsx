import React from "react";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const NoSupported = () => {
  return (
    <section className="container_nosupportedSection">
      <WarningAmberIcon /> Your browser does not support speech recognition
    </section>
  );
};
