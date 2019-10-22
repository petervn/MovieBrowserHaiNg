import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../Store';

import MovieDetailPage from '../MovieDetailPage';

describe('MovieDetailPage page', () => {
  const navigate = jest.fn();
  const navigation = {
    navigate,
    state: {
      params: {},
    },
  };
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <Provider store={store}>
          <MovieDetailPage navigation={navigation} />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
