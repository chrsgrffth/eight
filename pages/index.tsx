import * as React from "react";
import styled from "styled-components";
import { SiteLayout } from "../components/site-layout";
import { Grid } from "../components/grid";
import { Column } from "../components/column";
import { Wrapper } from "../components/wrapper";
import { SiteHeader } from "../components/site-header";

const Aspect = styled.div`
  position: relative;

  * {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background-color: #6441a4;
    background-image: url("/static/images/displacement-twitch.jpg");
    background-size: 100% 100%;
    background-blend-mode: multiply;
  }

  &:before {
    content: "";
    display: block;
    padding-bottom: ${(9 / 21) * 100}%;
  }
`;

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

  public componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100);
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
              <Aspect>
                <a href="/projects/twitch" />
              </Aspect>
            </Column>
          </Grid>
        </Wrapper>
      </SiteLayout>
    );
  }
}

export default HomePage;
