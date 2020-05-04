import * as React from "react";
import { shallow } from "enzyme";
import Edit from "../src/components/Edit";

const note = { id: 1, title: "test" };
const editNote = jest.fn();
const deletePickedNote = jest.fn();

const props = {
  note,
  editNote,
  deletePickedNote
};

describe("Render form and buttons", () => {
  it("renders form controls text", () => {
    const wrapper = shallow(<Edit {...props} />);
    expect(wrapper.find("form").text()).toEqual("ZměnitId:1Smazat");
  });

  it("renders label text", () => {
    const wrapper = shallow(<Edit {...props} />);
    expect(
      wrapper
        .find("#outlined-multiline-static")
        .find({ label: "Text poznámky" })
    ).toHaveLength(1);
  });

  it("renders buttons", () => {
    const wrapper = shallow(<Edit {...props} />);
    expect(wrapper.find({ color: "secondary" })).toHaveLength(2);
  });
});
