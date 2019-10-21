import React from 'react';
import {Text, ImageBackground} from 'react-native';
import RateStar from '../RateStar';
import {shallow, mount} from 'enzyme';
import {expect as chaiExpect} from 'chai';
import Poster from '../Poster';

describe('Poster', () => {
  const title = 'Poster',
    backdropPath = 'invalidBackdropPath',
    voteAverage = 5;

  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <Poster
          title={title}
          backdropPath={backdropPath}
          voteAverage={voteAverage}
        />,
      );
      expect(component).toMatchSnapshot();
    });

    it('should render image', () => {
      let component = mount(
        <Poster
          title={title}
          backdropPath={backdropPath}
          voteAverage={voteAverage}
        />,
      );
      const imageBackground = component.find(ImageBackground);
      chaiExpect(imageBackground).to.have.lengthOf(1);
      const uri = imageBackground.props().source.uri;
      expect(uri).toEqual('https://image.tmdb.org/t/p/w500invalidBackdropPath');
      const textValue = component.find(Text).text();
      expect(textValue).toEqual(title);
    });

    it('should render title and starts', () => {
      let component = mount(
        <Poster
          title={title}
          backdropPath={backdropPath}
          voteAverage={voteAverage}
        />,
      );
      chaiExpect(component.find(Text)).to.have.lengthOf(1);
      chaiExpect(component.find(RateStar)).to.have.lengthOf(1);
      const textValue = component.find(Text).text();
      expect(textValue).toEqual(title);
    });
  });
});
