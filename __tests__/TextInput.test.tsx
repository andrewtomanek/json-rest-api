import * as React from "react";
import { shallow } from "enzyme";
import TextInput from "../src/components/TextInput";

const noteTitle = "test";
const noteContent = "text test";
const updateNoteTitle = jest.fn();
const updateNoteContent = jest.fn();

const props = {
  noteTitle,
  noteContent,
  updateNoteTitle,
  updateNoteContent,
};

describe("Render form and buttons", () => {
  describe("Renders input", () => {
    it("renders form controls text", () => {
      const wrapper = shallow(<TextInput {...props} />);
      expect(wrapper.exists(".MuiInputBase-input"));
    });
  });
});
