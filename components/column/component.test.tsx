import { mount } from "enzyme";
import { Column } from "./component";
import toJson from "enzyme-to-json";

describe("<Column />", () => {
  it("renders a column with required props", () => {
    const wrapper = mount(<Column columns={1} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a column with optional props", () => {
    const wrapper = mount(<Column columns={1} offset={1} gutter />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the column with the correct style rules", () => {
    const wrapper = mount(<Column columns={6} offset={3} gutter />);
    expect(wrapper).toHaveStyleRule("width", "50%");
    expect(wrapper).toHaveStyleRule("margin-left", "25%");
  });
});
