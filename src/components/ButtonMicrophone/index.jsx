import React from "react";
import { MicIcon, MicOffIcon } from "../Icons";
import Button from "@mui/material/Button";

export const ButtonMicrophone = ({ supported, onClickButton, listening }) => {
  return (
    <section className="container_buttonsection">
      <Button disabled={supported ? false : true} onClick={onClickButton}>
        {listening ? (
          <MicIcon sx={{ fontSize: 60 }} />
        ) : (
          <MicOffIcon sx={{ fontSize: 60 }} />
        )}
      </Button>
    </section>
  );
};
