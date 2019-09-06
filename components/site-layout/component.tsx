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

  p {
    line-height: 1.6;
    font-weight: 400;
    font-size: 0.85rem;
    margin: 0;
  }

  strong {
    font-weight: 500;
  }

  a {
    font-size: inherit;
    display: inline-block;
    position: relative;

    &:before {
      content: "";
      display: block;
      width: 100%;
      position: absolute;
      bottom: 0.05em;
      height: 0.05em;
      background: ${GreyScale.Grey03};
      z-index: -1;
      transition: height 0.17s ease-in;
      transform: translate3d(0,0,0);
    }

    &:hover {

      &:before {
        height: 0.5em;
      }
    }
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
    font-family: "Reckless TRIAL";
    margin: 0;
  }
`;

const SiteTitle = styled.p`
  font-size: 0.9rem;
  padding: 2vh 0;
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
            <SiteTitle>
              {/* <a href="/">Christian Griffith</a> */}
              <a href="/">Home</a>
              <a href="/about">Info</a>
            </SiteTitle>
            <main>{this.props.children}</main>
          </Wrapper>
        </div>
      </>
    );
  }
}
