import { mount } from "enzyme";
import { Grid } from "./component";
import { Column } from "../column";

describe("<Grid />", () => {
  it("renders a column with required props", () => {
    const wrapper = mount(<Grid />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a grid with gutters", () => {
    const wrapper = mount(
      <Grid gutter>
        <Column columns={1} />
        <Column columns={1} />
      </Grid>
    );

    expect(
      wrapper
        .find(Column)
        .first()
        .props().gutter
    ).toEqual(false);

    expect(
      wrapper
        .find(Column)
        .last()
        .props().gutter
    ).toEqual(true);
  });
});
