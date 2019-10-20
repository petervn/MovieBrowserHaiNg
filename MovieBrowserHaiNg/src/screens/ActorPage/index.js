import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
import {fetchPersonInfo, fetchMovieByPerson} from '../../Actions';
import {getImage} from '../../common/utils';
import style from './style';

export default ActorPage = ({navigation}) => {
  const dispatch = useDispatch();
  const id = navigation.state.params.id;

  const {personInfo, movieByPerson} = useSelector(state => {
    return state.ui;
  });

  useEffect(() => {
    fetchPersonInfo(dispatch, id);
    fetchMovieByPerson(dispatch, id);
  }, [id]);

  const onPressMovie = item => {
    navigation.navigate('MovieDetail', {movieId: item.id});
  };

  return (
    <ScrollView contentContainerStyle={{padding: 10}}>
      <View style={style.headerInfo}>
        <Image style={style.image} source={getImage(personInfo.profile_path)} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {personInfo.name}
          </Text>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Dob: </Text>
            <Text>{personInfo.birthday}</Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Home town: </Text>
            <Text>{personInfo.place_of_birth}</Text>
          </View>
        </View>
      </View>
      <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15}}>
        Known for
      </Text>
      <View style={{flex: 1}}>
        {movieByPerson.length > 0 && (
          <FlatList
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={movieByPerson}
            renderItem={({item}, index) => (
              <MovieItem
                data={item}
                horizontal={true}
                index={index}
                onPress={() => onPressMovie(item)}
              />
            )}
          />
        )}
      </View>

      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 15,
          marginBottom: 15,
        }}>
        Biography
      </Text>
      <Text numberOfLines={50}>{personInfo.biography}</Text>
    </ScrollView>
  );
};
