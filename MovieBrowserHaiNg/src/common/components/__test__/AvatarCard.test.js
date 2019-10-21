import React from 'react';
import {Text} from 'react-native';
import {shallow, mount} from 'enzyme';
import AvatarCard from '../AvatarCard';

describe('Avatar Card', () => {
  describe('Rendering', () => {
    const data = {
      profile_path: 'imgage.com/i1.png',
      name: 'Hai Ng',
    };

    it('should match to snapshot', () => {
      const component = shallow(<AvatarCard data={data} onPress={() => {}} />);
      expect(component).toMatchSnapshot();
    });

    it('should render first name', () => {
      const component = mount(<AvatarCard data={data} onPress={() => {}} />);
      const textValue = component.find(Text).text();
      expect(textValue).toEqual('Hai');
    });
  });
});
