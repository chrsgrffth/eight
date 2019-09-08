import React from "react";
import { SiteLayout } from "../../components/site-layout";
import { Grid, AlignItems } from "../../components/grid";
import { Column } from "../../components/column";
import { Markdown } from "../../components/markdown";
import { Wrapper } from "../../components/wrapper";
import { NavLink } from "../../components/nav-link";

const DesignKollectivePage = () => {
  return (
    <SiteLayout>
      <Wrapper>
        <div style={{ height: "30vh" }} />
        <Grid alignItems={AlignItems.Baseline}>
          <Column columns={5}>
            <NavLink href="/">Back</NavLink>
          </Column>
          <Column columns={6}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                marginLeft: "-0.05em",
                marginBottom: "0.5em"
              }}
            >
              Starting From Scratch
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "1rem",
                fontWeight: 400,
                marginBottom: "4rem"
              }}
            >
              <p>Design Kollective</p>
              <p>2016</p>
            </div>
            <Markdown>{content}</Markdown>
            <p style={{ fontSize: "0.75rem" }}>Written September 7th, 2019</p>
            <p style={{ fontSize: "0.75rem" }}>Updated Today</p>

            <div style={{ margin: "1rem 0" }}>
              <p style={{ fontSize: "0.75rem" }}>
                Back to the roots. SF, CA. &copy; 2019 All rights reserved.—
                <a href="/credits">Credits</a>
              </p>
            </div>
          </Column>
        </Grid>
      </Wrapper>
    </SiteLayout>
  );
};

export default DesignKollectivePage;

const content = `

`;
