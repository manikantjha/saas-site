import { Box, Hidden } from "@mui/material";
import LogosRowDesktop from "./LogosRowDesktop";
import LogosRowMobile from "./LogosRowMobile";

export default function CompanyLogosRow() {
  return (
    <>
      <Hidden mdDown>
        <LogosRowDesktop />
      </Hidden>
      <Hidden mdUp>
        <LogosRowMobile />
      </Hidden>
    </>
  );
}
