import React from "react";
import "regenerator-runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Button from "@mui/material/Button";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

export function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const onClickButton = () => {
    if (!browserSupportsSpeechRecognition) {
      console.log("Your browser does not support speech recognition.");
    } else {
      console.log("Everything is fine!");

      if (listening) {
        SpeechRecognition.stopListening();
      } else {
        SpeechRecognition.startListening({
          continuous: true,
          language: "es-HN",
        });
      }
    }
  };

  return (
    <div className="container">
      <section className="container_buttonsection">
        <Button onClick={onClickButton}>
          {listening ? (
            <MicIcon fontSize="large" />
          ) : (
            <MicOffIcon fontSize="large" />
          )}
        </Button>
      </section>
      <section>{transcript}</section>
    </div>
  );
}
