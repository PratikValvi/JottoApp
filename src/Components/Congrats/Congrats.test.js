import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

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