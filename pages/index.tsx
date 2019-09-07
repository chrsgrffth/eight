import * as React from "react";
import Router from "next/router";
import { SiteLayout } from "../components/site-layout";
import { Grid } from "../components/grid";
import { Column } from "../components/column";
import { Wrapper } from "../components/wrapper";
import { SiteHeader } from "../components/site-header";
import { Effect } from "../components/effect";

interface Props {
  clientPos: number[];
}

interface State {
  isMounted: boolean;
}

class HomePage extends React.Component<Props, State> {
  public tween: HTMLDivElement;

  constructor(props: Props) {
    super(props);

    this.state = {
      isMounted: false
    };
  }

  public componentDidMount() {
    this.setState({ isMounted: true });
  }

  public render() {
    return (
      <SiteLayout>
        <SiteHeader />
        <Wrapper
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            paddingBottom: "2rem"
          }}
        >
          <Grid>
            <Column columns={8} offset={2}>
              <Effect linkTo="/projects/twitch" />
            </Column>
          </Grid>
          <p>1/5</p>
        </Wrapper>
      </SiteLayout>
    );
  }
}

export default HomePage;
