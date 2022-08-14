import React, { useState } from "react";
import "regenerator-runtime";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { ButtonMicrophone } from "./components/ButtonMicrophone";
import { SectionText } from "./components/SectionText";
import { NoSupported } from "./components/NoSupported";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  const [supported, setSupported] = useState(true);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const onClickButton = () => {
    if (!browserSupportsSpeechRecognition) {
    } else {
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
    <>
      <Header />
      <div className="container">
        <ButtonMicrophone
          listening={listening}
          onClickButton={onClickButton}
          supported={supported}
        />
        {supported ? (
          <SectionText
            transcript={transcript}
            resetTranscript={resetTranscript}
          />
        ) : (
          <NoSupported />
        )}
      </div>
      <Footer />
    </>
  );
};
