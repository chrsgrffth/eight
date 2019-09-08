import * as React from "react";
import { SiteLayout } from "../components/site-layout";
import { Wrapper } from "../components/wrapper";
import { Markdown } from "../components/markdown";
import { Grid } from "../components/grid";
import { Column } from "../components/column";
import { SiteHeader } from "../components/site-header";
import { GreyScale } from "../types/design";

interface Props {
  clientPos: number[];
}

class AboutPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <SiteLayout>
        <SiteHeader />
        <Wrapper>
          <div style={{ marginTop: "50vh " }}></div>
          <Grid>
            <Column columns={6}>
              <Markdown>{content}</Markdown>
            </Column>
            <Column columns={5} offset={1}>
              <div style={{ marginBottom: "5vh", lineHeight: 1.7 }}>
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
                <p>
                  Information Management Services, Inc., Front-End
                  Designer/Developer
                </p>
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

                <p style={{ fontSize: "0.75rem", color: GreyScale.Grey01 }}>
                  I am currently available for freelance consultation.
                </p>
              </div>
            </Column>
          </Grid>
        </Wrapper>
      </SiteLayout>
    );
  }
}

const content = `
Christian Griffith is a front-end engineer with a background in user interface and experience design. His expertise is in writing front-end code that is robust, performant, and easy to maintain—ultimately rendering user interfaces that are exceptional. He has worked with early companies to bring budding ideas to fruition, and with large organizations looking to get things done. He has a bias for action and making things. Outside of web development, he can be found making pasta from scratch or culturing microorganisms in a sauerkraut.  Fulfilling work, rewarding relationships, personal power and relief from symptoms are all gifts of the soul. They are particularly elusive in our time because we don’t believe in the soul and therefore give it no place in our hierarchy of values. We have come to know soul only in its complaints: when it stirs, disturbed by neglect and abuse, and causes us to feel its pain. It is commonplace for writers to point out that we live in a time of deep division, in which mind is separated from the body and spirituality is at odds with materialism. But how do we get out of this split? We can’t just “think” ourselves through it, because thinking itself is part of the problem. What we need is a way out of dualistic attitudes We need a third possibility, and that third is soul.
`;

export default AboutPage;
