import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Markdown } from "../../components/markdown";
import { Grid } from "../../components/grid";
import { Column } from "../../components/column";

const source = `
# Go Plastic-Free This Year 

You don’t know how to address an issue if you don’t measure it. Think of dieting. You would likely stand on a scale or try on your favorite pair of jeans to determine if you’ve gained a great deal of weight. (“I weigh what?!”) Here, you’ll measure your plastic diet. (“I threw out how many to-go coffee cups?!”)

## Go Shopping

No, I’m not advocating rampant consumerism here.

1. The farmers’ market. Hit the market for fresh fruit and vegetables with very little packaging, if any. I can even bring my own cartons for loose pastured eggs at one of my local farmers markets. Find your farmers market in the US through Local Harvest. In Canada, search through Farms.com.

2. Bulk bins. I fill up on staples at the bulk bins—flour, sugar, nuts, dried fruit, beans, rice, popcorn, oils, nut butters, baking soda, maple syrup, olives, spices, tea and so on. Yes, these foods came to the store in packaging but in large packaging. I help send that packaging to landfill but if I bought my own little package every time I needed something rather than filling up at the bulk bins, I would send much more packaging to landfill. Until I buy my farm and grow everything myself, I will contribute trash.
`;

storiesOf("Library | Markdown", module).add("Default", () => (
  <Grid>
    <Column columns={6} offset={1}>
      <Markdown>{source}</Markdown>
    </Column>
  </Grid>
));
