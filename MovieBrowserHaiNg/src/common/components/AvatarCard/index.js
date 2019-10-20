import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {getImage} from '../../utils';
import style from './style';

export default AvartarCard = ({data, onPress}) => {
  const {profile_path, name = '--'} = data;
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        onPress(data);
      }}>
      <Image
        source={getImage(profile_path)}
        style={style.avatar}
        sizeMode="contain"
      />
      <Text style={{textAlign: 'center'}} numberOfLines={1}>
        {name.split(' ')[0]}
      </Text>
    </TouchableOpacity>
  );
};
