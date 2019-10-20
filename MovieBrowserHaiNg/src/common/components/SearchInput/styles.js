import {StyleSheet} from 'react-native';

import {darkBlue, freeze} from '../../styles/color';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
  containerInput: {
    height: 40,
    backgroundColor: freeze,
    borderRadius: 15,
  },
  inputDirection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: '100%',
    fontSize: 12,
    color: darkBlue,
    width: '100%',
  },
});

export default styles;
