import * as React from "react";
import styled from "styled-components";
import { SiteLayout } from "../components/site-layout";
import { FontSize } from "../types/design";

const Heading = styled.p`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const H1 = styled.h1`
  font-size: 5.65vw;
  text-align: justify;
  text-align-last: justify;
  -webkit-font-smoothing: antialiased;
`;

const H2 = styled.h2`
  font-size: 3.5vw;
  text-align: justify;
  text-align-last: justify;
  -webkit-font-smoothing: antialiased;
`;

const Body = styled.p`
  font-size: ${FontSize.Size2};
  max-width: 50rem;
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
        {/* <div style={{ marginTop: "40vh", marginBottom: "5vw" }}>
          <Heading>Currently</Heading>
          <H1>
            Building design systems at <a href="/projects/twitch">Twitch</a>.
          </H1>
        </div>

        <div style={{ marginBottom: "40vh" }}>
          <Heading>Studio Work</Heading>
          <H2>
            <a href="/projects/paypal">PayPal</a>, <a>CoverHound</a>,{" "}
            <a>DesignKollective</a>, and <a>Spera Health</a>
          </H2>
        </div> */}
      </SiteLayout>
    );
  }
}

export default HomePage;
