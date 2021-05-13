import * as React from "react";
import { shallow } from "enzyme";
import { ListComponent } from "../src/components/ListComponent";

const notes = [
  { id: 1, title: "test1", body: "text test1", userId: 101 },
  { id: 2, title: "test2", body: "text test2", userId: 102 },
];
const getPickedNote = jest.fn();
const editPickedNote = jest.fn();
const deleteNoteById = jest.fn();

const props = {
  notes,
  getPickedNote,
  editPickedNote,
  deleteNoteById,
};

describe("Renders ListComponent", () => {
  it("renders list elements", () => {
    const wrapper = shallow(<ListComponent {...props} />);
    expect(wrapper.find("ListUnit")).toHaveLength(2);
  });

  it("renders ListComponent snapshot", () => {
    const wrapper = shallow(<ListComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
