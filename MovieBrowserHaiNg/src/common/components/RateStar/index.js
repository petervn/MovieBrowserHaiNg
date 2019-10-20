import React from 'react';
import {View, Image} from 'react-native';
import StartIcon from '../../asset/images/star.png';
import style from './style';

export default RateStar = ({voteAverage = 0}) => {
  if (isNaN(voteAverage)) {
    return null;
  }
  const average = Math.round(voteAverage);
  const length = Math.round(average * 0.5);

  return (
    <View style={style.container}>
      {[...Array(length)].map((e, i) => (
        <Image key={i} style={{height: 18, width: 18}} source={StartIcon} />
      ))}
    </View>
  );
};
