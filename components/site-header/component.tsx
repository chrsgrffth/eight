import React from "react";
import styled from "styled-components";
import { Wrapper } from "../wrapper";
import { NavLink } from "../nav-link";

const StyledHeader = styled.div`
  width: 100%;
  padding: 2vh 0;
  display: flex;
  justify-content: space-between;
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
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">Info</NavLink>
        </StyledHeader>
      </Wrapper>
    </div>
  );
};
