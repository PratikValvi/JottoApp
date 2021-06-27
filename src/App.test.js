import { shallow } from "enzyme";
import App from './App';

test('App Component renders witout error', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find('div.App');
  expect(appComponent.length).toBe(1);
});