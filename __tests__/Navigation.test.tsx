import * as React from "react";
import { shallow } from "enzyme";
import Navigation from "../src/components/Navigation";

describe("<Navigation />", () => {
  it("renders Id label", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find({ label: "Domů" })).toHaveLength(1);
  });

  it("renders Id label", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find({ label: "Vytvořit" })).toHaveLength(1);
  });

  it("renders Id label", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find({ language: "cs-CZ" })).toHaveLength(1);
  });
  it("renders Navigation component", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
