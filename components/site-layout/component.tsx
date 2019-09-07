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
    font-family: "Reckless TRIAL", "Arial", sans-serif;
    font-weight: 300;
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

const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
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

        <StyledLayout>{this.props.children}</StyledLayout>
      </>
    );
  }
}
