import { Box, SxProps } from "@mui/material";
import React from "react";

interface IFeatureRowWrapperProps {
  children: React.ReactNode;
  sxWrapperContainer?: SxProps;
}

export default function RowWrapper(props: IFeatureRowWrapperProps) {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, ...props.sxWrapperContainer }}>
      {props.children}
    </Box>
  );
}
