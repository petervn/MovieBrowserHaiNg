import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './style';
export default ListFooter = props => {
  const {loadMore, isLoading, totalPages, page} = props;
  return (
    <View style={styles.loadingMore}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {totalPages !== page && (
        <TouchableOpacity style={styles.loadingButton} onPress={loadMore}>
          <Text style={styles.loadingText}>Load more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
