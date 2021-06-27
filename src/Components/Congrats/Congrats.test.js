import { shallow } from "enzyme";
import Congrats from "./Congrats";

test("congrats componet renders without error",() => {
    const wrapper = shallow(<Congrats />);
    const divElement = wrapper.find('div.congrats-wrapper');
    expect(divElement.length).toBe(1);
});

test("congrats component when received `success` props as true should render success message",() => {
    const wrapper = shallow(<Congrats success={true}/>);
    const message = wrapper.find('div.congrats-wrapper').text();
    expect(message.length).not.toBe(0);
});

test("congrats component when received `success` props as false should not render success message",() => {
    const wrapper = shallow(<Congrats success={false}/>);
    const message = wrapper.find('div.congrats-wrapper').text();
    expect(message).toBe('');
});