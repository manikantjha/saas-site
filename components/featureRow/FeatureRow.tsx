import {
  Box,
  Container,
  Grid,
  SxProps,
  Theme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { IContentProps } from "../common/Content";
import RowMirrored from "./RowMirrored";
import RowRegular from "./RowRegular";

export interface IFeatureRowProps extends IContentProps {
  isMirrored?: boolean;
  src?: string;
  alt?: string;
  sxRow?: SxProps;
  renderContent?: () => React.ReactNode;
  hideImageInTabletView?: boolean;
  isTablet?: boolean;
}

export const FeatureRowContext = React.createContext({} as IFeatureRowProps);

export default function FeatureRow(props: IFeatureRowProps) {
  const { isMirrored, ...other } = props;

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <FeatureRowContext.Provider value={other}>
      <Box sx={{ ...props.sxRow }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {isMirrored || isTablet ? (
              <RowMirrored isTablet={isTablet} />
            ) : (
              <RowRegular isTablet={isTablet} />
            )}
          </Grid>
        </Container>
      </Box>
    </FeatureRowContext.Provider>
  );
}
