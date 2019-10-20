import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {darkBlue, darkGray} from '../../common/styles/color';
import MovieListPage from '../MovieListPage';

export default HomePage = ({navigation}) => {
  const {isLoading} = useSelector(state => {
    return state.ui;
  });
  return (
    <View>
      <MovieListPage navigation={navigation} />
      <Modal transparent={true} visible={isLoading}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            flex: 1,
            width: '100%',
            borderRadius: 10,
            backgroundColor: darkGray,
            opacity: 0.7,
          }}>
          <View>
            <ActivityIndicator color={darkBlue} size="large" />
          </View>
        </View>
      </Modal>
    </View>
  );
};
