import * as React from "react";
import { shallow } from "enzyme";
import Modal from "../src/components/Modal";
import Edit from "../src/components/Edit";

const note = { id: 1, title: "test" };
const noteId = 1;
const pickNote = jest.fn();
const editNote = jest.fn();
const deletePickedNote = jest.fn();

const modalProps = {
  noteId,
  pickNote
};

const props = {
  note,
  editNote,
  deletePickedNote
};

describe("<Modal />", () => {
  it("renders Edit component", () => {
    const wrapper = shallow(<Modal {...modalProps} />);
    expect(wrapper.contains(<Edit {...props} />)).toMatchSnapshot();
  });
});
