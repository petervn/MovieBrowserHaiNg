import React from 'react';
import {FlatList} from 'react-native';

const Actors = ({data, renderItem}) => (
  <FlatList
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={item => item.id.toString()}
    renderItem={({item}) => renderItem(item)}
  />
);

export default Actors;
