import React from "react";
import { shallow } from "enzyme";
import Checkbox from "./component";

it("should render correctly", () => {
  const wrapper = shallow(<Checkbox label="test"/>);
  expect(wrapper.find("span[children='test']").text()).toEqual('test');
  expect(wrapper).toMatchSnapshot();
});

it("should call the onClick handler", () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Checkbox id="1" label="test" onClick={onClick}/>);
  wrapper.find('div').simulate('click')
  expect(onClick).toHaveBeenCalledWith("1", true);
})

it("should not call the onClick handler when disabled", () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Checkbox id="1" label="test" onClick={onClick} disabled/>);
  wrapper.find('div').simulate('click')
  expect(onClick).not.toHaveBeenCalled();
})
