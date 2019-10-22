import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../../Store';

import SearchPage from '../MovieListPage';

describe('SearchPage', () => {
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
          <SearchPage navigation={navigation} />
        </Provider>,
      );
      expect(component).toMatchSnapshot();
    });
  });
});
