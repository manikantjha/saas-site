import { Typography } from "@mui/material";
import React from "react";
import FooterColTitle from "./FooterColTitle";

interface IFooterCol {
  colTitle?: string | (() => React.ReactNode);
  colData: string[] | (() => React.ReactNode);
}

export default function FooterCol({ colTitle, colData }: IFooterCol) {
  return (
    <>
      {typeof colTitle === "function" ? (
        colTitle()
      ) : (
        <FooterColTitle title={colTitle} />
      )}
      {typeof colData === "function"
        ? colData()
        : colData.map((data: string, index: number) => (
            <Typography variant="body1" key={index}>
              {data}
            </Typography>
          ))}
    </>
  );
}
