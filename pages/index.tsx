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

const Header = styled.div`
  width: 100%;
  padding: 2vh 0;
  display: flex;
  justify-content: space-between;
`;

const HeaderLink = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0.5em;
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
        <Header>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/about">Info</HeaderLink>
        </Header>
      </SiteLayout>
    );
  }
}

export default HomePage;
