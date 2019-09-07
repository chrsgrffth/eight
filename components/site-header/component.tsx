import React from "react";
import styled from "styled-components";
import { Wrapper } from "../wrapper";

const StyledHeader = styled.div`
  width: 100%;
  padding: 2vh 0;
  display: flex;
  justify-content: space-between;
`;

const HeaderLink = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.5em;
`;

export const SiteHeader = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Wrapper>
        <StyledHeader>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/about">Info</HeaderLink>
        </StyledHeader>
      </Wrapper>
    </div>
  );
};
