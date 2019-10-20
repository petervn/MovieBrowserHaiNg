import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {getImage} from '../../../common/utils';
import RateStar from '../RateStar';
import {black} from '../../styles/color';
import style from './style';

const Poster = ({title, backdropPath, voteAverage}) => (
  <View>
    <ImageBackground
      style={{
        width: '100%',
        height: 300,
        backgroundColor: 'transparent',
      }}
      source={getImage(backdropPath)}
      resizeMode="cover">
      <LinearGradient
        style={style.contentContainer}
        colors={[black, 'rgba(0, 0, 0, 0.14)']}>
        <View style={style.movieDetailPhoto}>
          <Text numberOfLines={3} style={style.movieTitle}>
            {title}
          </Text>
          <RateStar voteAverage={voteAverage} />
        </View>
      </LinearGradient>
    </ImageBackground>
  </View>
);

export default Poster;
