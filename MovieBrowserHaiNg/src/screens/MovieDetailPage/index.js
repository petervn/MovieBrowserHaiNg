import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
import {fetchMovie} from '../../Actions';
import Actors from '../../common/components/Actors';
import Poster from '../../common/components/Poster';
import AvatarCard from '../../common/components/AvatarCard';
import CONSTANTS from '../../constants/';
import {convertMinsToHrsMins} from '../../common/utils';

export default MovieDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const id = navigation.state.params.movieId;

  const movieDetail = useSelector(state => {
    return state.ui.movieDetail || {};
  });

  useEffect(() => {
    fetchMovie(dispatch, id);
  }, [id]);

  const {
    title,
    backdropPath,
    voteAverage,
    overview,
    cast,
    runtime,
  } = movieDetail;

  const onPressActor = data => {
    navigation.navigate('ActorDetail', {id: data.id});
  };

  const renderItem = item => (
    <AvatarCard data={item} onPress={data => onPressActor(data)} />
  );

  return (
    <ScrollView>
      <Poster
        title={title}
        backdropPath={backdropPath}
        voteAverage={voteAverage}
      />
      <View style={{padding: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: 10,
            marginTop: 10,
          }}>
          Overview
        </Text>
        <Text>{overview}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              marginBottom: 10,
              marginTop: 10,
            }}>
            {CONSTANTS.Strings.RUNTIME}
          </Text>
          <Text>{convertMinsToHrsMins(runtime)}</Text>
        </View>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: 10,
            marginTop: 10,
          }}>
          Cast
        </Text>
        <Actors data={cast} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
};
