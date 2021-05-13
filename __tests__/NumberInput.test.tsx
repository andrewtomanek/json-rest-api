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

describe("Renders NumberInput component", () => {
  it("renders form controls text", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.exists(".MuiButton-label"));
  });

  it("renders send button", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.childAt(1).text()).toEqual("Odeslat");
  });

  it("renders delete button", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.childAt(2).text()).toEqual("Smazat");
  });

  it("renders Id input element", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.find({ value: 1 })).toHaveLength(1);
  });

  it("renders Id label", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.find({ label: "Id" })).toHaveLength(1);
  });

  it("renders userId input element", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.find({ value: 99 })).toHaveLength(1);
  });

  it("renders userId label", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper.find({ label: "userId" })).toHaveLength(1);
  });

  it("renders ListUnit component  snapshot", () => {
    const wrapper = shallow(<NumberInput {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
