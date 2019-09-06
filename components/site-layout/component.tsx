import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { GreyScale } from "../../types/design";

interface Props {
  children?: any;
}

interface State {}

export const ResetStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body,
  html {
    font-size: 16px;
  }

  body {
    font-family: "Matter SQ TRIAL", "Arial", sans-serif;
    font-weight: 400;
    /* background: ${GreyScale.White}; */
    color: ${GreyScale.Black};
  }

  strong {
    font-weight: 500;
  }

  a {
    font-size: inherit;
    display: inline-block;
    position: relative;
  }

  p {
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

`;

const Header = styled.div`
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

const Wrapper = styled.div`
  width: 100%;
  max-width: 84rem;
  padding: 0 1rem;
`;

export class SiteLayout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <>
        <ResetStyle />
        <GlobalStyle />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Wrapper>
            <main>{this.props.children}</main>
          </Wrapper>
        </div>
      </>
    );
  }
}
