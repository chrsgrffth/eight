import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { GreyScale } from "../../types/design";
import Head from "next/head";

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

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  width: 100%;
  background: black;
  bottom: 0;
  color: white;
  border-radius: 1px;
  box-shadow: 0 1px 8px -1px rgba(0, 0, 0, 0.5);
  font-size: 0.85rem;
`;

export class SiteLayout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <>
        <Head>
          <title>Christian Grifffth</title>
        </Head>
        <ResetStyle />
        <GlobalStyle />

        <StyledLayout>{this.props.children}</StyledLayout>

        {false && (
          <div
            style={{
              position: "fixed",
              bottom: 0,
              width: "100%",
              padding: "1rem"
            }}
          >
            <Banner>
              <p>
                I'm available for freelance work on select projects. Learn More.
              </p>
            </Banner>
          </div>
        )}
      </>
    );
  }
}
