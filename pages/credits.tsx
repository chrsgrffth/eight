import React from "react";
import { SiteLayout } from "../components/site-layout";
import { Wrapper } from "../components/wrapper";
import { Grid, AlignItems } from "../components/grid";
import { Column } from "../components/column";
import { Markdown } from "../components/markdown";
import { SiteHeader } from "../components/site-header";

const CreditsPage = () => {
  return (
    <SiteLayout>
      <SiteHeader />
      <div style={{ height: "30vh" }} />
      <Wrapper>
        <Grid>
          <Column columns={6} offset={5}>
            <Markdown>{content}</Markdown>
            <p style={{ fontSize: "0.75rem" }}>Updated Today</p>
            <p style={{ fontSize: "0.75rem" }}>
              Back to the roots. SF, CA. &copy; 2019
            </p>
          </Column>
        </Grid>
      </Wrapper>
    </SiteLayout>
  );
};

const content = `
# Credits

## Languages & Frameworks
* __[Typescript]()__
* __[React](https://reactjs.org/)__—[v16.8.6](https://github.com/facebook/react/releases/tag/v16.8.6)
* __[Next]()__
* __[THREE]()__
* __[GSAP]()__
* __[Styled Components]()__
* __[Blotter]()__
* __[Storybook]()__

## Font

* __[Reckless](https://displaay.net/typeface/reckless/#)__ by [Displaay Type Foundry](https://displaay.net/typeface/reckless/#)

## Images

* __[Triangles in a white facade](https://unsplash.com/photos/0rxmzg-Q1Lk)__ by [Samuel Zeller](https://unsplash.com/@samuelzeller)
* __[Overwatch](https://unsplash.com/photos/Mf23RF8xArY)__ by [Florian Ovo](https://unsplash.com/@rxspawn)

## Articles

* __[WebGL Distortion Hover Effects](https://tympanus.net/codrops/2018/04/10/webgl-distortion-hover-effects/)__
* __[Starting with React 16 and Three.js in 5 minutes](https://blog.bitsrc.io/starting-with-react-16-and-three-js-in-5-minutes-3079b8829817)__ by [Marina Vorontsova](https://blog.bitsrc.io/@vorontsova_mi)

`;

export default CreditsPage;
