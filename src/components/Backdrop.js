import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
export const Backdrop = props => (
  <div
    css={css`
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 100;
    `}
    onClick={props.click}
  />
);
