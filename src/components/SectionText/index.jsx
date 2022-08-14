import { Button } from "@mui/material";
import React from "react";

import toast, { Toaster } from "react-hot-toast";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ClearIcon from "@mui/icons-material/Clear";

export const SectionText = ({ transcript, resetTranscript }) => {
  const onClickToCopy = () => {
    navigator.clipboard.writeText(transcript);
    toast.success("Texto copiado al portapapeles", {
      position: "center",
    });
  };

  const onClickToClear = () => {
    resetTranscript();
  };

  return (
    <>
      <section className="container_textsection">{transcript}</section>
      <div className="container_toobarsection">
        <Button
          onClick={onClickToClear}
          color="error"
          startIcon={<ClearIcon />}
        >
          Delete
        </Button>
        <Button onClick={onClickToCopy} startIcon={<ContentCopyIcon />}>
          Copiar
        </Button>
        <Toaster />
      </div>
    </>
  );
};
