import * as React from "react";
import { shallow } from "enzyme";
import ListUnit from "../src/components/ListUnit";
import Edit from "../src/components/Edit";

const note = { id: 1, title: "test", body: "text test", userId: 99 };
const pickNote = jest.fn();
const editNote = jest.fn();
const deletePickedNote = jest.fn();

const props = {
  note,
  pickNote,
  editNote,
  deletePickedNote
};

describe("<ListUnit />", () => {
  it("renders ListUnit component", () => {
    const wrapper = shallow(<ListUnit {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders Edit component", () => {
    const wrapper = shallow(<ListUnit {...props} />);
    expect(wrapper.find(Edit)).toHaveLength(1);
  });
});
