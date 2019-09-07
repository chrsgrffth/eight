import * as React from "react";
import styled from "styled-components";
import { SiteLayout } from "../components/site-layout";
import { FontSize } from "../types/design";
import { Wrapper } from "../components/wrapper";
import { Markdown } from "../components/markdown";
import { Grid } from "../components/grid";
import { Column } from "../components/column";
import { SiteHeader } from "../components/site-header";

interface Props {
  clientPos: number[];
}

interface State {
  isMounted: boolean;
}

class AboutPage extends React.Component<Props, State> {
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
        <div style={{ marginTop: "50vh" }}>
          <Wrapper>
            <Grid>
              <Column columns={6}>
                <Markdown>
                  Christian Griffith is a front-end engineer with a background
                  in user interface and experience design. Fulfilling work,
                  rewarding relationships, personal power and relief from
                  symptoms are all gifts of the soul. They are particularly
                  elusive in our time because we don’t believe in the soul and
                  therefore give it no place in our hierarchy of values. We have
                  come to know soul only in its complaints: when it stirs,
                  disturbed by neglect and abuse, and causes us to feel its
                  pain. It is commonplace for writers to point out that we live
                  in a time of deep division, in which mind is separated from
                  the body and spirituality is at odds with materialism. But how
                  do we get out of this split? We can’t just “think” ourselves
                  through it, because thinking itself is part of the problem.
                  What we need is a way out of dualistic attitudes We need a
                  third possibility, and that third is soul.
                </Markdown>
              </Column>
              <Column columns={5} offset={1}>
                <div style={{ marginBottom: "5vh" }}>
                  <p>
                    <strong>Experience</strong>
                  </p>
                  <p>
                    <a href="//twitch.tv">Twitch</a>, Senior Front-End Engineer
                  </p>
                  <p>
                    <a href="//octopuscreative.com/">Octopus Creative</a>, UI/UX
                    Designer/Developer
                  </p>
                  <p>Terra Eclipse, UI/UX Designer/Developer</p>
                </div>

                <div style={{ marginBottom: "5vh" }}>
                  <p>
                    <strong>Writing</strong>
                  </p>
                  <p>
                    <a>Custom Mobile Applications for Field Data Collection</a>
                  </p>
                </div>

                <div style={{ marginBottom: "5vh" }}>
                  <p>
                    <strong>Contact</strong>
                  </p>
                  <p>
                    <a>chris@chrisgriffith.co</a>
                  </p>
                </div>
              </Column>
            </Grid>
          </Wrapper>
        </div>
      </SiteLayout>
    );
  }
}

export default AboutPage;
