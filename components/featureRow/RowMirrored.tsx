/* eslint-disable @next/next/no-img-element */
import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import Content from "../common/Content";
import { FeatureRowContext, IFeatureRowProps } from "./FeatureRow";

export default function RowMirrored(props: IFeatureRowProps) {
  const {
    src,
    alt,
    renderContent,
    hideImageInTabletView: hideImageInMobileView,
  } = useContext(FeatureRowContext);

  return (
    <>
      {!(hideImageInMobileView && props.isTablet) && (
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              overflow: "hidden",
              mb: { xs: 2, md: 0 },
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        {renderContent ? renderContent() : <Content />}
      </Grid>
    </>
  );
}
