import { Box, Button } from "@mui/material";
import React from "react";
import FeatureRow from "./featureRow/FeatureRow";

export default function Hero() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          height: { xs: "65vh", md: "80vh" },
          width: "100%",
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(0deg, rgba(13, 165, 116, 0.85), rgba(14, 162, 165, 0.8)), url(/assets/images/hero.jpg)",
          backgroundPosition: "center center",
          // transformOrigin: "left bottom",
          // transform: "skewY(-3deg)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "100%",
        }}
      >
        <FeatureRow
          src="/assets/images/hero_side_image.svg"
          alt="UI"
          title="Commerce 350"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ratione sunt optio accusantium corporis ipsa excepturi quasi delectus velit molestiae recusandae odio provident, deleniti quibusdam sed dolorum amet molestias iste!"
          renderButton={() => {
            return (
              <Button
                sx={{
                  bgcolor: "white",
                  color: "secondary.main",
                  "&:hover": {
                    bgcolor: "white",
                    color: "secondary.main",
                  },
                }}
                variant="contained"
              >
                Call to Action
              </Button>
            );
          }}
          sxTitle={{ color: "white !important", fontWeight: "bold" }}
          sxContent={{ color: "white !important", fontWeight: "bold" }}
          hideImageInTabletView={true}
          sxContainerMain={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            px: { xs: 0, md: 3 },
          }}
        />
      </Box>
    </Box>
  );
}
