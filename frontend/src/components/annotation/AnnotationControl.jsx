import React from "react";
import { Card, Elevation, Spinner } from "@blueprintjs/core";
import "./AnnotationControl.sass";
import PropTypes from "prop-types";
import Dropzone from "./Dropzone";
import AnnotationForm from "./AnnotationForm";

const AnnotationControl = ({
  tokens,
  annotations,
  onAnnotationsChange,
  onFileDrop,
  isLoading,
  tags,
}) => {
  return (
    <Card className="annotation-card" elevation={Elevation.ONE}>
      {isLoading && <Spinner />}
      {tokens.length === 0 && !isLoading && (
        <Dropzone onFileDrop={onFileDrop} />
      )}
      {tokens.length > 0 && tags.length > 0 && (
        <AnnotationForm
          tokens={tokens}
          annotations={annotations}
          onAnnotationsChange={onAnnotationsChange}
          tags={tags}
        />
      )}
    </Card>
  );
};

AnnotationControl.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.object).isRequired,
  annotations: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAnnotationsChange: PropTypes.func.isRequired,
  onFileDrop: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AnnotationControl;
