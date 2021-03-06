import React from "react";
import { render } from "@testing-library/react";
import AnonymizationConfigMenu from "./AnonymizationConfigMenu";

it("renders", () => {
  render(
    <AnonymizationConfigMenu
      tags={["PER"]}
      config={{
        defaultMechanism: {
          mechanism: "suppression",
          config: { suppressionChar: "X" },
        },
        mechanismsByTag: {},
      }}
      setConfig={() => {}}
    />
  );
});
