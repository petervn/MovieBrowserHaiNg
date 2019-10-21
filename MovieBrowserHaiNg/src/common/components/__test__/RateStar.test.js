import React from 'react';
import {Image} from 'react-native';
import {shallow} from 'enzyme';
import {expect as chaiExpect} from 'chai';
import RateStar from '../RateStar';

describe('RateStar', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<RateStar voteAverage={8} />);
      expect(component).toMatchSnapshot();
    });
    it('should render correctly number of starts', () => {
      let component = shallow(<RateStar voteAverage={8} />);
      chaiExpect(component.find(Image)).to.have.lengthOf(4);
      component = shallow(<RateStar voteAverage={0} />);
      chaiExpect(component.find(Image)).to.have.lengthOf(0);
      component = shallow(<RateStar voteAverage={10} />);
      chaiExpect(component.find(Image)).to.have.lengthOf(5);
      component = shallow(<RateStar voteAverage={9} />);
      chaiExpect(component.find(Image)).to.have.lengthOf(5);
      component = shallow(<RateStar voteAverage={1} />);
      chaiExpect(component.find(Image)).to.have.lengthOf(1);
    });
  });
});
