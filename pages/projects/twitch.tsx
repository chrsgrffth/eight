import React from "react";
import { SiteLayout } from "../../components/site-layout";
import { Grid, AlignItems } from "../../components/grid";
import { Column } from "../../components/column";
import { Markdown } from "../../components/markdown";
import { Wrapper } from "../../components/wrapper";
import { NavLink } from "../../components/nav-link";

const TwitchPage = () => {
  return (
    <SiteLayout>
      <Wrapper>
        <div style={{ height: "30vh" }} />
        <Grid alignItems={AlignItems.Baseline}>
          <Column columns={5}>
            <NavLink href="/">Back</NavLink>
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
              Building a Design System for a <br />
              Growing Company
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "1rem",
                fontWeight: 400,
                marginBottom: "4rem"
              }}
            >
              <p>Twitch</p>
              <p>January 2017 - Present</p>
            </div>
            <Markdown>{content}</Markdown>
            <p style={{ fontSize: "0.75rem" }}>Written September 7th, 2019</p>
            <p style={{ fontSize: "0.75rem" }}>Updated Today</p>

            <div style={{ margin: "1rem 0" }}>
              <p style={{ fontSize: "0.75rem" }}>
                Back to the roots. SF, CA. &copy; 2019 All rights reserved.—
                <a href="/credits">Credits</a>
              </p>
            </div>
          </Column>
        </Grid>
      </Wrapper>
    </SiteLayout>
  );
};

export default TwitchPage;

const content = `
When I first started at Twitch, I was the other half of a team of two—years later, our team will have doubled another two times. Our main objective was—and still is—to make the design consistent across the Twitch platform. How exactly you do this is a still a topic for debate, but this is how we did it and how I helped make it happen.

## Get CSS Under Control

Under it all, there was a soft outline of a "system". While there were still some finer details that needed to be understood, most of the designers and developers at Twitch could tell you that a "default" button was a purple rectangle with white text. 

![](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpzH41xYqVzSxmNG2TtRRZDJDfn7F6ltHHEreuVnptxuC2nNJt)

Ever increasing amounts of CSS doing mostly the same things. Inheritance, overrides, important tags.

![](https://i.kym-cdn.com/entries/icons/original/000/020/147/drake.jpg)

Functional CSS.

    .tw-full-height {
      height: 100%;
    }

Notes:
- separate repo, deployment nightmare
- stats on css


## Theming

Encouraging better practices for writing front-end code has always been a top priority for myself and my team, but working on a product means we also have to build new things. I was asked to write the infrastructure to support a site-wide theming. Up until this point, our system could only support "local" theming—theming of elements here and there without input from the user, but we now wanted to put a toggle in the user's menu to allow them to switch their whole experience.

Notes:
- first scss, then json to multiple platforms


## React

In 2017, Twitch loaded painfully slowly—even on fast networks. The decision was made at the top to rebuild the entire web client from it's current Ember.js / Ruby on Rails to React—with minimal change to the design. For us, this was the opportunity we were waiting for. The combination of React and TypeScript would allow us to build a powerful library of interface components with strong typing.

Notes:
- remember that functional css library?


## Documentation



## So, what's next?

- tooling
- css-in-js
- other platforms

## Notes

* move truth from production to our system
`;
