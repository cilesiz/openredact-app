import React from "react";
import { Card, Elevation } from "@blueprintjs/core";
import "./AnnotationView.sass";

function AnnotationView() {
  return <Card className="annotation-view" elevation={Elevation.ONE} />;
}

export default AnnotationView;
