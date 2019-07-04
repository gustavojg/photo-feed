import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Button from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Button component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.render(<Button>test</Button>, div);
    ReactDOM.render(<Button className="prueba">test</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Test click event', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});