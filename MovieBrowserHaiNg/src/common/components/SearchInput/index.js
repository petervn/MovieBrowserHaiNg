import React, {useState} from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import SearchIcon from '../../../common/asset/images/search-icon.png';

import {darkGray} from '../../styles/color';
import styles from './styles';

// todo. It is better If We use search bar component from 'react-native-elements'
// https://react-native-training.github.io/react-native-elements/docs/searchbar.html
export default SearchInput = ({onSubmit, onSeachTextChange}) => {
  const [value, setValue] = useState('');

  const onChangeText = textValue => {
    setValue(textValue);
    onSeachTextChange(textValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <View style={styles.inputDirection}>
          <Image
            source={SearchIcon}
            style={{width: 20, height: 20, marginRight: 10}}
            sizeMode="contain"
          />
          <TextInput
            style={styles.textInput}
            onSubmitEditing={() => {}}
            onChangeText={textValue => onChangeText(textValue)}
            value={value}
            returnKeyType="search"
            keyboardType="default"
            multiline={false}
            autoCorrect={false}
            placeholderTextColor={darkGray}
            placeholder="Search"
          />
          {value.length > 0 && (
            <TouchableOpacity onPress={() => setValue('')}>
              <Text>X</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
