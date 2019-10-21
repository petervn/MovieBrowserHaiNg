import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {shallow, mount} from 'enzyme';
import {expect as chaiExpect} from 'chai';
import ListFooter from '../ListFooter';

describe('List Footer', () => {
  let loadMore = () => {},
    isLoading = true,
    totalPages = 10,
    page = 1;

  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <ListFooter
          isLoading={isLoading}
          totalPages={totalPages}
          loadMore={loadMore}
          page={page}
        />,
      );
      expect(component).toMatchSnapshot();
    });

    it('should show ActivityIndicator If isLoading is true', () => {
      let component = mount(
        <ListFooter
          isLoading={isLoading}
          totalPages={totalPages}
          loadMore={loadMore}
          page={page}
        />,
      );
      const activityIndicator = component.find(ActivityIndicator);
      chaiExpect(activityIndicator).to.have.lengthOf(1);
      // use mount() insted of using shallow to invoke .text()
      const textValue = component.find(Text).text();
      expect(textValue).toEqual('Load more');
    });

    it('should hide ActivityIndicator If isLoading is flase', () => {
      let component = mount(
        <ListFooter
          isLoading={false}
          totalPages={totalPages}
          page={page}
          loadMore={loadMore}
        />,
      );
      const activityIndicator = component.find(ActivityIndicator);
      chaiExpect(activityIndicator).to.have.lengthOf(0);
    });

    it('should hide Loadmore button If current page is the last page', () => {
      let component = mount(
        <ListFooter
          isLoading={false}
          totalPages={10}
          page={10}
          loadMore={loadMore}
        />,
      );
      chaiExpect(Text).to.have.lengthOf(0);
    });
  });
});
