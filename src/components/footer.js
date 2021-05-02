import React from "react";
import styled from "@emotion/styled";
import WhiteDivider from "./divider";

const Paragraph = styled.p`
  padding: 30px;
  font-size: 1rem;
  text-align: center;
`;

const Link = styled.a`
  background: -webkit-linear-gradient(#7d68ac, #c024ac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Footer() {
  return (
    <footer>
      <WhiteDivider />
      <Paragraph>
        Website created by{" "}
        <Link
          href="https://github.com/jjuannn"
          target="_blank"
          rel="noreferrer"
        >
          Juan Avero
        </Link>
      </Paragraph>
    </footer>
  );
}
