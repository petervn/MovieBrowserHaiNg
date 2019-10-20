import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
import {searchMovieList} from '../../Actions';
import SearchInput from '../../common/components/SearchInput';
import styles from './style';

export default SearchPage = ({navigation}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const {
    searchMovieList: movieList,
    isLoading,
    searchTotalPages: totalPages,
    searchPage: page,
  } = useSelector(state => {
    return state.ui;
  });

  const onPressMovie = item => {
    navigation.navigate('MovieDetail', {movieId: item.id});
  };

  const onSearchTextChange = value => {
    setValue(value);
    if (value) {
      searchMovieList(dispatch, value);
    } else {
    }
  };
  return (
    <View style={styles.container}>
      <SearchInput onSeachTextChange={_.debounce(onSearchTextChange, 1000)} />
      <View style={{flex: 1}}>
        {movieList.length > 0 && (
          <FlatList
            keyExtractor={item => item.id.toString()}
            data={movieList}
            renderItem={({item}) => (
              <MovieItem data={item} onPress={() => onPressMovie(item)} />
            )}
            ListFooterComponent={() => (
              <ListFooter
                isLoading={isLoading}
                totalPages={totalPages}
                page={page}
                loadMore={() => searchMovieList(dispatch, value, page + 1)}
              />
            )}
          />
        )}
        {movieList.length === 0 && value !== '' && (
          <Text style={{textAlign: 'center', color: 'red'}}> No result</Text>
        )}
      </View>
    </View>
  );
};
