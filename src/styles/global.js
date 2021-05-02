import { Global, css } from "@emotion/react";
import React from "react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          min-height: 100%;
        }
        body {
          display: flex;
          flex-direction: row;
          min-height: 100%;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Roboto", sans-serif;
        }
      `}
    />
  );
}
