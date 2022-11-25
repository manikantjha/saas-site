/* eslint-disable @next/next/no-img-element */
import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import Content from "../common/Content";
import { FeatureRowContext, IFeatureRowProps } from "./FeatureRow";

export default function RowRegular(props: IFeatureRowProps) {
  const { src, alt, renderContent, hideImageInTabletView } =
    useContext(FeatureRowContext);

  return (
    <>
      <Grid item xs={12} md={6}>
        {renderContent ? renderContent() : <Content />}
      </Grid>
      {!(hideImageInTabletView && props.isTablet) && (
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", height: "auto", overflow: "hidden" }}>
            <img
              src={src}
              alt={alt}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      )}
    </>
  );
}
