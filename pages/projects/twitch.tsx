import React from "react";
import { SiteLayout } from "../../components/site-layout";
import { Grid } from "../../components/grid";
import { Column } from "../../components/column";
import { Markdown } from "../../components/markdown";

const TwitchPage = () => {
  return (
    <SiteLayout>
      <div style={{ height: "30vh" }} />
      <Grid>
        <Column columns={5}>
          <a href="/">Back</a>
        </Column>
        <Column columns={7}>
          <p style={{ fontSize: "2rem", fontWeight: 500 }}>
            Building a Design System
          </p>
          <p
            style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "4rem" }}
          >
            Twitch
          </p>

          <Markdown>{content}</Markdown>
        </Column>
      </Grid>
    </SiteLayout>
  );
};

export default TwitchPage;

const content = `I joined with about 750 employees.`;
