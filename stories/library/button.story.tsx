import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../../components/button";

storiesOf("Library | Button", module).add("Default", () => (
  <Button>Read More</Button>
));
