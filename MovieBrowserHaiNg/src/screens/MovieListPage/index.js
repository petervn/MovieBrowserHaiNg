import React, {useEffect} from 'react';
import {View, FlatList, Text, Modal, ActivityIndicator} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import MovieItem from '../../common/components/MovieItem';
import ListFooter from '../../common/components/ListFooter';
import {fetchMovieList} from '../../Actions';

export default MovieListPage = ({navigation}) => {
  const {navigate} = navigation;
  const dispatch = useDispatch();

  const {movieList, page, isLoading, totalPages} = useSelector(state => {
    return state.ui;
  });

  useEffect(() => {
    fetchMovieList(dispatch, 1);
  }, []);

  const onPress = ({item}) => {
    navigate('MovieDetail', {movieId: item.id});
  };
  return (
    <View style={{marginTop: 10, paddingBottom: 70}}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
          marginLeft: 15,
        }}>
        Popular Movies
      </Text>
      {movieList.length > 0 && (
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={movieList}
          renderItem={data => (
            <MovieItem data={data.item} onPress={() => onPress(data)} />
          )}
          ListFooterComponent={() => (
            <ListFooter
              isLoading={isLoading}
              totalPages={totalPages}
              page={page}
              loadMore={() => fetchMovieList(dispatch, page + 1)}
            />
          )}
        />
      )}
    </View>
  );
};
