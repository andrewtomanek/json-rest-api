import * as React from "react";
import { shallow } from "enzyme";
import Input from "../src/components/Input";

const createNote = jest.fn();

const props = {
  createNote
};

describe("Renders input", () => {
  it("renders form controls text", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("form").text()).toEqual("Odeslat");
  });

  it("renders label text", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(
      wrapper.find("#noteContent").find({ label: "Text poznámky" })
    ).toHaveLength(1);
  });

  it("renders send button", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find({ color: "primary" })).toHaveLength(1);
  });
});
