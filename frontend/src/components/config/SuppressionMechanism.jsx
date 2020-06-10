import React from "react";
import PropTypes from "prop-types";
import { InputGroup, Label, NumericInput } from "@blueprintjs/core";

const SuppressionMechanism = ({ mechanismConfig, updateMechanismConfig }) => {
  let myMechanismConfig = mechanismConfig;
  if (Object.keys(myMechanismConfig).length <= 1) {
    myMechanismConfig = {
      ...myMechanismConfig,
      suppressionChar: "X",
      customLength: "",
    };
  }

  const onUpdateSuppressionChar = (event) => {
    updateMechanismConfig({
      ...myMechanismConfig,
      suppressionChar: event.target.value,
    });
  };

  const onUpdateCustomLength = (_, valueAsString) => {
    updateMechanismConfig({ ...myMechanismConfig, valueAsString });
  };

  return (
    <div>
      <Label>
        SuppressionChar
        <InputGroup
          value={myMechanismConfig.suppressionChar}
          onChange={onUpdateSuppressionChar}
        />
      </Label>
      <Label>
        CustomLength
        <NumericInput
          min={1}
          minorStepSize={1}
          value={myMechanismConfig.customLength}
          onValueChange={onUpdateCustomLength}
        />
      </Label>
    </div>
  );
};

SuppressionMechanism.propTypes = {
  mechanismConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  updateMechanismConfig: PropTypes.func.isRequired,
};

export default SuppressionMechanism;