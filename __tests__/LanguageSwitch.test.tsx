import * as React from "react";
import { shallow } from "enzyme";
import LanguageSwitch from "../src/components/LanguageSwitch";

const language = "cs-CZ";
const changeLanguage = jest.fn();

const props = {
  language,
  changeLanguage
};

describe("<LanguageSwitch />", () => {
  it("renders select options", () => {
    const wrapper = shallow(<LanguageSwitch {...props} />);
    expect(wrapper.find("option")).toHaveLength(3);
  });
  it("option value CZ", () => {
    const wrapper = shallow(<LanguageSwitch {...props} />);
    expect(wrapper.find({ value: "en-US" })).toHaveLength(1);
  });
  it("render 3 options", () => {
    const wrapper = shallow(<LanguageSwitch {...props} />);
    expect(
      wrapper
        .find("option")
        .at(0)
        .prop("value")
    ).toEqual("cs-CZ");
    expect(
      wrapper
        .find("option")
        .at(1)
        .prop("value")
    ).toEqual("en-US");
    expect(
      wrapper
        .find("option")
        .at(2)
        .prop("value")
    ).toEqual("ru-RU");
  });
});
