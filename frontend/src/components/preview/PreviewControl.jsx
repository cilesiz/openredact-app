import React from "react";
import { Card, Elevation } from "@blueprintjs/core";
import "./PreviewControl.sass";
import PropTypes from "prop-types";
import TextPreview from "./TextPreview";

const PreviewControl = ({ tokens, anonymizations }) => {
  function anonymize(myTokens, myAnonymizations) {
    let skipTokens = 0;
    let anonymizedText = null;
    const anonymizedTokens = myTokens.map((token, idx) => {
      if (skipTokens > 0) {
        skipTokens -= 1;
        if (skipTokens === 0) {
          return anonymizedText;
        }
        return "";
      }

      const anonymization = myAnonymizations.find((anon) => anon.start === idx);

      if (!anonymization) {
        return token.text;
      }

      const nrOfTokens = anonymization.end - anonymization.start;
      if (nrOfTokens > 1) {
        // return anonymized text instead of last original token, to get hasWhitespace of last token
        skipTokens = nrOfTokens - 1;
        anonymizedText = anonymization.text;
        return "";
      }

      return anonymization.text;
    });

    return anonymizedTokens.reduce(
      (acc, cur, idx) =>
        acc + cur + (cur !== "" && tokens[idx].hasWhitespace ? " " : ""),
      ""
    );
  }

  const text = anonymize(tokens, anonymizations);

  return (
    <Card className="preview-card" elevation={Elevation.ONE}>
      {text !== "" && <TextPreview text={text} />}
    </Card>
  );
};

PreviewControl.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.object).isRequired,
  anonymizations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PreviewControl;
