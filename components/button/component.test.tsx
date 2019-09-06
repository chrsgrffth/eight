import React from "react";
import { shallow } from "enzyme";
import { ButtonComponent } from "./component";

describe("<Button />", () => {
  it("renders a button by default", () => {
    const wrapper = shallow(<ButtonComponent>Test</ButtonComponent>);
    expect(wrapper.type()).toEqual("button");
  });

  it("renders a link when provided an href", () => {
    const wrapper = shallow(<ButtonComponent href="http://chrisgriffith.co" />);
    expect(wrapper.type()).toEqual("a");
  });
});
