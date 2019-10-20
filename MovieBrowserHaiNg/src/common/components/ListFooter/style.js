import {StyleSheet} from 'react-native';

import {lightGray, darkBlue} from '../../styles/color';

const styles = StyleSheet.create({
  loadingMore: {
    marginBottom: 30,
    paddingBottom: 20,
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingButton: {
    padding: 10,
    width: '50%',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: lightGray,
    backgroundColor: 'purple',
  },
  loadingText: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
