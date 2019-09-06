import { mount } from "enzyme";
import { Grid } from "./component";
import toJson from "enzyme-to-json";

describe("<Grid />", () => {
  it("renders a column with required props", () => {
    const wrapper = mount(<Grid />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
