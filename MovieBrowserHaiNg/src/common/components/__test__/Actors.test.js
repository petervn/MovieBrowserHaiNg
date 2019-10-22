import React from 'react';
import {shallow} from 'enzyme';
import Actors from '../Actors';

describe('Actor', () => {
  describe('Rendering', () => {
    const data = [];
    it('should match to snapshot', () => {
      const component = shallow(<Actors data={data} onPress={jest.fn()} />);
      expect(component).toMatchSnapshot();
    });
  });
});
