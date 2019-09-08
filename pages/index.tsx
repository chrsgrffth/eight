import * as React from "react";
import Router from "next/router";
import { SiteLayout } from "../components/site-layout";
import { Grid } from "../components/grid";
import { Column } from "../components/column";
import { Wrapper } from "../components/wrapper";
import { SiteHeader } from "../components/site-header";
import { Effect } from "../components/effect";
import { TweenLite } from "gsap";

interface Props {
  clientPos: number[];
}

interface State {
  isMounted: boolean;
}

class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isMounted: false
    };
  }

  public render() {
    return (
      <SiteLayout>
        <SiteHeader />
        <Wrapper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexGrow: 1,
            paddingBottom: "2rem",
            minHeight: "100vh"
          }}
        >
          <Grid>
            <Column columns={8} offset={2}>
              <Effect
                linkTo="/projects/twitch"
                imgSrc="https://images.unsplash.com/photo-1542751371-adc38448a05e"
                // disabled
              />
            </Column>
          </Grid>
        </Wrapper>
        <Wrapper
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexGrow: 1,
            paddingBottom: "2rem",
            minHeight: "100vh"
          }}
        >
          <Grid>
            <Column columns={3} offset={4}>
              <Effect
                linkTo="/projects/design-kollective"
                imgSrc="https://images.unsplash.com/photo-1503602642458-232111445657"
                portrait
              />
            </Column>
          </Grid>
        </Wrapper>
      </SiteLayout>
    );
  }
}

export default HomePage;
