import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer = () => {
  return (
    <footer>
      <p>
        <small>
          Una aplicación hecha por <strong>José Galdámez</strong>
        </small>
      </p>
      <br />
      <p>
        <a target="_blank" href="https://github.com/JoseGaldamez/speech_writer">
          <GitHubIcon />
        </a>
      </p>
    </footer>
  );
};
