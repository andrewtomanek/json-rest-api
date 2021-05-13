import * as React from "react";
import { shallow } from "enzyme";
import Edit from "../src/components/Edit";

const note = { id: 1, title: "test", body: "text test", userId: 99 };
const editNote = jest.fn();
const deletePickedNote = jest.fn();

const props = {
  note,
  editNote,
  deletePickedNote,
};

describe("Renders Edit", () => {
  it("Renders form input elements", () => {
    const wrapper = shallow(<Edit {...props} />);
    expect(wrapper.find("form").text()).toEqual(
      "<TextInput /> <NumberInput />"
    );
  });

  it("Renders ListUnit component snapshot", () => {
    const wrapper = shallow(<Edit {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
