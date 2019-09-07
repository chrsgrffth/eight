import React from "react";
import { SiteLayout } from "../../components/site-layout";
import { Grid, AlignItems } from "../../components/grid";
import { Column } from "../../components/column";
import { Markdown } from "../../components/markdown";
import { Wrapper } from "../../components/wrapper";

const TwitchPage = () => {
  return (
    <SiteLayout>
      <Wrapper>
        <div style={{ height: "30vh" }} />
        <Grid alignItems={AlignItems.Baseline}>
          <Column columns={5}>
            <a href="/">Back</a>
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
              Building a Design System
            </h1>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                marginBottom: "4rem"
              }}
            >
              January 2017 - Present
            </p>
            <Markdown>{content}</Markdown>
            <p style={{ fontSize: "0.75rem" }}>Updated Today</p>
            <p style={{ fontSize: "0.75rem" }}>
              Back to the roots. SF, CA. &copy; 2019 <a href="/">Credits</a>
            </p>
          </Column>
        </Grid>
      </Wrapper>
    </SiteLayout>
  );
};

export default TwitchPage;

const content = `
When I first started at Twitch, I was the other half of a team of two—years later, our team will have doubled another two times. Our main objective was—and still is—to make the design consistent across the Twitch platform.

1. Get CSS under control.
2. Theming
3. React
4. Documentation
5. Coming Soon

## What's next?
`;
