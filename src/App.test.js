import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('App Component renders witout error', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find('div.App');
  expect(appComponent.length).toBe(1);
});