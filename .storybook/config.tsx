import { configure, addParameters, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../components/site-layout";

const req = require.context("../stories", true, /\.story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    showPanel: false
  }
});

addDecorator(storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
));

configure(loadStories, module);
