import { Paper, SvgIconTypeMap, SxProps, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface IFeatureCardProps {
  title?: string;
  subtitle?: string;
  content?: string;
  renderButton?: () => React.ReactNode;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  sxPaper?: SxProps;
}

export default function FeatureCard(props: IFeatureCardProps) {
  return (
    <Paper
      // elevation={6}
      sx={{
        textAlign: "center",
        py: 6,
        px: 3,
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        ...props.sxPaper,
      }}
    >
      <props.icon sx={{ fontSize: 60, mb: 1 }} color="primary" />
      <Typography variant="h4" sx={{ mb: 2 }}>
        {props.title}
      </Typography>
      <Typography variant="h6" component="p" sx={{ mb: 2 }}>
        {props.subtitle}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {props.content}
      </Typography>
      {!!props.renderButton && props.renderButton()}
    </Paper>
  );
}
