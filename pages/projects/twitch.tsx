import React from "react";
import { SiteLayout } from "../../components/site-layout";
import { Grid } from "../../components/grid";
import { Column } from "../../components/column";
import { FontSize } from "../../types/design";

const TwitchPage = () => {
  return (
    <SiteLayout>
      {/* <Grid>
        <Column debugMode>1</Column>
        <Column debugMode>2</Column>
        <Column debugMode>3</Column>
        <Column debugMode>4</Column>
        <Column debugMode>5</Column>
        <Column debugMode>6</Column>
        <Column debugMode>7</Column>
        <Column debugMode>9</Column>
        <Column debugMode>10</Column>
        <Column debugMode>11</Column>
        <Column debugMode>12</Column>
      </Grid>
      <Grid>
        <Column columns={4} debugMode>
          1
        </Column>
        <Column columns={8} debugMode>
          2
        </Column>
      </Grid>

      <Grid>
        <Column columns={4} offset={2} debugMode>
          1
        </Column>
        <Column columns={4} offset={2} debugMode>
          2
        </Column>
      </Grid> */}

      <Grid>
        <Column offset={4} columns={8}>
          <p style={{ fontSize: "2rem", fontWeight: 500 }}>
            Building a Design System
          </p>

          <p style={{ fontSize: "1rem", fontWeight: 500 }}>Twitch</p>
        </Column>
      </Grid>
    </SiteLayout>
  );
};

export default TwitchPage;
