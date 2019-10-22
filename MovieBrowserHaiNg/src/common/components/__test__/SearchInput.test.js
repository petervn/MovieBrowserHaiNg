import React from 'react';
import {TouchableOpacity, TextInput} from 'react-native';
import {shallow} from 'enzyme';
import {expect as chaiExpect} from 'chai';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  const onSubmit = jest.fn(),
    onSeachTextChange = jest.fn();

  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <SearchInput
          onSubmit={onSubmit}
          onSeachTextChange={onSeachTextChange}
        />,
      );
      expect(component).toMatchSnapshot();
    });

    it('should trigger onSeachTextChange correctly', () => {
      const component = mount(
        <SearchInput
          onSubmit={onSubmit}
          onSeachTextChange={onSeachTextChange}
        />,
      );
      component
        .find(SearchInput)
        .props()
        .onSeachTextChange('search value');
      expect(onSeachTextChange).toHaveBeenCalled();

      component
        .find(TextInput)
        .props()
        .onChangeText('input value');

      expect(onSeachTextChange).toHaveBeenCalled();
    });

    it('should hide clear X icon when value is empty', () => {
      let component = shallow(
        <SearchInput
          onSubmit={onSubmit}
          onSeachTextChange={onSeachTextChange}
        />,
      );
      chaiExpect(component.find(TouchableOpacity)).to.have.lengthOf(0);
    });

    it('should show clear X icon when value is not empty', () => {
      let component = shallow(
        <SearchInput
          onSubmit={onSubmit}
          onSeachTextChange={onSeachTextChange}
        />,
      );
      component
        .find(TextInput)
        .props()
        .onChangeText('hi');
      chaiExpect(component.find(TouchableOpacity)).to.have.lengthOf(1);
    });

    it('should hide clear X icon when value back to be empty', () => {
      let component = shallow(
        <SearchInput
          onSubmit={onSubmit}
          onSeachTextChange={onSeachTextChange}
        />,
      );
      component
        .find(TextInput)
        .props()
        .onChangeText('hi');
      chaiExpect(component.find(TouchableOpacity)).to.have.lengthOf(1);
      component
        .find(TextInput)
        .props()
        .onChangeText('');
      chaiExpect(component.find(TouchableOpacity)).to.have.lengthOf(0);
    });

    it('should show value when user key in', () => {
      let component = shallow(
        <SearchInput
          onSubmit={onSubmit}
          onSeachTextChange={onSeachTextChange}
        />,
      );
      component
        .find(TextInput)
        .props()
        .onChangeText('hi');
      expect(component.find(TextInput).props().value).toEqual('hi');
    });
    it('should show placeholder', () => {
      let component = shallow(
        <SearchInput
          onSubmit={onSubmit}
          onSeachTextChange={onSeachTextChange}
        />,
      );
      expect(component.find(TextInput).props().placeholder).toEqual('Search');
    });
  });
});
