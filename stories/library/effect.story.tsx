import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Effect } from "../../components/effect";

storiesOf("Library | Effect", module).add("Default", () => (
  <div style={{ padding: 100 }}>
    <Effect />{" "}
  </div>
));
