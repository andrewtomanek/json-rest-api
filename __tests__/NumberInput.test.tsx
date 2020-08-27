import * as React from "react";
import { shallow } from "enzyme";
import NumberInput from "../src/components/NumberInput";

const note = {
  id: 33,
  title: "test",
  body: "testing",
  userId: 99,
};
const noteId = 1;
const userId = 99;
const updateNote = jest.fn();
const updateNoteId = jest.fn();
const updateUserId = jest.fn();
const deletePickedNote = jest.fn();
const props = {
  note,
  noteId,
  userId,
  updateNote,
  updateNoteId,
  updateUserId,
  deletePickedNote,
};

describe("Renders input", () => {
  it("renders form controls text", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.exists(".MuiButton-label"));
  });

  it("renders form controls text", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.first().text()).toEqual("OdeslatSmazat");
  });

  it("renders send button", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.find({ color: "secondary" })).toHaveLength(2);
  });
});
