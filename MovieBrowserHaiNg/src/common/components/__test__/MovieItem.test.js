import React from 'react';
import {Text} from 'react-native';
import MovieItem from '../MovieItem';
import {shallow, mount} from 'enzyme';
import {expect as chaiExpect} from 'chai';

describe('MovieItem', () => {
  const data = {
      release_date: '2019-12-10',
      original_title: 'original_title',
      poster_path: 'poster_path',
      character: 'Marvel',
    },
    horizontal = true,
    onPress = () => {};

  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <MovieItem data={data} horizontal={horizontal} onPress={onPress} />,
      );
      expect(component).toMatchSnapshot();
    });

    it('should render title', () => {
      let component = mount(
        <MovieItem data={data} horizontal={horizontal} onPress={onPress} />,
      );
      chaiExpect(component.find(Text)).to.have.lengthOf(3);
      const textValue = component
        .find(Text)
        .at(0)
        .text();
      expect(textValue).toEqual(data.original_title);
    });

    it('should render release date', () => {
      let component = mount(
        <MovieItem data={data} horizontal={horizontal} onPress={onPress} />,
      );
      const textValue = component
        .find(Text)
        .at(2)
        .text();
      expect(textValue).toEqual('(2019)');
    });
  });
});
