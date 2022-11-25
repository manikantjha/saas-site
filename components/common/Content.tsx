import { Box, SxProps, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FeatureRowContext } from "../featureRow/FeatureRow";

export interface IContentProps {
  title?: string;
  content?: string;
  renderButton?: () => React.ReactNode;
  sxTitle?: SxProps;
  sxContent?: SxProps;
  sxContainerMain?: SxProps;
}

export default function Content(props: IContentProps) {
  const { sxContainerMain, sxTitle, title, sxContent, content, renderButton } =
    useContext(FeatureRowContext);

  return (
    <Box sx={{ ...sxContainerMain }}>
      <Box>
        <Typography
          variant="h2"
          sx={{ mb: 2, fontSize: { xs: "40px", md: "auto" }, ...sxTitle }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, ...sxContent }}>
          {content}
        </Typography>
        {!!renderButton && renderButton()}
      </Box>
    </Box>
  );
}
