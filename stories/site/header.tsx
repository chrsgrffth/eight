import * as React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { SiteLayout } from "../../components/site-layout";
import { GlobalStyle } from "../../components/site-layout";

storiesOf("Site | Header", module).add("Default", () => (
  <>
    <SiteLayout />
  </>
));
