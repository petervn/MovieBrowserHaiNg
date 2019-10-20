import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {getImage} from '../../../common/utils';
import CONSTANTS from '../../../constants';
import Styles from './style';

export default MovieItem = ({data: item = {}, horizontal, onPress}) => {
  const {
    release_date = '---',
    original_title = '',
    poster_path,
    character,
  } = item;
  return (
    <TouchableOpacity onPress={onPress} key={item.id} style={{width: 140}}>
      {!horizontal && (
        <View style={{margin: 10, marginBottom: 5}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={Styles.image} source={getImage(poster_path)} />
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text numberOfLines={3} style={{fontSize: 17}}>
                {original_title}
              </Text>
              <View style={Styles.rowView}>
                <Text>{CONSTANTS.Strings.RELEASE_DATE}</Text>
                <Text>{release_date}</Text>
              </View>
            </View>
          </View>
          <View style={Styles.lineView} />
        </View>
      )}
      {horizontal && (
        <View style={{margin: 2, marginBottom: 5}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Image style={Styles.image} source={getImage(poster_path)} />
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text numberOfLines={1} style={{fontSize: 17}}>
                {original_title}
              </Text>
              <Text>{character}</Text>
              <Text>({release_date.split('-')[0]})</Text>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};
