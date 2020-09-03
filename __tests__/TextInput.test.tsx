import * as React from "react";
import { shallow } from "enzyme";
import TextInput from "../src/components/TextInput";

const noteTitle = "titleTest";
const noteContent = "contentTest";
const updateNoteTitle = jest.fn();
const updateNoteContent = jest.fn();

const props = {
  noteTitle,
  noteContent,
  updateNoteTitle,
  updateNoteContent,
};

describe("Render TextInput component", () => {
  it("renders textarea element", () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper.exists(".MuiInputBase-input"));
  });

  it("renders title input", () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper.find({ value: "titleTest" })).toHaveLength(1);
  });

  it("renders title label", () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper.find({ label: "Titul poznámky" })).toHaveLength(1);
  });

  it("renders content input", () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper.find({ value: "contentTest" })).toHaveLength(1);
  });

  it("renders content label", () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper.find({ label: "Text poznámky" })).toHaveLength(1);
  });

  it("renders ListUnit component", () => {
    const wrapper = shallow(<TextInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
