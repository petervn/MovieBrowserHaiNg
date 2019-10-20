import {StyleSheet} from 'react-native';

import {white, darkBlue} from '../../common/styles/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    marginBottom: 10,
  },
  containerList: {
    marginTop: 25,
  },
  item: {
    alignItems: 'center',
    marginBottom: 25,
  },
  itemText: {
    fontSize: 12,
    color: darkBlue,
    textAlign: 'center',
  },
});

export default styles;
