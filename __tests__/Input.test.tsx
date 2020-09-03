import * as React from "react";
import { shallow } from "enzyme";
import Input from "../src/components/Input";

const createNote = jest.fn();

const props = {
  createNote,
};

describe("Renders input", () => {
  it("renders form controls text", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("form").text()).toEqual(
      "<TextInput /> <NumberInput />"
    );
  });

  it("renders form controls text", () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("form")).toHaveLength(1);
  });
});
